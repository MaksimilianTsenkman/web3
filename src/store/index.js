import { createStore } from 'vuex'

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
    likePost(state, postIndex) {
      const post = JSON.parse(JSON.stringify(state.posts))[postIndex]
      if (post) {
        if (post.likes !== undefined) {
          post.likes++;
          state.posts.splice(postIndex, 1, post);
        } else {
          console.error("Post at index", "does not have a 'likes' property");
        }
      } else {
        console.error("Post at index", "does not exist");
      }
    },
    resetLikes(state) {
      state.posts.forEach((post) => {
        post.likes = 0;
      });
    }
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
        const updatedData = jsonData.posts.map((post) => {
          return {
            ...post,
            likes: 0,
          };
        });
        commit('setPosts', updatedData);
        // createPosts(updatedData);
      } catch (error) {
        console.error('Error:', error);
        commit('setPosts', []);
      }
    },
  },
  modules: {
  }
})
