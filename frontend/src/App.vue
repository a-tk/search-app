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

    <div v-if="searchStore.title">
      <h2> Results </h2>
      <a v-bind:href="searchStore.href"> {{ searchStore.title }} </a>
       <br>
       <br>
       <div v-if="searchStore.desc">
      {{ searchStore.desc }}
      </div>
      <div v-else>
        No description found. 
      </div>
      

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
      if (!keywords.value) return;
      await searchStore.search(keywords.value)
      keywords.value = '';
      
    }

    // @ts-ignore
    window.stores = { searchStore }

    return {
      keywords,

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
