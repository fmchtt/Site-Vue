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
@media (min-width:320px) { /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */ }
@media (min-width:480px) { /* smartphones, Android phones, landscape iPhone */ }
@media (min-width:600px) {
  li {
    width: 100px;
  }

  #logo {
    width: 250px;
  }

  li > p {
    margin-top: 30px;
  }

  header > ul {
    height: 77px;
  }
}
@media (min-width:801px) { /* tablet, landscape iPad, lo-res laptops ands desktops */ }
@media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
@media (min-width:1281px) { 
  li {
    width: 200px;
  }

  #logo {
    width: 350px;
  }

  li > p {
    margin-top: 40px;
  }

  header > ul {
    height: 108px;
  }
}

@import url("https://fonts.googleapis.com/css?family=Baloo+Bhaina+2&display=swap");
ul > a {
  color: white;
  text-align: center;
  text-decoration: none;
  margin: 100px 0;
}

li {
  display: inline-block;
  height: 100%;
}
li > p {
  padding: 0;
  margin-left: 0;
  font-weight: bold;
}

header > ul {
  display: inline-block;
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
  display: inline-block;
}
</style>