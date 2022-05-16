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
          <p class="text-info text-white">Localizada en el norte del Golfo de California de México, este pez enfrenta desde hace décadas una dura caza furtiva porque su buche es enormemente codiciado en China, donde se le atribuyen capacidades afrodisíacas y medicinales. Su pesca supone el sustento principal de muchos habitantes de pueblos del Alto Golfo de California, como San Felipe o Puerto Peñasco Sonora. El precio que pagan los intermediarios asiáticos a los pescadores mexicanos por un kilo de vejiga o buche es de entre 500 a 2,000 dólares.</p>
      </div>

      <div class="col-8 py-4">
          <h3 class="text-color">Tortuga Carey</h3>
          <p class="text-info text-white">Se localiza en la reserva de la biosfera de las aguas mexicanas del Golfo de California, es uno de los cetáceos más pequeños del mundo (150 cm) con un peso promedio de 50 kg. A pesar de que sólo ha pasado medio siglo desde que fue vista por primera vez, hoy se encuentra en grave peligro de extinción debido a que queda atrapada en las redes de pesca, aunque esta práctica esta prohibida; se estima que la población se reduce hasta el 15% cada año; se reporta que sólo queda una docena de vaquitas marinas.</p>
      </div>
      <div class="col-4 py-4">
        <img src="@/assets/tortuga-carey.jpg" class="img-fluid img-circle" alt="Tortuga Carey">
      </div>

      <div class="col-4 py-4">
        <img src="@/assets/vaquita-marina.jpg" class="img-fluid img-circle" alt="Vaquita Marina">
      </div>
      <div class="col-8 py-4">
          <h3 class="text-color">Vaquita Marina</h3>
          <p class="text-info text-white">Localizada en el norte del Golfo de California de México, este pez enfrenta desde hace décadas una dura caza furtiva porque su buche es enormemente codiciado en China, donde se le atribuyen capacidades afrodisíacas y medicinales. Su pesca supone el sustento principal de muchos habitantes de pueblos del Alto Golfo de California, como San Felipe o Puerto Peñasco Sonora. El precio que pagan los intermediarios asiáticos a los pescadores mexicanos por un kilo de vejiga o buche es de entre 500 a 2,000 dólares.</p>
      </div>

      <div class="col-8 py-4">
          <h3 class="text-color">Ballena Azul</h3>
          <p class="text-info text-white">Con un tamaño que va de 24 hasta 30 metros y un peso de alrededor de 173 toneladas, la ballena azul se encuentra en la cima de la cadena alimenticia con un papel importante para mantener el balance de los ecosistemas marinos. La especie también ha sufrido un descenso en su población debido a la pesca comercial excesiva, a pesar de que ésta fue prohibida a partir de 1966. De acuerdo con un reporte de 2016 de la Unión Internacional para la Conservación de la Naturaleza (UICN), se estima que hay entre 10 mil a 25 mil ejemplares. Entre los meses de enero y marzo, este mamífero, catalogado como el más grande del planeta llega a las aguas del Parque Nacional Bahía de Loreto en Baja California Sur para reproducirse y tener a sus crías.</p>
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

  .text-info{
      text-align: justify;
  }

  .title-txt{
      font-weight: 600;
      color: #ffffff;
  }
</style>