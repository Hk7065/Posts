import { defineStore } from 'pinia';

export const usePostStore = defineStore('posts', {
  state: () => ({
    posts: [],
    lastFetched: 0, 
  }),

  actions: {
    async fetchPosts() {
      const now = Date.now();

      // Check if cached data is valid (15 min)
      if (this.posts.length && now - this.lastFetched < 15 * 60 * 1000) {
        console.log("Using cached posts ✅");
        return;
      }

      console.log("Fetching new posts from API 🔄");
      try {
        const response = await fetch('https://dummyjson.com/posts');
        const data = await response.json();
        this.posts = data.posts;
        this.lastFetched = now;
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }
  }
});
