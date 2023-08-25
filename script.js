let nomes = [];
    let profissoes = [];

    function adicionar() {
      const nome = document.getElementById('nomeInput').value;
      const profissao = document.getElementById('profissaoInput').value;

      if (nome && profissao) {
        nomes.push(nome);
        profissoes.push(profissao);
        atualizarMensagem(`${nome} adicionado(a) como ${profissao}.`);
      } else {
        atualizarMensagem('Nome e profissão devem ser preenchidos.');
      }
    }

    function remover() {
      const nome = document.getElementById('nomeInput').value;
      const index = nomes.indexOf(nome);

      if (index !== -1) {
        nomes.splice(index, 1);
        profissoes.splice(index, 1);
        atualizarMensagem(`${nome} removido(a) da lista.`);
      } else {
        atualizarMensagem(`${nome} não encontrado(a) na lista.`);
      }
    }

    function atualizarMensagem(mensagem) {
      document.getElementById('mensagem').textContent = mensagem;
    }