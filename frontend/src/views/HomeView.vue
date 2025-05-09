<template>
  <div>
    <UserList v-if="!selectedUser" @select-user="selectUser" />
    <UserDetail v-else :user="selectedUser" @volver="selectedUser = null" />
  </div>
</template>

<script>
import UserList from '../components/UserList.vue'
import UserDetail from '../components/UserDetail.vue'

export default {
  components: {
    UserList,
    UserDetail
  },
  data() {
    return {
      selectedUser: null
    }
  },
  methods: {
    selectUser(user) {
      this.selectedUser = user
    }
  }
}
</script>
