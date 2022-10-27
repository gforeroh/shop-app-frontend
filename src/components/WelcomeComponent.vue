<template>
  <div>
    <h1>BIENVENIDOS</h1>

    <div class="card">
    <div class="card-header">
      <h5 class="card-title">Comercio electrónico</h5>
    </div>
    <div class="card-body">
      <!-- <h5 class="card-title">Comercio electrónico</h5> -->
      <p class="card-text">Sistema de comercio electrónico que muestra pedidos pendientes segun inventario.</p>
      <router-link class="btn btn-primary" to="/order">Pedidos</router-link>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'WelcomeComponent',
}
</script>