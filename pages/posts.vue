<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Posts</h1>
    <div v-if="posts.length">
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
    <div v-else>
      <p>Loading posts...</p>
    </div>
  </div>
</template>

<script setup>
import { usePostStore } from "@/store/posts";
import { storeToRefs } from "pinia";
import PostCard from "@/components/PostCard.vue";

const postStore = usePostStore();
postStore.fetchPosts();

const { posts } = storeToRefs(postStore);
</script>
