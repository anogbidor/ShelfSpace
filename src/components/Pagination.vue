<template>
 <div v-if="totalPages > 1" class="mt-6 flex justify-center">
   <nav class="inline-flex rounded-md shadow">
     <button
       @click="$emit('change-page', currentPage - 1)"
       :disabled="currentPage === 1"
       class="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
     >
       Previous
     </button>

     <button
       v-for="page in totalPages"
       :key="page"
       @click="$emit('change-page', page)"
       class="px-4 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium"
       :class="page === currentPage ? 'text-indigo-600 bg-indigo-50' : 'text-gray-500 hover:bg-gray-50'"
     >
       {{ page }}
     </button>

     <button
       @click="$emit('change-page', currentPage + 1)"
       :disabled="currentPage === totalPages"
       class="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
     >
       Next
     </button>
   </nav>
 </div>
</template>

<script setup>
const props = defineProps({
 totalPages: Number,
 currentPage: Number
})

defineEmits(['change-page'])
</script>