<template>
    <div id="animals">
        <h2 class="text-center title-txt">Animales en peligro de extinción</h2>
<div class="container py-4">
    
    <div class="row">
      <div class="col-4 py-4">
        <img src="@/assets/totoaba.jpg" class="img-fluid img-circle" alt="Totoaba">
      </div>
      <div class="col-8 py-4">
<h3 class="text-color">Totoaba</h3>
          <p class="text-color">info</p>
      </div>

      <div class="col-8 py-4">
<h3 class="text-color">Tortuga Carey</h3>
          <p class="text-color">info</p>
      </div>
      <div class="col-4 py-4">
        <img src="@/assets/tortuga-carey.jpg" class="img-fluid img-circle" alt="Tortuga Carey">
      </div>

      <div class="col-4 py-4">
        <img src="@/assets/vaquita-marina.jpg" class="img-fluid img-circle" alt="Vaquita Marina">
      </div>
      <div class="col-8 py-4">
<h3 class="text-color">Vaquita Marina</h3>
          <p class="text-color">info</p>
      </div>

      <div class="col-8 py-4">
<h3 class="text-color">Ballena Azul</h3>
          <p class="text-color">info</p>
      </div>
      <div class="col-4 py-4">
        <img src="@/assets/ballena-azul.jpg" class="img-fluid img-circle" alt="Ballena Azul">
      </div>

      

    </div>
  </div>
    </div>
</template>

<script>
export default {
    name: 'EndangeredAnimals',
}
</script>

<style>
body {
    background-image: -webkit-linear-gradient(270deg, #b2eaff 0, #0033FF 50%, #000033 100%);
    background-position: center 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    -moz-background-size: cover;
    -ms-background-size: cover;
  }

  .img-circle{
    border-radius: 20px 120px 20px 120px;
  }

  .text-color{
      color: #ffffff;
  }

  .title-txt{
      font-weight: 600;
      color: #ffffff;
  }
</style>