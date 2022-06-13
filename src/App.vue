<template>
<div id="app">
<nav class="navbar navbar-expand navbar-light bg-white">
<router-link to="/" class="navbar-brand">Impacto ambiental</router-link>
<div class="navbar-nav mr-auto">
<li class="nav-item">
<router-link to="/introduccion" class="nav-link">Introduccion</router-link>
</li>
<li class="nav-item">
<router-link to="/pollution" class="nav-link">Pollution</router-link>
</li>
</div>
</nav>
<div class="container mt-3">
<router-view />
</div>
</div>
</template>
<script>
export default {
  name: 'app'
}
</script>