<template>
  <body>
  <header>
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
