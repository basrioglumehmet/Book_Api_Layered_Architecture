using DataAccess.Abstracts;
using Entities.Abstracts;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Core.DataAccess.EntityFramework
{
    public class EfBaseRepository<TEntity, TContext> : IEntityRepository<TEntity>
        where TEntity : class, IEntity, new()
        where TContext : DbContext, new()
    {
        public void Create(TEntity entity)
        {
            using (var dbContext = new TContext()) //Newlenmiş db context görevi bittikten sonra dispose et  serbest bırak bu bellek sızıntısını önle.
            {
                var source = dbContext.Entry<TEntity>(entity); //Veri kaynağıyla ilişkilendir
                source.State = Microsoft.EntityFrameworkCore.EntityState.Added;
                dbContext.SaveChanges(); //Değişikleri veritabanına uygula
            }
        }

        public void Delete(TEntity entity)
        {
            using (var dbContext = new TContext()) //Newlenmiş db context görevi bittikten sonra dispose et  serbest bırak bu bellek sızıntısını önle.
            {
                var source = dbContext.Entry<TEntity>(entity); //Veri kaynağıyla ilişkilendir
                source.State = Microsoft.EntityFrameworkCore.EntityState.Deleted;
                dbContext.SaveChanges(); //Değişikleri veritabanına uygula
            }
        }

        public TEntity Read(Expression<Func<TEntity, bool>> filter)
        {
            using (var dbContext = new TContext()) //Newlenmiş db context görevi bittikten sonra dispose et  serbest bırak bu bellek sızıntısını önle.
            {
                var dbSet = dbContext.Set<TEntity>(); //Db contextimize tanımladığımız dbset TEntitys'a erişme işlemi
                return dbSet.Where(filter).Single(); //Filtrelenmiş tek veri kayıdını getir
            }
        }

        public List<TEntity> ReadAll(Expression<Func<TEntity, bool>> filter = null, Func<IQueryable<TEntity>, IQueryable<TEntity>> include = null)
        {
            using (var dbContext = new TContext()) // Newlenmiş db context görevi bittikten sonra dispose et  serbest bırak bu bellek sızıntısını önle.
            {
                IQueryable<TEntity> query = dbContext.Set<TEntity>();

                if (include != null)
                {
                    query = include(query);
                }

                if (filter != null)
                {
                    query = query.Where(filter);
                }

                return query.ToList();
            }
        }

        public void Update(TEntity entity)
        {
            using (var dbContext = new TContext()) //Newlenmiş db context görevi bittikten sonra dispose et  serbest bırak bu bellek sızıntısını önle.
            {
                var source = dbContext.Entry<TEntity>(entity); //Veri kaynağıyla ilişkilendir
                source.State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                dbContext.SaveChanges(); //Değişikleri veritabanına uygula
            }
        }
    }
}
