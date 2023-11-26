<template>
    <header class="header">
      <ul class="nav">
        <li><a href="index.html" id="home">home</a></li>
        <li><a href="addPost.html">add post</a></li>
      </ul>
      <div class="user-profile">
        <a id="logo" class="logo" href="login.html"><img src="me.jpg" width="60" height="60" alt="My picture" id="user-photo"></a>
        <div class="dropdown" id="dropdown">
          <ul>
            <li><a href="#">John Doe</a></li>
            <li><a href="#">john.doe@ut.ee</a></li>
            <li><a href="#">logout</a></li>
          </ul>
        </div>
      </div>
    </header>

    <main>
      <div class="post">
        <ul class="post-nav">
          <a class="post-logo" href="#"><img src="./images/me.jpg" width="50" height="50" alt="My picture"></a>
          <p class="date"> October 22, 2022</p>
        </ul>
        <img class="post-img" src="./images/tartu_2024.jpg" alt="Tartu 2024 sign"/>
        <p class="title"> Tartu 2022 </p>
        <a href="#"><img id="like" src="./images/like.png" alt="like icon"></a>
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
import { fetchData, createPosts } from './get_data_api.js';
export default {
  name: 'HelloWorld',
  data() {
    return {
      message: 'Hello from Vue!',
    };
  },
  methods: {
    async fetchData() {
      try {
        this.dataArray = await fetchData();
        this.createPosts();
      } catch (error) {
        console.error('Error:', error);
      }
    },
    createPosts() {
      const container = document.querySelector("#posts-container");
      createPosts(this.dataArray, container);
    },
  },
  mounted() {
    this.fetchData();
  },
}
</script>

<style scoped>
@import "@/css/main.css";
</style>
