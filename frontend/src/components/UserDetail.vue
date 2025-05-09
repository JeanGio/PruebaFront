<template>
  <div v-if="user" class="detail-box">
    <h3>Detalles del Usuario</h3>
    <p><strong>Nombre:</strong> {{ user.name }}</p>
    <p><strong>Email:</strong> {{ user.email }}</p>
    <p><strong>Teléfono:</strong> {{ user.phone }}</p>
    <p><strong>Compañía:</strong> {{ user.company.name }}</p>
    <button @click="$emit('volver')">Volver</button>
  </div>
</template>

<script>
export default {
  name: 'UserDetail',
  props: {
    user: Object
  }
}
</script>
