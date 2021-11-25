using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/inicializar")]
    public class InicializarDadosController : ControllerBase
    {
        private readonly DataContext _context;
        public InicializarDadosController(DataContext context)
        {
            _context = context;
        }

        //POST: api/inicializar/create
        [HttpPost]
        [Route("create")]
        public IActionResult Create()
        {
            _context.Categorias.AddRange(new Categoria[]
                {
                    new Categoria { CategoriaId = 1, Nome = "Frutas" },
                }
            );
            _context.Produtos.AddRange(new Produto[]
                {
                    new Produto { ProdutoId = 1, Nome = "Banana", Preco = 2.5, Quantidade = 2, CategoriaId = 1 },
                    new Produto { ProdutoId = 2, Nome = "Maçã", Preco = 3.00, Quantidade = 2, CategoriaId = 1 },
                    new Produto { ProdutoId = 3, Nome = "Pera", Preco = 2.00, Quantidade = 9, CategoriaId = 1 },
                }
            );
            _context.AddRange(new Pagamento[]
                {
                    new Pagamento { Id = 1, FormaPagamento = "Crédito"},
                    new Pagamento { Id = 2, Nome = "PIX"},
                }
            ); 
            
            _context.SaveChanges();
            return Ok(new { message = "Dados inicializados com sucesso!" });
        }
    }
}
