<template>
  <div @click="navigateToPost" class="p-4 border rounded-lg shadow-md cursor-pointer hover:bg-gray-100">
    <h2 class="text-lg font-semibold">{{ post.title }}</h2>
    <p class="text-sm text-gray-600">{{ post.body.substring(0, 100) }}...</p>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

defineProps({
  post: Object
});

const router = useRouter();
const navigateToPost = () => {
  router.push(`/posts/${post.id}`);
};
</script>
