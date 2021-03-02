using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using eeShop.Data;
using eeShop.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace eeShop.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly ProductContext _context;

        public ProductController(ProductContext context)
        {
            _context = context;
        }

    [HttpGet]
    public async Task<ActionResult<List<Product>>> GetAll() =>  await _context.Products.ToListAsync();

    [HttpGet("{id}")]
    public async Task<ActionResult<Product>> GetById(int id){
        var product = await _context.Products.FindAsync(id);

        if(product == null){
            return NotFound();
        }
        return product;
    }

    [HttpPost]
    public async Task<ActionResult> Create(Product product){
        _context.Products.Add(product);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetById), new {id = product.Id}, product);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, Product product){
        if(id != product.Id){
            return BadRequest();
        }
        _context.Entry(product).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id){
        var product = await _context.Products.FindAsync(id);

        if(product == null)
        {
            return NotFound();
        }
        _context.Products.Remove(product);
        await _context.SaveChangesAsync();

        return NoContent();
    }
  }
}