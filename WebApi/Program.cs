using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using WebApi.Context;
using WebApi.Models;
using WebApi.Models.Entities;
using WebApi.Repositories;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

// CORS for using with React front end
builder.Services.AddCors(options =>
{
    options.AddPolicy("CorsPolicy",
        builder => builder
        .WithOrigins("http://localhost:3000", "http://localhost:3001", "https://localhost:3000", "https://localhost:3001") // React to run on duplicated port if needed
        .AllowAnyMethod()
        .AllowAnyHeader());
});

// DbContext and Identity
builder.Services.AddDbContext<UserDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConn")));

builder.Services.AddDbContext<ProductDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConn")));

// Repos
builder.Services.AddScoped<IRepo<ProductEntity, ProductDbContext>, ProductRepo>();
builder.Services.AddScoped<IRepo<ProductReviewEntity, ProductDbContext>, ProductReviewRepo>();
builder.Services.AddScoped<IRepo<CategoryEntity, ProductDbContext>, CategoryRepo>();
builder.Services.AddScoped<IRepo<TagEntity, ProductDbContext>, TagRepo>();
builder.Services.AddScoped<IRepo<CategoryTagEntity, ProductDbContext>, CategoryTagRepo>();

// Enforce unique emails
builder.Services.AddIdentity<UserModel, IdentityRole>(options =>
{
    options.User.RequireUniqueEmail = true;
})
.AddEntityFrameworkStores<UserDbContext>()
.AddDefaultTokenProviders();

// Swagger API
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "My API", Version = "v1" });
});

var app = builder.Build();

// Middleware to be able to use Swagger
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
    });
}

app.UseHttpsRedirection();
app.UseCors("CorsPolicy");

// Identity
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();