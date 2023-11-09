﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebApi.Migrations
{
    /// <inheritdoc />
    public partial class addedlocationtoIU : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Addresses_AspNetUsers_UserId1",
                table: "Addresses");

            migrationBuilder.DropIndex(
                name: "IX_Addresses_UserId1",
                table: "Addresses");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "Addresses");

            migrationBuilder.AddColumn<string>(
                name: "UserModelId",
                table: "Locations",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Addresses",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier");

            migrationBuilder.CreateIndex(
                name: "IX_Locations_UserModelId",
                table: "Locations",
                column: "UserModelId");

            migrationBuilder.CreateIndex(
                name: "IX_Addresses_UserId",
                table: "Addresses",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Addresses_AspNetUsers_UserId",
                table: "Addresses",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Locations_AspNetUsers_UserModelId",
                table: "Locations",
                column: "UserModelId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Addresses_AspNetUsers_UserId",
                table: "Addresses");

            migrationBuilder.DropForeignKey(
                name: "FK_Locations_AspNetUsers_UserModelId",
                table: "Locations");

            migrationBuilder.DropIndex(
                name: "IX_Locations_UserModelId",
                table: "Locations");

            migrationBuilder.DropIndex(
                name: "IX_Addresses_UserId",
                table: "Addresses");

            migrationBuilder.DropColumn(
                name: "UserModelId",
                table: "Locations");

            migrationBuilder.AlterColumn<Guid>(
                name: "UserId",
                table: "Addresses",
                type: "uniqueidentifier",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");

            migrationBuilder.AddColumn<string>(
                name: "UserId1",
                table: "Addresses",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Addresses_UserId1",
                table: "Addresses",
                column: "UserId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Addresses_AspNetUsers_UserId1",
                table: "Addresses",
                column: "UserId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }
    }
}
