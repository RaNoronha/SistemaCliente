using ClientesApp.Data.Mappings;
using ClientesApp.Data.Migrations;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using ClientesApp.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClientesApp.Data.Contexts
{
    public class DataContext : DbContext
    {
        #region Conexão BD
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //Conexão casa
            optionsBuilder.UseSqlServer("Data Source=SQL5106.site4now.net;Initial Catalog=db_a9d51b_bdsistemacliente;User Id=db_a9d51b_bdsistemacliente_admin;Password=Lz5365@pq");

            //Conexão curso
            //optionsBuilder.UseSqlServer("Data Source = (localdb)\\MSSQLLocalDB; Initial Catalog = DBSistemaCliente; Integrated Security = True; Connect Timeout = 30; Encrypt = False; TrustServerCertificate = False; ApplicationIntent = ReadWrite; MultiSubnetFailover = False");            
        }

        #endregion

        #region Classe Mapeamento
        protected override void OnModelCreating(ModelBuilder modelBuilder) 
        {
            modelBuilder.ApplyConfiguration(new ClienteMap());
        }

        #endregion

        #region Acesso CRUD
        public DbSet<Cliente> Cliente { get; set; }
        #endregion

    }
}
