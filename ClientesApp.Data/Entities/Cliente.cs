using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClientesApp.Data.Entities
{
    public class Cliente
    {
        private Guid id;
        private string? nome;
        private string? cpf;
        private string? telefone;
        private string? email;
        private DateTime dataNascimento;

        public Guid Id { get => id; set => id = value; }
        public string? Nome { get => nome; set => nome = value; }
        public string? Cpf { get => cpf; set => cpf = value; }
        public string? Telefone { get => telefone; set => telefone = value; }
        public string? Email { get => email; set => email = value; }
        public DateTime DataNascimento { get => dataNascimento; set => dataNascimento = value; }
    }
}
