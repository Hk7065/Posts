<template>
  <div class="container mx-auto p-4">
  <h1 class="text-3xl font-extrabold text-center mb-6">Posts</h1>


    <div v-if="loading" class="text-gray-500">Loading posts...</div>

    <div v-else-if="posts.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <PostCard 
        v-for="post in posts" 
        :key="post.id" 
        :post="post"
        @click="navigateTo(`/posts/${post.id}`)" 
      />
    </div>

    <div v-else class="text-red-500">Failed to load posts. Please try again.</div>
  </div>
</template>

<script setup>
import { usePostStore } from "@/store/posts";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import PostCard from "@/components/PostCard.vue";

const postStore = usePostStore();
const { posts, loading, error } = storeToRefs(postStore);

onMounted(() => {
  postStore.fetchPosts();
});
</script>
