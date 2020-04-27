<template>
  <div id="apresentacao">
    <h1>Seja Bem vindo a página da Barcetto!!!</h1>
    <h4>Aqui você encontra a o projeto ideal para seu negócio, entre em contatos já e faça seu orçamento!!!</h4>
    <p>Confira abaixo alguns de nossos projetos:</p>
    <div class='demo' v-for="projeto in projetos">
        <h1>{{ projeto.nome }}</h1>
        <img v-bind:src="projeto.imagem">
        <p>{{ projeto.texto }}</p>
    </div>
    <p>Gostou ? Venha fazer seu site junto com a Barcetto, temos atendimento rápido para você!!!</p>
  </div>
</template>

<script>
export default {
  name: "Apresentacao",
  data() {
      return {
          projetos: [
          {
              nome: 'Projeto de Formulário',
              imagem: 'static/formulario.jpg',
              texto: 'Projeto de formulário para desenvolver qualquer aplicação que necessite um salvamento de dados'
          },
          {
              nome: 'Projeto de Uma Página',
              imagem: 'static/onepage.jpg',
              texto: 'Projeto de uma única página, mostrando dinamicamente os conteúdos escolhidos'
          },
          {
              nome: 'Projeto de Apresentações',
              imagem: 'static/apresentacao.jpg',
              texto: 'Projeto pensado para você, profissional se apresentar na rede, ou então divulgar sua empresa'
          },
          {
              nome: 'Projeto para Operadora',
              imagem: 'static/operadora.jpg',
              texto: 'Projeto feito para uma operadora, com demonstração de planos, contatos, e formulário para solicitar orçamentos'
          }]
      }
  }
}
</script>

<style>
#apresentacao {
  color: white;
  padding: 0 20px;
  font-family: 'Baloo Bhaina 2', cursive;
}

.demo {
  background-color: rgba(255, 255, 255, 0.25);
  text-align: center;
  border-radius: 15px;
  display: inline-block;
  width: 48%;
  height: 58vh;
  margin-left: 20px;
  margin-bottom: 40px;
  vertical-align: top;
}

.demo > p {
  width: 90%;
}

.demo > img {
    margin-left: 30px;
    width: 18vw;
    height: 20vh;
}

.demo > h1, p {
    margin-left: 20px;
}
</style>