<template>
  <body>
    <div>
      <h1>Создание статьи</h1>
      <form>
        <b>Введите название:</b><br />
        <input type="text" name="name" ref="name" required><br />
          <b> Поле для ввода текста: </b>
        <p><textarea id="text" ref="text"></textarea></p>
        <button @click="postData"><router-link to="/">Опубликовать</router-link></button>
      </form>
    </div>
  </body>
</template>

<script>
const baseURL = "http://localhost:64531/api";
let User = localStorage.getItem('user');

export default{
  name: "createArticle",
  data() {
    return{
      postResult: null,
    }
  },
  methods: {
    formatResponse(res) {
      return JSON.stringify(res,null,2);
    },
    async postData() {
      const postData = {
        Name: this.$refs.name.value,
        Text: this.$refs.text.value,
        Author: User.name
      };
      try {
        const res = await fetch(`${baseURL}/Article`,{
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        });

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

        this.postResult = this.formatResponse(result);
      } catch (err){
        this.postResult = err.message;
      }
    },
  }
};
</script>

<style>
textarea {
  font-family: "b52", arial;
  padding: 10px;
  width: 100%;
  height: 200px;
  box-sizing: border-box;
  font-size: 21px;
}
</style>