<template>
  <div>
    <h2>Lista de Usuarios</h2>

    <p v-if="loading">Cargando usuarios...</p>
    <p v-if="error" style="color: red;">Error al cargar usuarios. Inténtalo más tarde.</p>

    <ul v-else>
      <li v-for="user in users" :key="user.id" class="user-item">
        <span>{{ user.name }}</span>
        <button @click="$emit('select-user', user)">Ver detalles</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  data() {
    return {
      users: [],
      loading: true,
      error: false
    };
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        this.users = data;
        this.loading = false;
      })
      .catch(() => {
        this.error = true;
        this.loading = false;
      });
  }
};
</script>
