<template>
  <span>
    <v-btn v-if="!buttonClicked" variant="flat" color="primary" @click="addToCartAndShowMsg">
      <v-icon left>mdi-cart-plus</v-icon>
      zum Warenkorb
    </v-btn>
    <v-btn v-else variant="outlined" class="primary--text font-weight-bold">
      <v-icon left>mdi-check</v-icon>
      gute Wahl!
    </v-btn>
  </span>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'AddToCartBtn',
  props: {
    scoreId: {
      type: Number,
      required: true, // Ensure scoreId is required
    },
  },
  setup(props) {
    const store = useStore();
    const buttonClicked = ref(false);

    const addToCartAndShowMsg = () => {
      fetchScoreMetadataAndAddToCart();
      buttonClicked.value = true;

      setTimeout(() => {
        scrollToTop();
      }, 1000);

      setTimeout(() => {
        buttonClicked.value = false;
      }, 2000);
    };

    const fetchScoreMetadataAndAddToCart = () => {
      fetch(`${process.env.VUE_APP_API_URL}/catalogue/scores/${props.scoreId}`)
        .then((response) => response.json())
        .then((json) => {
          if (json) {
            const cartItem = {
              id: props.scoreId,
              title: json.title,
              price: json.price,
              groupType: json.groupType,
            };
            store.commit('addToCart', cartItem);
          }
        })
        .catch((error) => {
          console.error('Error fetching score metadata:', error);
        });
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return {
      buttonClicked,
      addToCartAndShowMsg,
    };
  },
};
</script>

<style scoped>
.box-shadow {
  box-shadow: 5px 5px 0px #d5d5d5 !important;
  height: 100%;
}
</style>