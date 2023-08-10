
namespace SistemaCliente.Services.Model
{
    public class ClienteGetModel
    {
        public Guid? Id { get; set; }
        public string? Nome { get; set; }
        public string? Cpf { get; set; }
        public string? Telefone { get; set; }
        public string? Email { get; set; }
        public DateTime DataNascimento { get; set; }
        public int Idade { get; set; }
    }
}
