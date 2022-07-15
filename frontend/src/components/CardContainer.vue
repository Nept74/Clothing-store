<template>
  <div
      class="album py-5 bg-light">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col"
             v-for="product in products" :key='product.title'>
          <div class="card shadow-sm">
            <img :src=product.img>

            <div class="card-body">
              <h4>{{ product.title }}</h4>
              <p class="card-text">{{ product.description}}}</p>
              <div class="d-flex justify-content-between align-items-center">
                  <button type="button" class="btn btn-primary" id="{{ product.id }}" onclick="addToCart">Добавить в корзину</button>
                <span>Стоимость: {{product.price}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "CardContainer",
  props: {
    products: {
      type: Object,
      required: true
    },
    addToCart:{
      type: Function
    }
  }
}
</script>

<style scoped>

</style>
