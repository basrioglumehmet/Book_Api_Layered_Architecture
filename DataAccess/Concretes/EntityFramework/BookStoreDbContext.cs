using Entities.Concretes;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Concretes.EntityFramework
{
    ////DbContext : Db tabloları ile proje classlarını bağlamaktır
    public class BookStoreDbContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseInMemoryDatabase(databaseName: "BookStoreDb");
        }

        //Db'de yaratılacak isimler çoğul olur genel olarak.
        //DbSet  belirli bir türdeki veritabanından sorgulanabilen tüm varlıkların koleksiyonunu temsil eder
        public DbSet<Book> Books { get; set; } //DB Book tablosunun replika entitysidir.
    }
}
