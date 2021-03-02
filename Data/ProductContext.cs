using eeShop.Models;
using Microsoft.EntityFrameworkCore;

namespace eeShop.Data
{
    public class ProductContext : DbContext
    {
       public ProductContext(DbContextOptions<ProductContext> options): base(options)
       {
       } 

       public DbSet<Product> Products {get; set;}
    }
}