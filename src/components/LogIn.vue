<template>
    <div class="form">
      <h3>LogIn</h3>
      <label for="email">Email</label>
      <input type="email" name="email"  required v-model="email">
      <label for="password">Password</label>
      <input type="password" name="password" required v-model="password">
      <div class="container">
        <button @click="LogIn" class="center">Log In</button>
        <button @click='this.$router.push("/signup")' class="center">Sign Up</button>
        </div>
    </div>
  </template>
  
  <script>
  export default {
  name: "LogIn", 
  
  data: function() {
      return {
     email: '',
     password: '',
    }
    },
    methods: {
  
  
  LogIn() {
        var data = {
          email: this.email,
          password: this.password
        };
        fetch("http://localhost:3000/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
            credentials: 'include',
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
        console.log(data);
        //this.$router.push("/");
        location.assign("/");
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

/* Flexbox for button layout */
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.center {
  width: 48%;
}


  </style>