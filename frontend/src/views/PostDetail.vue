<template>
  <div>
    <router-link to="/">← Volver</router-link>
    <div v-if="loading">Cargando...</div>
    <div v-if="error">{{ error }}</div>
    <div v-if="post">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getPostById } from '../services/api'

const route = useRoute()
const post = ref(null)
const error = ref('')
const loading = ref(true)

onMounted(async () => {
  try {
    post.value = await getPostById(route.params.id)
  } catch (e) {
    error.value = 'No se pudo cargar el post'
  } finally {
    loading.value = false
  }
})
</script>
