<template>
  <div id="projetos">
    <h1>Projetos</h1>
    <div class="items" v-for="projeto in projetos">
      <h3>{{ projeto.nome }}</h3>
      <img v-bind:src="projeto.imagem" />
      <p>{{ projeto.descricao }}</p>
      <input type="button" value="Ler mais..." v-bind:href="projeto.caminho" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Projetos",
  data() {
    return {
      projetos: [
        {
          nome: "Projeto de Formulário",
          imagem: "static/formulario.jpg",
          descricao:
            "Projeto de formulário para desenvolver qualquer aplicação que necessite um salvamento de dados",
          caminho: "#"
        },
        {
          nome: "Projeto de Uma Página",
          imagem: "static/onepage.jpg",
          descricao:
            "Projeto de uma única página, mostrando dinamicamente os conteúdos escolhidos",
          caminho: "#"
        },
        {
          nome: "Projeto de Apresentações",
          imagem: "static/apresentacao.jpg",
          descricao:
            "Projeto pensado para você, profissional se apresentar na rede, ou então divulgar sua empresa",
          caminho: "#"
        },
        {
          nome: "Projeto para Operadora",
          imagem: "static/operadora.jpg",
          descricao:
            "Projeto feito para uma operadora, com demonstração de planos, contatos, e formulário para solicitar orçamentos",
          caminho: "#"
        }
      ]
    };
  }
};
</script>

<style>
#projetos {
  color: white;
  margin-left: 20px;
}

.items {
  border-left: 3px solid rgba(255, 255, 255, 0.5);
  padding-left: 10px; 
  display: inline-block;
  width: 49%;
  margin-bottom: 40px;
}

.items > input[type="button"] {
  border-radius: 5px;
  padding: 5px;
  border: 0;
  background-color: #64318a;
  color: white;
}

.items > input[type="button"]:hover {
  background-color: #9247c9;
}

.items > img {
    padding-left: 10px;
    width: 70%;
    height: 200px;
    vertical-align: top;
    padding: 10px;
    background-color: #482363;
}

.items > p {
    width: 70%;
}
</style>
