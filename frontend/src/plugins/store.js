import {createStore} from "vuex";

export default createStore({
    state:{
        storeProducts: [],
        cart: []
    },
    getters:{
      CART(state) {
          return state.cart
      }
    },
    mutations: {
        pushProduct(state, product) {
            state.cart.push(product);
        },
        removeProduct(state, product){
            state.cart = state.cart.filter(inList => inList.name !== product.name);
        }
    },
    actions:{

        addToCart ({commit}, product) {
            // асинхронные действия ...
            // когда эти действия будут выполнены,
            // будет вызвана мутация
            commit('pushProduct', product)
        },
        removeFromList({commit}, product){
            commit('removeCountry', product)
        }

    },
    computed:{

    }
})