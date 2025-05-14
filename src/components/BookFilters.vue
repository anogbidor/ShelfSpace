<template>
 <div class="mb-8 bg-white p-4 rounded-lg shadow">
   <div class="flex flex-col md:flex-row gap-4">
     <div class="flex-1">
       <label class="block text-sm font-medium text-gray-700 mb-1">Search Books</label>
       <input
         v-model="searchQueryProxy"
         type="text"
         placeholder="Search by title or author..."
         class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
       />
     </div>

     <div class="w-full md:w-48">
       <label class="block text-sm font-medium text-gray-700 mb-1">Filter by Genre</label>
       <select
         v-model="selectedGenreProxy"
         class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
       >
         <option v-for="genre in genres" :key="genre" :value="genre">
           {{ genre.charAt(0).toUpperCase() + genre.slice(1) }}
         </option>
       </select>
     </div>

     <div class="w-full md:w-48">
       <label class="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
       <select
         v-model="sortOptionProxy"
         class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
       >
         <option value="title-asc">Title (A-Z)</option>
         <option value="title-desc">Title (Z-A)</option>
         <option value="year-asc">Year (Oldest)</option>
         <option value="year-desc">Year (Newest)</option>
         <option value="rating-asc">Rating (Lowest)</option>
         <option value="rating-desc">Rating (Highest)</option>
       </select>
     </div>

     <div class="flex items-end">
       <label class="inline-flex items-center mt-1">
         <input
           type="checkbox"
           v-model="showFavoritesOnlyProxy"
           class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
         />
         <span class="ml-2 text-sm text-gray-700">Favorites Only</span>
       </label>
     </div>
   </div>
 </div>
</template>

<script setup>
import { watch } from 'vue'

const props = defineProps({
 genres: Array,
 searchQuery: String,
 selectedGenre: String,
 sortOption: String,
 showFavoritesOnly: Boolean,
})

const emit = defineEmits(['update:searchQuery', 'update:selectedGenre', 'update:sortOption', 'update:showFavoritesOnly', 'filter-change'])

const searchQueryProxy = defineModel('searchQuery')
const selectedGenreProxy = defineModel('selectedGenre')
const sortOptionProxy = defineModel('sortOption')
const showFavoritesOnlyProxy = defineModel('showFavoritesOnly')

watch([searchQueryProxy, selectedGenreProxy, sortOptionProxy, showFavoritesOnlyProxy], () => {
 emit('filter-change')
})
</script>
