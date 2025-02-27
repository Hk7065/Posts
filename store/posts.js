import { defineStore } from "pinia";
import { ref } from "vue";

export const usePostStore = defineStore("postStore", () => {
  const posts = ref([]);
  const loading = ref(false);
  const error = ref(null);

  // Fetch posts from API
  const fetchPosts = async () => {
    loading.value = true;
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!response.ok) throw new Error("Failed to fetch posts");
      posts.value = await response.json();
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  return { posts, loading, error, fetchPosts };
});
