using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebApi.Migrations.ProductDb
{
    /// <inheritdoc />
    public partial class ProductCreatedDateaddedandProductTagchangedtoCategoryTag : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProductTags_ProductTags_ProductTagEntityProductTagID",
                table: "ProductTags");

            migrationBuilder.RenameColumn(
                name: "ProductTagEntityProductTagID",
                table: "ProductTags",
                newName: "CategoryEntityCategoryID");

            migrationBuilder.RenameColumn(
                name: "ProductID",
                table: "ProductTags",
                newName: "CategoryID");

            migrationBuilder.RenameColumn(
                name: "ProductTagID",
                table: "ProductTags",
                newName: "CategoryTagID");

            migrationBuilder.RenameIndex(
                name: "IX_ProductTags_ProductTagEntityProductTagID",
                table: "ProductTags",
                newName: "IX_ProductTags_CategoryEntityCategoryID");

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedDate",
                table: "Products",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddForeignKey(
                name: "FK_ProductTags_Categories_CategoryEntityCategoryID",
                table: "ProductTags",
                column: "CategoryEntityCategoryID",
                principalTable: "Categories",
                principalColumn: "CategoryID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProductTags_Categories_CategoryEntityCategoryID",
                table: "ProductTags");

            migrationBuilder.DropColumn(
                name: "CreatedDate",
                table: "Products");

            migrationBuilder.RenameColumn(
                name: "CategoryID",
                table: "ProductTags",
                newName: "ProductID");

            migrationBuilder.RenameColumn(
                name: "CategoryEntityCategoryID",
                table: "ProductTags",
                newName: "ProductTagEntityProductTagID");

            migrationBuilder.RenameColumn(
                name: "CategoryTagID",
                table: "ProductTags",
                newName: "ProductTagID");

            migrationBuilder.RenameIndex(
                name: "IX_ProductTags_CategoryEntityCategoryID",
                table: "ProductTags",
                newName: "IX_ProductTags_ProductTagEntityProductTagID");

            migrationBuilder.AddForeignKey(
                name: "FK_ProductTags_ProductTags_ProductTagEntityProductTagID",
                table: "ProductTags",
                column: "ProductTagEntityProductTagID",
                principalTable: "ProductTags",
                principalColumn: "ProductTagID");
        }
    }
}
