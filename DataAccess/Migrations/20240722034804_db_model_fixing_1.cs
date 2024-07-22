using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DataAccess.Migrations
{
    public partial class db_model_fixing_1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_book_comments_users_UserId",
                table: "book_comments");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "book_comments",
                newName: "CustomerId");

            migrationBuilder.RenameIndex(
                name: "IX_book_comments_UserId",
                table: "book_comments",
                newName: "IX_book_comments_CustomerId");

            migrationBuilder.AddForeignKey(
                name: "FK_book_comments_customers_CustomerId",
                table: "book_comments",
                column: "CustomerId",
                principalTable: "customers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_book_comments_customers_CustomerId",
                table: "book_comments");

            migrationBuilder.RenameColumn(
                name: "CustomerId",
                table: "book_comments",
                newName: "UserId");

            migrationBuilder.RenameIndex(
                name: "IX_book_comments_CustomerId",
                table: "book_comments",
                newName: "IX_book_comments_UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_book_comments_users_UserId",
                table: "book_comments",
                column: "UserId",
                principalTable: "users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
