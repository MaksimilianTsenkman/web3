<template>
    <div class="A-Post">
      <div class="form">
        <h3>A Post</h3>
        <label for="body">Body: </label>
        <input name="body" type="text" id="body" required v-model="post.body" />
      </div>
      <div class="button-container">
        <button @click="updatePost" class="updatePost">Update Post</button>
        <button @click="deletePost" class="deletePost">Delete Post</button>
      </div>
    </div>
</template>


<script>
export default {
  name: "APost",
  data() {
    return {
      post: {
        body: "",
      },
    };
  },
  methods: {
    fetchAPost(id) {
      fetch(`http://localhost:3000/api/posts/${id}`)
        .then((response) => response.json())
        .then((data) => (this.post = data))
        .catch((err) => console.log(err.message));
    },
    updatePost() {
      fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.post),
      })
        .then((response) => {
          console.log(response.data);
          this.$router.push("/api/allposts");
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deletePost() {
      fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          console.log(response.data);
          this.$router.push("/api/allposts");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.fetchAPost(this.$route.params.id);
  },
};
</script>


<style scoped>
.A-Post {
  text-align: center;
  margin-top: 30px;
}

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
  color: #333;
  text-align: center;
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
  color: blue;
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
  margin-top: 20px;
}

button:hover {
  background: #0099ff;
}

.updatePost {
    margin-right: 20px;
}
</style>