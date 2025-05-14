<template>
 <transition name="fade">
   <div
     v-if="visible"
     class="fixed bottom-6 right-6 bg-indigo-600 text-white px-4 py-2 rounded shadow-md"
   >
     {{ message }}
   </div>
 </transition>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
 message: String,
 show: Boolean
})

const visible = ref(props.show)

watch(() => props.show, (val) => {
 visible.value = val
 if (val) {
   setTimeout(() => (visible.value = false), 3000)
 }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
 transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
 opacity: 0;
}
</style>