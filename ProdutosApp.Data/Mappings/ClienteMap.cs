using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ProdutosApp.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClientesApp.Data.Mappings
{
    public class ClienteMap : IEntityTypeConfiguration<Cliente>
    {
        public void Configure(EntityTypeBuilder<Cliente> builder)
        {
            builder.ToTable("CLIENTE");

            builder.HasKey(p => p.Id);

            builder.Property(p => p.Id).HasColumnName("ID");
            builder.Property(p => p.Nome).HasColumnName("NOME").HasMaxLength(150).IsRequired();
            builder.Property(p => p.Cpf).HasColumnName("CPF").HasMaxLength(14).IsRequired();
            builder.Property(p => p.DataNascimento).HasColumnName("DATANASCIMENTO").IsRequired();
            builder.Property(p => p.Email).HasColumnName("EMAIL").IsRequired();
            builder.Property(p => p.Telefone).HasColumnName("TELEFONE").IsRequired();
        }
    }
}
