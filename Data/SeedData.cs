using System.Linq;
using eeShop.Models;

namespace eeShop.Data
{
  public static class SeedData
  {
    public static void Initialize(ProductContext context)
    {
      if (!context.Products.Any())
      {
        context.Products.AddRange(
                                new Product
                                {
                                  Id = 0,
                                  Name = "Squeaky Bone",
                                  Price = 20.99m
                                },
             new Product
             {
               Id = 0,
               Name = "Knotted Rope",
               Price = 12.99m
             }
        );
        context.SaveChanges();
      }
    }
  }
}