<template>
  <div class="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
    <BookApp @notify="handleNotify" />
    <Footer />
    <Notification :message="toastMessage" :show="showToast" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BookApp from './pages/BookApp.vue'
import Footer from './components/Footer.vue'
import Notification from './components/Notification.vue'

const toastMessage = ref('')
const showToast = ref(false)

const handleNotify = (msg) => {
  toastMessage.value = msg
  showToast.value = true
}
</script>