<template>
  <html>
  <head>
    <link href="https://allfont.ru/allfont.css?fonts=b52" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reseter.css" />
  </head>
  <body>
  <header>
    <router-link to="/"><img :src="rjuman" id="logo"></router-link>
    <div>
      <router-link to="/Signup">Регистрация</router-link><br>
      <router-link to="/LogIn">Вход</router-link><br>
      <router-link to="/profile">Профиль</router-link><br>
    </div>
  </header>
  <div class = "LeftRight">
    <router-view />
  </div>
  </body>
  </html>
</template>

<script>
import rjuman from './assets/AnkapRjuman.png';
export default {
  data(){
    return{
      rjuman
    }
  }
}
</script>

<style>
@font-face {
  font-family: b52;
  src: url(./assets/b52.ttf);
}
html {
  background: url(./assets/Boomers.png) no-repeat fixed;
}
.LeftRight {
  margin-right: 20%;
  margin-left: 20%;
  font-family: 'b52', arial;
  font-size: 21px;
}
header{
  margin-right: 20%;
  margin-left: 20%;
  font-family: 'b52', arial;
  font-size: 21px;
  display: flex;
  justify-content: space-between;
}
#logo{
  width: 200px;
}
select,button,input,p,h1,h2,h3,li,ul,a{
  font-family: 'b52', arial;
}
.info{
  text-align: center;
}
.history{
  margin-left: 3%;
}
</style>