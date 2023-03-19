<template>
  <Layout>
    <div>

      <h2>Hello {{ user.name }}</h2>

      <form @submit.prevent="addItemToCart">
      <!-- <form @submit.prevent="addItemToCart" data-testid="search"> -->
        <input type="text" v-model="itemName" />
        <button>Add</button>
      </form>

      <form @submit.prevent="buy">
        <ul data-testid="items">
          <li v-for="item in cart.items" :key="item.name">
            {{ item.name }} ({{ item.amount }})
            <button
              @click="cart.removeItem(item.name)"
              type="button"
            >X</button>
          </li>
        </ul>

        <button :disabled="!user.name">Buy</button>
        <button
          :disabled="!cart.items.length"
          @click="clearCart"
          type="button"
          data-testid="clear"
        >Clear the cart</button>
      </form>
    </div>
  </Layout>
</template>

<script>
import Layout from './layouts/default.vue'

import { defineComponent, ref } from 'vue'
import { useSearchStore } from './store/search-store'

export default defineComponent({
  components: { Layout },

  setup() {
    const searchStore = useSearchStore()

    const itemName = ref('')

    async function executeSearch(keywords) {
      const n = await searchStore.search(keywords)
    }

    // @ts-ignore
    window.stores = { searchStore }

    return {
      searchStore,
      executeSearch,
    }
  },
})
</script>

<style scoped>
img {
  width: 200px;
}

button,
input {
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
