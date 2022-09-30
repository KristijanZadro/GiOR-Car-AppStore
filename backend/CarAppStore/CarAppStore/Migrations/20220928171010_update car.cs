using Microsoft.EntityFrameworkCore.Migrations;

namespace CarAppStore.Migrations
{
    public partial class updatecar : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CoverImage",
                table: "Cars",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Cars",
                type: "text",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CoverImage",
                table: "Cars");

            migrationBuilder.DropColumn(
                name: "Description",
                table: "Cars");
        }
    }
}
