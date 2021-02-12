import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartItems: []
  },
  getters: {
    getCartItemsIdAndQuantity: state => {
      let cartItems = []
      state.cartItems.forEach( (cartItem) => {
        cartItems.push({id: cartItem.id, quantitiy: cartItem.quantity})
      })
      return cartItems
    },
    getScoreById: (state) => (id) => {
      return state.testScores.find(item => item.id === id)
    },
    getCartTotal: (state) => {
      let total = 0
      state.cartItems.forEach( (cartItem) => {
        total += cartItem.quantity * cartItem.price
      })
      return total
    }
  },
  mutations: {
    addToCart: function(state, submittedCartItem) {
      if (!state.cartItems.filter(item => item.id === submittedCartItem.id).length) {
        // if item is not yet in cart, add new line item
        submittedCartItem.quantity = 1
        state.cartItems.push(submittedCartItem)
      } else {
        // if item already is in cart, increase quantity by one
        this.incrementQuantityOfCartItem(submittedCartItem.id)
      } 
    },
    incrementQuantityOfCartItem: function(state, id) {
      let cartItemRef = state.cartItems.filter(item => item.id === id)
      Vue.set(cartItemRef[0], 'quantity', cartItemRef[0].quantity + 1)
    },
    decrementQuantityOrRemoveCartItem: function(state, id) {
      // check if item is in cart
      let index = state.cartItems.findIndex(item => item.id === id)

      if (index !== -1) {
        let quantity = state.cartItems[index].quantity
        
        if (quantity > 1) {
          // if item quantity is > 1, decrease quanitity by one
          Vue.set(state.cartItems[index], 'quantity', quantity - 1)
        } else {
          // else remove item entirely
          state.cartItems.splice(index ,1)
        }
      }
    }
  },
  actions: {

  }
})
