<template>
  <div class="home">
    <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/AddPost.vue'

export default {
  name: 'AddPost',
  components: {
    HelloWorld
  }
}
</script>
