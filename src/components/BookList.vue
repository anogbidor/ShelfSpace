<template>
 <div>
   <div class="flex justify-between items-center mb-4">
     <h2 class="text-xl font-semibold text-gray-800">Your Books</h2>
     <span class="text-sm text-gray-500">{{ books.length }} book{{ books.length !== 1 ? 's' : '' }}</span>
   </div>

   <div v-if="books.length === 0" class="bg-white p-8 rounded-lg shadow text-center">
     <p class="text-gray-500">No books found matching your criteria.</p>
   </div>

   <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
     <BookCard
       v-for="book in books"
       :key="book.id"
       :book="book"
       :show-details="showBookDetails === book.id"
       @toggle-favorite="$emit('toggle-favorite', book.id)"
       @remove-book="$emit('remove-book', book.id)"
       @toggle-details="$emit('show-details', book.id)"
     />
   </div>
 </div>
</template>

<script setup>
import BookCard from './BookCard.vue'

defineProps({
 books: Array,
 showBookDetails: Number
})

defineEmits(['toggle-favorite', 'remove-book', 'show-details'])
</script>
