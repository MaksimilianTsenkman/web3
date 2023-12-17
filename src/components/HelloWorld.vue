<template>
  <div class="container">
    <!--v-if = "authResult" has to be added to the button-->
    <button @click="Logout" class="center logout-button">Logout</button>
  </div>
  <div class="post">
    <div v-for="post in posts" :key="post.id">
      <ul class="post-nav">
        <a class="post-logo" href="#"><img src="./images/me.jpg" width="50" height="50" alt="My picture"></a>
        <p class="date">{{ post.date }}</p>
      </ul>
      <img class="post-img" :src="post.post_image"/>
      <p class="title">{{ post.post_title }}</p>
      <div class="like-bar">
      <a class="like">
        <img id="like" src="./images/like.png" alt="like icon" @click="likePost(post)">
      </a>
      <p class="likes">{{ post.likes }} likes</p>
    </div>
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
  data: function(){
    //authResult: auth.authenticated()
  },
  computed: {
    posts() {
      return this.$store.getters.getPosts;
    },
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
      });
    },
  },
  mounted() {
    this.$store.dispatch('fetchPosts');
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then(data => this.posts = data)
        .catch(err => console.log(err.message))
  }
}
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
</style>