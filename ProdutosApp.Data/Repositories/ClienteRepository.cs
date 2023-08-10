using ProdutosApp.Data.Contexts;
using ProdutosApp.Data.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClientesApp.Data.Repositories
{
    public class ClienteRepository
    {
        #region Cadastro
        public void Cadastrar(Cliente cliente)
        {
            using (var dataContext = new DataContext())
            {
                dataContext.Cliente.Add(cliente);
                dataContext.SaveChanges();
            }
        }
        #endregion

        #region Alteração
        public void Alterar(Cliente cliente)
        {
            using (var dataContext = new DataContext())
            {
                dataContext.Cliente.Update(cliente);
                dataContext.SaveChanges();
            }
        }
        #endregion

        #region Apagar
        public void Apagar(Cliente cliente)
        {
            using (var dataContext = new DataContext())
            {
                dataContext.Cliente.Remove(cliente);
                dataContext.SaveChanges();
            }
        }
        #endregion

        #region Pesquisa
        public List<Cliente> PesquisaTodos()
        {
            using(var dataContext = new DataContext())
            {
                return dataContext.Cliente.OrderBy(p => p.Nome).ToList();
            }
        }

        public Cliente? PesquisaId(Guid? id)
        {
            using(var dataContext = new DataContext())
            {
                return dataContext.Cliente.Find(id);
            }
        }
        #endregion


    }
}

