<template>
  <div class="form">
    <h3>Add a Post</h3>
    <label for="body">Body: </label>
    <input name="body" type="text" id="body" required v-model="post.body" />
    <button @click="addPost" class="addPost">Add Post</button>
  </div>
</template>

<script>
export default {
  name: "AddPost",
  data() {
    return {
      post: {
        body: "",
      },
    };
  },
  methods: {
    addPost() {
      var today = new Date().toISOString().split('T')[0];
      this.post.date = today;
      var data = {
        body: this.post.body,
        date: today,
      };
      fetch("http://localhost:3000/addPost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then((response) => {
        console.log(response.data);
        // redirect to /allposts view
        this.$router.push("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
    },
  },
};
</script>

<style scoped>
.form {
  max-width: 420px;
  margin: 30px auto;
  background: #f5f5f5;
  text-align: center;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h3 {
  color: #333;
}

label {
  color: #555;
  display: block;
  margin-bottom: 8px;
  font-size: 0.9em;
  text-transform: uppercase;
}

input {
  display: block;
  padding: 10px;
  width: calc(100% - 20px);
  margin-bottom: 20px;
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