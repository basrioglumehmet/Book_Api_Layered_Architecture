using AutoMapper;
using Business.Abstracts;
using Core.Utils;
using Core.Utils.Results.Errors;
using Core.Utils.Results.Successes;
using DataAccess.Abstracts;
using Entities.Concretes;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Concretes
{
    public class BookManager : IBookService
    {
        private readonly IBookDal bookDal;

        public BookManager(IBookDal bookDal)
        {
            this.bookDal = bookDal;
        }

        public void Add(Book entity)
        {
            bookDal.Create(entity);
        }

        public List<Book> GetAll()
        {
            //Eager Loading İlişkisi
            return bookDal.ReadAll(null,include: query => query.Include(b => b.BookGalleries)).ToList();
        }

        public Book GetById(Guid id)
        {
            return bookDal.Read(x => x.Id == id);
        }

        public IResult SearchBooksByNameOrCategoryOrBrand(string keyword)
        {
            if (string.IsNullOrEmpty(keyword))
            {
                return new ErrorDataResult<List<Book>>(null, "Keyword cannot be null or empty.");
            }

            keyword = keyword.ToUpper(); // Convert keyword to upper case for case-insensitive comparison

            var filteredBooks = bookDal.ReadAll(book =>
                 book.Name.ToUpper().Contains(keyword) ||
                 book.Category.ToUpper().Contains(keyword) ||
                 book.Brand.ToUpper().Contains(keyword) ||
                 book.Author.ToUpper().Contains(keyword), include: query => query.Include(i => i.BookGalleries)).ToList();

            if (filteredBooks.Count > 0)
            {
                return new SuccessDataResult<List<Book>>(filteredBooks);
            }
            else
            {
                return new ErrorDataResult<List<Book>>(null, "Cannot find the book or category or brand or author");
            }
        }


        public void Update(Book entity)
        {
            bookDal.Update(entity);
        }
    }
}
