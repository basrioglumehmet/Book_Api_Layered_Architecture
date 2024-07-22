using Entities.Abstracts;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.RegularExpressions;

namespace Entities.Concretes
{
    [Table("books")]
    public class Book : IEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        private string? _name;
        private string? _nameId;
        private decimal _price;

        public string? Name
        {
            get => _name;
            set
            {
                _name = value;
                _nameId = GenerateNameId(_name);
            }
        }

        public string? Description { get; set; } = string.Empty;
        public string? Author { get; set; } = string.Empty;
        public string? Brand { get; set; } = string.Empty;
        public string? Category { get; set; } = string.Empty;
        public int? PageSize { get; set; }
        public string? BookSize { get; set; } = string.Empty;
        public string? PaperType { get; set; } = string.Empty;
        public string? PublicationDate { get; set; } = string.Empty;
        public string? Barcode { get; set; } = string.Empty;
        public string? SkinType { get; set; } = string.Empty;
        public string? Translator { get; set; } = string.Empty;

        [NotMapped] // Veritabanına yansıtmayacağız, sadece hesaplama için kullanacağız
        public string PriceString
        {
            get => _price.ToString("0.00"); // Fiyatı istediğimiz formatta string olarak döndürüyoruz
            set => _price = decimal.Parse(value); // Kullanım durumuna göre string'den decimal'e dönüşüm sağlayabiliriz
        }
        [Column(TypeName = "decimal(18, 2)")]
        public decimal Price
        {
            get => _price;
            set => _price = Math.Round(value, 2);
        }

        public int Quantity { get; set; } = 0;
        public decimal BrandPrice { get; set; } = 0;

        public string? NameId
        {
            get => _nameId?.ToLower();
            private set => _nameId = value;
        }

        // Navigation property
        public virtual ICollection<BookGallery> BookGalleries { get; set; } = new List<BookGallery>();

        private string GenerateNameId(string? name)
        {
            if (string.IsNullOrWhiteSpace(name))
                return string.Empty;

            var nameWithoutTurkishChars = name
                .Replace("ğ", "g")
                .Replace("Ğ", "G")
                .Replace("ı", "i")
                .Replace("İ", "I")
                .Replace("ş", "s")
                .Replace("Ş", "S")
                .Replace("ç", "c")
                .Replace("Ç", "C")
                .Replace("ü", "u")
                .Replace("Ü", "U")
                .Replace("ö", "o")
                .Replace("Ö", "O");

            var nameId = Regex.Replace(nameWithoutTurkishChars, "\\s+", "-").ToLower();

            return nameId;
        }
    }
}
