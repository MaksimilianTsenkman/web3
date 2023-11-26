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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  font-family: sans-serif;
  box-sizing: border-box;
}

body {
  line-height: 1.6;
  margin: 0;
  font-family: 'Arial', sans-serif;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  color: #121313;
  text-decoration: none;
}

.logo .post-logo {
  margin: 0;
  font-size: 1.1em;
}

.logo {
  margin-right: 10px;
}

.header {
  padding-top: .5em;
  padding-bottom: .5em;
  background-color: #b6b5ba;
  border-radius: 10px;
}

.nav {
  margin-top: 5px;
}

.nav a {
  padding: 10px 15px;
  text-align: center;
  display: block;
  font-size: .99em;
  text-transform: uppercase;
  font-size: 20px;
}

.nav a:hover {
  background-color: #ffffff;
  color: #092747;
}
@media (min-width: 800px) {
  .header,
  .nav {
    display: flex;
  }
  .header {
    flex-direction: column;
    align-items: center;
  }
}

@media (min-width: 1000px) {
  .header {
    flex-direction: row;
    justify-content: space-between;
  }
}

@media (max-width: 800px) {
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .post-img {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 0px;
    padding-top: 0px;
    width: 100%;
    margin: 0;
  }
}

.post {
  max-width:500px;
  margin: 20px auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 50px;
  padding-top: .5em;
  padding-bottom: .5em;
  background-color: #b6b5ba;
  border-radius: 10px;
}

#like {
  width: 30px;
}

.post-img {
  width: 100%;
  display: block;
  align-items: center;
  justify-content: center;
  margin: 0;
}

.post-nav {
  margin-top: 5px;
}

.post-nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.copyright {
  display: flex;
  flex-direction: row;
  justify-content:center;
  margin-top: 200px;
  background-color: #b6b5ba;
}

.dropdown {
  display: none;
  position: absolute;
  top: 50px;
  right: 0;
  background-color: #d0ced8;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: 30px;
}

.user-profile:hover .dropdown {
  display: block;
}

li {
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #ccc;
}

li:last-child {
  border: none;
}

a {
  text-decoration: none;
  color: #333;
  display: block;
}
</style>
