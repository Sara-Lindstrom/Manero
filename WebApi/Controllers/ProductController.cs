﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;
using WebApi.Context;
using WebApi.Models;
using WebApi.Models.Entities;
using WebApi.Repositories;

namespace WebApi.Controllers;


[Route("api/[controller]")]
[ApiController]
public class ProductController : ControllerBase
{
    private readonly IRepo<ProductEntity, ProductDbContext> _productRepo;
    private readonly IRepo<ProductReviewEntity, ProductDbContext> _productReviewRepo;
    private readonly IRepo<CategoryEntity, ProductDbContext> _categoryRepo;
    private readonly IRepo<TagEntity, ProductDbContext> _tagRepo;
    private readonly IRepo<CategoryTagEntity, ProductDbContext> _categoryTagRepo;
    private readonly IRepo<ImageEntity, ProductDbContext> _imageRepo;

    public ProductController(
        IRepo<ProductEntity, ProductDbContext> productRepo, 
        IRepo<ProductReviewEntity, ProductDbContext> productReviewRepo, 
        IRepo<CategoryEntity, ProductDbContext> categoryRepo, 
        IRepo<TagEntity, ProductDbContext> tagRepo, 
        IRepo<CategoryTagEntity, ProductDbContext> categoryTagRepo, 
        IRepo<ImageEntity, ProductDbContext> imageRepo)
    {
        _productRepo = productRepo;
        _productReviewRepo = productReviewRepo;
        _categoryRepo = categoryRepo;
        _tagRepo = tagRepo;
        _categoryTagRepo = categoryTagRepo;
        _imageRepo = imageRepo;
    }

    private static readonly Expression<Func<ProductEntity, object>>[] IncludesForProductModel = new Expression<Func<ProductEntity, object>>[]
    {
        p => p.ProductCategories, 
        p => p.ProductColors,
        p => p.ProductTags,
        p => p.ProductSizes, 
        p => p.ProductImages,
        p => p.ProductReviews
    };

    [HttpGet("GetAllCategories")]
    public async Task<ActionResult<List<CategoryEntity>>> GetAllCategories()
    {
        try
        {
            var result = await _categoryRepo.GetAllAsync();
            if (result is not null)
            {
                return Ok(result);
            }
            return NotFound();
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex);
            return BadRequest(ex.Message);
        }
    }

    [HttpGet("GetCategoryTags")]
    public async Task<ActionResult<List<TagEntity>>> GetCatgegoryTags(string category)
    {
        try
        {
            // Attempt to retrieve the category from the database based on the given category name.
            var dbCategory = await _categoryRepo.GetOneAsync(c => c.CategoryName == category);

            // Retrieve all tags from the database.
            var dbTags = await _tagRepo.GetAllAsync();

            if (dbCategory is not null)
            {
                // Retrieve category-tag relationships for the found category.
                var dbCategoryTagResult = await _categoryTagRepo.GetManyAsync(ct => ct.CategoryID == dbCategory.CategoryID);

                if (dbCategoryTagResult is not null)
                {
                    // Extract unique tag IDs from the relationships.
                    var tagIds = dbCategoryTagResult.Select(ct => ct.TagID).Distinct();
                    var result = dbTags.Where(tag => tagIds.Contains(tag.TagID)).ToList();
                    return Ok(result);
                }
            }

            return NotFound();
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex);
            return BadRequest(ex.Message);
        }

    }

    [HttpGet("GetBestSelling")]
    public async Task<ActionResult<List<ProductModel>>> GetBestSelling(int? amount)
    {
        try
        {
            var dbResult = await _productRepo.GetAllAsync(IncludesForProductModel);
            var result = new List<ProductModel>();

            if (amount is not null)
            {
                // If an amount is specified, order the products by rating in descending order
                dbResult = dbResult.OrderByDescending(p => p.Rating).Take(amount.Value).ToList();
            }
            else
            {
                // If no amount is specified, simply order all products by rating in descending order.
                dbResult = dbResult.OrderByDescending(p => p.Rating).ToList();
            }

            foreach (var item in dbResult)
            {
                if (item.ProductImages.Any())
                {
                    foreach (ProductImageEntity productImage in item.ProductImages)
                    {
                        var images = await _imageRepo.GetManyAsync(i => i.ImageID == productImage.ImageID);
                    }
                }
                result.Add(item);
            }

            return Ok(result);
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex);
            return BadRequest(ex.Message);
        }
    }

    [HttpGet("GetNewest")]
    // Define an asynchronous action method to get the newest products.
    public async Task<ActionResult<List<ProductModel>>> GetNewest(int? amount)
    {
        try
        {
            var dbResult = await _productRepo.GetAllAsync(IncludesForProductModel);
            var result = new List<ProductModel>();

            if (amount is not null)
            {
                // and take only the top 'amount' of products as specified by the 'amount' parameter.
                dbResult = dbResult.OrderByDescending(p => p.CreatedDate).Take(amount.Value).ToList();
            }
            else
            {
                dbResult = dbResult.OrderByDescending(p => p.CreatedDate).ToList();
            }

            foreach (var item in dbResult)
            {
                if (item.ProductImages.Any())
                {
                    foreach (ProductImageEntity productImage in item.ProductImages)
                    {
                        var images = await _imageRepo.GetManyAsync(i => i.ImageID == productImage.ImageID);
                    }
                }
                result.Add(item);
            }

            return Ok(result);
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex);
            return BadRequest(ex.Message);
        }
    }

    [HttpGet("GetByCategory")]
    public async Task<ActionResult<List<ProductModel>>> GetByCategory(string category, string? tag)
    {
        try
        {

            // Retrieve the category from the repository based on the category name.
            var dbCategories = await _categoryRepo.GetOneAsync(c => c.CategoryName == category);
            var result = new List<ProductModel>();

            if (dbCategories == null)
            {
                Console.WriteLine($"Category '{category}' not found.");
                return NotFound($"Category '{category}' not found.");
            }


            // If the category exists, retrieve all products associated with this category.
            var dbresult = await _productRepo.GetManyAsync(product => product.ProductCategories.Any(c => c.CategoryID == dbCategories.CategoryID), IncludesForProductModel);
            foreach (var item in dbresult)
            {
                if (item.ProductImages.Any())
                {
                    foreach(ProductImageEntity productImage in item.ProductImages)
                    {
                        var images = await _imageRepo.GetManyAsync(i => i.ImageID == productImage.ImageID);
                    }
                }
            }
            if (dbresult == null)
            {
                Console.WriteLine("No products found for the category.");
                return NotFound("No products found for the category.");
            }

            if (tag is not null)
            {
                // Retrieve the tag from the repository based on the tag name.
                var dbTag = await _tagRepo.GetOneAsync(t => t.TagName == tag);
                if (dbTag == null)
                {
                    Console.WriteLine($"Tag '{tag}' not found.");
                    return NotFound($"Tag '{tag}' not found.");
                }

                dbresult = dbresult.Where(p => p.ProductTags?.Any(t => t.TagID == dbTag.TagID) == true).ToList();
            }

            foreach (var item in dbresult)
            {
                result.Add(item);
            }
            return Ok(result);
            //return Ok(dbresult);
        }
        catch (Exception ex)
        {
            // If any exceptions occur, write the exception to the console and return a BadRequest with the exception message.
            Console.WriteLine(ex);
            return BadRequest(ex.Message);
        }
    }


    [HttpGet("GetById")]
    // Define an asynchronous action method to get a product by its ID.
    public async Task<ActionResult<ProductModel>> GetById(Guid id)
    {
        try
        {
            // Retrieve the product from the repository based on the product ID.
            var dbResult = await _productRepo.GetOneAsync(p => p.ProductID == id, IncludesForProductModel);

            if (dbResult is not null)
            {
                ProductModel result = dbResult;
                return Ok(result);
            }

            return NotFound();
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex);
            return BadRequest(ex.Message);
        }
    }

    // A version of get by category that doesn't return 404-error if the category is not found
    [HttpGet("GetByCategoryName")]
    public async Task<ActionResult<List<ProductModel>>> GetByCategoryName(string categoryName, string? tag)
    {
        try
        {
            // Retrieve the category from the repository based on the category name.
            var dbCategory = await _categoryRepo.GetOneAsync(c => c.CategoryName == categoryName);

            // If the category does not exist, return an empty list instead of a 404 error.
            if (dbCategory == null)
            {
                Console.WriteLine($"Category '{categoryName}' not found. Returning empty list.");
                return Ok(new List<ProductModel>());
            }

            // Retrieve all products associated with this category.
            var dbProducts = await _productRepo.GetManyAsync(
                product => product.ProductCategories.Any(pc => pc.CategoryID == dbCategory.CategoryID),
                IncludesForProductModel);

            if (tag is not null)
            {
                // Retrieve the tag from the repository based on the tag name.
                var dbTag = await _tagRepo.GetOneAsync(t => t.TagName == tag);
                if (dbTag == null)
                {
                    Console.WriteLine($"Tag '{tag}' not found.");
                    return NotFound($"Tag '{tag}' not found.");
                }

                dbProducts = dbProducts.Where(p => p.ProductTags?.Any(t => t.TagID == dbTag.TagID) == true).ToList();
            }

            // Convert the result to ProductModel and return.
            var result = dbProducts.Select(product => (ProductModel)product).ToList();
            return Ok(result);
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex);
            return BadRequest(ex.Message);
        }
    }
}