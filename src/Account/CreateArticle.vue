<template>
  <body>
    <div>
      <h1>Создание статьи</h1>
      <form action="">
        <p>
          <b>
            Выберете раздел:
          </b>
        </p>
          <select required="required">
            <option>История России</option>
          </select>
        <p>
          <b>
            Поле для ввода текста:
          </b>
        </p>
        <p><textarea></textarea></p>
        <button>Опубликовать</button>
      </form>
    </div>
  </body>
</template>

<style>
textarea {
  font-family: 'b52', arial;
  padding: 10px;
  width: 100%;
  height: 200px;
  box-sizing: border-box;
  font-size: 21px;
}
</style>