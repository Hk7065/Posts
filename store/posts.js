import { defineStore } from "pinia";
import { ref } from "vue";

export const usePostStore = defineStore("postStore", () => {
  const posts = ref([]);
  const loading = ref(false);
  const error = ref(null);

  // Fetch posts with 15-minute cache
  const fetchPosts = async () => {
    loading.value = true;

    try {
      const cachedData = JSON.parse(localStorage.getItem("posts_cache"));
      const now = Date.now();

      // Check if cache exists and is still valid (within 15 minutes)
      if (cachedData && now - cachedData.timestamp < 15 * 60 * 1000) {
        console.log("Using cached posts");
        posts.value = cachedData.data;
      } else {
        console.log("Fetching new posts from API");
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) throw new Error("Failed to fetch posts");

        posts.value = await response.json();

        // Store posts in localStorage with timestamp
        localStorage.setItem(
          "posts_cache",
          JSON.stringify({ data: posts.value, timestamp: now })
        );
      }
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  return { posts, loading, error, fetchPosts };
});
