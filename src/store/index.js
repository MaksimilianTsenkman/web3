import { createStore } from 'vuex'
import { createPosts } from "@/components/get_data_api";

export default createStore({
  state: {
    posts: [],
  },
  getters: {
    getPosts: (state) => state.posts,
  },
  mutations: {
    setPosts(state, payload) {
      state.posts = payload;
    },
  },
  actions: {
    async fetchPosts({ commit }) {
      try {
        const response = await fetch('https://api.npoint.io/ac825739cb1f2120f5e7');
        if (!response.ok) {
          throw new Error('Error retrieving data from the server');
        }
        const textData = await response.text();
        const jsonData = JSON.parse(textData);
        commit('setPosts', jsonData);
        createPosts(jsonData.posts);
      } catch (error) {
        console.error('Error:', error);
        commit('setPosts', []);
      }
    },
  },
  modules: {
  }
})
