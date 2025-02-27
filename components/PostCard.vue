<template>
  <div 
    class="p-4 border rounded shadow cursor-pointer hover:bg-gray-100" 
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
