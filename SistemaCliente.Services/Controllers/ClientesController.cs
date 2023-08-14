using ClientesApp.Data.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ApplicationModels;
using ClientesApp.Data.Entities;
using SistemaCliente.Services.Model;
using System.Linq.Expressions;

namespace SistemaCliente.Services.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientesController : ControllerBase
    {
        #region Post
        [HttpPost]
        [ProducesResponseType(typeof(ClienteGetModel), 200)]
        public IActionResult Cadastrar([FromBody] ClientePostModel model)
        {
            var cliente = new Cliente();
            var clienteRepository = new ClienteRepository();

            try
            {
                cliente.Id = Guid.NewGuid();
                cliente.Nome = model.Nome;
                cliente.Cpf = model.Cpf;
                cliente.DataNascimento = model.DataNascimento;
                cliente.Email = model.Email;
                cliente.Telefone = model.Telefone;

                clienteRepository.Cadastrar(cliente);

                return StatusCode(200, EntityToModel(cliente));

            }
            catch (Exception e)
            {
                return StatusCode(500, new { e.Message });
            }
        }
        #endregion

        #region Put
        [HttpPut]
        [ProducesResponseType(typeof(ClienteGetModel), 200)]
        public IActionResult Alterar([FromBody] ClientePutModel model)
        {
            var clienteRepository = new ClienteRepository();
            var cliente = clienteRepository.PesquisaId(model.Id);

            try
            {
                if (cliente != null)
                {
                    cliente.Nome = model.Nome;
                    cliente.Cpf = model.Cpf;
                    cliente.DataNascimento = model.DataNascimento;
                    cliente.Email = model.Email;
                    cliente.Telefone = model.Telefone;

                    clienteRepository.Alterar(cliente);

                    return StatusCode(200, EntityToModel(cliente));
                }
                else
                {
                    return StatusCode(400, new { mensagem = "Cliente não encontrado. Verifique o ID informado" });
                }
            }
            catch (Exception e)
            {
                return StatusCode(500, new { e.Message });
            }
        }
        #endregion

        #region Apagar
        [HttpDelete("{id}")]
        [ProducesResponseType(typeof(ClienteGetModel), 200)]
        public IActionResult Delete(Guid? id)
        {
            var clienteRepository = new ClienteRepository();
            var cliente = clienteRepository.PesquisaId(id);

            try
            {
                if (cliente != null)
                {
                    clienteRepository.Apagar(cliente);

                    return StatusCode(200, EntityToModel(cliente));
                }
                else
                {
                    return StatusCode(400, new { mensagem = "Cliente não encontrado. Verifique o ID informado" });
                }
            }
            catch (Exception e)
            {
                return StatusCode(500, new { e.Message });
            }
        }
        #endregion

        #region Get
        [HttpGet]
        [ProducesResponseType(typeof(ClienteGetModel), 200)]
        public IActionResult PesquisaTodos()
        {
            var clienteRepository = new ClienteRepository();
            var lista = new List<ClienteGetModel>();

            try
            {
                foreach (var item in clienteRepository.PesquisaTodos())
                {
                    lista.Add(EntityToModel(item));
                }

                return StatusCode(200, lista);
            }
            catch (Exception e)
            {
                return StatusCode(500, new { e.Message });
            }
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(ClienteGetModel), 200)]
        public IActionResult PesquisaId(Guid? id)
        {
            var clienteRepository = new ClienteRepository();
            var cliente = clienteRepository.PesquisaId(id);
            try
            {
                if (cliente != null)
                {
                    return StatusCode(200, EntityToModel(cliente));
                }
                else
                {
                    return StatusCode(204);
                }
            }
            catch (Exception e)
            {
                return StatusCode(500, new { e.Message });
            }
        }
        #endregion

        #region Método Auxiliar
        private ClienteGetModel EntityToModel(Cliente cliente)
        {       
            var resposta = new ClienteGetModel();

            DateTime dataHoje = DateTime.Now;

            int idade = dataHoje.Year - cliente.DataNascimento.Year;

            if(dataHoje.Month < cliente.DataNascimento.Month || (dataHoje.Month == cliente.DataNascimento.Month && dataHoje.Day < cliente.DataNascimento.Day))
            {
                idade--;
            }

            resposta.Id = cliente.Id;
            resposta.Nome = cliente.Nome;
            resposta.Cpf = cliente.Cpf;
            resposta.DataNascimento = cliente.DataNascimento.Date;
            resposta.Idade = idade;
            resposta.Email = cliente.Email;
            resposta.Telefone = cliente.Telefone;

            return resposta;
        }
        #endregion
    }
}
