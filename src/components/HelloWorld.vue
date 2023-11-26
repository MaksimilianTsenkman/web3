<template>
  <div class="post">
    <div v-for="post in posts" :key="post.id">
      <ul class="post-nav">
        <a class="post-logo" href="#"><img src="./images/me.jpg" width="50" height="50" alt="My picture"></a>
        <p class="date">{{ post.date }}</p>
      </ul>
      <img class="post-img" :src="post.post_image"/>
      <p class="title">{{ post.post_title }}</p>
      <a class="like">
        <img id="like" src="./images/like.png" alt="like icon" @click="likePost(post)">
      </a>
      <p class="likes">{{ post.likes }} likes</p>
    </div>
  </div>
  <div>
    <button class="reseter" @click="reselLikes">Reset Likes</button>
  </div>
<footer>
      <div>
        <p class="copyright" >Copyright © All Rights Reserved</p>
      </div>
    </footer>
</template>


<script>
export default {
  computed: {
    posts() {
      return this.$store.getters.getPosts;
    },
  },
  methods: {
    likePost(post) {
      this.$store.commit('likePost', post.post_id - 1);
    },
    reselLikes() {
      this.$store.commit('resetLikes');
    }
  },
  mounted() {
    this.$store.dispatch('fetchPosts');
  }
}
</script>

<style scoped>
@import "@/css/main.css";
</style>
