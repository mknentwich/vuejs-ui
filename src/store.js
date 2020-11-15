import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testScores: [
      {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        id: 1,
        category: 'Polka',
        difficulty: 2,
        instrumentation: 'Blasorchester',
        price: 49,
        title: 'Eine letzte Runde',
      },
      {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        id: 2,
        category: 'Polka',
        difficulty: 4,
        instrumentation: 'Ensemble',
        price: 39,
        title: 'Eine letzte Runde',
      }
    ],
    cartItems: []
  },
  getters: {
    getTestScores: state => {
      return state.testScores
    },
    getCartItems: state => {
      return state.cartItems
    },
    getScoreById: (state) => (id) => {
      return state.testScores.find(item => item.id === id)
    },
    getScorePriceById: (state) => (id) => {
      return (state.testScores.find(item => item.id === id)).price
    },
    getCartTotal: (state, getters) => {
      let total = 0
      state.cartItems.forEach( (cartItem) => {
        total += cartItem.quantity * getters.getScorePriceById(cartItem.id)
      })
      return total
    }
  },
  mutations: {
    addToCart: function(state, id) {
      if (!state.cartItems.filter(item => item.id === id).length) {
        // if item is not yet in cart, add new line item
        let cartItem = { quantity: 1, id: id }
        state.cartItems.push(cartItem)
      } else {
        // if item already is in cart, increase quantity by one
        let cartItemRef = state.cartItems.filter(item => item.id === id)
        Vue.set(cartItemRef[0], 'quantity', cartItemRef[0].quantity + 1)
      } 
    },
    removeFromCart: function(state, id) {
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
