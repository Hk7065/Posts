<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 class="text-3xl font-bold mb-6">Welcome to My Nuxt App</h1>
    
    <NuxtLink to="/posts">
      <button class="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
        Go to Posts
      </button>
    </NuxtLink>
    
    <NuxtPage />
  </div>
</template>
