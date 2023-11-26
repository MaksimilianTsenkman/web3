<template>
  <body>
  <header class="header">
    <ul class="nav">
      <li><a href="index.html" id="home">home</a></li>
      <li><a href="addPost.html">add post</a></li>
    </ul>

    <div class="user-profile">
      <a id="logo" class="logo" href="login.html"><img src="res/images/me.jpg" width="60" height="60" alt="My picture" id="user-photo"></a>
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
    <div id="container">
      <form action="#" method="post">
        <ul class="actions">
          <li><h4>Welcome to PostIt</h4></li>
          <li><a href="#" class="create-account">Create an account</a></li>
          <li><p>or</p></li>
          <li><p>Please log in</p></li>
        </ul>
        <div class="form-group">
          <label for="email">
            <input required id="email" class="input" type="email" placeholder="Email">
          </label>
        </div>
        <div class="form-group">
          <label for="password">
            <input required id="password" class="input" type="password" placeholder="Password">
          </label>
        </div>
        <ul class="actions">
          <li>
            <a href="index.html"><button type="submit" class="login-button">Log in</button></a>
          </li>
          <li>
            <a href="#" class="forgot-password">Forgot password?</a>
          </li>
        </ul>
      </form>
    </div>
  </main>
  <footer>
      <div>
        <p class="copyright" >Copyright © All Rights Reserved</p>
      </div>
    </footer> 
  </body>
</template>


<script>
export default {
  name: 'SignupView',
  data() {
    return {
      message: 'Hello from Vue!',
    };
  },
};
</script>

<style scoped>
@import "@/css/signup.css";
</style>
