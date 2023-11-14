using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Moq;
using System.Linq.Expressions;
using WebApi.Context;
using WebApi.Controllers;
using WebApi.Models.Entities;
using WebApi.Repositories;

namespace WebApi.Tests.UnitTests;

public class ProductController_Test
{
    private readonly ProductController _productController;

    private readonly Mock<IRepo<ProductEntity, ProductDbContext>> _productRepoMock;
    private readonly Mock<IRepo<ProductReviewEntity, ProductDbContext>> _productReviewRepoMock;
    private readonly Mock<IRepo<CategoryEntity, ProductDbContext>> _categoryRepoMock;
    private readonly Mock<IRepo<TagEntity, ProductDbContext>> _tagRepoMock;
    private readonly Mock<IRepo<CategoryTagEntity, ProductDbContext>> _categoryTagRepoMock;
    private readonly Mock<IRepo<ImageEntity, ProductDbContext>> _imageRepoMock;
    private readonly Mock<IRepo<ColorEntity, ProductDbContext>> _colorRepoMock;
    private readonly Mock<IRepo<SizeEntity, ProductDbContext>> _sizeRepoMock;

    public ProductController_Test()
    {
        _productRepoMock = new Mock<IRepo<ProductEntity, ProductDbContext>>();
        _productReviewRepoMock = new Mock<IRepo<ProductReviewEntity, ProductDbContext>>();
        _categoryRepoMock = new Mock<IRepo<CategoryEntity, ProductDbContext>>();
        _tagRepoMock = new Mock<IRepo<TagEntity, ProductDbContext>>();
        _categoryTagRepoMock = new Mock<IRepo<CategoryTagEntity, ProductDbContext>>();
        _imageRepoMock = new Mock<IRepo<ImageEntity, ProductDbContext>>();
        _colorRepoMock = new Mock<IRepo<ColorEntity, ProductDbContext>>();
        _sizeRepoMock = new Mock<IRepo<SizeEntity, ProductDbContext>>();

        // Setup in-memory database
        var options = new DbContextOptionsBuilder<ProductDbContext>()
            .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString())
            .Options;

        _productController = new ProductController(
            _productRepoMock.Object,
            _productReviewRepoMock.Object,
            _categoryRepoMock.Object,
            _tagRepoMock.Object,
            _categoryTagRepoMock.Object,
            _imageRepoMock.Object,
            _colorRepoMock.Object,
            _sizeRepoMock.Object
        );
    }


    [Fact]
    public async Task GetById_Should_Return_OK_When_product_with_Id_exsist()
    {
        var id = Guid.NewGuid();
        var productEntityMock = new ProductEntity
        {
            ProductID = id,
            ProductName = "Mock",
            Price = 1,
            Description = "Mock",
            CreatedDate = DateTime.Now
        };

        _productRepoMock
            .Setup(repo => repo.GetOneAsync(p => p.ProductID == id, It.IsAny<Expression<Func<ProductEntity, object>>[]>()))
            .ReturnsAsync(productEntityMock);

        var result = await _productController.GetById(id);
        var okStatusResult = result.Result as OkObjectResult;

        Assert.NotNull(okStatusResult);
    }

    [Fact]
    public async Task GetById_Should_Return_NotFound_When_product_with_Id_doesnt_exsist()
    {
        var id = Guid.NewGuid();
        var productEntityMock = new ProductEntity
        {
            ProductID = id,
            ProductName = "Mock",
            Price = 1,
            Description = "Mock",
            CreatedDate = DateTime.Now
        };

        _productRepoMock
            .Setup(repo => repo.GetOneAsync(p => p.ProductID == id, It.IsAny<Expression<Func<ProductEntity, object>>[]>()))
            .ReturnsAsync(productEntityMock);

        var newId = Guid.NewGuid();
        var result = await _productController.GetById(newId);
        var notFoundStatusResult = result.Result as NotFoundResult;

        Assert.NotNull(notFoundStatusResult);
    }
}
