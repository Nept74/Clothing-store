<template>
  <button type="button" class="cart btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    <img class="cart-img" alt="cart image"
         src="https://img.icons8.com/pastel-glyph/344/shopping-trolley--v2.png">
  </button>

  <!-- Модальное окно -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Корзина</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
        </div>
        <div v-for="el in this.$store.getters.cart" :key="el.id" class="modal-body">
          <p>элемент</p>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
          <button type="button" class="btn btn-primary">Перейти к оплате</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: "ProductCart",

  computed: {
    ...mapGetters([
        'CART'
    ])
  }
}
</script>

<style scoped>
  .cart{
    position: fixed;
    right: 30px;
    bottom: 30px;
    width: 60px;
    height: 60px;
    border-radius: 30px;
  }
  .cart-img{
    width: 90%;
    height: 80%;
  }
</style>