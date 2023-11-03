using Azure;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Conventions;
using WebApi.Context;
using WebApi.Models;
using WebApi.Models.Entities;
using WebApi.Repositories;

namespace WebApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ProductController : ControllerBase
{
    private readonly ProductRepo _productRepo;
    private readonly ProductReviewRepo _productReviewRepo;
    private readonly CategoryRepo _categoryRepo;
    private readonly TagRepo _tagRepo;
    private readonly CategoryTagRepo _categoryTagRepo;

    public ProductController(IRepo<ProductEntity, ProductDbContext> productRepo, IRepo<ProductReviewEntity, ProductDbContext> productReviewRepo, IRepo<CategoryEntity, ProductDbContext> categoryRepo, IRepo<TagEntity, ProductDbContext> tagRepo, IRepo<CategoryTagEntity, ProductDbContext> categoryTagRepo)
    {
        _productRepo = (ProductRepo)productRepo;
        _productReviewRepo = (ProductReviewRepo)productReviewRepo;
        _categoryRepo = (CategoryRepo)categoryRepo;
        _tagRepo = (TagRepo)tagRepo;
        _categoryTagRepo = (CategoryTagRepo)categoryTagRepo;
    }

    [HttpGet("GetAllCategories")]
    public async Task<ActionResult> GetAllCategories()
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

    [HttpGet("GetAllTags")]
    public async Task<ActionResult> GetTags(string category)
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
    public async Task<ActionResult> GetBestSelling(int? amount)
    {
        try
        {
            var result = await _productRepo.GetAllAsync();

            if (amount is not null)
            {
                // If an amount is specified, order the products by rating in descending order
                result = result.OrderByDescending(p => p.Rating).Take(amount.Value).ToList();
            }
            else
            {
                // If no amount is specified, simply order all products by rating in descending order.
                result = result.OrderByDescending(p => p.Rating).ToList();
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
    public async Task<ActionResult> GetNewest(int? amount)
    {
        try
        {
            var result = await _productRepo.GetAllAsync();

            if (amount is not null)
            {
                // and take only the top 'amount' of products as specified by the 'amount' parameter.
                result = result.OrderByDescending(p => p.CreatedDate).Take(amount.Value).ToList();
            }
            else
            {
                result = result.OrderByDescending(p => p.CreatedDate).ToList();
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
    // Define an asynchronous action method to get products by category and optionally by tag.
    public async Task<ActionResult> GetByCategory(string category, string? tag)
    {
        try
        {
            // Retrieve the category from the repository based on the category name.
            var dbCategories = await _categoryRepo.GetOneAsync(c => c.CategoryName == category);

            if (dbCategories != null)
            {
                // If the category exists, retrieve all products associated with this category.
                var result = await _productRepo.GetManyAsync(product => product.ProductCategories.Any(c => c.CategoryID == dbCategories.CategoryID));

                if (tag is not null)
                {
                    // Retrieve the tag from the repository based on the tag name.
                    var dbTag = await _tagRepo.GetOneAsync(t => t.TagName == tag);

                    if (dbTag is not null)
                    {
                        var tagresult = result.Where(p => p.ProductTags.Any(t => t.TagID == dbTag.TagID));
                        return Ok(tagresult);
                    }
                }

                return Ok(result);
            }

            return NotFound();
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
    public async Task<ActionResult> GetById( Guid id)
    {
        try
        {
            // Retrieve the product from the repository based on the product ID.
            var result = await _productRepo.GetOneAsync(p => p.ProductID == id);

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
}




