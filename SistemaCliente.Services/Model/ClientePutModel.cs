using System.ComponentModel.DataAnnotations;

namespace SistemaCliente.Services.Model
{
    public class ClientePutModel
    {
        [Required(ErrorMessage = "Por favor, informe o id do produto.")]
        public Guid? Id { get; set; }

        [MinLength(8, ErrorMessage = "Por favor, preencha o nome com mínimo de 8 caracteres")]
        [MaxLength(50, ErrorMessage = "Por favor, preencha o nome com máximo de 8 caracteres")]
        [Required(ErrorMessage = "Por favor, preencha o nome")]
        public string? Nome { get; set; }

        [Required(ErrorMessage = "Por favor, preencha o CPF")]
        [StringLength(14, ErrorMessage = "Por favor, preencha o CPF com 11 dígitos")]
        public string? Cpf { get; set; }

        [Required(ErrorMessage = "Por favor, preencha o telefone")]
        [StringLength(16, ErrorMessage = "Por favor, preencha um número de telefone válido")]
        public string? Telefone { get; set; }

        [Required(ErrorMessage = "Por favor, preencha o email")]
        [EmailAddress(ErrorMessage = "Por favor,preencha um email válido")]
        public string? Email { get; set; }

        [Required(ErrorMessage = "Por favor,preencha a data de nascimento")]
        public DateTime DataNascimento { get; set; }
    }
}
