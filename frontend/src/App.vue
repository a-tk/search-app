<template>
  <Layout>
    <div>

      <h2>Search for Articles</h2>

      <form @submit.prevent="executeSearch">
      <!-- <form @submit.prevent="addItemToCart" data-testid="search"> -->
        <input type="text" v-model="keywords" />
        <button>Search</button>
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

    const keywords = ref('')

    async function executeSearch() {
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
