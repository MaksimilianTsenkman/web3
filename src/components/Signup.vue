<template>
  <body>
  <main>
    <div id="container">
      <form action="#" method="post" @submit.prevent="submitForm">
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
            <input
             required 
             id="password" 
             class="input" 
             type="password" 
             placeholder="Password"
             v-model="password"
             @input="validatePassword"
             >
          </label>
          <p v-if="passwordErrorMessage" class="password-error">{{ passwordErrorMessage }}</p>
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
      //message: 'Hello from Vue!',
      password: '',
      passwordErrorMessage: '',
    };
  },
  methods: {
    submitForm() {
    },

    validatePassword() {
      const minLength = /^.{8,}$/;
      const maxLength = /^.{0,14}$/;
      const uppercase = /[A-Z]/;
      const lowercase = /[a-z].*[a-z]/;
      const numeric = /\d/;
      const startsWithUppercase = /^[A-Z]/;
      const includesUnderscore = /_/;

      let errors = []; // Store error messages for individual conditions

      if (!minLength.test(this.password)) {
        errors.push('Minimum length: 8 characters.');
      }
      if (!maxLength.test(this.password)) {
        errors.push('Maximum length: 14 characters.');
      }
      if (!uppercase.test(this.password)) {
        errors.push('At least one uppercase letter.');
      }
      if (!lowercase.test(this.password)) {
        errors.push('At least two lowercase letters.');
      }
      if (!numeric.test(this.password)) {
        errors.push('At least one numeric value.');
      }
      if (!startsWithUppercase.test(this.password)) {
        errors.push('Should start with an uppercase letter.');
      }
      if (!includesUnderscore.test(this.password)) {
        errors.push('Should include the character "_".');
      }

      if (errors.length > 0) {
        this.passwordErrorMessage = `Password is not valid. Conditions: ${errors.join(' ')}`;
      } else {
        this.passwordErrorMessage = ''; // Clear the error message if the password is valid
      }
  }
 }
};
</script>

<style scoped>
@import "@/css/signup.css";
</style>
