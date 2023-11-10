using Microsoft.EntityFrameworkCore;
using System.Diagnostics;
using System.Linq.Expressions;

namespace WebApi.Repositories;

//Generic interface for database operations.
public interface IRepo<TEntity, TDbContext> where TEntity : class where TDbContext : DbContext
{
    Task<bool> ExistsAsync(Expression<Func<TEntity, bool>> expression);
    Task<TEntity> CreateAsync(TEntity entity);
    Task<TEntity> GetOneAsync(Expression<Func<TEntity, bool>> expressionparams, Expression<Func<TEntity, object>>[]? includes = null);
    Task<List<TEntity>> GetManyAsync(Expression<Func<TEntity, bool>> expression, params Expression<Func<TEntity, object>>[]? includes);
    Task<List<TEntity>> GetAllAsync(params Expression<Func<TEntity, object>>[]? includes);
    Task<TEntity> UpdateAsync(TEntity entity);
    Task<bool> DeleteAsync(TEntity entity);
}

public abstract class Repo<TEntity,TDbContext> : IRepo<TEntity, TDbContext> where TEntity : class where TDbContext : DbContext
{
    private readonly TDbContext _dbContext;

    // Constructor to initialize the database context.
    protected Repo(TDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<bool> ExistsAsync(Expression<Func<TEntity, bool>> expression)
    {
        try
        {
            return await _dbContext.Set<TEntity>().AnyAsync(expression);
        }
        catch (Exception ex)
        {
            Debug.WriteLine(ex.Message);
            return false;
        }
    }

    public Task<TEntity> CreateAsync(TEntity entity)
    {
        throw new NotImplementedException();
    }

    public async Task<TEntity> GetOneAsync(Expression<Func<TEntity, bool>> expression, params Expression<Func<TEntity, object>>[]? includes)
    {
        try
        {
            var res = _dbContext.Set<TEntity>().Where(expression);
            if (includes is not null && res is not null)
            {
                foreach (var include in includes)
                {
                    res = res.Include(include);
                }
            }

            return await res.FirstOrDefaultAsync();
        }
        catch (Exception ex)
        {
            Debug.WriteLine(ex.Message);
            return null!;
        }
    }

    public async Task<List<TEntity>> GetManyAsync(Expression<Func<TEntity, bool>> expression, params Expression<Func<TEntity, object>>[]? includes)
    {
        var res = _dbContext.Set<TEntity>().Where(expression);

        if(includes is not null && res is not null)
        {
            foreach (var include in includes)
            {
                res = res.Include(include);
            }
        }

        return await res.ToListAsync();
    }


    public async Task<List<TEntity>> GetAllAsync(params Expression<Func<TEntity, object>>[]? includes)
    {
        try
        {
            IQueryable<TEntity> res = _dbContext.Set<TEntity>();

            if (includes is not null && res is not null)
            {

                foreach (var include in includes)
                {

                    res = res.Include(include);
                }
            }
            return await res.ToListAsync();
        }
        catch (Exception ex)
        {
            Debug.WriteLine(ex.Message);
            throw;
        }
    }

    public async Task<TEntity> UpdateAsync(TEntity entity)
    {
        try
        {
            _dbContext.Set<TEntity>().Update(entity);
            await _dbContext.SaveChangesAsync();

            return entity;
        }
        catch (Exception ex)
        {
            Debug.WriteLine(ex.Message);
            return null!;
        }
    }

    public async Task<bool> DeleteAsync(TEntity entity)
    {
        try
        {
            _dbContext.Set<TEntity>().Remove(entity);
            await _dbContext.SaveChangesAsync();
            return true;
        }
        catch (Exception ex)
        {
            Debug.WriteLine(ex.Message);
            return false;
        }
    }
}