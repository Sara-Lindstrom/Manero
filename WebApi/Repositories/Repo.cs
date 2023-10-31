using Microsoft.EntityFrameworkCore;
using System.Diagnostics;
using System.Linq.Expressions;

namespace WebApi.Repositories;

//Generic interface for database operations.
interface IRepo<TEntity, TDbContext> where TEntity : class where TDbContext : DbContext
{
    Task<bool> ExistsAsync(Expression<Func<TEntity, bool>> expression);
    Task<TEntity> CreateAsync(TEntity entity);
    Task<TEntity> GetAsync(Expression<Func<TEntity, bool>> expression);
    Task<IEnumerable<TEntity>> GetManyAsync(Expression<Func<TEntity, bool>> expression);
    Task<IEnumerable<TEntity>> GetAllAsync();
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

    public async Task<TEntity> GetAsync(Expression<Func<TEntity, bool>> expression)
    {
        try
        {
            return await _dbContext.Set<TEntity>().FirstOrDefaultAsync(expression) ?? null!;
        }
        catch (Exception ex)
        {
            Debug.WriteLine(ex.Message);
            return null!;
        }
    }

    public async Task<IEnumerable<TEntity>> GetManyAsync(Expression<Func<TEntity, bool>> expression)
    {
        try
        {
            return await _dbContext.Set<TEntity>().Where(expression).ToListAsync();
        }
        catch (Exception ex)
        {
            Debug.WriteLine(ex.Message);
            return null!;
        }
    }

    public async Task<IEnumerable<TEntity>> GetAllAsync()
    {
        try
        {
            return await _dbContext.Set<TEntity>().ToListAsync();
        }
        catch (Exception ex)
        {
            Debug.WriteLine(ex.Message);
            return null!;
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