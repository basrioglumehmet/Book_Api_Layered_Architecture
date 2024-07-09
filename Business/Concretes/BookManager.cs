using AutoMapper;
using Business.Abstracts;
using DataAccess.Abstracts;
using Entities.Concretes;
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
        private readonly IMapper mapper;

        public BookManager(IBookDal bookDal, IMapper mapper)
        {
            this.bookDal = bookDal;
            this.mapper = mapper;
        }

        public void Add(Book entity)
        {
            bookDal.Create(entity);
        }

        public List<Book> GetAll()
        {
            return bookDal.ReadAll();
        }

        public Book GetById(Guid id)
        {
            return bookDal.Read(x => x.Id == id);
        }

        public void Update(Book entity)
        {
            bookDal.Update(entity);
        }
    }
}
