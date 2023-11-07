using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebApi.Migrations.ProductDb
{
    /// <inheritdoc />
    public partial class smallfixesinentities : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProductTags_Categories_CategoryEntityCategoryID",
                table: "ProductTags");

            migrationBuilder.DropForeignKey(
                name: "FK_ProductTags_Products_ProductEntityProductID",
                table: "ProductTags");

            migrationBuilder.DropForeignKey(
                name: "FK_ProductTags_Tags_TagEntityTagID",
                table: "ProductTags");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ProductTags",
                table: "ProductTags");

            migrationBuilder.RenameTable(
                name: "ProductTags",
                newName: "CategoryTags");

            migrationBuilder.RenameIndex(
                name: "IX_ProductTags_TagEntityTagID",
                table: "CategoryTags",
                newName: "IX_CategoryTags_TagEntityTagID");

            migrationBuilder.RenameIndex(
                name: "IX_ProductTags_ProductEntityProductID",
                table: "CategoryTags",
                newName: "IX_CategoryTags_ProductEntityProductID");

            migrationBuilder.RenameIndex(
                name: "IX_ProductTags_CategoryEntityCategoryID",
                table: "CategoryTags",
                newName: "IX_CategoryTags_CategoryEntityCategoryID");

            migrationBuilder.AlterColumn<decimal>(
                name: "SalePrice",
                table: "Products",
                type: "decimal(18,2)",
                nullable: true,
                oldClrType: typeof(decimal),
                oldType: "decimal(18,2)");

            migrationBuilder.AddColumn<string>(
                name: "UserID",
                table: "ProductReviews",
                type: "nvarchar(450)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AlterColumn<string>(
                name: "ImageName",
                table: "Images",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CategoryTags",
                table: "CategoryTags",
                column: "CategoryTagID");

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

            migrationBuilder.CreateIndex(
                name: "IX_ProductReviews_UserID",
                table: "ProductReviews",
                column: "UserID");

            migrationBuilder.AddForeignKey(
                name: "FK_CategoryTags_Categories_CategoryEntityCategoryID",
                table: "CategoryTags",
                column: "CategoryEntityCategoryID",
                principalTable: "Categories",
                principalColumn: "CategoryID");

            migrationBuilder.AddForeignKey(
                name: "FK_CategoryTags_Products_ProductEntityProductID",
                table: "CategoryTags",
                column: "ProductEntityProductID",
                principalTable: "Products",
                principalColumn: "ProductID");

            migrationBuilder.AddForeignKey(
                name: "FK_CategoryTags_Tags_TagEntityTagID",
                table: "CategoryTags",
                column: "TagEntityTagID",
                principalTable: "Tags",
                principalColumn: "TagID");

            migrationBuilder.AddForeignKey(
                name: "FK_ProductReviews_IdentityUser_UserID",
                table: "ProductReviews",
                column: "UserID",
                principalTable: "IdentityUser",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CategoryTags_Categories_CategoryEntityCategoryID",
                table: "CategoryTags");

            migrationBuilder.DropForeignKey(
                name: "FK_CategoryTags_Products_ProductEntityProductID",
                table: "CategoryTags");

            migrationBuilder.DropForeignKey(
                name: "FK_CategoryTags_Tags_TagEntityTagID",
                table: "CategoryTags");

            migrationBuilder.DropForeignKey(
                name: "FK_ProductReviews_IdentityUser_UserID",
                table: "ProductReviews");

            migrationBuilder.DropTable(
                name: "IdentityUser");

            migrationBuilder.DropIndex(
                name: "IX_ProductReviews_UserID",
                table: "ProductReviews");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CategoryTags",
                table: "CategoryTags");

            migrationBuilder.DropColumn(
                name: "UserID",
                table: "ProductReviews");

            migrationBuilder.RenameTable(
                name: "CategoryTags",
                newName: "ProductTags");

            migrationBuilder.RenameIndex(
                name: "IX_CategoryTags_TagEntityTagID",
                table: "ProductTags",
                newName: "IX_ProductTags_TagEntityTagID");

            migrationBuilder.RenameIndex(
                name: "IX_CategoryTags_ProductEntityProductID",
                table: "ProductTags",
                newName: "IX_ProductTags_ProductEntityProductID");

            migrationBuilder.RenameIndex(
                name: "IX_CategoryTags_CategoryEntityCategoryID",
                table: "ProductTags",
                newName: "IX_ProductTags_CategoryEntityCategoryID");

            migrationBuilder.AlterColumn<decimal>(
                name: "SalePrice",
                table: "Products",
                type: "decimal(18,2)",
                nullable: false,
                defaultValue: 0m,
                oldClrType: typeof(decimal),
                oldType: "decimal(18,2)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "ImageName",
                table: "Images",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_ProductTags",
                table: "ProductTags",
                column: "CategoryTagID");

            migrationBuilder.AddForeignKey(
                name: "FK_ProductTags_Categories_CategoryEntityCategoryID",
                table: "ProductTags",
                column: "CategoryEntityCategoryID",
                principalTable: "Categories",
                principalColumn: "CategoryID");

            migrationBuilder.AddForeignKey(
                name: "FK_ProductTags_Products_ProductEntityProductID",
                table: "ProductTags",
                column: "ProductEntityProductID",
                principalTable: "Products",
                principalColumn: "ProductID");

            migrationBuilder.AddForeignKey(
                name: "FK_ProductTags_Tags_TagEntityTagID",
                table: "ProductTags",
                column: "TagEntityTagID",
                principalTable: "Tags",
                principalColumn: "TagID");
        }
    }
}
