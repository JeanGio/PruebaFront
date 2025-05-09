<template>
  <div>
    <h1>Lista de Posts</h1>
    <div v-if="loading">Cargando...</div>
    <div v-if="error">{{ error }}</div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/post/${post.id}`">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getPosts } from '../services/api'

const posts = ref([])
const error = ref('')
const loading = ref(true)

onMounted(async () => {
  try {
    posts.value = await getPosts()
  } catch (e) {
    error.value = 'Error al cargar los posts'
  } finally {
    loading.value = false
  }
})
</script>
