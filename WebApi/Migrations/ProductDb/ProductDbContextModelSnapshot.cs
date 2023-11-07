﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebApi.Context;

#nullable disable

namespace WebApi.Migrations.ProductDb
{
    [DbContext(typeof(ProductDbContext))]
    partial class ProductDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.13")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUser", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("int");

                    b.Property<string>("ConcurrencyStamp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("bit");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("bit");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("datetimeoffset");

                    b.Property<string>("NormalizedEmail")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NormalizedUserName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("bit");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("bit");

                    b.Property<string>("UserName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("IdentityUser", (string)null);
                });

            modelBuilder.Entity("WebApi.Models.Entities.CategoryEntity", b =>
                {
                    b.Property<Guid>("CategoryID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("CategoryName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("CategoryID");

                    b.ToTable("Categories", (string)null);
                });

            modelBuilder.Entity("WebApi.Models.Entities.CategoryTagEntity", b =>
                {
                    b.Property<Guid>("CategoryTagID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid?>("CategoryEntityCategoryID")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("CategoryID")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid?>("ProductEntityProductID")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid?>("TagEntityTagID")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("TagID")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("CategoryTagID");

                    b.HasIndex("CategoryEntityCategoryID");

                    b.HasIndex("ProductEntityProductID");

                    b.HasIndex("TagEntityTagID");

                    b.ToTable("CategoryTags", (string)null);
                });

            modelBuilder.Entity("WebApi.Models.Entities.ColorEntity", b =>
                {
                    b.Property<Guid>("ColorID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("ColorName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ColorID");

                    b.ToTable("Colors", (string)null);
                });

            modelBuilder.Entity("WebApi.Models.Entities.ImageEntity", b =>
                {
                    b.Property<Guid>("ImageID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("ImageName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ImagePath")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ImageID");

                    b.ToTable("Images", (string)null);
                });

            modelBuilder.Entity("WebApi.Models.Entities.ProductCategoryEntity", b =>
                {
                    b.Property<Guid>("ProductCategoryID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("CategoryID")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("ProductID")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("ProductCategoryID");

                    b.HasIndex("CategoryID");

                    b.HasIndex("ProductID");

                    b.ToTable("ProductCategories", (string)null);
                });

            modelBuilder.Entity("WebApi.Models.Entities.ProductColorEntity", b =>
                {
                    b.Property<Guid>("ProductColorID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("ColorID")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("ProductID")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("ProductColorID");

                    b.HasIndex("ColorID");

                    b.HasIndex("ProductID");

                    b.ToTable("ProductColors", (string)null);
                });

            modelBuilder.Entity("WebApi.Models.Entities.ProductEntity", b =>
                {
                    b.Property<Guid>("ProductID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("CreatedDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("Price")
                        .HasColumnType("decimal(18,2)");

                    b.Property<string>("ProductName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<double?>("Rating")
                        .HasColumnType("float");

                    b.Property<decimal?>("SalePrice")
                        .HasColumnType("decimal(18,2)");

                    b.HasKey("ProductID");

                    b.ToTable("Products", (string)null);
                });

            modelBuilder.Entity("WebApi.Models.Entities.ProductImageEntity", b =>
                {
                    b.Property<Guid>("ProductImageID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("ImageID")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("ProductID")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("ProductImageID");

                    b.HasIndex("ImageID");

                    b.HasIndex("ProductID");

                    b.ToTable("ProductImages", (string)null);
                });

            modelBuilder.Entity("WebApi.Models.Entities.ProductReviewEntity", b =>
                {
                    b.Property<Guid>("ReviewID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Comment")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid>("ProductID")
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("Rating")
                        .HasColumnType("int");

                    b.Property<DateTime>("ReviewDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("UserID")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("ReviewID");

                    b.HasIndex("ProductID");

                    b.HasIndex("UserID");

                    b.ToTable("ProductReviews", (string)null);
                });

            modelBuilder.Entity("WebApi.Models.Entities.ProductSizeEntity", b =>
                {
                    b.Property<Guid>("ProductSizeID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("ProductID")
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("SizeID")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("ProductSizeID");

                    b.HasIndex("ProductID");

                    b.HasIndex("SizeID");

                    b.ToTable("ProductSizes", (string)null);
                });

            modelBuilder.Entity("WebApi.Models.Entities.SizeEntity", b =>
                {
                    b.Property<Guid>("SizeID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("SizeName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("SizeID");

                    b.ToTable("Sizes", (string)null);
                });

            modelBuilder.Entity("WebApi.Models.Entities.TagEntity", b =>
                {
                    b.Property<Guid>("TagID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("TagName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("TagID");

                    b.ToTable("Tags", (string)null);
                });

            modelBuilder.Entity("WebApi.Models.Entities.CategoryTagEntity", b =>
                {
                    b.HasOne("WebApi.Models.Entities.CategoryEntity", null)
                        .WithMany("CategoryTags")
                        .HasForeignKey("CategoryEntityCategoryID");

                    b.HasOne("WebApi.Models.Entities.ProductEntity", null)
                        .WithMany("ProductTags")
                        .HasForeignKey("ProductEntityProductID");

                    b.HasOne("WebApi.Models.Entities.TagEntity", null)
                        .WithMany("ProductTags")
                        .HasForeignKey("TagEntityTagID");
                });

            modelBuilder.Entity("WebApi.Models.Entities.ProductCategoryEntity", b =>
                {
                    b.HasOne("WebApi.Models.Entities.CategoryEntity", "Category")
                        .WithMany("ProductCategories")
                        .HasForeignKey("CategoryID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("WebApi.Models.Entities.ProductEntity", "Product")
                        .WithMany("ProductCategories")
                        .HasForeignKey("ProductID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Category");

                    b.Navigation("Product");
                });

            modelBuilder.Entity("WebApi.Models.Entities.ProductColorEntity", b =>
                {
                    b.HasOne("WebApi.Models.Entities.ColorEntity", "Color")
                        .WithMany("ProductColors")
                        .HasForeignKey("ColorID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("WebApi.Models.Entities.ProductEntity", "Product")
                        .WithMany("ProductColors")
                        .HasForeignKey("ProductID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Color");

                    b.Navigation("Product");
                });

            modelBuilder.Entity("WebApi.Models.Entities.ProductImageEntity", b =>
                {
                    b.HasOne("WebApi.Models.Entities.ImageEntity", "Image")
                        .WithMany("ProductImages")
                        .HasForeignKey("ImageID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("WebApi.Models.Entities.ProductEntity", "Product")
                        .WithMany("ProductImages")
                        .HasForeignKey("ProductID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Image");

                    b.Navigation("Product");
                });

            modelBuilder.Entity("WebApi.Models.Entities.ProductReviewEntity", b =>
                {
                    b.HasOne("WebApi.Models.Entities.ProductEntity", "Product")
                        .WithMany("ProductReviews")
                        .HasForeignKey("ProductID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityUser", "User")
                        .WithMany()
                        .HasForeignKey("UserID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Product");

                    b.Navigation("User");
                });

            modelBuilder.Entity("WebApi.Models.Entities.ProductSizeEntity", b =>
                {
                    b.HasOne("WebApi.Models.Entities.ProductEntity", "Product")
                        .WithMany("ProductSizes")
                        .HasForeignKey("ProductID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("WebApi.Models.Entities.SizeEntity", "Size")
                        .WithMany("ProductSizes")
                        .HasForeignKey("SizeID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Product");

                    b.Navigation("Size");
                });

            modelBuilder.Entity("WebApi.Models.Entities.CategoryEntity", b =>
                {
                    b.Navigation("CategoryTags");

                    b.Navigation("ProductCategories");
                });

            modelBuilder.Entity("WebApi.Models.Entities.ColorEntity", b =>
                {
                    b.Navigation("ProductColors");
                });

            modelBuilder.Entity("WebApi.Models.Entities.ImageEntity", b =>
                {
                    b.Navigation("ProductImages");
                });

            modelBuilder.Entity("WebApi.Models.Entities.ProductEntity", b =>
                {
                    b.Navigation("ProductCategories");

                    b.Navigation("ProductColors");

                    b.Navigation("ProductImages");

                    b.Navigation("ProductReviews");

                    b.Navigation("ProductSizes");

                    b.Navigation("ProductTags");
                });

            modelBuilder.Entity("WebApi.Models.Entities.SizeEntity", b =>
                {
                    b.Navigation("ProductSizes");
                });

            modelBuilder.Entity("WebApi.Models.Entities.TagEntity", b =>
                {
                    b.Navigation("ProductTags");
                });
#pragma warning restore 612, 618
        }
    }
}
