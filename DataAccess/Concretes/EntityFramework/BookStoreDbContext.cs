using Entities.Concretes;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace DataAccess.Concretes.EntityFramework
{
    public class BookStoreDbContext : DbContext
    {
        private readonly IConfiguration? _configuration;

        public BookStoreDbContext()
        {
        }

        public BookStoreDbContext(DbContextOptions<BookStoreDbContext> options, IConfiguration configuration)
            : base(options)
        {
            _configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                if (_configuration != null)
                {
                    optionsBuilder.UseNpgsql(_configuration.GetConnectionString("PostgreSQL"));
                }
                else
                {
                    optionsBuilder.UseNpgsql("Server=localhost;Database=book_store;Port=5432;User Id=postgres;Password=1708");
                }
            }
        }


        public DbSet<Book>? Books { get; set; }
        public DbSet<BookGallery>? BookGalleries { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseSerialColumns();

            modelBuilder.Entity<Book>()
                       .HasMany(b => b.BookGalleries)
                       .WithOne(bg => bg.Book)
                       .HasForeignKey(bg => bg.BookId);

        }
    }
}
