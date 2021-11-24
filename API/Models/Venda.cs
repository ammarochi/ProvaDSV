using System;
using System.Collections.Generic;

namespace API.Models
{
    public class Venda
    {
        public Venda() => CriadoEm = DateTime.Now;
        public int VendaId { get; set; }
        public string Cliente { get; set; }
        public ItemVenda ItemVenda { get; set; }
        public int ItemId { get; set; }
        public List<ItemVenda> Itens { get; set; }
        public Pagamento Pagamento { get; set; }
        public int PagamentoId { get; set; }
        public DateTime CriadoEm { get; set; }
    }
}