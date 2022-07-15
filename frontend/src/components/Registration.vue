<template>
  <div class="modal fade" id="registration" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content rounded-4 shadow">
        <div class="modal-header p-5 pb-4 border-bottom-0">
          <!-- <h5 class="modal-title">Modal title</h5> -->
          <h2 class="fw-bold mb-0">Регистрация</h2>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body p-5 pt-0">
          <form action="http://localhost:3000/api/auth/register" method="post" class="">
            <div class="form-floating mb-3">
              <input type="text" class="form-control rounded-3" name="username" id="username" placeholder="Логин">
              <label for="username">Логин</label>
            </div>
            <div class="form-floating mb-3">
              <input type="password" class="form-control rounded-3" name="password" id="password" placeholder="Пароль">
              <label for="password">Пароль</label>
            </div>
            <button type="submit" class="w-100 mb-2 btn btn-lg rounded-3 btn-primary">Регистрация</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewUser"
}
</script>

<style scoped>

</style>