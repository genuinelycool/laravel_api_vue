<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from './stores/auth';
import { onMounted } from 'vue';

const authStore = useAuthStore();

onMounted(() => {
  authStore.getUser();
});
</script>

<template>
  <header>
    <nav>
      <RouterLink :to="{ name: 'home' }" class="nav-link">Home</RouterLink>

      <div>
        <form @submit.prevent="authStore.logout">
          <button class="nav-link">Logout</button>
        </form>
      </div>

      <div>
        <RouterLink :to="{ name: 'register' }" class="nav-link">Register</RouterLink>
        <RouterLink :to="{ name: 'login' }" class="nav-link">Login</RouterLink>
      </div>
    </nav>
  </header>

  <RouterView />
</template>
