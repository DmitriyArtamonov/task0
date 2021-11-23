<template>
  <body>
<header>
  <div class="wrapper">
    <a href="#demo-modal">Изменить профиль</a>
  </div>
  <div id="demo-modal" class="modal">
    <form action="" class="modal__content">
      <h1>
        Изменение профиля
      </h1>
      <div style="display:flex; flex-direction: column">
        <div class="line">
          <img :src="pen" class="pen">
          <p>
            Username
          </p>
        </div>
        <div class="line">
          <img :src="pen" class="pen">
          <p>
            trctgcthcgyctcy@yandex.ru
          </p>
        </div>
        <div class="line">
          <img :src="pen" class="pen">
          <p>
            Пароль
          </p>
        </div>
      </div>
      <button type="submit">Сохранить</button>
      <a href="#" class="modal__close">X</a>
    </form>
  </div>
</header>
    <div class="userInfo">
      <img :src="avatar" class="avatar">
      <div>
        <p>
          Username <br>
          Дата регистрации: 18.11.2021 <br>
          Количество статей: 2 <br>
        </p>
    </div>
    </div>
  <div>
    <hr>
    <p>
      1)<router-link to="/article1">Так и быть, объясню несведущим, почему базовых доз вакцины две, и откуда взялись так называемые "бустерные" дозы.</router-link><br>
      2)<router-link to="/article2">Москва - портал в Адъ</router-link><br>
    </p>
  </div>
  </body>
</template>

<script>
import avatar from '../assets/16187955157060.jpg'
import pen from '../assets/pen.png'
export default {
  data(){
    return{
      avatar,
      pen
    }
  }
}
</script>


<style>
.userInfo{
  display: flex;
}
.avatar{
  width: 72px;
  height: 72px;
}
.pen{
  width: 13px;
  height: 13px;
}
.line{
  display: inline-flex;
  align-items: center;
}
.line p{
  padding-left: 5px;
}
.wrapper a{
  text-decoration: none;
  color:black;
}
.modal {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(77, 77, 77, .7);
  transition: all .4s;
}

.modal:target {
  visibility: visible;
  opacity: 1;
}

.modal__content {
  border-radius: 4px;
  position: relative;
  width: 500px;
  max-width: 90%;
  background: #fff;
  padding: 1em 2em;
}
.modal__close {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #585858;
  text-decoration: none;
}
</style>