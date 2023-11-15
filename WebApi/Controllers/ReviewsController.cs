using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using WebApi.Models;
using WebApi.DTO;
using WebApi.Context;
using WebApi.Models.Entities;
using WebApi.Repositories;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

[ApiController]
[Route("api/[controller]")]
public class ReviewsController : ControllerBase
{
    private readonly ProductDbContext _productDbContext;
    private readonly UserManager<UserModel> _userManager;
    private readonly IRepo<ProductEntity, ProductDbContext> _productRepo;
    private readonly IRepo<ProductReviewEntity, ProductDbContext> _productReviewRepo;

    public ReviewsController(ProductDbContext productDbContext, UserManager<UserModel> userManager, IRepo<ProductEntity, ProductDbContext> productRepo, IRepo<ProductReviewEntity, ProductDbContext> productReviewRepo)
    {
        _productDbContext = productDbContext;
        _userManager = userManager;
        _productRepo = productRepo;
        _productReviewRepo = productReviewRepo;
    }

    [HttpPost]
    public async Task<IActionResult> PostReview([FromBody] ReviewDTO reviewDto)
    {
        // Using User.FindFirstValue to get the userId
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

        if (string.IsNullOrEmpty(userId))
        {
            return Unauthorized();
        }

        // Logging for debugging - remove or comment out later
        foreach (var claim in User.Claims)
        {
            Console.WriteLine($"Claim Type: {claim.Type}, Claim Value: {claim.Value}");
        }

        // Check for the productID 
        if (reviewDto.ProductId.HasValue)
        {
            var productExists = await _productRepo.ExistsAsync(p => p.ProductID == reviewDto.ProductId.Value);
            if (!productExists)
            {
                return NotFound("Product not found.");
            }
        }

        // Create new review
        var review = new ProductReviewEntity
        {
            ReviewID = Guid.NewGuid(),
            Rating = reviewDto.Rating,
            Comment = reviewDto.Comment,
            ReviewDate = DateTime.UtcNow,
            ProductID = reviewDto.ProductId.Value,
            UserID = userId
        };

        await _productDbContext.AddAsync(review);
        await _productDbContext.SaveChangesAsync();

        return CreatedAtAction(nameof(GetReviewsByUser), new { id = review.ReviewID }, review);
    }

    // Used by above method
    [HttpGet("GetUserReview")]
    public async Task<IActionResult> GetReviewsByUser()
    {
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

        if (string.IsNullOrEmpty(userId))
        {
            return Unauthorized();
        }

        var reviews = await _productDbContext.ProductReviews
            .Where(review => review.UserID == userId)
            .Select(r => new ReviewDTO 
            {
                Comment = r.Comment,
                Rating = r.Rating,
                ProductId = r.ProductID,
            })
            .ToListAsync();

        if (!reviews.Any())
        {
            return NotFound("No reviews found for this user.");
        }

        return Ok(reviews);
    }

    //Method to get a review for a product
    [HttpGet("GetProductReviews/{productId}")]
    public async Task<IActionResult> GetReviewsByProduct(Guid productId)
    {
        var reviews = await _productDbContext.ProductReviews
            .Where(review => review.ProductID == productId)
            .Select(r => new ReviewDTO
                {
                Comment = r.Comment,
                Rating = r.Rating,
                ProductId = r.ProductID,
                ReviewDate = r.ReviewDate,
                UserID = r.UserID
            })
                .ToListAsync();

        if (!reviews.Any())
        {
            return NotFound($"No reviews found for product with ID {productId}.");
        }

        return Ok(reviews);
    }
}