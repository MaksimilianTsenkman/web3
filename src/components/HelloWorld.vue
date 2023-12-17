<template>
  <div id="app">
    <div class="container">
    <button @click="Logout" class="center logout-button">Logout</button>
  </div>
  <div class="post">
    <div v-for="post in posts" :key="post.id">
      <ul class="post-nav">
        <a class="post-logo" href="#"><img src="./images/me.jpg" width="50" height="50" alt="My picture"></a>
        <p class="date">{{ post.date }}</p>
      </ul>
      <img class="post-img" :src="post.post_image"/>
      <p class="title">{{ post.body }}</p>
    </div>
  </div>
  <div class="button-container">
    <button class="delete-all" @click="deleteAllPosts">Delete All Posts</button>
    <router-link to="/addPost" class="add-post">Add Post</router-link> 
  </div>
  </div>
  <footer class="footer">
      <p>Copyright © All Rights Reserved</p>
  </footer>
</template>


<script>
import auth from "../auth";

export default {
  name: "AllPosts",
  data() {
    return {
      posts: [],
      authResult: auth.authenticated()
    };
  },
  methods: {
    Logout() {
      fetch("http://localhost:3000/auth/logout", {
        credentials: 'include', //  Don't forget to specify this if you need cookies
      })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            console.log('jwt removed');
            //console.log('jwt removed:' + auth.authenticated());
            this.$router.push("/login");
            //location.assign("/");
          })
          .catch((e) => {
            console.log(e);
            console.log("error logout");
          })
    },
    deleteAllPosts() {
      fetch("http://localhost:3000/posts/", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          console.log(response.data);
          //this.posts = [];
        })
        .catch((e) => {
          console.log(e);
        });
    },
    fetchPosts() {
      fetch(`http://localhost:3000/posts/`)
          .then((response) => response.json())
          .then((data) => (this.posts = data))
          .catch((err) => console.log(err.message));
    },
  },
  mounted() {
    this.fetchPosts();
    console.log("mounted");
  },
};
</script>

<style scoped>
@import "@/css/main.css";
.container {
  display: flex;
  justify-content: center;
}

.center {
  margin: auto;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  margin: 10px auto;
  width: 30%; 
}

.logout-button {
  background-color: dodgerblue;
  color: white;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.delete-all,
.add-post {
  background-color: dodgerblue;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  margin-right: 10px;
}
#app {
    flex-direction: column;
    min-height: 100vh;
}
  
.footer {
    background-color: #b6b5ba;
    color: white;
    text-align: center;
    padding: 20px 0;
    width: 100%;
    margin-top: 30px;
  }
</style>