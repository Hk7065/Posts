<template>
  <div class="container mx-auto p-4">
    <button @click="navigateTo('/posts')" class="mb-4 bg-blue-500 text-white p-2 rounded">
      Back to Posts
    </button>
    <div v-if="post">
      <h1 class="text-2xl font-bold">{{ post.title }}</h1>
      <p class="text-gray-700">{{ post.body }}</p>
    </div>
    <div v-else>
      <p>Loading post...</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

const route = useRoute();
const post = ref(null);

onMounted(async () => {
  const res = await fetch(`https://dummyjson.com/posts/${route.params.id}`);
  post.value = await res.json();
});
</script>
