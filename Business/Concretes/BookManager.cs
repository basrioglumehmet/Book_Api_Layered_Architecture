using AutoMapper;
using Business.Abstracts;
using Core.CrossCuttingConcerns.Exceptions;
using Core.Utils;
using Core.Utils.Results.Errors;
using Core.Utils.Results.Successes;
using DataAccess.Abstracts;
using Entities.Concretes;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace Business.Concretes
{
    public class BookManager : IBookService
    {
        private readonly IBookDal _bookDal;

        public BookManager(IBookDal bookDal)
        {
            _bookDal = bookDal;
        }

        public void Add(Book entity)
        {
            _bookDal.Create(entity);
        }

        public List<Book> GetAll()
        {
            // Eager Loading Relationship
            return _bookDal.ReadAll(null, include: query => query.Include(b => b.BookGalleries)).ToList();
        }

        public Book GetById(Guid id)
        {
            return _bookDal.Read(x => x.Id == id);
        }

        public IResult GetByNameId(string nameId)
        {
            var books = _bookDal.ReadAll(include: query => query.Include(b => b.BookGalleries)).ToList();
            var entity = books.SingleOrDefault(b => b.NameId.Equals(nameId, StringComparison.OrdinalIgnoreCase));
            if (entity == null)
            {
                throw new ResultException<ErrorResult>(HttpStatusCode.NotFound, new ErrorResult("Book not found"));
            }

            var result = new Dictionary<string, object>
            {
                { "detail", entity },
                { "other_books", GetAllBooksByAuthor(entity.Author,entity.NameId) }
            };
            return new SuccessDataResult<Dictionary<string, object>>(result);
        }

        private List<Book> GetAllBooksByAuthor(string author,string currentBookNameId)
        {
            var books = _bookDal.ReadAll(include: query => query.Include(b => b.BookGalleries)).ToList();
            return books.Where(b => b.Author.Equals(author, StringComparison.OrdinalIgnoreCase) && b.NameId != currentBookNameId).ToList();
        }

        public IResult SearchBooksByNameOrCategoryOrBrand(string keyword)
        {
            if (string.IsNullOrEmpty(keyword))
            {
                return new ErrorDataResult<List<Book>>(null, "Keyword cannot be null or empty.");
            }

            var books = _bookDal.ReadAll(include: query => query.Include(b => b.BookGalleries)).ToList();
            var upperKeyword = keyword.ToUpper();
            var filteredBooks = books.Where(book =>
                book.Name.Contains(upperKeyword, StringComparison.OrdinalIgnoreCase) ||
                book.Category.Contains(upperKeyword, StringComparison.OrdinalIgnoreCase) ||
                book.Brand.Contains(upperKeyword, StringComparison.OrdinalIgnoreCase) ||
                book.Author.Contains(upperKeyword, StringComparison.OrdinalIgnoreCase)).ToList();

            if (filteredBooks.Any())
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
            _bookDal.Update(entity);
        }
    }
}
