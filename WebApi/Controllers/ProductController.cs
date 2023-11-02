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

    public ProductController(IRepo<ProductEntity, ProductDbContext> productRepo)
    {
        _productRepo = (ProductRepo)productRepo;
    }

    [HttpGet]
    public async Task<ActionResult> GetBestSelling()
    {
        try
        {
        var productsWithRatings = await _productRepo.GetAllAsync()
            //.Select(p => new
            //{
            //    Product = p,
            //    AverageRating = p.Reviews.Average(r => r.Rating)
            //})
            //.OrderByDescending(p => p.AverageRating)
            //.Take(10) // Get the top 10 products with the highest average rating
            //.ToList();

        }
        catch (Exception ex)
        {
            Console.WriteLine(ex);
        }



        
    }

}


