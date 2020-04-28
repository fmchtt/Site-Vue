<template>
  <div id="contatos">
    <h1>Contatos</h1>
    <div class="contato-item">
      <h2>Mande-no uma mensagem, estaremos felizes em responde-lo!!</h2>
      <p>Nosso e-mail é: xxxxxxxxxxx@barcetto.com.br</p>
      <p>Telefone: (31) 9XXXX-XXXX</p>
    </div>
    <div class="contato-item">
      <h2>Ou deixe seu contato para que entremos em contato com você!!!</h2>
      <form>
        <table>
          <tr>
            <td>
              <label>Nome:</label>
            </td>
            <td>
              <input type="text" />
            </td>
            <td>
              <label>E-mail:</label>
            </td>
            <td>
              <input type="email" />
            </td>
            <td>
              <label>Telefone:</label>
            </td>
            <td>
              <input type="tel" />
            </td>
          </tr>
          <tr>
            <td colspan="6">
              <textarea maxlength="250">Deixe sua mensagem</textarea>
            </td>
          </tr>
          <tr>
            <td>
              <input type="submit" value="Enviar" />
            </td>
            <td>
              <input type="button" value="Limpar" />
            </td>
          </tr>
        </table>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contatos"
};
</script>

<style>
@media (min-width:320px) { /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */ }
@media (min-width:480px) { /* smartphones, Android phones, landscape iPhone */ }
@media (min-width:600px) {
  .contato-item {
    width: 455px;
    margin-top: 30px;
  }

  .contato-item > h2 {
   font-size: 20px;
  }

  .contato-item > p {
    font-size: 16px;
  }

  .contato-item > form {
    width: 100%;
  }
}
@media (min-width:801px) { /* tablet, landscape iPad, lo-res laptops ands desktops */ }
@media (min-width:1025px) {
  .contato-item {
    width: 500px;
  }
}
@media (min-width:1281px) {
  .contato-item {
    width: 700px;
  }

  .contato-item > h2 {
   font-size: 20px;
  }

  .contato-item > p {
    font-size: 16px;
  }

  .contato-item > form {
    width: 100%;
  }
}

.contato-item {
  display: inline-block;
  vertical-align: top;
  border-left: 3px solid rgba(255, 255, 255, 0.5);
  padding-left: 10px;
}

#contatos {
  color: white;
  margin: 0 0 40px 20px;
}

input[type="text"],
input[type="tel"],
input[type="email"] {
  border: 0px;
  border-radius: 5px;
}

input[type="button"],
input[type="submit"] {
  border-radius: 5px;
  padding: 5px;
  border: 0;
  background-color: #64318A;
  color: white;
}

input[type="button"]:hover,
input[type="submit"]:hover {
  background-color: #9247c9;
}

textarea {
  height: 90px;
  width: 100%;
  border-radius: 5px;
  width: 100%;
  padding-right: 5%;
}
</style>
