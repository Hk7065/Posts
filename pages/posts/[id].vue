<template>
  <div class="container mx-auto p-4">
    <button @click="navigateTo('/posts')" class="mb-4 bg-blue-500 text-white p-2 rounded">
      Back to Posts
    </button>

    <div v-if="post">
      <h1 class="text-3xl font-bold">{{ post.title }}</h1>
      <p class="text-gray-700 mt-2">{{ post.body }}</p>
    </div>
    <div v-else>
      <p class="text-red-500">Loading post...</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { usePostStore } from "@/store/posts";
import { computed } from "vue";

const route = useRoute();
const router = useRouter();
const postStore = usePostStore();
const { posts } = storeToRefs(postStore);

const post = computed(() => posts.value.find(p => p.id == route.params.id));


if (!post.value) {
  router.push("/posts"); 
}
</script>
