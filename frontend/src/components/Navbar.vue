<template>
  <div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <h3 class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <a href="/" class="nav-link px-2 link-secondary">Магазин одежды</a>
      </h3>

      <div class="col-md-3 text-end">
        <button type="button" data-bs-toggle="modal" data-bs-target="#login" class="btn btn-outline-primary me-2">Войти</button>
        <button type="button" data-bs-toggle="modal" data-bs-target="#registration" class="btn btn-primary">Регистрация</button>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
