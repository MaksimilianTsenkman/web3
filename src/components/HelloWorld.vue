<template>
    <main>
      <div class="post">
        <ul class="post-nav">
          <a class="post-logo" href="#"><img src="./images/me.jpg" width="50" height="50" alt="My picture"></a>
          <p class="date"> October 22, 2022</p>
        </ul>
        <img class="post-img" src="./images/tartu_2024.jpg" alt="Tartu 2024 sign"/>
        <p class="title"> Tartu 2022 </p>
        <div class="like-bar">
          <a class="like" href="#" @click="likePost">
            <img id="like" src="./images/like.png" alt="like icon">
          </a>
        <p class="likes"> 0 likes </p>
        </div>
        </div>
      <div id="posts-container"></div>
    </main>
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
    likePost() {
      const post = this.posts[0];
      post.likes++;
      this.$store.dispatch('likePost', post);
    },
  },
  mounted() {
    this.$store.dispatch('fetchPosts');
  }
}
</script>

<style scoped>
@import "@/css/main.css";
</style>
