<template>
  <div class="container mx-auto p-6 flex flex-col items-center">
    <button 
      @click="navigateTo('/posts')" 
      class="mb-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition"
    >
      Back to Posts
    </button>

    <div v-if="post" class="w-full md:w-3/4 lg:w-1/2 bg-white p-6 rounded-lg shadow-lg">
      <h1 class="text-4xl font-extrabold text-center text-gray-900">{{ post.title }}</h1>
      <p class="text-gray-700 mt-4 text-lg leading-relaxed">{{ post.body }}</p>
    </div>

    <div v-else>
      <p class="text-red-500 text-lg">Loading post...</p>
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
