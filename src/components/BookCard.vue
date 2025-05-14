<template>
 <div class="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
   <div class="flex">
     <div class="w-1/3 min-h-[200px]">
       <img
         :src="book.cover"
         :alt="book.title + ' cover'"
         class="w-full h-full object-cover"
         @error="handleImageError"
       />
     </div>
     <div class="w-2/3 p-4 flex flex-col">
       <div class="flex justify-between items-start">
         <h3 class="font-bold text-lg text-gray-800 mb-1">{{ book.title }}</h3>
         <button
           @click.stop="$emit('toggle-favorite')"
           class="text-2xl"
           :class="book.isFavorite ? 'text-yellow-500' : 'text-gray-300'"
         >
           ★
         </button>
       </div>
       <p class="text-gray-600 mb-1">{{ book.author }} ({{ book.year }})</p>

       <div class="flex flex-wrap gap-2 mb-3">
         <span class="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">{{ book.genre }}</span>
         <span v-if="book.pages" class="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">{{ book.pages }} pages</span>
         <span v-if="book.rating" class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">{{ book.rating }} ★</span>
       </div>

       <div v-if="showDetails" class="mb-3">
         <p class="text-sm text-gray-700 mb-2">{{ book.description }}</p>
         <a
           :href="book.link"
           target="_blank"
           class="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
         >
           View on Amazon →
         </a>
       </div>

       <div class="mt-auto flex gap-2">
         <button
           @click="$emit('toggle-details')"
           class="px-3 py-1 bg-indigo-100 text-indigo-600 text-sm rounded-md hover:bg-indigo-200 transition-colors"
         >
           {{ showDetails ? 'Hide Details' : 'Show Details' }}
         </button>
         <button
           @click="$emit('remove-book')"
           class="px-3 py-1 bg-red-100 text-red-600 text-sm rounded-md hover:bg-red-200 transition-colors"
         >
           Remove
         </button>
       </div>
     </div>
   </div>
 </div>
</template>

<script setup>
const props = defineProps({
 book: Object,
 showDetails: Boolean
})

const handleImageError = (event) => {
 event.target.src = 'https://via.placeholder.com/150x200?text=No+Cover'
}

defineEmits(['toggle-favorite', 'remove-book', 'toggle-details'])
</script>
