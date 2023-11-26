<template>
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
</template>


<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      message: 'Hello from Vue!',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "@/css/posts.css";
</style>
