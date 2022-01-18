<template>
  <body>
    <header>
      <div class="wrapper">
        <a href="#demo-modal">Изменить профиль</a>
      </div>
      <div id="demo-modal" class="modal">
        <form class="modal__content">
          <h1>Изменение профиля</h1>
          <div style="display: flex; flex-direction: column">
            <div class="line">
              <b>Имя</b>
              <input ref="name">
            </div>
            <div class="line">
              <b>Почта</b>
              <input ref="email">
            </div>
            <div class="line">
              <b>Пароль</b>
              <input ref="password">
            </div>
          </div>
          <button type="submit" @click="putData">Сохранить</button>
          <a href="#" class="modal__close">X</a>
        </form>
      </div>
    </header>
    <div class="userInfo">
      <img :src="avatar" class="avatar" />
      <div>
        <p>
          Username <br />
          Дата регистрации: 18.11.2021 <br />
          Количество статей: 2 <br />
        </p>
      </div>
    </div>
    <div>
      <hr />
      <p>
        1)<router-link to="/article1"
          >Так и быть, объясню несведущим, почему базовых доз вакцины две, и
          откуда взялись так называемые "бустерные" дозы.</router-link
        ><br />
        2)<router-link to="/article2">Москва - портал в Адъ</router-link><br />
      </p>
    </div>
  </body>
</template>

<script>
import avatar from "../assets/16187955157060.jpg";
import pen from "../assets/pen.png";

const baseURL = "http://localhost:64531/api";
let User = localStorage.getItem('user');

export default {
  name: "profile",
  data() {
    return {
      avatar,
      pen,
      putResult: null
    };
  },
  methods: {
    formatResponse(res) {
      return JSON.stringify(res, null, 2);
    },

    async putData() {

        const putData = {
          id: User.id,
          name: this.$refs.name.value,
          email: this.$refs.email.value,
          password: this.$refs.password.value,
          date: User.date
        };

        try {
          const res = await fetch(`${baseURL}/account`, {
            method: "put",
            headers: {
              "Content-Type": "application/json",
              "x-access-token": "token-value",
            },
            body: JSON.stringify(putData),
          });

          if (!res.ok) {
            const message = `An error has occured: ${res.status} - ${res.statusText}`;
            throw new Error(message);
          }

          const data = await res.json();

          const result = {
            status: res.status + "-" + res.statusText,
            headers: { "Content-Type": res.headers.get("Content-Type") },
            data: data,
          };
          localStorage.setItem('user', JSON.stringify(data));
          this.putResult = this.fortmatResponse(result);
        } catch (err) {
          this.putResult = err.message;
        }
      }
    },
};
</script>

<style>
.userInfo {
  display: flex;
}
.avatar {
  width: 72px;
  height: 72px;
}
.pen {
  width: 13px;
  height: 13px;
}
.line {
  display: inline-flex;
  align-items: center;
}
.line p {
  padding-left: 5px;
}
.wrapper a {
  text-decoration: none;
  color: black;
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
  background: rgba(77, 77, 77, 0.7);
  transition: all 0.4s;
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
