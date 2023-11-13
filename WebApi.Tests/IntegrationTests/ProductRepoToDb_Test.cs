using Microsoft.EntityFrameworkCore;
using WebApi.Context;
using WebApi.Models.Entities;
using WebApi.Repositories;

namespace WebApi.Tests.IntegrationTests;

public class ProductRepoToDb_Test
{
    private readonly ProductDbContext _context;
    private readonly ProductRepo _productRepo;
    private readonly Guid id = Guid.NewGuid();

    public ProductRepoToDb_Test()
    {
        var options = new DbContextOptionsBuilder<ProductDbContext>()
            .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString())
            .Options;

        _context = new ProductDbContext(options);
        _productRepo = new ProductRepo(_context);

        
        var productEntityMock = new ProductEntity
        {
            ProductID = id,
            ProductName = "Mock",
            Price = 1,
            Description = "Mock",
            CreatedDate = DateTime.Now
        };

        _context.Add(productEntityMock);
        _context.SaveChanges();
    }

    [Fact]
    public async Task GetOneAsync_Should_Return_ProducEntity_if_Product_Exsists()
    {
        var result = await _productRepo.GetOneAsync(p => p.ProductID == id);

        Assert.NotNull(result);
        Assert.IsType<ProductEntity>(result);
    }
}
