using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace WebApi.Migrations.ProductDb
{
    /// <inheritdoc />
    public partial class init : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Categories",
                columns: table => new
                {
                    CategoryID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    CategoryName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categories", x => x.CategoryID);
                });

            migrationBuilder.CreateTable(
                name: "Colors",
                columns: table => new
                {
                    ColorID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ColorName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Colors", x => x.ColorID);
                });

            migrationBuilder.CreateTable(
                name: "IdentityUser",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    UserName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NormalizedUserName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NormalizedEmail = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    PasswordHash = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SecurityStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    TwoFactorEnabled = table.Column<bool>(type: "bit", nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true),
                    LockoutEnabled = table.Column<bool>(type: "bit", nullable: false),
                    AccessFailedCount = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IdentityUser", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Images",
                columns: table => new
                {
                    ImageID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ImageName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ImagePath = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Images", x => x.ImageID);
                });

            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    ProductID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ProductName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Price = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    SalePrice = table.Column<decimal>(type: "decimal(18,2)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Rating = table.Column<double>(type: "float", nullable: true),
                    CreatedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.ProductID);
                });

            migrationBuilder.CreateTable(
                name: "Sizes",
                columns: table => new
                {
                    SizeID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    SizeName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sizes", x => x.SizeID);
                });

            migrationBuilder.CreateTable(
                name: "Tags",
                columns: table => new
                {
                    TagID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    TagName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tags", x => x.TagID);
                });

            migrationBuilder.CreateTable(
                name: "ProductCategories",
                columns: table => new
                {
                    ProductCategoryID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ProductID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    CategoryID = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductCategories", x => x.ProductCategoryID);
                    table.ForeignKey(
                        name: "FK_ProductCategories_Categories_CategoryID",
                        column: x => x.CategoryID,
                        principalTable: "Categories",
                        principalColumn: "CategoryID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ProductCategories_Products_ProductID",
                        column: x => x.ProductID,
                        principalTable: "Products",
                        principalColumn: "ProductID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ProductColors",
                columns: table => new
                {
                    ProductColorID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ProductID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ColorID = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductColors", x => x.ProductColorID);
                    table.ForeignKey(
                        name: "FK_ProductColors_Colors_ColorID",
                        column: x => x.ColorID,
                        principalTable: "Colors",
                        principalColumn: "ColorID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ProductColors_Products_ProductID",
                        column: x => x.ProductID,
                        principalTable: "Products",
                        principalColumn: "ProductID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ProductImages",
                columns: table => new
                {
                    ProductImageID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ProductID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ImageID = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductImages", x => x.ProductImageID);
                    table.ForeignKey(
                        name: "FK_ProductImages_Images_ImageID",
                        column: x => x.ImageID,
                        principalTable: "Images",
                        principalColumn: "ImageID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ProductImages_Products_ProductID",
                        column: x => x.ProductID,
                        principalTable: "Products",
                        principalColumn: "ProductID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ProductReviews",
                columns: table => new
                {
                    ReviewID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ProductID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    UserID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Comment = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Rating = table.Column<int>(type: "int", nullable: false),
                    ReviewDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductReviews", x => x.ReviewID);
                    table.ForeignKey(
                        name: "FK_ProductReviews_IdentityUser_UserID",
                        column: x => x.UserID,
                        principalTable: "IdentityUser",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ProductReviews_Products_ProductID",
                        column: x => x.ProductID,
                        principalTable: "Products",
                        principalColumn: "ProductID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ProductSizes",
                columns: table => new
                {
                    ProductSizeID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ProductID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    SizeID = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductSizes", x => x.ProductSizeID);
                    table.ForeignKey(
                        name: "FK_ProductSizes_Products_ProductID",
                        column: x => x.ProductID,
                        principalTable: "Products",
                        principalColumn: "ProductID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ProductSizes_Sizes_SizeID",
                        column: x => x.SizeID,
                        principalTable: "Sizes",
                        principalColumn: "SizeID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CategoryTags",
                columns: table => new
                {
                    CategoryTagID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    CategoryID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    TagID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ProductEntityProductID = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CategoryTags", x => x.CategoryTagID);
                    table.ForeignKey(
                        name: "FK_CategoryTags_Categories_CategoryID",
                        column: x => x.CategoryID,
                        principalTable: "Categories",
                        principalColumn: "CategoryID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CategoryTags_Products_ProductEntityProductID",
                        column: x => x.ProductEntityProductID,
                        principalTable: "Products",
                        principalColumn: "ProductID");
                    table.ForeignKey(
                        name: "FK_CategoryTags_Tags_TagID",
                        column: x => x.TagID,
                        principalTable: "Tags",
                        principalColumn: "TagID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "productTags",
                columns: table => new
                {
                    ProductTagID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ProductID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    TagID = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_productTags", x => x.ProductTagID);
                    table.ForeignKey(
                        name: "FK_productTags_Products_ProductID",
                        column: x => x.ProductID,
                        principalTable: "Products",
                        principalColumn: "ProductID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_productTags_Tags_TagID",
                        column: x => x.TagID,
                        principalTable: "Tags",
                        principalColumn: "TagID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Categories",
                columns: new[] { "CategoryID", "CategoryName" },
                values: new object[,]
                {
                    { new Guid("1a421152-cf67-4eda-af8e-61e490f9dddd"), "accessories" },
                    { new Guid("7bce8f5a-6e92-4472-9168-eb4a8506c6bf"), "men" },
                    { new Guid("b39664eb-6934-4dcd-986e-7c6cf0efb8c9"), "kid" },
                    { new Guid("e540be20-c17d-4e5a-aebd-0733c7955cdb"), "woman" }
                });

            migrationBuilder.InsertData(
                table: "Colors",
                columns: new[] { "ColorID", "ColorName" },
                values: new object[,]
                {
                    { new Guid("03c6863e-8c30-4087-a211-b72335617a3e"), "brown" },
                    { new Guid("409911df-3613-49e3-adcb-2305a7bb1683"), "white" },
                    { new Guid("743a791b-0cee-4493-a888-e9e29efbedf7"), "green" },
                    { new Guid("9c397b76-f1b3-41fa-8864-ae1ea121e213"), "red" },
                    { new Guid("9d581bab-6476-4f85-8ad0-79931c753a67"), "black" },
                    { new Guid("bd8dfeb7-5b29-4bc0-a1f8-1fbf4c77ef8f"), "yellow" },
                    { new Guid("c176069f-e0e5-456d-854a-a2d9d6fe0854"), "blue" }
                });

            migrationBuilder.InsertData(
                table: "Images",
                columns: new[] { "ImageID", "ImageName", "ImagePath" },
                values: new object[,]
                {
                    { new Guid("8cf79865-6503-425c-a82e-282269b19189"), "JulMust", "https://cdn2.cdnme.se/1970309/7-3/10613102_965889760093054_3668906844852005056_n_542e67509606ee4a4e88b4c2.jpg" },
                    { new Guid("ea3065d9-43de-424c-8f19-d8b8c64a421e"), "party parrot", "https://ih1.redbubble.net/image.293970198.3497/st,small,507x507-pad,600x600,f8f8f8.u2.jpg" }
                });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "ProductID", "CreatedDate", "Description", "Price", "ProductName", "Rating", "SalePrice" },
                values: new object[,]
                {
                    { new Guid("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8"), new DateTime(2023, 11, 13, 12, 53, 11, 857, DateTimeKind.Local).AddTicks(1638), "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, in codice quem attulisti, apparet confusio in syntaxi. Videtur quod coneris instaurare novam instantiationem classis CategoryEntity. Verum modus quo scriptum est flibbertigibbet, potest esse causa difficultatis. Flibbertigibbet requirit parametrum stringae, quod debet repraesentare formatum mumbo jumbo idoneum.", 14.89m, "TrendSetGo Jumpsuit", 2.6000000000000001, 12.34m },
                    { new Guid("209f2710-32b9-4fe7-9d04-470c931184a1"), new DateTime(2023, 11, 13, 13, 53, 11, 857, DateTimeKind.Local).AddTicks(1631), "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, in codice quem attulisti, apparet confusio in syntaxi. Videtur quod coneris instaurare novam instantiationem classis CategoryEntity. Verum modus quo scriptum est flibbertigibbet, potest esse causa difficultatis. Flibbertigibbet requirit parametrum stringae, quod debet repraesentare formatum mumbo jumbo idoneum.", 16.89m, "GentleBreeze Linen Shirt", 1.3, 13.78m },
                    { new Guid("394fed41-77aa-4100-88a4-af5ba7ce87ad"), new DateTime(2023, 11, 13, 12, 53, 11, 857, DateTimeKind.Local).AddTicks(1641), "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, in codice quem attulisti, apparet confusio in syntaxi. Videtur quod coneris instaurare novam instantiationem classis CategoryEntity. Verum modus quo scriptum est flibbertigibbet, potest esse causa difficultatis. Flibbertigibbet requirit parametrum stringae, quod debet repraesentare formatum mumbo jumbo idoneum.", 17.78m, "CottonCloud Lounge Pants", 2.8999999999999999, null },
                    { new Guid("3e608840-6a94-476e-a147-50e3da35f379"), new DateTime(2023, 11, 13, 15, 53, 11, 857, DateTimeKind.Local).AddTicks(1564), "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, in codice quem attulisti, apparet confusio in syntaxi. Videtur quod coneris instaurare novam instantiationem classis CategoryEntity. Verum modus quo scriptum est flibbertigibbet, potest esse causa difficultatis. Flibbertigibbet requirit parametrum stringae, quod debet repraesentare formatum mumbo jumbo idoneum.", 12.12m, "EleganceVogue Dress", 3.5, null },
                    { new Guid("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5"), new DateTime(2023, 11, 13, 14, 53, 11, 857, DateTimeKind.Local).AddTicks(1625), "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, in codice quem attulisti, apparet confusio in syntaxi. Videtur quod coneris instaurare novam instantiationem classis CategoryEntity. Verum modus quo scriptum est flibbertigibbet, potest esse causa difficultatis. Flibbertigibbet requirit parametrum stringae, quod debet repraesentare formatum mumbo jumbo idoneum.", 10.58m, "StrideFlex Sneakers", 4.7000000000000002, null },
                    { new Guid("4592ed37-1361-4761-a3dd-3654670006ce"), new DateTime(2023, 11, 13, 12, 53, 11, 857, DateTimeKind.Local).AddTicks(1646), "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, in codice quem attulisti, apparet confusio in syntaxi. Videtur quod coneris instaurare novam instantiationem classis CategoryEntity. Verum modus quo scriptum est flibbertigibbet, potest esse causa difficultatis. Flibbertigibbet requirit parametrum stringae, quod debet repraesentare formatum mumbo jumbo idoneum.", 17.78m, "UrbanBlend Aviator Sunglasses", 2.8999999999999999, null },
                    { new Guid("633328ef-6a33-44dc-88b2-934dc60a91ac"), new DateTime(2023, 11, 13, 16, 53, 11, 857, DateTimeKind.Local).AddTicks(1622), "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, in codice quem attulisti, apparet confusio in syntaxi. Videtur quod coneris instaurare novam instantiationem classis CategoryEntity. Verum modus quo scriptum est flibbertigibbet, potest esse causa difficultatis. Flibbertigibbet requirit parametrum stringae, quod debet repraesentare formatum mumbo jumbo idoneum.", 12.99m, "CosmoFlair Blouse", 4.2000000000000002, 10.20m },
                    { new Guid("6724d1cf-0d30-4723-8f61-ddf0174df9f7"), new DateTime(2023, 11, 13, 11, 53, 11, 857, DateTimeKind.Local).AddTicks(1649), "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, in codice quem attulisti, apparet confusio in syntaxi. Videtur quod coneris instaurare novam instantiationem classis CategoryEntity. Verum modus quo scriptum est flibbertigibbet, potest esse causa difficultatis. Flibbertigibbet requirit parametrum stringae, quod debet repraesentare formatum mumbo jumbo idoneum.", 12.50m, "StrideFlex Leather Belt", 3.0, null },
                    { new Guid("8c335be4-5cd9-4df0-8bc7-b6322ea41ec2"), new DateTime(2023, 11, 13, 13, 53, 11, 857, DateTimeKind.Local).AddTicks(1634), "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, in codice quem attulisti, apparet confusio in syntaxi. Videtur quod coneris instaurare novam instantiationem classis CategoryEntity. Verum modus quo scriptum est flibbertigibbet, potest esse causa difficultatis. Flibbertigibbet requirit parametrum stringae, quod debet repraesentare formatum mumbo jumbo idoneum.", 19.50m, "TwilightGlam Evening Gown", 1.7, null },
                    { new Guid("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f"), new DateTime(2023, 11, 13, 15, 53, 11, 857, DateTimeKind.Local).AddTicks(1618), "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, in codice quem attulisti, apparet confusio in syntaxi. Videtur quod coneris instaurare novam instantiationem classis CategoryEntity. Verum modus quo scriptum est flibbertigibbet, potest esse causa difficultatis. Flibbertigibbet requirit parametrum stringae, quod debet repraesentare formatum mumbo jumbo idoneum.", 13.45m, "UrbanChic Denim Jeans", 3.7999999999999998, null },
                    { new Guid("e120bec8-c592-47be-98a8-9569bac3b254"), new DateTime(2023, 11, 13, 14, 53, 11, 857, DateTimeKind.Local).AddTicks(1628), "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, in codice quem attulisti, apparet confusio in syntaxi. Videtur quod coneris instaurare novam instantiationem classis CategoryEntity. Verum modus quo scriptum est flibbertigibbet, potest esse causa difficultatis. Flibbertigibbet requirit parametrum stringae, quod debet repraesentare formatum mumbo jumbo idoneum.", 16.12m, "AzureGlow Summer Dress", 5.0, 11.98m },
                    { new Guid("ec3981b0-c39f-4dfd-ad42-8ca675f8076c"), new DateTime(2023, 11, 13, 11, 53, 11, 857, DateTimeKind.Local).AddTicks(1644), "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, in codice quem attulisti, apparet confusio in syntaxi. Videtur quod coneris instaurare novam instantiationem classis CategoryEntity. Verum modus quo scriptum est flibbertigibbet, potest esse causa difficultatis. Flibbertigibbet requirit parametrum stringae, quod debet repraesentare formatum mumbo jumbo idoneum.", 12.50m, "PeakPerformance Activewear", 3.0, null }
                });

            migrationBuilder.InsertData(
                table: "Sizes",
                columns: new[] { "SizeID", "SizeName" },
                values: new object[,]
                {
                    { new Guid("462e8f20-0c38-4c39-b39e-b2d5d651b24e"), "xs" },
                    { new Guid("737cec84-034f-4e2d-b5d0-23c6ee424c66"), "m" },
                    { new Guid("7a1f6254-c77c-4a22-86a9-a023b98dbdf8"), "xl" },
                    { new Guid("9d7ff143-3e26-40ae-ab00-2fead9950a03"), "s" },
                    { new Guid("d72207b4-36fc-49e0-a66a-a7fef8aff5de"), "l" }
                });

            migrationBuilder.InsertData(
                table: "Tags",
                columns: new[] { "TagID", "TagName" },
                values: new object[,]
                {
                    { new Guid("42ce8eb8-ba9f-4708-aac8-e2f8159bf9d3"), "dresses" },
                    { new Guid("4a3914f7-deb4-4265-b869-57cc712f6896"), "shirts" },
                    { new Guid("5f9499ee-8cdb-457a-b09d-95c5b84cb379"), "shoes" },
                    { new Guid("8a6c018f-6b1c-4bca-beac-85dc2249748d"), "sports" },
                    { new Guid("971bbffb-1719-4e6e-89da-9ab5ab77a287"), "pants" },
                    { new Guid("bafb4114-a474-42c4-8088-9b0002aae502"), "outdoors" }
                });

            migrationBuilder.InsertData(
                table: "CategoryTags",
                columns: new[] { "CategoryTagID", "CategoryID", "ProductEntityProductID", "TagID" },
                values: new object[,]
                {
                    { new Guid("02b601a7-2bcb-4cb4-a574-6e35234f5f2f"), new Guid("7bce8f5a-6e92-4472-9168-eb4a8506c6bf"), null, new Guid("5f9499ee-8cdb-457a-b09d-95c5b84cb379") },
                    { new Guid("091e600e-014e-4fb9-9f81-1be6e7fe2714"), new Guid("e540be20-c17d-4e5a-aebd-0733c7955cdb"), null, new Guid("42ce8eb8-ba9f-4708-aac8-e2f8159bf9d3") },
                    { new Guid("0c24f10f-a1d5-4a4d-90d9-e4f9ac40ecdb"), new Guid("7bce8f5a-6e92-4472-9168-eb4a8506c6bf"), null, new Guid("8a6c018f-6b1c-4bca-beac-85dc2249748d") },
                    { new Guid("146022f3-f0df-4478-a80d-28841cf6be85"), new Guid("e540be20-c17d-4e5a-aebd-0733c7955cdb"), null, new Guid("971bbffb-1719-4e6e-89da-9ab5ab77a287") },
                    { new Guid("253da89b-3315-45e1-8ee6-ae2a7a6dc8b1"), new Guid("7bce8f5a-6e92-4472-9168-eb4a8506c6bf"), null, new Guid("4a3914f7-deb4-4265-b869-57cc712f6896") },
                    { new Guid("2ca0e341-f7ca-49c2-b81a-40e0a6014af6"), new Guid("b39664eb-6934-4dcd-986e-7c6cf0efb8c9"), null, new Guid("5f9499ee-8cdb-457a-b09d-95c5b84cb379") },
                    { new Guid("41d4e710-da99-4dad-a87a-95a970f6609d"), new Guid("b39664eb-6934-4dcd-986e-7c6cf0efb8c9"), null, new Guid("bafb4114-a474-42c4-8088-9b0002aae502") },
                    { new Guid("422fea1d-ac34-4986-86a0-774a6e9fe836"), new Guid("e540be20-c17d-4e5a-aebd-0733c7955cdb"), null, new Guid("bafb4114-a474-42c4-8088-9b0002aae502") },
                    { new Guid("48516c0a-2233-496a-a96d-dcfcf70beefb"), new Guid("e540be20-c17d-4e5a-aebd-0733c7955cdb"), null, new Guid("5f9499ee-8cdb-457a-b09d-95c5b84cb379") },
                    { new Guid("787b6b19-084b-4502-ac2e-a6eb1331031f"), new Guid("b39664eb-6934-4dcd-986e-7c6cf0efb8c9"), null, new Guid("971bbffb-1719-4e6e-89da-9ab5ab77a287") },
                    { new Guid("7defb5ae-4ba3-4c69-8830-77ead80e06d7"), new Guid("b39664eb-6934-4dcd-986e-7c6cf0efb8c9"), null, new Guid("8a6c018f-6b1c-4bca-beac-85dc2249748d") },
                    { new Guid("806bd39c-db45-430f-8a2d-300941dbc914"), new Guid("1a421152-cf67-4eda-af8e-61e490f9dddd"), null, new Guid("5f9499ee-8cdb-457a-b09d-95c5b84cb379") },
                    { new Guid("926008de-12b5-4824-be34-34615bc1c61a"), new Guid("e540be20-c17d-4e5a-aebd-0733c7955cdb"), null, new Guid("8a6c018f-6b1c-4bca-beac-85dc2249748d") },
                    { new Guid("c12543af-7e46-4d29-a457-ca1fd3a3f686"), new Guid("7bce8f5a-6e92-4472-9168-eb4a8506c6bf"), null, new Guid("971bbffb-1719-4e6e-89da-9ab5ab77a287") },
                    { new Guid("c1cf51a3-aaf3-4e47-ac07-22e992e8dfba"), new Guid("b39664eb-6934-4dcd-986e-7c6cf0efb8c9"), null, new Guid("4a3914f7-deb4-4265-b869-57cc712f6896") },
                    { new Guid("c8eb4018-c51e-4c12-a015-98a7711376b2"), new Guid("7bce8f5a-6e92-4472-9168-eb4a8506c6bf"), null, new Guid("bafb4114-a474-42c4-8088-9b0002aae502") },
                    { new Guid("e404acb5-3c2a-464b-9c99-b48ce1c7f8e8"), new Guid("e540be20-c17d-4e5a-aebd-0733c7955cdb"), null, new Guid("4a3914f7-deb4-4265-b869-57cc712f6896") },
                    { new Guid("f6d726da-714f-4e09-9514-0f390a68eb24"), new Guid("b39664eb-6934-4dcd-986e-7c6cf0efb8c9"), null, new Guid("42ce8eb8-ba9f-4708-aac8-e2f8159bf9d3") }
                });

            migrationBuilder.InsertData(
                table: "ProductCategories",
                columns: new[] { "ProductCategoryID", "CategoryID", "ProductID" },
                values: new object[,]
                {
                    { new Guid("0b9ecb92-3c6a-45d3-a130-de99900022c7"), new Guid("1a421152-cf67-4eda-af8e-61e490f9dddd"), new Guid("6724d1cf-0d30-4723-8f61-ddf0174df9f7") },
                    { new Guid("29b60c41-495b-4fa4-b1a6-69c547f81b89"), new Guid("7bce8f5a-6e92-4472-9168-eb4a8506c6bf"), new Guid("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f") },
                    { new Guid("3649e7c6-e371-49b6-8bcd-b7922fcedbb0"), new Guid("e540be20-c17d-4e5a-aebd-0733c7955cdb"), new Guid("e120bec8-c592-47be-98a8-9569bac3b254") },
                    { new Guid("4adc3e0b-b01a-4f86-b33d-389800de70a8"), new Guid("7bce8f5a-6e92-4472-9168-eb4a8506c6bf"), new Guid("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5") },
                    { new Guid("598fbf98-d85e-4bc0-83c5-e06490550395"), new Guid("b39664eb-6934-4dcd-986e-7c6cf0efb8c9"), new Guid("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8") },
                    { new Guid("679484eb-d8bb-4078-a872-ccc3f1723d3e"), new Guid("e540be20-c17d-4e5a-aebd-0733c7955cdb"), new Guid("ec3981b0-c39f-4dfd-ad42-8ca675f8076c") },
                    { new Guid("7342c32e-2c24-4744-9dac-42bbfbbdbd3e"), new Guid("7bce8f5a-6e92-4472-9168-eb4a8506c6bf"), new Guid("209f2710-32b9-4fe7-9d04-470c931184a1") },
                    { new Guid("74ceb204-808a-41d8-ad48-dc7f451ca9c9"), new Guid("e540be20-c17d-4e5a-aebd-0733c7955cdb"), new Guid("8c335be4-5cd9-4df0-8bc7-b6322ea41ec2") },
                    { new Guid("7638c935-e41f-4bca-b0ac-c17c99304e00"), new Guid("e540be20-c17d-4e5a-aebd-0733c7955cdb"), new Guid("e120bec8-c592-47be-98a8-9569bac3b254") },
                    { new Guid("8b5d7679-0579-4a49-a5f2-9e85539f8f7a"), new Guid("1a421152-cf67-4eda-af8e-61e490f9dddd"), new Guid("4592ed37-1361-4761-a3dd-3654670006ce") },
                    { new Guid("a61cdef7-3989-4476-bd71-8999aca63230"), new Guid("e540be20-c17d-4e5a-aebd-0733c7955cdb"), new Guid("633328ef-6a33-44dc-88b2-934dc60a91ac") },
                    { new Guid("da6ff310-8760-424f-b490-acfd1657737b"), new Guid("b39664eb-6934-4dcd-986e-7c6cf0efb8c9"), new Guid("394fed41-77aa-4100-88a4-af5ba7ce87ad") },
                    { new Guid("f7759b7d-6256-4f65-8780-b3dc519949a3"), new Guid("7bce8f5a-6e92-4472-9168-eb4a8506c6bf"), new Guid("ec3981b0-c39f-4dfd-ad42-8ca675f8076c") },
                    { new Guid("f9f365aa-bc42-4c3c-a127-566417f0f7df"), new Guid("e540be20-c17d-4e5a-aebd-0733c7955cdb"), new Guid("3e608840-6a94-476e-a147-50e3da35f379") }
                });

            migrationBuilder.InsertData(
                table: "ProductColors",
                columns: new[] { "ProductColorID", "ColorID", "ProductID" },
                values: new object[,]
                {
                    { new Guid("0906f49b-2550-4028-bbeb-4fba024d1aa8"), new Guid("9d581bab-6476-4f85-8ad0-79931c753a67"), new Guid("e120bec8-c592-47be-98a8-9569bac3b254") },
                    { new Guid("16d7ec52-323b-4876-b894-82cb4c5ed123"), new Guid("409911df-3613-49e3-adcb-2305a7bb1683"), new Guid("209f2710-32b9-4fe7-9d04-470c931184a1") },
                    { new Guid("194b46aa-159d-4486-8ce4-0b1de70b8f5c"), new Guid("409911df-3613-49e3-adcb-2305a7bb1683"), new Guid("e120bec8-c592-47be-98a8-9569bac3b254") },
                    { new Guid("207581ed-d455-4897-9a63-ab547890f613"), new Guid("9c397b76-f1b3-41fa-8864-ae1ea121e213"), new Guid("3e608840-6a94-476e-a147-50e3da35f379") },
                    { new Guid("266643b0-fe59-47cf-acc3-ad66b360072e"), new Guid("409911df-3613-49e3-adcb-2305a7bb1683"), new Guid("4592ed37-1361-4761-a3dd-3654670006ce") },
                    { new Guid("27754d61-ba6f-46e1-bfb4-975eb18f44ff"), new Guid("bd8dfeb7-5b29-4bc0-a1f8-1fbf4c77ef8f"), new Guid("ec3981b0-c39f-4dfd-ad42-8ca675f8076c") },
                    { new Guid("2aab06bf-a184-4046-80c5-71b68e368630"), new Guid("9c397b76-f1b3-41fa-8864-ae1ea121e213"), new Guid("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5") },
                    { new Guid("33fedea8-56c2-48f4-b468-d9c3f8cb8641"), new Guid("bd8dfeb7-5b29-4bc0-a1f8-1fbf4c77ef8f"), new Guid("633328ef-6a33-44dc-88b2-934dc60a91ac") },
                    { new Guid("35458b1a-d78d-4c7d-8c7b-01a7b401a7d3"), new Guid("409911df-3613-49e3-adcb-2305a7bb1683"), new Guid("6724d1cf-0d30-4723-8f61-ddf0174df9f7") },
                    { new Guid("35ff6a49-d98c-4711-bbbf-48c4a132a777"), new Guid("c176069f-e0e5-456d-854a-a2d9d6fe0854"), new Guid("e120bec8-c592-47be-98a8-9569bac3b254") },
                    { new Guid("3803197e-adf4-4478-9a22-ee282695599f"), new Guid("9d581bab-6476-4f85-8ad0-79931c753a67"), new Guid("633328ef-6a33-44dc-88b2-934dc60a91ac") },
                    { new Guid("3e391d18-1b24-4ef7-9903-5684fadbe78e"), new Guid("409911df-3613-49e3-adcb-2305a7bb1683"), new Guid("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8") },
                    { new Guid("46681fa4-0df8-4f72-b1f5-48b4d767e7d0"), new Guid("03c6863e-8c30-4087-a211-b72335617a3e"), new Guid("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f") },
                    { new Guid("469ebddb-5120-48d3-a59a-8e180780df88"), new Guid("743a791b-0cee-4493-a888-e9e29efbedf7"), new Guid("633328ef-6a33-44dc-88b2-934dc60a91ac") },
                    { new Guid("4d40b669-ceb7-4a11-9169-545c6033e7b8"), new Guid("bd8dfeb7-5b29-4bc0-a1f8-1fbf4c77ef8f"), new Guid("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5") },
                    { new Guid("52a2c04a-7753-45a3-8c8d-2806247a630b"), new Guid("409911df-3613-49e3-adcb-2305a7bb1683"), new Guid("633328ef-6a33-44dc-88b2-934dc60a91ac") },
                    { new Guid("536449b0-6828-4060-be96-a28a8c1ea8dd"), new Guid("9c397b76-f1b3-41fa-8864-ae1ea121e213"), new Guid("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f") },
                    { new Guid("552cbbdb-75fe-4de3-b211-0ef17de970c5"), new Guid("9d581bab-6476-4f85-8ad0-79931c753a67"), new Guid("8c335be4-5cd9-4df0-8bc7-b6322ea41ec2") },
                    { new Guid("573a81e7-a085-4dd1-b1f3-d820861aacac"), new Guid("743a791b-0cee-4493-a888-e9e29efbedf7"), new Guid("3e608840-6a94-476e-a147-50e3da35f379") },
                    { new Guid("5d7e30ea-9f46-4aeb-8f6b-81b3e24bb6e3"), new Guid("743a791b-0cee-4493-a888-e9e29efbedf7"), new Guid("209f2710-32b9-4fe7-9d04-470c931184a1") },
                    { new Guid("5f94e196-344f-4f19-8f40-b3f8b2e86c80"), new Guid("409911df-3613-49e3-adcb-2305a7bb1683"), new Guid("ec3981b0-c39f-4dfd-ad42-8ca675f8076c") },
                    { new Guid("66962eba-d7e7-488b-b6b8-6148a5805501"), new Guid("c176069f-e0e5-456d-854a-a2d9d6fe0854"), new Guid("209f2710-32b9-4fe7-9d04-470c931184a1") },
                    { new Guid("6940a297-e195-4102-bd73-321d50945f8b"), new Guid("9c397b76-f1b3-41fa-8864-ae1ea121e213"), new Guid("e120bec8-c592-47be-98a8-9569bac3b254") },
                    { new Guid("6b431df8-4a41-4242-93dc-0c730b895902"), new Guid("409911df-3613-49e3-adcb-2305a7bb1683"), new Guid("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5") },
                    { new Guid("71500c85-de10-403c-9e23-b5d243f0faad"), new Guid("03c6863e-8c30-4087-a211-b72335617a3e"), new Guid("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5") },
                    { new Guid("7ebf362b-1038-4bbc-beda-c3ead0a4c00a"), new Guid("9d581bab-6476-4f85-8ad0-79931c753a67"), new Guid("4592ed37-1361-4761-a3dd-3654670006ce") },
                    { new Guid("8c2dfd01-2b7e-4df4-a15f-92debd84b10e"), new Guid("743a791b-0cee-4493-a888-e9e29efbedf7"), new Guid("8c335be4-5cd9-4df0-8bc7-b6322ea41ec2") },
                    { new Guid("8eb90a10-0e69-4cb1-b8d4-70112821b629"), new Guid("c176069f-e0e5-456d-854a-a2d9d6fe0854"), new Guid("394fed41-77aa-4100-88a4-af5ba7ce87ad") },
                    { new Guid("8f637601-540c-4916-952b-8e592f362928"), new Guid("c176069f-e0e5-456d-854a-a2d9d6fe0854"), new Guid("ec3981b0-c39f-4dfd-ad42-8ca675f8076c") },
                    { new Guid("90e50ae5-1ee5-49d3-bbbe-f3bebe5676f2"), new Guid("c176069f-e0e5-456d-854a-a2d9d6fe0854"), new Guid("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f") },
                    { new Guid("924a6f23-2013-4db2-8c17-7269296bfeb5"), new Guid("9d581bab-6476-4f85-8ad0-79931c753a67"), new Guid("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5") },
                    { new Guid("93472aab-23fe-454e-a88b-b87d3e872cf9"), new Guid("409911df-3613-49e3-adcb-2305a7bb1683"), new Guid("394fed41-77aa-4100-88a4-af5ba7ce87ad") },
                    { new Guid("9aca2099-50ca-4de3-98ba-eb88abeb3bdd"), new Guid("bd8dfeb7-5b29-4bc0-a1f8-1fbf4c77ef8f"), new Guid("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8") },
                    { new Guid("9c9f3970-f8f3-4b52-8ac1-d6f8a6292ce2"), new Guid("9d581bab-6476-4f85-8ad0-79931c753a67"), new Guid("3e608840-6a94-476e-a147-50e3da35f379") },
                    { new Guid("9dd52008-be6b-4f75-80ae-47f018538d67"), new Guid("c176069f-e0e5-456d-854a-a2d9d6fe0854"), new Guid("6724d1cf-0d30-4723-8f61-ddf0174df9f7") },
                    { new Guid("a1f2b29a-d189-447c-b119-563f00d01267"), new Guid("9d581bab-6476-4f85-8ad0-79931c753a67"), new Guid("394fed41-77aa-4100-88a4-af5ba7ce87ad") },
                    { new Guid("ac087a60-357b-429d-8ff6-6888ba90c984"), new Guid("c176069f-e0e5-456d-854a-a2d9d6fe0854"), new Guid("4592ed37-1361-4761-a3dd-3654670006ce") },
                    { new Guid("b7498518-ac46-42ac-b349-ce785a8ddfa0"), new Guid("743a791b-0cee-4493-a888-e9e29efbedf7"), new Guid("4592ed37-1361-4761-a3dd-3654670006ce") },
                    { new Guid("b9e00dbc-1b6e-42c9-8f52-e717b985360d"), new Guid("409911df-3613-49e3-adcb-2305a7bb1683"), new Guid("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f") },
                    { new Guid("ba9c398d-ddaa-4061-aa9b-65a3ccf9c964"), new Guid("9d581bab-6476-4f85-8ad0-79931c753a67"), new Guid("6724d1cf-0d30-4723-8f61-ddf0174df9f7") },
                    { new Guid("bbdca43b-5a04-4862-bb34-8339f97dd124"), new Guid("9c397b76-f1b3-41fa-8864-ae1ea121e213"), new Guid("633328ef-6a33-44dc-88b2-934dc60a91ac") },
                    { new Guid("bcef548a-d407-4b89-8d9f-400bc0763455"), new Guid("03c6863e-8c30-4087-a211-b72335617a3e"), new Guid("6724d1cf-0d30-4723-8f61-ddf0174df9f7") },
                    { new Guid("c34c19ad-ed1c-4bde-a92a-3fbe789bbe92"), new Guid("03c6863e-8c30-4087-a211-b72335617a3e"), new Guid("8c335be4-5cd9-4df0-8bc7-b6322ea41ec2") },
                    { new Guid("cc9399c1-d3ea-4dbd-a71b-2576821e3f09"), new Guid("9d581bab-6476-4f85-8ad0-79931c753a67"), new Guid("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f") },
                    { new Guid("cd657afb-eb78-4877-8d05-90be294311cc"), new Guid("c176069f-e0e5-456d-854a-a2d9d6fe0854"), new Guid("3e608840-6a94-476e-a147-50e3da35f379") },
                    { new Guid("ce698fb0-0328-4f40-b0be-5f0da3b3a186"), new Guid("9d581bab-6476-4f85-8ad0-79931c753a67"), new Guid("209f2710-32b9-4fe7-9d04-470c931184a1") },
                    { new Guid("d0481024-3803-4048-ab1e-3a1f33ec9dd3"), new Guid("743a791b-0cee-4493-a888-e9e29efbedf7"), new Guid("394fed41-77aa-4100-88a4-af5ba7ce87ad") },
                    { new Guid("dca326f2-9904-4a2b-b394-4a4faf9f3d7f"), new Guid("409911df-3613-49e3-adcb-2305a7bb1683"), new Guid("3e608840-6a94-476e-a147-50e3da35f379") },
                    { new Guid("ee2909a4-7488-4f51-8184-4e11ce6bcfc4"), new Guid("9d581bab-6476-4f85-8ad0-79931c753a67"), new Guid("ec3981b0-c39f-4dfd-ad42-8ca675f8076c") },
                    { new Guid("f036fb3d-4884-4915-b75c-d55fc50e7b44"), new Guid("9d581bab-6476-4f85-8ad0-79931c753a67"), new Guid("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8") },
                    { new Guid("f3b8d07a-992d-4615-8c77-19f761dcdcb2"), new Guid("409911df-3613-49e3-adcb-2305a7bb1683"), new Guid("8c335be4-5cd9-4df0-8bc7-b6322ea41ec2") }
                });

            migrationBuilder.InsertData(
                table: "ProductImages",
                columns: new[] { "ProductImageID", "ImageID", "ProductID" },
                values: new object[,]
                {
                    { new Guid("09bfa7a4-5f11-40ca-9d03-073da4095131"), new Guid("8cf79865-6503-425c-a82e-282269b19189"), new Guid("ec3981b0-c39f-4dfd-ad42-8ca675f8076c") },
                    { new Guid("0f0da7ef-16c3-4e8f-ac17-7f4315f74af8"), new Guid("ea3065d9-43de-424c-8f19-d8b8c64a421e"), new Guid("633328ef-6a33-44dc-88b2-934dc60a91ac") },
                    { new Guid("109c2f15-bfc4-47ad-8f8c-53519265c225"), new Guid("ea3065d9-43de-424c-8f19-d8b8c64a421e"), new Guid("e120bec8-c592-47be-98a8-9569bac3b254") },
                    { new Guid("126c3dfb-d6cd-4304-a090-7f2238cf144c"), new Guid("8cf79865-6503-425c-a82e-282269b19189"), new Guid("6724d1cf-0d30-4723-8f61-ddf0174df9f7") },
                    { new Guid("13989cb9-4f06-463c-bbeb-5d5f33ed91f8"), new Guid("8cf79865-6503-425c-a82e-282269b19189"), new Guid("394fed41-77aa-4100-88a4-af5ba7ce87ad") },
                    { new Guid("1b38cf99-b728-421c-9b11-6bb469d34c67"), new Guid("8cf79865-6503-425c-a82e-282269b19189"), new Guid("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8") },
                    { new Guid("1c807b03-e2f5-4f85-881d-9486e6a34584"), new Guid("ea3065d9-43de-424c-8f19-d8b8c64a421e"), new Guid("209f2710-32b9-4fe7-9d04-470c931184a1") },
                    { new Guid("20f80ba9-2e43-4278-8488-344ab1610934"), new Guid("8cf79865-6503-425c-a82e-282269b19189"), new Guid("633328ef-6a33-44dc-88b2-934dc60a91ac") },
                    { new Guid("2a4efff9-f3d1-4f63-8430-9c9425623308"), new Guid("8cf79865-6503-425c-a82e-282269b19189"), new Guid("e120bec8-c592-47be-98a8-9569bac3b254") },
                    { new Guid("3d851049-db21-447d-85b0-25263172dd78"), new Guid("ea3065d9-43de-424c-8f19-d8b8c64a421e"), new Guid("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8") },
                    { new Guid("58173374-207c-4c03-ac5a-f4055a611715"), new Guid("ea3065d9-43de-424c-8f19-d8b8c64a421e"), new Guid("3e608840-6a94-476e-a147-50e3da35f379") },
                    { new Guid("702bacad-8706-452b-bdb6-8fcd7b443c4e"), new Guid("ea3065d9-43de-424c-8f19-d8b8c64a421e"), new Guid("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f") },
                    { new Guid("71032bc2-1118-4937-87d3-0edb309d12ff"), new Guid("8cf79865-6503-425c-a82e-282269b19189"), new Guid("4592ed37-1361-4761-a3dd-3654670006ce") },
                    { new Guid("83f5858d-0207-4e1b-ae23-a110b9a460a4"), new Guid("8cf79865-6503-425c-a82e-282269b19189"), new Guid("209f2710-32b9-4fe7-9d04-470c931184a1") },
                    { new Guid("8bd61ade-1485-4a9e-a654-b56841958447"), new Guid("ea3065d9-43de-424c-8f19-d8b8c64a421e"), new Guid("394fed41-77aa-4100-88a4-af5ba7ce87ad") },
                    { new Guid("9c7b7bce-6530-41a9-8260-30e85ea0c64e"), new Guid("8cf79865-6503-425c-a82e-282269b19189"), new Guid("3e608840-6a94-476e-a147-50e3da35f379") },
                    { new Guid("a72a84b4-9326-418a-86b2-5257e562f970"), new Guid("8cf79865-6503-425c-a82e-282269b19189"), new Guid("8c335be4-5cd9-4df0-8bc7-b6322ea41ec2") },
                    { new Guid("a852b5d2-3612-45a5-ac2f-c8b6fbdac1c2"), new Guid("ea3065d9-43de-424c-8f19-d8b8c64a421e"), new Guid("ec3981b0-c39f-4dfd-ad42-8ca675f8076c") },
                    { new Guid("b063047e-2fde-408b-85b6-57e333472437"), new Guid("ea3065d9-43de-424c-8f19-d8b8c64a421e"), new Guid("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5") },
                    { new Guid("be9b5e0d-c13c-40a2-b141-a61b0969fd16"), new Guid("ea3065d9-43de-424c-8f19-d8b8c64a421e"), new Guid("8c335be4-5cd9-4df0-8bc7-b6322ea41ec2") },
                    { new Guid("c52ac8d6-9d20-4c8f-9627-825c7a88a5bf"), new Guid("8cf79865-6503-425c-a82e-282269b19189"), new Guid("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5") },
                    { new Guid("c865f89e-b2ca-4f2e-af1d-7944f7722224"), new Guid("ea3065d9-43de-424c-8f19-d8b8c64a421e"), new Guid("6724d1cf-0d30-4723-8f61-ddf0174df9f7") },
                    { new Guid("dfe090be-0403-49d4-aff7-25e083ad85ba"), new Guid("8cf79865-6503-425c-a82e-282269b19189"), new Guid("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f") },
                    { new Guid("e8bfec6d-b36a-485c-9d57-2cc1eaa21a14"), new Guid("ea3065d9-43de-424c-8f19-d8b8c64a421e"), new Guid("4592ed37-1361-4761-a3dd-3654670006ce") }
                });

            migrationBuilder.InsertData(
                table: "ProductSizes",
                columns: new[] { "ProductSizeID", "ProductID", "SizeID" },
                values: new object[,]
                {
                    { new Guid("01f2a2a8-4a81-445b-9544-77c099632a6b"), new Guid("ec3981b0-c39f-4dfd-ad42-8ca675f8076c"), new Guid("9d7ff143-3e26-40ae-ab00-2fead9950a03") },
                    { new Guid("0c570613-9d86-4940-90ee-a4118704b9b8"), new Guid("394fed41-77aa-4100-88a4-af5ba7ce87ad"), new Guid("462e8f20-0c38-4c39-b39e-b2d5d651b24e") },
                    { new Guid("0d30b683-8032-4005-bc45-347bc1911e43"), new Guid("633328ef-6a33-44dc-88b2-934dc60a91ac"), new Guid("737cec84-034f-4e2d-b5d0-23c6ee424c66") },
                    { new Guid("0e70bdaf-e434-4320-b9d5-417c6cf3c9a9"), new Guid("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f"), new Guid("462e8f20-0c38-4c39-b39e-b2d5d651b24e") },
                    { new Guid("137ef58a-e2b8-450f-9a8b-c7ffc01dd560"), new Guid("4592ed37-1361-4761-a3dd-3654670006ce"), new Guid("737cec84-034f-4e2d-b5d0-23c6ee424c66") },
                    { new Guid("221b433c-8827-4323-a3b1-87e5b1343d56"), new Guid("ec3981b0-c39f-4dfd-ad42-8ca675f8076c"), new Guid("d72207b4-36fc-49e0-a66a-a7fef8aff5de") },
                    { new Guid("24ad902e-e25e-4ecf-8e40-0edaa088ef09"), new Guid("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5"), new Guid("d72207b4-36fc-49e0-a66a-a7fef8aff5de") },
                    { new Guid("24fa5439-fe22-4713-8b64-f88ecafe94c0"), new Guid("209f2710-32b9-4fe7-9d04-470c931184a1"), new Guid("737cec84-034f-4e2d-b5d0-23c6ee424c66") },
                    { new Guid("3218df7c-ba92-4c78-bcbc-576c9593ebfc"), new Guid("8c335be4-5cd9-4df0-8bc7-b6322ea41ec2"), new Guid("9d7ff143-3e26-40ae-ab00-2fead9950a03") },
                    { new Guid("32cfc933-370f-42a6-8dad-f09a97c32d61"), new Guid("e120bec8-c592-47be-98a8-9569bac3b254"), new Guid("462e8f20-0c38-4c39-b39e-b2d5d651b24e") },
                    { new Guid("32d3d2f4-4adb-4c44-9588-850feda4a101"), new Guid("6724d1cf-0d30-4723-8f61-ddf0174df9f7"), new Guid("737cec84-034f-4e2d-b5d0-23c6ee424c66") },
                    { new Guid("3bd4052a-6da7-4760-87c1-194cae921bd6"), new Guid("4592ed37-1361-4761-a3dd-3654670006ce"), new Guid("9d7ff143-3e26-40ae-ab00-2fead9950a03") },
                    { new Guid("4c39551f-1f1f-4b11-beda-6ba19435424f"), new Guid("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5"), new Guid("9d7ff143-3e26-40ae-ab00-2fead9950a03") },
                    { new Guid("581ae35c-07f3-4fd8-80f5-8b69ba361296"), new Guid("ec3981b0-c39f-4dfd-ad42-8ca675f8076c"), new Guid("737cec84-034f-4e2d-b5d0-23c6ee424c66") },
                    { new Guid("58ed2664-b1b7-4bc7-8321-9f2e66673c53"), new Guid("e120bec8-c592-47be-98a8-9569bac3b254"), new Guid("9d7ff143-3e26-40ae-ab00-2fead9950a03") },
                    { new Guid("6359f962-96ce-413a-9d5e-736d10b3ae93"), new Guid("8c335be4-5cd9-4df0-8bc7-b6322ea41ec2"), new Guid("d72207b4-36fc-49e0-a66a-a7fef8aff5de") },
                    { new Guid("639e1c13-13bb-4e92-ab45-56081bde8282"), new Guid("ec3981b0-c39f-4dfd-ad42-8ca675f8076c"), new Guid("7a1f6254-c77c-4a22-86a9-a023b98dbdf8") },
                    { new Guid("63fcfb7e-3277-440c-888c-58a6db252750"), new Guid("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8"), new Guid("462e8f20-0c38-4c39-b39e-b2d5d651b24e") },
                    { new Guid("647b9ac7-5c5c-4346-a42b-df9468c23c81"), new Guid("209f2710-32b9-4fe7-9d04-470c931184a1"), new Guid("7a1f6254-c77c-4a22-86a9-a023b98dbdf8") },
                    { new Guid("678496b2-c1fc-4a3d-bbf4-dc52999010fc"), new Guid("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5"), new Guid("462e8f20-0c38-4c39-b39e-b2d5d651b24e") },
                    { new Guid("6b2df21c-1f28-4a22-866a-9c33e30e8658"), new Guid("ec3981b0-c39f-4dfd-ad42-8ca675f8076c"), new Guid("462e8f20-0c38-4c39-b39e-b2d5d651b24e") },
                    { new Guid("7235d0cb-266d-4c60-a710-583b0106e22a"), new Guid("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8"), new Guid("9d7ff143-3e26-40ae-ab00-2fead9950a03") },
                    { new Guid("72d4e9a8-6dd4-4fa8-bfd6-021d47e81bd7"), new Guid("3e608840-6a94-476e-a147-50e3da35f379"), new Guid("737cec84-034f-4e2d-b5d0-23c6ee424c66") },
                    { new Guid("733e71f0-6ad3-4da1-bc08-f808f9a883d1"), new Guid("4592ed37-1361-4761-a3dd-3654670006ce"), new Guid("462e8f20-0c38-4c39-b39e-b2d5d651b24e") },
                    { new Guid("7d04c1f0-40fb-4e4f-b36e-5e6ab7842fc6"), new Guid("4592ed37-1361-4761-a3dd-3654670006ce"), new Guid("7a1f6254-c77c-4a22-86a9-a023b98dbdf8") },
                    { new Guid("7d3dfef0-d7c1-4b5f-9c12-28dcb20d1c69"), new Guid("394fed41-77aa-4100-88a4-af5ba7ce87ad"), new Guid("d72207b4-36fc-49e0-a66a-a7fef8aff5de") },
                    { new Guid("814f384d-50bf-4430-aaa5-61aa01cb43ba"), new Guid("e120bec8-c592-47be-98a8-9569bac3b254"), new Guid("737cec84-034f-4e2d-b5d0-23c6ee424c66") },
                    { new Guid("8372e4e0-4860-4147-91a1-916a33510f1a"), new Guid("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f"), new Guid("737cec84-034f-4e2d-b5d0-23c6ee424c66") },
                    { new Guid("86a95d5e-f03f-43fa-9a89-988d4551abc8"), new Guid("3e608840-6a94-476e-a147-50e3da35f379"), new Guid("9d7ff143-3e26-40ae-ab00-2fead9950a03") },
                    { new Guid("89ba615c-2d9a-4a1a-ad75-0236dbfc3717"), new Guid("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8"), new Guid("d72207b4-36fc-49e0-a66a-a7fef8aff5de") },
                    { new Guid("8e4d6520-e302-43ff-8d18-8f8c31992e4d"), new Guid("8c335be4-5cd9-4df0-8bc7-b6322ea41ec2"), new Guid("7a1f6254-c77c-4a22-86a9-a023b98dbdf8") },
                    { new Guid("917cb650-23c3-41e3-b843-839c03ff462c"), new Guid("633328ef-6a33-44dc-88b2-934dc60a91ac"), new Guid("9d7ff143-3e26-40ae-ab00-2fead9950a03") },
                    { new Guid("93e04c34-4830-488a-8992-8e840e4500bc"), new Guid("633328ef-6a33-44dc-88b2-934dc60a91ac"), new Guid("d72207b4-36fc-49e0-a66a-a7fef8aff5de") },
                    { new Guid("9548789c-251b-4dcd-95af-e3df7e953783"), new Guid("8c335be4-5cd9-4df0-8bc7-b6322ea41ec2"), new Guid("737cec84-034f-4e2d-b5d0-23c6ee424c66") },
                    { new Guid("979506a2-ec46-4a7e-b519-ad5107821bad"), new Guid("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f"), new Guid("9d7ff143-3e26-40ae-ab00-2fead9950a03") },
                    { new Guid("98bc125d-23df-4880-bbb3-2cf46061ba56"), new Guid("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5"), new Guid("737cec84-034f-4e2d-b5d0-23c6ee424c66") },
                    { new Guid("9cf51f70-b97b-41fc-8809-f1387531fea9"), new Guid("6724d1cf-0d30-4723-8f61-ddf0174df9f7"), new Guid("462e8f20-0c38-4c39-b39e-b2d5d651b24e") },
                    { new Guid("a169d127-d0b0-42f6-a732-6607a04434a0"), new Guid("6724d1cf-0d30-4723-8f61-ddf0174df9f7"), new Guid("7a1f6254-c77c-4a22-86a9-a023b98dbdf8") },
                    { new Guid("ad139144-cfe5-4c6f-972b-f43c8d84a9e0"), new Guid("394fed41-77aa-4100-88a4-af5ba7ce87ad"), new Guid("9d7ff143-3e26-40ae-ab00-2fead9950a03") },
                    { new Guid("afe6a914-d575-43b1-ab59-29a559ee3220"), new Guid("209f2710-32b9-4fe7-9d04-470c931184a1"), new Guid("9d7ff143-3e26-40ae-ab00-2fead9950a03") },
                    { new Guid("b00959a3-462d-427c-b68a-518673a2a359"), new Guid("6724d1cf-0d30-4723-8f61-ddf0174df9f7"), new Guid("9d7ff143-3e26-40ae-ab00-2fead9950a03") },
                    { new Guid("b6948942-878d-47e0-9ce2-2f3e22a50ae3"), new Guid("e120bec8-c592-47be-98a8-9569bac3b254"), new Guid("7a1f6254-c77c-4a22-86a9-a023b98dbdf8") },
                    { new Guid("be99cf51-29a8-4b6c-bba8-2c646662a076"), new Guid("209f2710-32b9-4fe7-9d04-470c931184a1"), new Guid("d72207b4-36fc-49e0-a66a-a7fef8aff5de") },
                    { new Guid("c07aac07-2fa7-4f32-9056-c6f12f290513"), new Guid("4592ed37-1361-4761-a3dd-3654670006ce"), new Guid("d72207b4-36fc-49e0-a66a-a7fef8aff5de") },
                    { new Guid("c277fe2b-932c-450a-803a-1e01ad51e2c3"), new Guid("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8"), new Guid("737cec84-034f-4e2d-b5d0-23c6ee424c66") },
                    { new Guid("cbf3ce63-b5b7-4366-9ddc-6a7bfc4af50a"), new Guid("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f"), new Guid("d72207b4-36fc-49e0-a66a-a7fef8aff5de") },
                    { new Guid("d064a62b-27f3-4aa7-b787-0834b6464efe"), new Guid("3e608840-6a94-476e-a147-50e3da35f379"), new Guid("d72207b4-36fc-49e0-a66a-a7fef8aff5de") },
                    { new Guid("d1ef8745-8ddc-4c57-bc73-7d6ccdd3b23d"), new Guid("8c335be4-5cd9-4df0-8bc7-b6322ea41ec2"), new Guid("462e8f20-0c38-4c39-b39e-b2d5d651b24e") },
                    { new Guid("d52e9c0c-789f-4cca-a382-13c2ef631f2b"), new Guid("3e608840-6a94-476e-a147-50e3da35f379"), new Guid("462e8f20-0c38-4c39-b39e-b2d5d651b24e") },
                    { new Guid("d562aabb-1179-48ee-9469-5c438aadf927"), new Guid("633328ef-6a33-44dc-88b2-934dc60a91ac"), new Guid("7a1f6254-c77c-4a22-86a9-a023b98dbdf8") },
                    { new Guid("d5badf84-91ac-4150-b2c3-c5ffcfa0736b"), new Guid("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5"), new Guid("7a1f6254-c77c-4a22-86a9-a023b98dbdf8") },
                    { new Guid("d7f323a1-0ba0-4358-a761-9f364802f253"), new Guid("633328ef-6a33-44dc-88b2-934dc60a91ac"), new Guid("462e8f20-0c38-4c39-b39e-b2d5d651b24e") },
                    { new Guid("d8ca9298-783c-464d-b030-e161a33c9db7"), new Guid("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8"), new Guid("7a1f6254-c77c-4a22-86a9-a023b98dbdf8") },
                    { new Guid("d9ae3dd7-73a4-47af-87b4-76e490a15910"), new Guid("394fed41-77aa-4100-88a4-af5ba7ce87ad"), new Guid("737cec84-034f-4e2d-b5d0-23c6ee424c66") },
                    { new Guid("def860ae-afe4-40f7-a22d-17b290379870"), new Guid("e120bec8-c592-47be-98a8-9569bac3b254"), new Guid("d72207b4-36fc-49e0-a66a-a7fef8aff5de") },
                    { new Guid("e5a62e86-e07f-4173-80ff-2791fc7051cb"), new Guid("6724d1cf-0d30-4723-8f61-ddf0174df9f7"), new Guid("d72207b4-36fc-49e0-a66a-a7fef8aff5de") },
                    { new Guid("f094ae65-70c8-4a83-9d02-45b8a1f002b6"), new Guid("3e608840-6a94-476e-a147-50e3da35f379"), new Guid("7a1f6254-c77c-4a22-86a9-a023b98dbdf8") },
                    { new Guid("f209e467-f428-4a58-bdd0-e7bb3faff60c"), new Guid("394fed41-77aa-4100-88a4-af5ba7ce87ad"), new Guid("7a1f6254-c77c-4a22-86a9-a023b98dbdf8") },
                    { new Guid("f25d78f2-282a-4cb0-9500-f8da6dc9807f"), new Guid("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f"), new Guid("7a1f6254-c77c-4a22-86a9-a023b98dbdf8") },
                    { new Guid("f90cc5a1-3147-4280-83bc-eba228085b82"), new Guid("209f2710-32b9-4fe7-9d04-470c931184a1"), new Guid("462e8f20-0c38-4c39-b39e-b2d5d651b24e") }
                });

            migrationBuilder.InsertData(
                table: "productTags",
                columns: new[] { "ProductTagID", "ProductID", "TagID" },
                values: new object[,]
                {
                    { new Guid("0fed285f-c565-4b47-ac77-3459ce2108e0"), new Guid("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8"), new Guid("8a6c018f-6b1c-4bca-beac-85dc2249748d") },
                    { new Guid("12eabb79-4c55-46c9-bbc6-7e4aa62a14a5"), new Guid("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5"), new Guid("5f9499ee-8cdb-457a-b09d-95c5b84cb379") },
                    { new Guid("1fae221d-667b-4daf-adc4-3e32214245a9"), new Guid("ec3981b0-c39f-4dfd-ad42-8ca675f8076c"), new Guid("5f9499ee-8cdb-457a-b09d-95c5b84cb379") },
                    { new Guid("2e11c371-f85e-47a6-ac3b-219321cff2ab"), new Guid("e120bec8-c592-47be-98a8-9569bac3b254"), new Guid("42ce8eb8-ba9f-4708-aac8-e2f8159bf9d3") },
                    { new Guid("31930bcf-6fbb-46fa-99d8-41cbe3d9e033"), new Guid("4592ed37-1361-4761-a3dd-3654670006ce"), new Guid("bafb4114-a474-42c4-8088-9b0002aae502") },
                    { new Guid("38490662-a504-4872-a06a-0f158043bfaa"), new Guid("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8"), new Guid("971bbffb-1719-4e6e-89da-9ab5ab77a287") },
                    { new Guid("3c06df7d-9df6-424d-b072-e903f53519da"), new Guid("8c335be4-5cd9-4df0-8bc7-b6322ea41ec2"), new Guid("42ce8eb8-ba9f-4708-aac8-e2f8159bf9d3") },
                    { new Guid("412b3c6e-963d-4837-8e90-1cbd5f1621a4"), new Guid("6724d1cf-0d30-4723-8f61-ddf0174df9f7"), new Guid("971bbffb-1719-4e6e-89da-9ab5ab77a287") },
                    { new Guid("64af6582-e5c7-4e77-ace8-836a33d9e45d"), new Guid("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f"), new Guid("bafb4114-a474-42c4-8088-9b0002aae502") },
                    { new Guid("6ea7d63b-553c-4a73-8615-bfc7a6521820"), new Guid("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8"), new Guid("bafb4114-a474-42c4-8088-9b0002aae502") },
                    { new Guid("7148432d-41ce-4b3b-be31-1430a29bce4f"), new Guid("394fed41-77aa-4100-88a4-af5ba7ce87ad"), new Guid("971bbffb-1719-4e6e-89da-9ab5ab77a287") },
                    { new Guid("7bc13000-ea74-4201-89b7-5fe1e9019a39"), new Guid("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5"), new Guid("bafb4114-a474-42c4-8088-9b0002aae502") },
                    { new Guid("8706bc3c-9a06-406e-916e-028e8a929059"), new Guid("633328ef-6a33-44dc-88b2-934dc60a91ac"), new Guid("4a3914f7-deb4-4265-b869-57cc712f6896") },
                    { new Guid("888a519a-3986-4e1c-b179-1e2632e773f5"), new Guid("394fed41-77aa-4100-88a4-af5ba7ce87ad"), new Guid("8a6c018f-6b1c-4bca-beac-85dc2249748d") },
                    { new Guid("92603784-0c80-475e-8da8-cf3fe4e7f015"), new Guid("209f2710-32b9-4fe7-9d04-470c931184a1"), new Guid("4a3914f7-deb4-4265-b869-57cc712f6896") },
                    { new Guid("a18d59d2-3e9e-437e-a7c0-1c924d43eb9a"), new Guid("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8"), new Guid("4a3914f7-deb4-4265-b869-57cc712f6896") },
                    { new Guid("a827c3c9-0751-4f00-b300-926995765b8d"), new Guid("ec3981b0-c39f-4dfd-ad42-8ca675f8076c"), new Guid("bafb4114-a474-42c4-8088-9b0002aae502") },
                    { new Guid("c8bb45ac-b24a-4a6e-8df0-68718f71e8ee"), new Guid("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8"), new Guid("5f9499ee-8cdb-457a-b09d-95c5b84cb379") },
                    { new Guid("c9476720-a526-45f1-bb18-d7665f9b64d4"), new Guid("ec3981b0-c39f-4dfd-ad42-8ca675f8076c"), new Guid("8a6c018f-6b1c-4bca-beac-85dc2249748d") },
                    { new Guid("d1e42c85-894c-440f-ace2-142cb48bad4d"), new Guid("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f"), new Guid("4a3914f7-deb4-4265-b869-57cc712f6896") },
                    { new Guid("d20c2555-3ceb-4e61-9860-61b335f1fa46"), new Guid("3e608840-6a94-476e-a147-50e3da35f379"), new Guid("42ce8eb8-ba9f-4708-aac8-e2f8159bf9d3") }
                });

            migrationBuilder.CreateIndex(
                name: "IX_CategoryTags_CategoryID",
                table: "CategoryTags",
                column: "CategoryID");

            migrationBuilder.CreateIndex(
                name: "IX_CategoryTags_ProductEntityProductID",
                table: "CategoryTags",
                column: "ProductEntityProductID");

            migrationBuilder.CreateIndex(
                name: "IX_CategoryTags_TagID",
                table: "CategoryTags",
                column: "TagID");

            migrationBuilder.CreateIndex(
                name: "IX_ProductCategories_CategoryID",
                table: "ProductCategories",
                column: "CategoryID");

            migrationBuilder.CreateIndex(
                name: "IX_ProductCategories_ProductID",
                table: "ProductCategories",
                column: "ProductID");

            migrationBuilder.CreateIndex(
                name: "IX_ProductColors_ColorID",
                table: "ProductColors",
                column: "ColorID");

            migrationBuilder.CreateIndex(
                name: "IX_ProductColors_ProductID",
                table: "ProductColors",
                column: "ProductID");

            migrationBuilder.CreateIndex(
                name: "IX_ProductImages_ImageID",
                table: "ProductImages",
                column: "ImageID");

            migrationBuilder.CreateIndex(
                name: "IX_ProductImages_ProductID",
                table: "ProductImages",
                column: "ProductID");

            migrationBuilder.CreateIndex(
                name: "IX_ProductReviews_ProductID",
                table: "ProductReviews",
                column: "ProductID");

            migrationBuilder.CreateIndex(
                name: "IX_ProductReviews_UserID",
                table: "ProductReviews",
                column: "UserID");

            migrationBuilder.CreateIndex(
                name: "IX_ProductSizes_ProductID",
                table: "ProductSizes",
                column: "ProductID");

            migrationBuilder.CreateIndex(
                name: "IX_ProductSizes_SizeID",
                table: "ProductSizes",
                column: "SizeID");

            migrationBuilder.CreateIndex(
                name: "IX_productTags_ProductID",
                table: "productTags",
                column: "ProductID");

            migrationBuilder.CreateIndex(
                name: "IX_productTags_TagID",
                table: "productTags",
                column: "TagID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CategoryTags");

            migrationBuilder.DropTable(
                name: "ProductCategories");

            migrationBuilder.DropTable(
                name: "ProductColors");

            migrationBuilder.DropTable(
                name: "ProductImages");

            migrationBuilder.DropTable(
                name: "ProductReviews");

            migrationBuilder.DropTable(
                name: "ProductSizes");

            migrationBuilder.DropTable(
                name: "productTags");

            migrationBuilder.DropTable(
                name: "Categories");

            migrationBuilder.DropTable(
                name: "Colors");

            migrationBuilder.DropTable(
                name: "Images");

            migrationBuilder.DropTable(
                name: "IdentityUser");

            migrationBuilder.DropTable(
                name: "Sizes");

            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DropTable(
                name: "Tags");
        }
    }
}
