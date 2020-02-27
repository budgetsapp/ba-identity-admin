<template>
  <div id="app">
    <nav>
      <sign-up></sign-up>
      <router-link to="/signin">Signin</router-link>
      <router-link to="/signup">Signup</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>
