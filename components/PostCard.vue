<template>
  <div 
    class="p-6 border rounded-lg shadow-md cursor-pointer hover:bg-blue-100 hover:shadow-lg transition-all duration-300 mb-2" 
    @click="$emit('click')"
  >
    <h2 class="text-xl font-bold">{{ post.title }}</h2>
    <p class="text-gray-600">{{ post.body }}</p>
  </div>
</template>

<script setup>
defineProps(["post"]);
defineEmits(["click"]);
</script>
