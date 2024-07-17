using Entities.Abstracts;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace DataAccess.Abstracts
{
    // IEntity'den türetilmiş ve new'lenebilir bir Entity tipi kullanılmalı
    public interface IEntityRepository<TEntity> where TEntity : class, IEntity, new()
    {
        // Predicate lambda dynamic filter
        List<TEntity> ReadAll(Expression<Func<TEntity, bool>> filter = null, Func<IQueryable<TEntity>, IQueryable<TEntity>> include = null);
        TEntity Read(Expression<Func<TEntity, bool>> filter);
        void Create(TEntity entity);
        void Update(TEntity entity);
        void Delete(TEntity entity);
    }
}
