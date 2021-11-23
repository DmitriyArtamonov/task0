<template>
  <body  class="info">
    <h1>
      Регистрация
    </h1>
    <form action="">
      <b>
        Имя
      </b><br>
      <input type="text" id="usrname" required><br>
      <b>
        Почта
      </b><br>
      <input type="email" id="email" required><br>
      <b>
        Пароль
      </b><br>
      <input :type="passwordFieldType" v-model="password" pattern=".{5,40}" required><br>
      <button type="password" @click="switchVisibility">Показать/Скрыть</button>
      <p>
        <small>
          Размер пароля 5-40 символов.
        </small>
      </p>
      <input type="submit" value="Регистрация">
    </form>
  </body>
</template>

<script>
export default{
data() {
  return {
    password: "",
    passwordFieldType: "password"
  };
},
methods: {
  switchVisibility() {
    this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
  }
}
};
</script>