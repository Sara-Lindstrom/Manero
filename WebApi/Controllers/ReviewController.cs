using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using WebApi.Context;
using WebApi.Models;
using WebApi.Models.Entities;
using WebApi.Repositories;

namespace WebApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ReviewController : ControllerBase
{
    private readonly ProductReviewRepo _productReviewRepo;
    private readonly UserManager<UserModel> _userManager;
    private readonly ProductRepo _productRepo;

    public ReviewController(IRepo<ProductReviewEntity, ProductDbContext> productReviewRepo, UserManager<UserModel> userManager, IRepo<ProductEntity, ProductDbContext> productRepo)
    {
        _productReviewRepo = (ProductReviewRepo)productReviewRepo;
        _userManager = userManager;
        _productRepo = (ProductRepo)productRepo;
    }


    [Authorize]
    [HttpPost]
    public async Task<ActionResult<ProductReviewEntity>> CreateReviewAsync([FromBody] ProductReviewModel reviewModel)
    {
        try
        {
            // Get logged in user ID
            var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            if (ModelState.IsValid)
            {
                // Map ProductReviewModel to ProductReviewEntity
                var reviewEntity = new ProductReviewEntity
                {
                    ReviewID = Guid.NewGuid(),
                    ProductID = reviewModel.ProductID,
                    UserID = userId,
                    Comment = reviewModel.Comment,
                    Rating = reviewModel.Rating,
                    ReviewDate = DateTime.Now
                };
            
                var productId = reviewEntity.ProductID;
                var product = await _productRepo.GetOneAsync(p => p.ProductID == productId);

                if (product == null)
                {
                    return BadRequest("Invalid ProductID");
                }

                // Make sure Product is set in reviewEntity
                reviewEntity.Product = product;

                // call repository to add entity
                var dbResult = await _productReviewRepo.CreateReviewAsync(reviewEntity);


                return Ok(dbResult);
            }

            return BadRequest(ModelState);
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex);
            return StatusCode(500, "Internal Server Error");
        }
    }


    [HttpGet("Reviews")]
    public async Task<IActionResult> GetReviewsByProduct(Guid productId)
    {
        try
        {
            // Get reviews for a specific product and include user information
            var reviews = await _productReviewRepo.GetManyAsync(
                review => review.ProductID == productId,
                review => review.User // user 
            );

            // only include the userName from IdentityUser
            var reviewsWithUsername = reviews.Select(review => new
            {
                review.ReviewID,
                review.ProductID,
                review.UserID,
                review.Comment,
                review.Rating,
                review.ReviewDate,
                Username = review.User.UserName
            });

            return Ok(reviewsWithUsername);
        }
        catch (Exception ex)
        {
            return StatusCode(500, "Internal Server Error");
        }
    }
}
