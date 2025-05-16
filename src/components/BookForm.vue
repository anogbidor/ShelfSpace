<template>
 <div>
   <div class="mb-4 text-right">
     <button
       @click="showForm = !showForm"
       class="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
     >
       {{ showForm ? 'Cancel' : 'Add a New Book' }}
     </button>
   </div>

   <div v-if="showForm" class="mb-8 bg-white p-6 rounded-lg shadow">
     <h2 class="text-xl font-semibold text-gray-800 mb-4">Add a New Book</h2>
     <form @submit.prevent="handleAdd" class="grid grid-cols-1 md:grid-cols-2 gap-4">
       <input-field v-model="form.title" label="Title*" required />
       <input-field v-model="form.author" label="Author*" required />
       <input-field v-model="form.year" label="Publication Year*" type="number" min="1000" max="2099" required />
       <input-field v-model="form.genre" label="Genre*" required />
       <input-field v-model="form.pages" label="Pages" type="number" min="1" />
       <input-field v-model="form.rating" label="Rating (1-5)" type="number" min="1" max="5" step="0.1" />
       <div class="md:col-span-2">
         <label class="block text-sm font-medium text-gray-700 mb-1">Description</label>
         <textarea v-model="form.description" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" rows="2" placeholder="Brief description of the book"></textarea>
       </div>
       <input-field v-model="form.cover" label="Cover Image URL" type="url" />
       <input-field v-model="form.link" label="Purchase Link" type="url" />
       <div class="md:col-span-2">
         <button type="submit" class="w-full md:w-auto px-6 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors">
           Add Book
         </button>
       </div>
     </form>
   </div>
 </div>
</template>

<script setup>
import { ref } from 'vue'
import InputField from './InputField.vue'
const emit = defineEmits(['add-book'])

const defaultBook = {
 title: '',
 author: '',
 year: '',
 genre: '',
 pages: '',
 rating: 3,
 description: '',
 cover: '',
 link: ''
}

const form = ref({ ...defaultBook })
const showForm = ref(false)

const handleAdd = () => {
 if (!form.value.title || !form.value.author || !form.value.year || !form.value.genre) return
 emit('add-book', { ...form.value })
 form.value = { ...defaultBook }
 showForm.value = false
}
</script>
