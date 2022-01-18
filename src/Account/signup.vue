<template>
  <body  class="info">
  <h1>
    Регистрация
  </h1>
  <form onsubmit="return false;">
    <b>
      Имя
    </b><br>
    <input type="text" ref="name" required><br>
    <b>
      Почта
    </b><br>
    <input type="email" ref="email" required><br>
    <b>
      Пароль
    </b><br>
    <input type="passwordFieldType" ref="password" pattern=".{5,40}" required><br>
    <p>
      <small>
        Размер пароля 5-40 символов.
      </small>
    </p>
    <button @click="postData"><router-link to="profile">зарегистрироваться</router-link></button>
  </form>
  </body>
</template>

<script>
const baseURL = "http://localhost:64531/api";

export default{
  name: "signUp",
  data() {
    return{
      postResult: null
    }
  },
  methods: {
    formatResponse(res) {
      return JSON.stringify(res,null,2);
    },
    async postData() {
        const postData = {
          name: this.$refs.name.value,
          email: this.$refs.email.value,
          password: this.$refs.password.value,
          date: "15.06.2045"
        };
        try {
          const res = await fetch(`${baseURL}/account`, {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
          });

          if (!res.ok) {
            const message = `error: ${res.status} - ${res.statusText}`;
            throw new Error(message);
          }
          // localStorage.setItem('user', JSON.stringify(postData));

          const data = await res.json();

          const result = {
            status: res.status + "-" + res.statusText,
            headers: {
              "Content-Type": res.headers.get("Content-Type"),
              "Content-Length": res.headers.get("Content-Length"),
            },
            data: data,
          };
          localStorage.setItem('user', JSON.stringify(data));
          this.postResult = this.formatResponse(result);
        } catch (err) {
          this.postResult = err.message;
        }
    },
  }
};
</script>
