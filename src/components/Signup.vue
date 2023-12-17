<template>
  <div class="form">
    <h3>SignUp</h3>
    <label for="email">Email</label>
    <input type="email" name="email"  required v-model="email">
    <label for="password">Password</label>
    <input type="password" name="password" required v-model="password">
    <button @click="SignUp" class="SignUp">SignUp</button>
  </div>
</template>

<script>
export default {
name: "SignUp", 

data: function() {
    return {
   email: '',
   password: '',
  }
  },
  methods: {


SignUp() {
      var data = {
        email: this.email,
        password: this.password
      };
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
          credentials: 'include', //  Don't forget to specify this if you need cookies
          body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((data) => {
      console.log(data);
      this.$router.push("/");
      //location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
    },
  }, 
  }
</script>

<style scoped>
/* Updated CSS for SignUp Page */
.form {
  max-width: 420px;
  margin: 30px auto;
  background: #f5f5f5;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h3 {
  text-align: center;
  color: #086e6e;
}

label {
  color: #086e6e;
  display: inline-block;
  margin: 15px 0;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input {
  display: block;
  padding: 10px;
  width: calc(100% - 20px);
  margin: 8px 0 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s ease-in-out;
}

input:focus {
  outline: none;
  border-color: dodgerblue;
}

button {
  background: dodgerblue;
  border: 0;
  padding: 12px 24px;
  color: white;
  border-radius: 20px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
}

button:hover {
  background: #0099ff;
}

</style>