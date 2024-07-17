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
    public class BookGalleryManager : IBookGalleryService
    {
        private readonly IBookGalleryDal _bookGalleryDal;

        public BookGalleryManager(IBookGalleryDal bookGalleryDal)
        {
            this._bookGalleryDal = bookGalleryDal;
        }

        public void Add(BookGallery entity)
        {
            _bookGalleryDal.Create(entity);
        }

        public List<BookGallery> GetAll()
        {
            return _bookGalleryDal.ReadAll();
        }

        public BookGallery GetById(Guid id)
        {
            return _bookGalleryDal.Read(b => b.Id == id);
        }

        public void Update(BookGallery entity)
        {
            _bookGalleryDal.Update(entity);
        }
    }
}
