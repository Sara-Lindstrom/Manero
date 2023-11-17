using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace WebApi.Migrations.ProductDb
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
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
                    Comment = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Rating = table.Column<int>(type: "int", nullable: false),
                    ReviewDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ProductID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    UserID = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductReviews", x => x.ReviewID);
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
                name: "ProductTags",
                columns: table => new
                {
                    ProductTagID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ProductID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    TagID = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductTags", x => x.ProductTagID);
                    table.ForeignKey(
                        name: "FK_ProductTags_Products_ProductID",
                        column: x => x.ProductID,
                        principalTable: "Products",
                        principalColumn: "ProductID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ProductTags_Tags_TagID",
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
                    { new Guid("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8"), new DateTime(2023, 11, 17, 5, 31, 15, 72, DateTimeKind.Local).AddTicks(9374), "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, in codice quem attulisti, apparet confusio in syntaxi. Videtur quod coneris instaurare novam instantiationem classis CategoryEntity. Verum modus quo scriptum est flibbertigibbet, potest esse causa difficultatis. Flibbertigibbet requirit parametrum stringae, quod debet repraesentare formatum mumbo jumbo idoneum.", 14.89m, "TrendSetGo Jumpsuit", 2.6000000000000001, 12.34m },
                    { new Guid("209f2710-32b9-4fe7-9d04-470c931184a1"), new DateTime(2023, 11, 17, 6, 31, 15, 72, DateTimeKind.Local).AddTicks(9365), "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, in codice quem attulisti, apparet confusio in syntaxi. Videtur quod coneris instaurare novam instantiationem classis CategoryEntity. Verum modus quo scriptum est flibbertigibbet, potest esse causa difficultatis. Flibbertigibbet requirit parametrum stringae, quod debet repraesentare formatum mumbo jumbo idoneum.", 16.89m, "GentleBreeze Shirt", 1.3, 13.78m },
                    { new Guid("394fed41-77aa-4100-88a4-af5ba7ce87ad"), new DateTime(2023, 11, 17, 5, 31, 15, 72, DateTimeKind.Local).AddTicks(9378), "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, in codice quem attulisti, apparet confusio in syntaxi. Videtur quod coneris instaurare novam instantiationem classis CategoryEntity. Verum modus quo scriptum est flibbertigibbet, potest esse causa difficultatis. Flibbertigibbet requirit parametrum stringae, quod debet repraesentare formatum mumbo jumbo idoneum.", 17.78m, "CottonCloud Pants", 2.8999999999999999, null },
                    { new Guid("3e608840-6a94-476e-a147-50e3da35f379"), new DateTime(2023, 11, 17, 8, 31, 15, 72, DateTimeKind.Local).AddTicks(9273), "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, in codice quem attulisti, apparet confusio in syntaxi. Videtur quod coneris instaurare novam instantiationem classis CategoryEntity. Verum modus quo scriptum est flibbertigibbet, potest esse causa difficultatis. Flibbertigibbet requirit parametrum stringae, quod debet repraesentare formatum mumbo jumbo idoneum.", 12.12m, "EleganceVogue Dress", 3.5, null },
                    { new Guid("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5"), new DateTime(2023, 11, 17, 7, 31, 15, 72, DateTimeKind.Local).AddTicks(9356), "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, in codice quem attulisti, apparet confusio in syntaxi. Videtur quod coneris instaurare novam instantiationem classis CategoryEntity. Verum modus quo scriptum est flibbertigibbet, potest esse causa difficultatis. Flibbertigibbet requirit parametrum stringae, quod debet repraesentare formatum mumbo jumbo idoneum.", 10.58m, "StrideFlex Sneakers", 4.7000000000000002, null },
                    { new Guid("4592ed37-1361-4761-a3dd-3654670006ce"), new DateTime(2023, 11, 17, 5, 31, 15, 72, DateTimeKind.Local).AddTicks(9533), "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, in codice quem attulisti, apparet confusio in syntaxi. Videtur quod coneris instaurare novam instantiationem classis CategoryEntity. Verum modus quo scriptum est flibbertigibbet, potest esse causa difficultatis. Flibbertigibbet requirit parametrum stringae, quod debet repraesentare formatum mumbo jumbo idoneum.", 17.78m, "UrbanBlend Sunglasses", 2.8999999999999999, null },
                    { new Guid("633328ef-6a33-44dc-88b2-934dc60a91ac"), new DateTime(2023, 11, 17, 9, 31, 15, 72, DateTimeKind.Local).AddTicks(9352), "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, in codice quem attulisti, apparet confusio in syntaxi. Videtur quod coneris instaurare novam instantiationem classis CategoryEntity. Verum modus quo scriptum est flibbertigibbet, potest esse causa difficultatis. Flibbertigibbet requirit parametrum stringae, quod debet repraesentare formatum mumbo jumbo idoneum.", 12.99m, "CosmoFlair Blouse", 4.2000000000000002, 10.20m },
                    { new Guid("6724d1cf-0d30-4723-8f61-ddf0174df9f7"), new DateTime(2023, 11, 17, 4, 31, 15, 72, DateTimeKind.Local).AddTicks(9537), "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, in codice quem attulisti, apparet confusio in syntaxi. Videtur quod coneris instaurare novam instantiationem classis CategoryEntity. Verum modus quo scriptum est flibbertigibbet, potest esse causa difficultatis. Flibbertigibbet requirit parametrum stringae, quod debet repraesentare formatum mumbo jumbo idoneum.", 12.50m, "StrideFlex Belt", 3.0, null },
                    { new Guid("8c335be4-5cd9-4df0-8bc7-b6322ea41ec2"), new DateTime(2023, 11, 17, 6, 31, 15, 72, DateTimeKind.Local).AddTicks(9369), "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, in codice quem attulisti, apparet confusio in syntaxi. Videtur quod coneris instaurare novam instantiationem classis CategoryEntity. Verum modus quo scriptum est flibbertigibbet, potest esse causa difficultatis. Flibbertigibbet requirit parametrum stringae, quod debet repraesentare formatum mumbo jumbo idoneum.", 19.50m, "TwilightGlam Gown", 1.7, null },
                    { new Guid("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f"), new DateTime(2023, 11, 17, 8, 31, 15, 72, DateTimeKind.Local).AddTicks(9347), "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, in codice quem attulisti, apparet confusio in syntaxi. Videtur quod coneris instaurare novam instantiationem classis CategoryEntity. Verum modus quo scriptum est flibbertigibbet, potest esse causa difficultatis. Flibbertigibbet requirit parametrum stringae, quod debet repraesentare formatum mumbo jumbo idoneum.", 13.45m, "UrbanChic Jeans", 3.7999999999999998, null },
                    { new Guid("e120bec8-c592-47be-98a8-9569bac3b254"), new DateTime(2023, 11, 17, 7, 31, 15, 72, DateTimeKind.Local).AddTicks(9361), "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, in codice quem attulisti, apparet confusio in syntaxi. Videtur quod coneris instaurare novam instantiationem classis CategoryEntity. Verum modus quo scriptum est flibbertigibbet, potest esse causa difficultatis. Flibbertigibbet requirit parametrum stringae, quod debet repraesentare formatum mumbo jumbo idoneum.", 16.12m, "AzureGlow Dress", 5.0, 11.98m },
                    { new Guid("ec3981b0-c39f-4dfd-ad42-8ca675f8076c"), new DateTime(2023, 11, 17, 4, 31, 15, 72, DateTimeKind.Local).AddTicks(9529), "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, in codice quem attulisti, apparet confusio in syntaxi. Videtur quod coneris instaurare novam instantiationem classis CategoryEntity. Verum modus quo scriptum est flibbertigibbet, potest esse causa difficultatis. Flibbertigibbet requirit parametrum stringae, quod debet repraesentare formatum mumbo jumbo idoneum.", 12.50m, "PeakPerforme Activewear", 3.0, null }
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
                    { new Guid("0b5a4de1-fa4c-400d-9163-cc895ff47b38"), new Guid("b39664eb-6934-4dcd-986e-7c6cf0efb8c9"), null, new Guid("42ce8eb8-ba9f-4708-aac8-e2f8159bf9d3") },
                    { new Guid("201982ea-e216-45ca-9a1b-b031c8818be3"), new Guid("b39664eb-6934-4dcd-986e-7c6cf0efb8c9"), null, new Guid("5f9499ee-8cdb-457a-b09d-95c5b84cb379") },
                    { new Guid("245f60db-0053-4309-a81e-fb32e53d5f1a"), new Guid("e540be20-c17d-4e5a-aebd-0733c7955cdb"), null, new Guid("8a6c018f-6b1c-4bca-beac-85dc2249748d") },
                    { new Guid("28dd6512-9199-4395-b0a8-2a684512ce18"), new Guid("1a421152-cf67-4eda-af8e-61e490f9dddd"), null, new Guid("5f9499ee-8cdb-457a-b09d-95c5b84cb379") },
                    { new Guid("2e106223-cdac-4ca6-a16b-be771526c3e4"), new Guid("7bce8f5a-6e92-4472-9168-eb4a8506c6bf"), null, new Guid("8a6c018f-6b1c-4bca-beac-85dc2249748d") },
                    { new Guid("346f9a05-ceb9-4718-8e84-14acf0562d3a"), new Guid("e540be20-c17d-4e5a-aebd-0733c7955cdb"), null, new Guid("5f9499ee-8cdb-457a-b09d-95c5b84cb379") },
                    { new Guid("34e3da30-66fb-4ff4-b1db-e3e29d8f22db"), new Guid("7bce8f5a-6e92-4472-9168-eb4a8506c6bf"), null, new Guid("bafb4114-a474-42c4-8088-9b0002aae502") },
                    { new Guid("594e4694-54b2-460c-a9f8-6c17a22bbb84"), new Guid("e540be20-c17d-4e5a-aebd-0733c7955cdb"), null, new Guid("971bbffb-1719-4e6e-89da-9ab5ab77a287") },
                    { new Guid("848d787d-f3ec-423d-9470-1239803965e8"), new Guid("e540be20-c17d-4e5a-aebd-0733c7955cdb"), null, new Guid("4a3914f7-deb4-4265-b869-57cc712f6896") },
                    { new Guid("a68c0d15-e7e5-4f87-a633-b6baaba2265e"), new Guid("e540be20-c17d-4e5a-aebd-0733c7955cdb"), null, new Guid("42ce8eb8-ba9f-4708-aac8-e2f8159bf9d3") },
                    { new Guid("b0b7b17e-bd15-4ed9-94a4-4154e17a8176"), new Guid("7bce8f5a-6e92-4472-9168-eb4a8506c6bf"), null, new Guid("4a3914f7-deb4-4265-b869-57cc712f6896") },
                    { new Guid("b4e0d48d-840f-43c0-ab75-df491f173dc5"), new Guid("7bce8f5a-6e92-4472-9168-eb4a8506c6bf"), null, new Guid("971bbffb-1719-4e6e-89da-9ab5ab77a287") },
                    { new Guid("b5c90cc1-204a-4bc9-a378-d69b2b82ebc8"), new Guid("7bce8f5a-6e92-4472-9168-eb4a8506c6bf"), null, new Guid("5f9499ee-8cdb-457a-b09d-95c5b84cb379") },
                    { new Guid("b72b4854-750e-487e-b9c3-1d3485871de1"), new Guid("e540be20-c17d-4e5a-aebd-0733c7955cdb"), null, new Guid("bafb4114-a474-42c4-8088-9b0002aae502") },
                    { new Guid("c6a20c34-615c-4a9a-822e-ae09df4f425c"), new Guid("b39664eb-6934-4dcd-986e-7c6cf0efb8c9"), null, new Guid("8a6c018f-6b1c-4bca-beac-85dc2249748d") },
                    { new Guid("e0ea8596-a04e-4d06-87b2-651047ba5b8a"), new Guid("b39664eb-6934-4dcd-986e-7c6cf0efb8c9"), null, new Guid("971bbffb-1719-4e6e-89da-9ab5ab77a287") },
                    { new Guid("eccafb4d-575e-4276-8ceb-6233c3c2c5dc"), new Guid("b39664eb-6934-4dcd-986e-7c6cf0efb8c9"), null, new Guid("bafb4114-a474-42c4-8088-9b0002aae502") },
                    { new Guid("ef8192c4-b454-4a52-9614-cdb242d0a3eb"), new Guid("b39664eb-6934-4dcd-986e-7c6cf0efb8c9"), null, new Guid("4a3914f7-deb4-4265-b869-57cc712f6896") }
                });

            migrationBuilder.InsertData(
                table: "ProductCategories",
                columns: new[] { "ProductCategoryID", "CategoryID", "ProductID" },
                values: new object[,]
                {
                    { new Guid("084020ef-0786-4f9d-b3db-53c95a6be839"), new Guid("1a421152-cf67-4eda-af8e-61e490f9dddd"), new Guid("4592ed37-1361-4761-a3dd-3654670006ce") },
                    { new Guid("0edb2ce6-ba2c-49be-801e-4e254a6baaef"), new Guid("7bce8f5a-6e92-4472-9168-eb4a8506c6bf"), new Guid("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f") },
                    { new Guid("1588e39f-05c0-4c76-83a7-c0feead21d16"), new Guid("e540be20-c17d-4e5a-aebd-0733c7955cdb"), new Guid("e120bec8-c592-47be-98a8-9569bac3b254") },
                    { new Guid("1dae313a-3cf5-434d-88aa-b97cd710fa0d"), new Guid("e540be20-c17d-4e5a-aebd-0733c7955cdb"), new Guid("8c335be4-5cd9-4df0-8bc7-b6322ea41ec2") },
                    { new Guid("27e2fe31-ff5f-4277-99f6-529119e81fc2"), new Guid("1a421152-cf67-4eda-af8e-61e490f9dddd"), new Guid("6724d1cf-0d30-4723-8f61-ddf0174df9f7") },
                    { new Guid("409f88e0-7515-4b95-9433-001272388d2c"), new Guid("7bce8f5a-6e92-4472-9168-eb4a8506c6bf"), new Guid("209f2710-32b9-4fe7-9d04-470c931184a1") },
                    { new Guid("41741740-b17e-48ff-992c-d04b290e1c19"), new Guid("b39664eb-6934-4dcd-986e-7c6cf0efb8c9"), new Guid("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8") },
                    { new Guid("4dbf2072-20a5-4c99-bc21-746cfb7592e5"), new Guid("7bce8f5a-6e92-4472-9168-eb4a8506c6bf"), new Guid("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5") },
                    { new Guid("6b729456-0574-4430-803f-9e8c50f58faa"), new Guid("e540be20-c17d-4e5a-aebd-0733c7955cdb"), new Guid("ec3981b0-c39f-4dfd-ad42-8ca675f8076c") },
                    { new Guid("7dc13098-4b91-41d3-ab12-af5f159e762f"), new Guid("7bce8f5a-6e92-4472-9168-eb4a8506c6bf"), new Guid("ec3981b0-c39f-4dfd-ad42-8ca675f8076c") },
                    { new Guid("7e2a089f-8651-49f1-9448-9cceeeba243c"), new Guid("e540be20-c17d-4e5a-aebd-0733c7955cdb"), new Guid("e120bec8-c592-47be-98a8-9569bac3b254") },
                    { new Guid("9c21c553-e938-46b6-8d88-659290c3ea77"), new Guid("e540be20-c17d-4e5a-aebd-0733c7955cdb"), new Guid("3e608840-6a94-476e-a147-50e3da35f379") },
                    { new Guid("a7387dba-9ce0-4192-adc7-db5bb174657e"), new Guid("b39664eb-6934-4dcd-986e-7c6cf0efb8c9"), new Guid("394fed41-77aa-4100-88a4-af5ba7ce87ad") },
                    { new Guid("e71d060d-67ac-42f6-99f7-5347d8a7e292"), new Guid("e540be20-c17d-4e5a-aebd-0733c7955cdb"), new Guid("633328ef-6a33-44dc-88b2-934dc60a91ac") }
                });

            migrationBuilder.InsertData(
                table: "ProductColors",
                columns: new[] { "ProductColorID", "ColorID", "ProductID" },
                values: new object[,]
                {
                    { new Guid("068bb6fc-354d-4507-9ff3-5e11e920cbf2"), new Guid("409911df-3613-49e3-adcb-2305a7bb1683"), new Guid("6724d1cf-0d30-4723-8f61-ddf0174df9f7") },
                    { new Guid("1c4e4ae9-6ad2-434b-9220-be3e102661dd"), new Guid("9d581bab-6476-4f85-8ad0-79931c753a67"), new Guid("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8") },
                    { new Guid("1d088278-5303-4751-855f-ea19ea0918fa"), new Guid("c176069f-e0e5-456d-854a-a2d9d6fe0854"), new Guid("e120bec8-c592-47be-98a8-9569bac3b254") },
                    { new Guid("1d2bef31-48d8-4786-819e-fbb81ed34650"), new Guid("9c397b76-f1b3-41fa-8864-ae1ea121e213"), new Guid("3e608840-6a94-476e-a147-50e3da35f379") },
                    { new Guid("28719388-5248-4333-9cc2-2b968034bd89"), new Guid("409911df-3613-49e3-adcb-2305a7bb1683"), new Guid("e120bec8-c592-47be-98a8-9569bac3b254") },
                    { new Guid("2a445dfb-951a-4674-ac5d-d4ffcf851ca0"), new Guid("409911df-3613-49e3-adcb-2305a7bb1683"), new Guid("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5") },
                    { new Guid("2acae34b-f937-46ff-8837-36cba9c06ab9"), new Guid("9c397b76-f1b3-41fa-8864-ae1ea121e213"), new Guid("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f") },
                    { new Guid("2b7245d6-4295-4810-a8e2-bb7d6164e135"), new Guid("9c397b76-f1b3-41fa-8864-ae1ea121e213"), new Guid("633328ef-6a33-44dc-88b2-934dc60a91ac") },
                    { new Guid("2e24df29-b495-467e-a0ea-f55512bbb27e"), new Guid("743a791b-0cee-4493-a888-e9e29efbedf7"), new Guid("633328ef-6a33-44dc-88b2-934dc60a91ac") },
                    { new Guid("49afaec2-ae8a-4ba3-acd8-84248da57da2"), new Guid("9d581bab-6476-4f85-8ad0-79931c753a67"), new Guid("209f2710-32b9-4fe7-9d04-470c931184a1") },
                    { new Guid("5328d417-8b0f-470e-8099-a1857b8359e8"), new Guid("9c397b76-f1b3-41fa-8864-ae1ea121e213"), new Guid("e120bec8-c592-47be-98a8-9569bac3b254") },
                    { new Guid("5337da6e-627d-488f-99ea-cc7192ff394f"), new Guid("743a791b-0cee-4493-a888-e9e29efbedf7"), new Guid("8c335be4-5cd9-4df0-8bc7-b6322ea41ec2") },
                    { new Guid("55f7fcb1-e317-4a1c-a1f8-6a31a99b71c2"), new Guid("9d581bab-6476-4f85-8ad0-79931c753a67"), new Guid("633328ef-6a33-44dc-88b2-934dc60a91ac") },
                    { new Guid("5789fbb3-1a81-4ab7-a42f-83f86d51de65"), new Guid("c176069f-e0e5-456d-854a-a2d9d6fe0854"), new Guid("6724d1cf-0d30-4723-8f61-ddf0174df9f7") },
                    { new Guid("5d07d664-733a-4bf1-935c-d4408de6b3db"), new Guid("bd8dfeb7-5b29-4bc0-a1f8-1fbf4c77ef8f"), new Guid("633328ef-6a33-44dc-88b2-934dc60a91ac") },
                    { new Guid("692d4628-f34f-427a-a1cd-57bfdc735939"), new Guid("9d581bab-6476-4f85-8ad0-79931c753a67"), new Guid("4592ed37-1361-4761-a3dd-3654670006ce") },
                    { new Guid("74466a92-a7f8-4eda-b5de-df6ee2adfc9b"), new Guid("743a791b-0cee-4493-a888-e9e29efbedf7"), new Guid("209f2710-32b9-4fe7-9d04-470c931184a1") },
                    { new Guid("74ef24bf-76f1-48c2-8649-39087a911a75"), new Guid("bd8dfeb7-5b29-4bc0-a1f8-1fbf4c77ef8f"), new Guid("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5") },
                    { new Guid("765f1928-6c50-4dea-b349-252fa42b8237"), new Guid("9d581bab-6476-4f85-8ad0-79931c753a67"), new Guid("e120bec8-c592-47be-98a8-9569bac3b254") },
                    { new Guid("7ea4b98d-84c2-4228-8102-083b577a4d5a"), new Guid("9d581bab-6476-4f85-8ad0-79931c753a67"), new Guid("ec3981b0-c39f-4dfd-ad42-8ca675f8076c") },
                    { new Guid("8153aa67-e783-4b44-a72a-25eaaa63c80c"), new Guid("409911df-3613-49e3-adcb-2305a7bb1683"), new Guid("8c335be4-5cd9-4df0-8bc7-b6322ea41ec2") },
                    { new Guid("89611705-4e59-485d-9a16-94ea9b5854b0"), new Guid("743a791b-0cee-4493-a888-e9e29efbedf7"), new Guid("3e608840-6a94-476e-a147-50e3da35f379") },
                    { new Guid("8c5e2d90-97dc-4257-9bcb-e4091fbd1862"), new Guid("409911df-3613-49e3-adcb-2305a7bb1683"), new Guid("3e608840-6a94-476e-a147-50e3da35f379") },
                    { new Guid("8cc104be-0a52-4651-8267-f96e2403f8e1"), new Guid("c176069f-e0e5-456d-854a-a2d9d6fe0854"), new Guid("209f2710-32b9-4fe7-9d04-470c931184a1") },
                    { new Guid("99219478-639f-4ab4-8377-2c91dc6c89ac"), new Guid("03c6863e-8c30-4087-a211-b72335617a3e"), new Guid("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f") },
                    { new Guid("99afb1e9-d295-48be-ae1b-73ade23df160"), new Guid("03c6863e-8c30-4087-a211-b72335617a3e"), new Guid("8c335be4-5cd9-4df0-8bc7-b6322ea41ec2") },
                    { new Guid("9e840a53-edb7-4f2a-a7f6-166c64225f2f"), new Guid("409911df-3613-49e3-adcb-2305a7bb1683"), new Guid("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8") },
                    { new Guid("9f6dc7a5-3948-4635-8459-5af267ba67f1"), new Guid("743a791b-0cee-4493-a888-e9e29efbedf7"), new Guid("394fed41-77aa-4100-88a4-af5ba7ce87ad") },
                    { new Guid("ab52a5a5-1dee-4ef9-8815-a65077aa2e20"), new Guid("9d581bab-6476-4f85-8ad0-79931c753a67"), new Guid("8c335be4-5cd9-4df0-8bc7-b6322ea41ec2") },
                    { new Guid("ae74ab91-7a7e-4959-9603-b216c3673d6d"), new Guid("409911df-3613-49e3-adcb-2305a7bb1683"), new Guid("633328ef-6a33-44dc-88b2-934dc60a91ac") },
                    { new Guid("aed6f03a-a590-4b33-8e7d-4c9b5e1e2380"), new Guid("03c6863e-8c30-4087-a211-b72335617a3e"), new Guid("6724d1cf-0d30-4723-8f61-ddf0174df9f7") },
                    { new Guid("b6dc4307-e8d7-4c83-a05f-e4b85196fbd7"), new Guid("743a791b-0cee-4493-a888-e9e29efbedf7"), new Guid("4592ed37-1361-4761-a3dd-3654670006ce") },
                    { new Guid("b7b1dc7d-0362-4fa7-b99c-9720916db804"), new Guid("c176069f-e0e5-456d-854a-a2d9d6fe0854"), new Guid("3e608840-6a94-476e-a147-50e3da35f379") },
                    { new Guid("b85c090f-7b5b-46b5-90d4-97a515637562"), new Guid("9d581bab-6476-4f85-8ad0-79931c753a67"), new Guid("394fed41-77aa-4100-88a4-af5ba7ce87ad") },
                    { new Guid("bcb09ffe-983b-4f38-98db-5c9155f151b5"), new Guid("c176069f-e0e5-456d-854a-a2d9d6fe0854"), new Guid("4592ed37-1361-4761-a3dd-3654670006ce") },
                    { new Guid("c3814f2d-4edc-4c72-93ca-fe1671f29e29"), new Guid("409911df-3613-49e3-adcb-2305a7bb1683"), new Guid("4592ed37-1361-4761-a3dd-3654670006ce") },
                    { new Guid("cc0e4ff5-25c4-4ab4-bc5e-713d11c9a05d"), new Guid("9d581bab-6476-4f85-8ad0-79931c753a67"), new Guid("6724d1cf-0d30-4723-8f61-ddf0174df9f7") },
                    { new Guid("cda80bae-5eba-48f1-a0e3-7fbc1da06097"), new Guid("03c6863e-8c30-4087-a211-b72335617a3e"), new Guid("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5") },
                    { new Guid("cf697b54-d82e-4545-9b98-341cde426266"), new Guid("bd8dfeb7-5b29-4bc0-a1f8-1fbf4c77ef8f"), new Guid("ec3981b0-c39f-4dfd-ad42-8ca675f8076c") },
                    { new Guid("d1fda286-1fa5-49b9-865f-0aacf27c3416"), new Guid("409911df-3613-49e3-adcb-2305a7bb1683"), new Guid("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f") },
                    { new Guid("d424d198-05be-42aa-a6d6-d14f4addd29f"), new Guid("409911df-3613-49e3-adcb-2305a7bb1683"), new Guid("394fed41-77aa-4100-88a4-af5ba7ce87ad") },
                    { new Guid("d57bb32f-0e94-493f-9801-79bb255dd1ca"), new Guid("9c397b76-f1b3-41fa-8864-ae1ea121e213"), new Guid("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5") },
                    { new Guid("d5ab034e-5a29-4169-a2c9-afce3e99a2f2"), new Guid("9d581bab-6476-4f85-8ad0-79931c753a67"), new Guid("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5") },
                    { new Guid("daa44530-bd08-4ec2-84c3-fdfcb1f1ec19"), new Guid("9d581bab-6476-4f85-8ad0-79931c753a67"), new Guid("3e608840-6a94-476e-a147-50e3da35f379") },
                    { new Guid("dbc2d921-fdbd-4eb4-af16-5ffcdbe8eaa0"), new Guid("bd8dfeb7-5b29-4bc0-a1f8-1fbf4c77ef8f"), new Guid("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8") },
                    { new Guid("dda5cdb3-9ecd-4cfa-a614-ad54791a36ba"), new Guid("c176069f-e0e5-456d-854a-a2d9d6fe0854"), new Guid("ec3981b0-c39f-4dfd-ad42-8ca675f8076c") },
                    { new Guid("e2bdbb25-326f-461a-95c3-b64e581ab82e"), new Guid("409911df-3613-49e3-adcb-2305a7bb1683"), new Guid("209f2710-32b9-4fe7-9d04-470c931184a1") },
                    { new Guid("e84c063a-5aa9-4737-bb1d-8e7d4e6e3939"), new Guid("9d581bab-6476-4f85-8ad0-79931c753a67"), new Guid("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f") },
                    { new Guid("ea570134-3454-437b-95f8-56153f9fe375"), new Guid("c176069f-e0e5-456d-854a-a2d9d6fe0854"), new Guid("394fed41-77aa-4100-88a4-af5ba7ce87ad") },
                    { new Guid("ebd03b1a-b2e9-4f04-a8fb-19623811fef2"), new Guid("409911df-3613-49e3-adcb-2305a7bb1683"), new Guid("ec3981b0-c39f-4dfd-ad42-8ca675f8076c") },
                    { new Guid("fc45750e-4725-4915-bd58-d34f4a7f0f87"), new Guid("c176069f-e0e5-456d-854a-a2d9d6fe0854"), new Guid("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f") }
                });

            migrationBuilder.InsertData(
                table: "ProductImages",
                columns: new[] { "ProductImageID", "ImageID", "ProductID" },
                values: new object[,]
                {
                    { new Guid("001224d8-b526-45c8-be03-169538b4bbcf"), new Guid("ea3065d9-43de-424c-8f19-d8b8c64a421e"), new Guid("6724d1cf-0d30-4723-8f61-ddf0174df9f7") },
                    { new Guid("0187f610-1e7d-4d7a-94c4-9b77367c8e87"), new Guid("ea3065d9-43de-424c-8f19-d8b8c64a421e"), new Guid("3e608840-6a94-476e-a147-50e3da35f379") },
                    { new Guid("26e83307-f4e7-497a-a312-d50c7fd9952a"), new Guid("8cf79865-6503-425c-a82e-282269b19189"), new Guid("394fed41-77aa-4100-88a4-af5ba7ce87ad") },
                    { new Guid("2e50a50e-072c-4f3d-bc87-fefc61688a3c"), new Guid("8cf79865-6503-425c-a82e-282269b19189"), new Guid("3e608840-6a94-476e-a147-50e3da35f379") },
                    { new Guid("33d0c366-90ee-43aa-985f-b9754a47c796"), new Guid("ea3065d9-43de-424c-8f19-d8b8c64a421e"), new Guid("e120bec8-c592-47be-98a8-9569bac3b254") },
                    { new Guid("33e260b6-d688-4a6f-b570-a464668cb606"), new Guid("ea3065d9-43de-424c-8f19-d8b8c64a421e"), new Guid("394fed41-77aa-4100-88a4-af5ba7ce87ad") },
                    { new Guid("42838187-83e7-403c-87c7-554d2bc333e4"), new Guid("8cf79865-6503-425c-a82e-282269b19189"), new Guid("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5") },
                    { new Guid("471fad78-69c1-4b10-8f27-c72e7d12374b"), new Guid("ea3065d9-43de-424c-8f19-d8b8c64a421e"), new Guid("8c335be4-5cd9-4df0-8bc7-b6322ea41ec2") },
                    { new Guid("58fc2291-a245-4b18-9184-1a3ff83776e8"), new Guid("8cf79865-6503-425c-a82e-282269b19189"), new Guid("6724d1cf-0d30-4723-8f61-ddf0174df9f7") },
                    { new Guid("6f1f8d69-6177-483b-9d11-285c8d6ddad7"), new Guid("8cf79865-6503-425c-a82e-282269b19189"), new Guid("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8") },
                    { new Guid("734456c7-f9f9-4d47-ab5b-f62db4f54d39"), new Guid("ea3065d9-43de-424c-8f19-d8b8c64a421e"), new Guid("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f") },
                    { new Guid("8cf2d30b-4f89-4d26-a8aa-2b814307d868"), new Guid("8cf79865-6503-425c-a82e-282269b19189"), new Guid("8c335be4-5cd9-4df0-8bc7-b6322ea41ec2") },
                    { new Guid("934a5089-49f6-4f78-b186-5def07579a48"), new Guid("ea3065d9-43de-424c-8f19-d8b8c64a421e"), new Guid("4592ed37-1361-4761-a3dd-3654670006ce") },
                    { new Guid("981c227f-521f-4c12-9a68-4c46e098a204"), new Guid("8cf79865-6503-425c-a82e-282269b19189"), new Guid("209f2710-32b9-4fe7-9d04-470c931184a1") },
                    { new Guid("98d7cc31-9c38-4e42-bb40-6c52ef3aecc3"), new Guid("8cf79865-6503-425c-a82e-282269b19189"), new Guid("633328ef-6a33-44dc-88b2-934dc60a91ac") },
                    { new Guid("9adcecce-48b9-4d43-b368-c1f39b8b408c"), new Guid("ea3065d9-43de-424c-8f19-d8b8c64a421e"), new Guid("633328ef-6a33-44dc-88b2-934dc60a91ac") },
                    { new Guid("a94c2454-0981-4a9b-8f27-61f0972b756f"), new Guid("8cf79865-6503-425c-a82e-282269b19189"), new Guid("ec3981b0-c39f-4dfd-ad42-8ca675f8076c") },
                    { new Guid("b36f556c-c106-4a1c-b7c5-e0fda7c613dd"), new Guid("ea3065d9-43de-424c-8f19-d8b8c64a421e"), new Guid("209f2710-32b9-4fe7-9d04-470c931184a1") },
                    { new Guid("b7b2b874-12fc-455a-a935-b8f9e30a88cf"), new Guid("8cf79865-6503-425c-a82e-282269b19189"), new Guid("e120bec8-c592-47be-98a8-9569bac3b254") },
                    { new Guid("c06962e4-d844-4284-902e-d7002c9c7e24"), new Guid("8cf79865-6503-425c-a82e-282269b19189"), new Guid("4592ed37-1361-4761-a3dd-3654670006ce") },
                    { new Guid("c140c71d-76e9-42e6-b89b-1f0bf1722836"), new Guid("8cf79865-6503-425c-a82e-282269b19189"), new Guid("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f") },
                    { new Guid("cc7ac2b0-1661-472f-b4e6-2b007c791458"), new Guid("ea3065d9-43de-424c-8f19-d8b8c64a421e"), new Guid("ec3981b0-c39f-4dfd-ad42-8ca675f8076c") },
                    { new Guid("d5600607-17af-4759-bc77-998588a77674"), new Guid("ea3065d9-43de-424c-8f19-d8b8c64a421e"), new Guid("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5") },
                    { new Guid("fc977bda-662a-47f5-9226-3cbcfb3f0f2f"), new Guid("ea3065d9-43de-424c-8f19-d8b8c64a421e"), new Guid("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8") }
                });

            migrationBuilder.InsertData(
                table: "ProductSizes",
                columns: new[] { "ProductSizeID", "ProductID", "SizeID" },
                values: new object[,]
                {
                    { new Guid("0d0b0370-389f-477c-97d5-bbca942d47a1"), new Guid("209f2710-32b9-4fe7-9d04-470c931184a1"), new Guid("9d7ff143-3e26-40ae-ab00-2fead9950a03") },
                    { new Guid("0ef2ace2-b28f-4e54-9754-318eaf86097c"), new Guid("209f2710-32b9-4fe7-9d04-470c931184a1"), new Guid("d72207b4-36fc-49e0-a66a-a7fef8aff5de") },
                    { new Guid("13b074de-9c04-4177-b499-eae8f597042d"), new Guid("6724d1cf-0d30-4723-8f61-ddf0174df9f7"), new Guid("737cec84-034f-4e2d-b5d0-23c6ee424c66") },
                    { new Guid("145e5379-901b-4f82-ba2c-c4c26d69ba04"), new Guid("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f"), new Guid("9d7ff143-3e26-40ae-ab00-2fead9950a03") },
                    { new Guid("19c6d665-536f-40fc-b7b0-48cb32ceb37a"), new Guid("209f2710-32b9-4fe7-9d04-470c931184a1"), new Guid("462e8f20-0c38-4c39-b39e-b2d5d651b24e") },
                    { new Guid("1b02e9f6-598e-4771-82d9-620f3cfa5dc5"), new Guid("209f2710-32b9-4fe7-9d04-470c931184a1"), new Guid("737cec84-034f-4e2d-b5d0-23c6ee424c66") },
                    { new Guid("1bce4dc6-2823-4edd-8936-9ca7f217ba8e"), new Guid("633328ef-6a33-44dc-88b2-934dc60a91ac"), new Guid("462e8f20-0c38-4c39-b39e-b2d5d651b24e") },
                    { new Guid("212f9fa4-f309-4ada-8298-1afbcdb35a4b"), new Guid("4592ed37-1361-4761-a3dd-3654670006ce"), new Guid("d72207b4-36fc-49e0-a66a-a7fef8aff5de") },
                    { new Guid("24293013-8815-4946-81bf-0fd40fe6dc37"), new Guid("e120bec8-c592-47be-98a8-9569bac3b254"), new Guid("d72207b4-36fc-49e0-a66a-a7fef8aff5de") },
                    { new Guid("291955d0-75c4-41ee-a4c0-9a44462e0d4f"), new Guid("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5"), new Guid("462e8f20-0c38-4c39-b39e-b2d5d651b24e") },
                    { new Guid("2bd7e010-e0a8-46d8-af1d-c45ad75071e0"), new Guid("3e608840-6a94-476e-a147-50e3da35f379"), new Guid("d72207b4-36fc-49e0-a66a-a7fef8aff5de") },
                    { new Guid("30f196af-0b30-4306-b91d-955bc54d31d1"), new Guid("3e608840-6a94-476e-a147-50e3da35f379"), new Guid("9d7ff143-3e26-40ae-ab00-2fead9950a03") },
                    { new Guid("3799d7e2-ed99-4cd4-9088-e86883cc776a"), new Guid("394fed41-77aa-4100-88a4-af5ba7ce87ad"), new Guid("d72207b4-36fc-49e0-a66a-a7fef8aff5de") },
                    { new Guid("3bd2a84d-4c5c-427d-a636-a8b1a132b639"), new Guid("394fed41-77aa-4100-88a4-af5ba7ce87ad"), new Guid("737cec84-034f-4e2d-b5d0-23c6ee424c66") },
                    { new Guid("3e75d51a-9fed-489c-8cfb-7eb4df1418bb"), new Guid("e120bec8-c592-47be-98a8-9569bac3b254"), new Guid("9d7ff143-3e26-40ae-ab00-2fead9950a03") },
                    { new Guid("4250a855-8524-449f-824f-b872fdff8c06"), new Guid("633328ef-6a33-44dc-88b2-934dc60a91ac"), new Guid("7a1f6254-c77c-4a22-86a9-a023b98dbdf8") },
                    { new Guid("4322664c-2d02-4c21-9aa1-c7f8e514fab3"), new Guid("ec3981b0-c39f-4dfd-ad42-8ca675f8076c"), new Guid("d72207b4-36fc-49e0-a66a-a7fef8aff5de") },
                    { new Guid("4502c1e8-f95e-44e8-bbc4-2a243e185b25"), new Guid("e120bec8-c592-47be-98a8-9569bac3b254"), new Guid("462e8f20-0c38-4c39-b39e-b2d5d651b24e") },
                    { new Guid("48067737-0953-4802-b78a-2ef384cc27c6"), new Guid("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5"), new Guid("d72207b4-36fc-49e0-a66a-a7fef8aff5de") },
                    { new Guid("48509749-f65c-426b-a327-8a51f1553d3a"), new Guid("6724d1cf-0d30-4723-8f61-ddf0174df9f7"), new Guid("9d7ff143-3e26-40ae-ab00-2fead9950a03") },
                    { new Guid("53a9fcf5-a42c-4a08-8ce2-c06d5b6b8de6"), new Guid("3e608840-6a94-476e-a147-50e3da35f379"), new Guid("737cec84-034f-4e2d-b5d0-23c6ee424c66") },
                    { new Guid("54a3f14d-1ff3-4197-84e2-ee0a62bae2d4"), new Guid("8c335be4-5cd9-4df0-8bc7-b6322ea41ec2"), new Guid("9d7ff143-3e26-40ae-ab00-2fead9950a03") },
                    { new Guid("57157e5d-c2bd-4451-a2bc-37644f1ab48b"), new Guid("ec3981b0-c39f-4dfd-ad42-8ca675f8076c"), new Guid("7a1f6254-c77c-4a22-86a9-a023b98dbdf8") },
                    { new Guid("5ea09de0-d0cd-46eb-af06-fcd29c4bd941"), new Guid("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8"), new Guid("9d7ff143-3e26-40ae-ab00-2fead9950a03") },
                    { new Guid("5fde36f1-b56d-4897-8d79-b44b601964c5"), new Guid("8c335be4-5cd9-4df0-8bc7-b6322ea41ec2"), new Guid("737cec84-034f-4e2d-b5d0-23c6ee424c66") },
                    { new Guid("79889852-efe4-498f-aa93-bc4bac94f018"), new Guid("4592ed37-1361-4761-a3dd-3654670006ce"), new Guid("7a1f6254-c77c-4a22-86a9-a023b98dbdf8") },
                    { new Guid("8528d9ec-d834-47a5-a10c-9ef5cb3eda73"), new Guid("e120bec8-c592-47be-98a8-9569bac3b254"), new Guid("7a1f6254-c77c-4a22-86a9-a023b98dbdf8") },
                    { new Guid("87dd9531-d110-46da-ae61-f6f1f84dd9c7"), new Guid("ec3981b0-c39f-4dfd-ad42-8ca675f8076c"), new Guid("9d7ff143-3e26-40ae-ab00-2fead9950a03") },
                    { new Guid("8eb83e1f-265c-4c69-bbf1-995e19bd7bde"), new Guid("4592ed37-1361-4761-a3dd-3654670006ce"), new Guid("737cec84-034f-4e2d-b5d0-23c6ee424c66") },
                    { new Guid("93545a7a-8dcf-4361-a1a7-2426afbe093b"), new Guid("633328ef-6a33-44dc-88b2-934dc60a91ac"), new Guid("737cec84-034f-4e2d-b5d0-23c6ee424c66") },
                    { new Guid("9452d486-0a30-4639-928c-71a7db544df2"), new Guid("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f"), new Guid("d72207b4-36fc-49e0-a66a-a7fef8aff5de") },
                    { new Guid("95aa5c01-fcd3-4560-b72c-a64af6c89f18"), new Guid("633328ef-6a33-44dc-88b2-934dc60a91ac"), new Guid("d72207b4-36fc-49e0-a66a-a7fef8aff5de") },
                    { new Guid("9648ccf7-fecc-49ba-ba2d-12d22479f16a"), new Guid("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8"), new Guid("d72207b4-36fc-49e0-a66a-a7fef8aff5de") },
                    { new Guid("a40008e5-5a55-4143-a9e5-e2f6b41a244c"), new Guid("4592ed37-1361-4761-a3dd-3654670006ce"), new Guid("462e8f20-0c38-4c39-b39e-b2d5d651b24e") },
                    { new Guid("a43cbe51-b9db-494e-87ae-017db165a50a"), new Guid("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5"), new Guid("7a1f6254-c77c-4a22-86a9-a023b98dbdf8") },
                    { new Guid("b35ecf73-609b-42be-bbca-9acf24466f8c"), new Guid("8c335be4-5cd9-4df0-8bc7-b6322ea41ec2"), new Guid("462e8f20-0c38-4c39-b39e-b2d5d651b24e") },
                    { new Guid("ba08194d-e8fc-4c2c-ac61-a9df468dc4b5"), new Guid("8c335be4-5cd9-4df0-8bc7-b6322ea41ec2"), new Guid("d72207b4-36fc-49e0-a66a-a7fef8aff5de") },
                    { new Guid("bd552716-ac80-44c2-a7d6-330a4ea9b152"), new Guid("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f"), new Guid("7a1f6254-c77c-4a22-86a9-a023b98dbdf8") },
                    { new Guid("cbdbd37d-4730-4cb9-a560-b7b6b6b4736b"), new Guid("633328ef-6a33-44dc-88b2-934dc60a91ac"), new Guid("9d7ff143-3e26-40ae-ab00-2fead9950a03") },
                    { new Guid("cbe609c4-9771-4ce8-a3e1-e656c90e96a0"), new Guid("ec3981b0-c39f-4dfd-ad42-8ca675f8076c"), new Guid("737cec84-034f-4e2d-b5d0-23c6ee424c66") },
                    { new Guid("cd4bb8d0-4c03-42da-98b6-b5f856757b64"), new Guid("3e608840-6a94-476e-a147-50e3da35f379"), new Guid("7a1f6254-c77c-4a22-86a9-a023b98dbdf8") },
                    { new Guid("d0d046c2-344e-43c3-986f-7306f7a6f600"), new Guid("394fed41-77aa-4100-88a4-af5ba7ce87ad"), new Guid("7a1f6254-c77c-4a22-86a9-a023b98dbdf8") },
                    { new Guid("d0eb6917-63f4-4ee8-be78-4243d400b140"), new Guid("4592ed37-1361-4761-a3dd-3654670006ce"), new Guid("9d7ff143-3e26-40ae-ab00-2fead9950a03") },
                    { new Guid("d5cad366-0c0d-4713-9c16-8c64984d1b3f"), new Guid("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5"), new Guid("737cec84-034f-4e2d-b5d0-23c6ee424c66") },
                    { new Guid("d7a24793-a1c7-4a2e-9934-3af3589da911"), new Guid("6724d1cf-0d30-4723-8f61-ddf0174df9f7"), new Guid("7a1f6254-c77c-4a22-86a9-a023b98dbdf8") },
                    { new Guid("d9bd121c-a8fe-42ff-aacb-c7e01dd0af23"), new Guid("3e608840-6a94-476e-a147-50e3da35f379"), new Guid("462e8f20-0c38-4c39-b39e-b2d5d651b24e") },
                    { new Guid("da49590c-20f0-4cd1-98c7-35d49a5f5fbe"), new Guid("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8"), new Guid("7a1f6254-c77c-4a22-86a9-a023b98dbdf8") },
                    { new Guid("e1752815-9d02-4be4-8c4c-3b9570a3d1db"), new Guid("e120bec8-c592-47be-98a8-9569bac3b254"), new Guid("737cec84-034f-4e2d-b5d0-23c6ee424c66") },
                    { new Guid("e39a5573-830c-4bdc-a501-5dd5c1e50363"), new Guid("8c335be4-5cd9-4df0-8bc7-b6322ea41ec2"), new Guid("7a1f6254-c77c-4a22-86a9-a023b98dbdf8") },
                    { new Guid("e851496e-f656-4270-af7b-a620a6faac6b"), new Guid("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5"), new Guid("9d7ff143-3e26-40ae-ab00-2fead9950a03") },
                    { new Guid("eb4cfeb9-e25a-40ef-af91-aa11d426c5a9"), new Guid("394fed41-77aa-4100-88a4-af5ba7ce87ad"), new Guid("9d7ff143-3e26-40ae-ab00-2fead9950a03") },
                    { new Guid("ecb17040-331e-4832-aaed-92e1382ec40c"), new Guid("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f"), new Guid("737cec84-034f-4e2d-b5d0-23c6ee424c66") },
                    { new Guid("f06ca672-712a-4e12-bef9-4384729eca5d"), new Guid("ec3981b0-c39f-4dfd-ad42-8ca675f8076c"), new Guid("462e8f20-0c38-4c39-b39e-b2d5d651b24e") },
                    { new Guid("f0e61410-453a-4cf1-890f-022ad2ea210b"), new Guid("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f"), new Guid("462e8f20-0c38-4c39-b39e-b2d5d651b24e") },
                    { new Guid("f2383c82-5ff2-44cb-8e76-37df31b6e87d"), new Guid("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8"), new Guid("737cec84-034f-4e2d-b5d0-23c6ee424c66") },
                    { new Guid("f376173c-f314-49e1-a03f-a49dcfd15da9"), new Guid("6724d1cf-0d30-4723-8f61-ddf0174df9f7"), new Guid("462e8f20-0c38-4c39-b39e-b2d5d651b24e") },
                    { new Guid("f38bfb74-4279-44d0-b4ee-8bf3209bfdb1"), new Guid("209f2710-32b9-4fe7-9d04-470c931184a1"), new Guid("7a1f6254-c77c-4a22-86a9-a023b98dbdf8") },
                    { new Guid("f7ad6421-47cf-4389-a1f5-79b7bc5fdd05"), new Guid("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8"), new Guid("462e8f20-0c38-4c39-b39e-b2d5d651b24e") },
                    { new Guid("fa863bea-3018-467b-9673-d345f4552dbb"), new Guid("6724d1cf-0d30-4723-8f61-ddf0174df9f7"), new Guid("d72207b4-36fc-49e0-a66a-a7fef8aff5de") },
                    { new Guid("fb9887b2-cd21-403e-aed5-27f9da0ddf19"), new Guid("394fed41-77aa-4100-88a4-af5ba7ce87ad"), new Guid("462e8f20-0c38-4c39-b39e-b2d5d651b24e") }
                });

            migrationBuilder.InsertData(
                table: "ProductTags",
                columns: new[] { "ProductTagID", "ProductID", "TagID" },
                values: new object[,]
                {
                    { new Guid("01199077-72d8-493c-b225-4f07a8531985"), new Guid("3e608840-6a94-476e-a147-50e3da35f379"), new Guid("42ce8eb8-ba9f-4708-aac8-e2f8159bf9d3") },
                    { new Guid("0618c8fa-8212-412c-bc70-5fc076d04467"), new Guid("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f"), new Guid("bafb4114-a474-42c4-8088-9b0002aae502") },
                    { new Guid("105f6aae-fe0b-4c25-a2bf-f6cb4ffcfc24"), new Guid("ddb9e337-b2e4-41fa-a97e-33bb39cbe80f"), new Guid("4a3914f7-deb4-4265-b869-57cc712f6896") },
                    { new Guid("27551eda-897f-451d-9397-9e56e2d1e0c9"), new Guid("ec3981b0-c39f-4dfd-ad42-8ca675f8076c"), new Guid("bafb4114-a474-42c4-8088-9b0002aae502") },
                    { new Guid("2980e04f-b404-48cb-bccd-1126dfb3bfa4"), new Guid("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8"), new Guid("5f9499ee-8cdb-457a-b09d-95c5b84cb379") },
                    { new Guid("3a15f74d-e3b2-4d29-8e02-2cb107446df7"), new Guid("394fed41-77aa-4100-88a4-af5ba7ce87ad"), new Guid("8a6c018f-6b1c-4bca-beac-85dc2249748d") },
                    { new Guid("3e0ca998-dbd3-4117-94b2-a72c56fcde57"), new Guid("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5"), new Guid("bafb4114-a474-42c4-8088-9b0002aae502") },
                    { new Guid("43e08cbd-9889-4ca0-b008-76050bf08c0b"), new Guid("6724d1cf-0d30-4723-8f61-ddf0174df9f7"), new Guid("971bbffb-1719-4e6e-89da-9ab5ab77a287") },
                    { new Guid("51d102a9-5266-4295-b13a-56ff657adb4e"), new Guid("4592ed37-1361-4761-a3dd-3654670006ce"), new Guid("bafb4114-a474-42c4-8088-9b0002aae502") },
                    { new Guid("5f6e6f1e-a9fd-4dca-ad36-8a6a03c4a9e3"), new Guid("e120bec8-c592-47be-98a8-9569bac3b254"), new Guid("42ce8eb8-ba9f-4708-aac8-e2f8159bf9d3") },
                    { new Guid("6bc82d18-569a-4f99-921d-83d7bf3babcb"), new Guid("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8"), new Guid("bafb4114-a474-42c4-8088-9b0002aae502") },
                    { new Guid("75543155-0c52-463e-a5e1-c8701f9b1ccf"), new Guid("3e70c707-aee2-404b-a2fc-95a2d2c8c1b5"), new Guid("5f9499ee-8cdb-457a-b09d-95c5b84cb379") },
                    { new Guid("780531ea-11d4-416d-a69e-7a413f582788"), new Guid("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8"), new Guid("8a6c018f-6b1c-4bca-beac-85dc2249748d") },
                    { new Guid("89993e69-3de0-45bb-8b0e-85e840eef6a3"), new Guid("633328ef-6a33-44dc-88b2-934dc60a91ac"), new Guid("4a3914f7-deb4-4265-b869-57cc712f6896") },
                    { new Guid("8fbfe38d-a15b-49c4-a2f4-88fabc8882aa"), new Guid("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8"), new Guid("4a3914f7-deb4-4265-b869-57cc712f6896") },
                    { new Guid("97a23c98-809e-4119-a455-5a915dc60175"), new Guid("ec3981b0-c39f-4dfd-ad42-8ca675f8076c"), new Guid("5f9499ee-8cdb-457a-b09d-95c5b84cb379") },
                    { new Guid("aab144a9-f534-4ac8-a74a-a8bdd2e4d5ac"), new Guid("8c335be4-5cd9-4df0-8bc7-b6322ea41ec2"), new Guid("42ce8eb8-ba9f-4708-aac8-e2f8159bf9d3") },
                    { new Guid("b7a21939-4237-4a21-b9be-a178cac80016"), new Guid("ec3981b0-c39f-4dfd-ad42-8ca675f8076c"), new Guid("8a6c018f-6b1c-4bca-beac-85dc2249748d") },
                    { new Guid("d9dba67b-19bd-4154-a343-28fce5d77b02"), new Guid("209f2710-32b9-4fe7-9d04-470c931184a1"), new Guid("4a3914f7-deb4-4265-b869-57cc712f6896") },
                    { new Guid("dc3b2b36-ff63-4922-8763-23d6e59172f9"), new Guid("1f8ba608-64b7-46f5-9501-fe5d5c91dcc8"), new Guid("971bbffb-1719-4e6e-89da-9ab5ab77a287") },
                    { new Guid("ea56551b-278f-439a-9027-fc5f6166df2b"), new Guid("394fed41-77aa-4100-88a4-af5ba7ce87ad"), new Guid("971bbffb-1719-4e6e-89da-9ab5ab77a287") }
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
                name: "IX_ProductSizes_ProductID",
                table: "ProductSizes",
                column: "ProductID");

            migrationBuilder.CreateIndex(
                name: "IX_ProductSizes_SizeID",
                table: "ProductSizes",
                column: "SizeID");

            migrationBuilder.CreateIndex(
                name: "IX_ProductTags_ProductID",
                table: "ProductTags",
                column: "ProductID");

            migrationBuilder.CreateIndex(
                name: "IX_ProductTags_TagID",
                table: "ProductTags",
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
                name: "ProductTags");

            migrationBuilder.DropTable(
                name: "Categories");

            migrationBuilder.DropTable(
                name: "Colors");

            migrationBuilder.DropTable(
                name: "Images");

            migrationBuilder.DropTable(
                name: "Sizes");

            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DropTable(
                name: "Tags");
        }
    }
}
