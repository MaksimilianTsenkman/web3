<template>
  <main>
    <div class="container">
      <form action="#" method="post">
        <div class="form-group">
          <label for="postBodyName">Post <br> body</label>
          <textarea placeholder="textarea" id="postBodyName" name="postBodyName" rows="4"></textarea>
        </div>
        <div class="form-group">
          <label for="file">Select <br> file</label>
          <input type="file" id="file" name="file">
        </div>
        <div class="actions">
          <a href="index.html"><button type="submit" class="btn">Add post</button></a>
        </div>
      </form>
    </div>
  </main>
  <footer>
      <div>
        <p class="footer" >Copyright © All Rights Reserved</p>
      </div>
    </footer>
</template>


<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      post: {
        body: "",
        date: "",
      },
    };
  },
  methods: {
    addPost() {
      var today = new Date().toISOString().split('T')[0];
      this.post.date = today;

      var data = {
        title: this.post.title,
        body: this.post.body,
        date: today,
        link: this.post.link,
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
            this.$router.push("/api/allposts");
          })
          .catch((e) => {
            console.log(e);
            console.log("error");
          });
    },
  },
  mounted() {
    this.addPost();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "@/css/posts.css";
</style>
