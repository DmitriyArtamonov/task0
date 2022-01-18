<template>
  <body class="info">
    <div>
      <h1>Вход</h1>
      <form>
        <b> Почта </b><br />
        <input
            type="email"
            name="email"
            ref="email"
        ><br />
        <b> Пароль </b><br />
        <input
            type="password"
            ref="password"
        ><br />
        <button type="submit" @click="getData"><router-link to="/profile">Войти</router-link></button>
      </form>
    </div>
  </body>
</template>

<script>
import {email, required, minLength} from 'vuelidate/lib/validators'
const baseURL = "http://localhost:64531/api";

export default{
  name: "login",
  data() {
    return{
      getResult: null
    }
  },
  Data: () =>({
    email: '',
    password: ''
  }),
  validations: {
    email: {email, required},
    password: {email, required,minLength: minLength(5)}
  },
  methods: {
    formatResponse(res) {
      return JSON.stringify(res,null,2);
    },
    async getData() {
      try {
        let url = new URL(`${baseURL}/account`);
        const params = {
          email: this.$refs.email.value,
          password: this.$refs.password.value,
        }

        url.search = new URLSearchParams(params);

        const res = await fetch(url);

        if(!res.ok) {
          const message = `error: ${res.status} - ${res.statusText}`;
          throw new Error(message);
        }

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
        this.getResult = this.formatResponse(result);
      } catch (err){
        this.getResult = err.message;
      }
    },
  }
};
</script>
