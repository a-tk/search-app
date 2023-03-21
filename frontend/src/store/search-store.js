import { defineStore, acceptHMRUpdate } from 'pinia'
import { api } from'../api/api';

export const useSearchStore = defineStore({
  id: 'searchStore',
  state: () => ({
    title: '',
    href: '',
    desc: ''
  }),
  getters: {
      getTitle: (state) => state.title,
      getHref: (state) => state.href,
      getDesc: (state) => state.desc,
  },
  actions: {

    async search(keywords) {

      console.log('Searching', keywords)

      const results = await api().search(keywords);
      //set the model with the results
      this.setTitle(results.title);
      this.setHref(results.fullurl);
      this.setDesc(results.extract);
    },

    setTitle(title) {
      this.title = title;
    },
    setHref(href) {
      this.href = href;
    },
    setDesc(desc) {
      this.desc = desc;
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSearchStore, import.meta.hot))
}
