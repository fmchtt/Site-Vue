<template>
  <div id="nav">
    <header>
      <a href="#"><img src="@/assets/logo.png" id="logo"><router-link to="/"></router-link></a>
      <ul>
        <a href="#"><router-link to="/sobre" tag="li">
          <li>
            <p>Sobre</p>
          </li></router-link>
        </a>
        <a href="#"><router-link to="/projetos" tag="li">
          <li>
            <p>Projetos</p>
          </li>
        </router-link></a>
        <a href="#"><router-link to="/contatos" tag="li">
          <li>
            <p>Contatos</p>
          </li>
        </router-link></a>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Baloo+Bhaina+2&display=swap");
ul > a {
  color: white;
  text-align: center;
  text-decoration: none;
  height: 150px;
  margin: 100px 0;
}

li {
  display: inline-block;
  width: 150px;
  height: 150px;
}

li > p {
  padding: 0;
  margin-top: 45%;
  margin-left: 0;
  font-weight: bold;
}

header > ul {
  display: inline-block;
  height: 150px;
  vertical-align: top;
  margin: 0;
}

a > li:hover {
  background-color: #5b2c7d;
}

header {
  background: rgb(44,22,61);
  background: linear-gradient(90deg, rgba(44,22,61,1) 0%, rgba(72,35,99,1) 60%, rgba(100,49,138,1) 100%);
  font-family: "Baloo Bhaina 2", cursive;
}

#logo {
  width: 450px;
  height: 150px;
  display: inline-block;
}
</style>