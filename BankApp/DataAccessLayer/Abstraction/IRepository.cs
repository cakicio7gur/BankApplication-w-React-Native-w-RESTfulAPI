using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Linq.Expressions;

namespace DataAccessLayer.Abstraction
{
    public interface IRepository<TEntity> where TEntity:class
    {
        void Add(TEntity model);

        IEnumerable<TEntity> Get(params Expression<Func<TEntity, object>>[] includes);

        TEntity GetById(Expression<Func<TEntity, bool>> id, params Expression<Func<TEntity, object>>[] includes);

        void Update(TEntity model);

        void Delete(int id);

        IEnumerable<TEntity> GetByFilter(Expression<Func<TEntity, bool>> predicate, params Expression<Func<TEntity, object>>[] includes);
        
    }
}
