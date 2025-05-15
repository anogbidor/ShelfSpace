<template>
 <div class="container mx-auto px-4 py-8 max-w-6xl">
   <header class="mb-8 text-center">
     <h1 class="text-6xl font-bold text-indigo-700 mb-2">📚 Shelf Space</h1>
     <p class="text-gray-600">Manage your personal library</p>
   </header>

   <BookFilters
     :genres="genres"
     v-model:search-query="searchQuery"
     v-model:selected-genre="selectedGenre"
     v-model:sort-option="sortOption"
     v-model:show-favorites-only="showFavoritesOnly"
     @filter-change="currentPage = 1"
   />

   <BookForm @add-book="addBook" />

   <BookList
     :books="paginatedBooks"
     :show-book-details="showBookDetails"
     @toggle-favorite="toggleFavorite"
     @remove-book="removeBook"
     @show-details="showDetails"
   />

   <Pagination
     :total-pages="totalPages"
     :current-page="currentPage"
     @change-page="changePage"
   />
 </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import BookForm from '../components/BookForm.vue'
import BookFilters from '../components/BookFilters.vue'
import BookList from '../components/BookList.vue'
import Pagination from '../components/Pagination.vue'
import { initialBooks } from '../data/books'

const emit = defineEmits(['notify'])

const books = ref([...initialBooks])
const newBook = ref({
 title: '',
 author: '',
 year: '',
 genre: '',
 cover: '',
 pages: '',
 description: '',
 rating: 3,
 link: ''
})

const nextId = ref(books.value.length + 1)
const searchQuery = ref('')
const selectedGenre = ref('all')
const sortOption = ref('title-asc')
const showFavoritesOnly = ref(false)
const showBookDetails = ref(null)
const currentPage = ref(1)
const itemsPerPage = ref(8)

const genres = computed(() => {
 const allGenres = books.value.map(book => book.genre)
 return ['all', ...new Set(allGenres)]
})

const filteredBooks = computed(() => {
 let result = books.value.filter(book => {
   const matchesSearch = book.title.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
                        book.author.toLowerCase().includes(searchQuery.value.toLowerCase())
   const matchesGenre = selectedGenre.value === 'all' || book.genre === selectedGenre.value
   const matchesFavorites = !showFavoritesOnly.value || book.isFavorite
   return matchesSearch && matchesGenre && matchesFavorites
 })

 switch(sortOption.value) {
   case 'title-asc': return result.sort((a, b) => a.title.localeCompare(b.title))
   case 'title-desc': return result.sort((a, b) => b.title.localeCompare(a.title))
   case 'year-asc': return result.sort((a, b) => a.year - b.year)
   case 'year-desc': return result.sort((a, b) => b.year - a.year)
   case 'rating-asc': return result.sort((a, b) => a.rating - b.rating)
   case 'rating-desc': return result.sort((a, b) => b.rating - a.rating)
   default: return result
 }
})

const paginatedBooks = computed(() => {
 const start = (currentPage.value - 1) * itemsPerPage.value
 const end = start + itemsPerPage.value
 return filteredBooks.value.slice(start, end)
})

const totalPages = computed(() => {
 return Math.ceil(filteredBooks.value.length / itemsPerPage.value)
})

const addBook = (newBookData) => {
 books.value.push({
   id: nextId.value++,
   ...newBookData,
   cover: newBookData.cover || 'https://via.placeholder.com/150x200?text=No+Cover',
   pages: newBookData.pages || 0,
   description: newBookData.description || 'No description available',
   rating: newBookData.rating || 3,
   isFavorite: false,
   link: newBookData.link || '#'
 })
 emit('notify', '✅ Book added successfully!')
}

const removeBook = (id) => {
 books.value = books.value.filter(book => book.id !== id)
 emit('notify', '🗑️ Book removed.')
}

const toggleFavorite = (id) => {
 const book = books.value.find(book => book.id === id)
 if (book) {
   book.isFavorite = !book.isFavorite
   emit('notify', book.isFavorite ? '⭐ Book marked as favorite!' : '★ Book unmarked.')
 }
}

const showDetails = (id) => {
 showBookDetails.value = showBookDetails.value === id ? null : id
}

const changePage = (page) => {
 currentPage.value = page
}
</script>

<style>
/* Custom styles */
</style>
