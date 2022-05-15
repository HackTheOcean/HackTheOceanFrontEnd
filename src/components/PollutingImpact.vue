<template>
    <div class="container-fluid" id="polluting-impact">
        <div class="row">
            <div class="col-12 text-center">
                <h2>Impacto contaminante</h2>
                <p class="custom-width-pi">La contaminación por plásticos ya está presente en todos los lugares del océano y casi todas las especies marinas la han enfrentado</p>
            </div>

            <div class="offset-1 col-5 filter-negative-effect justify-content-center align-self-center">
                <p>Selecciona el efecto negativo y conoce su impacto</p>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="negative-effect" id="Enredos" checked>
                    <label class="form-check-label" for="Enredos">
                        Enredos
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="negative-effect" id="Ingesta">
                    <label class="form-check-label" for="Ingesta">
                        Ingesta
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="negative-effect" id="Asfixia">
                    <label class="form-check-label" for="Asfixia">
                        Asfixia
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="negative-effect" id="chemicalContamination">
                    <label class="form-check-label" for="chemicalContamination">
                        Contaminación química
                    </label>
                </div>
            </div>
            <div class="col-5 text-center justify-content-center align-self-center">
                <img src="@/assets/img/turtle-polluting-impact.jpg" class="img-fluid" id="image-polluting-impact">
                <p id="text-polluting-impact">Artículos como sogas, redes, trampas y líneas de monofilamento de equipos de pesca abandonados, perdidos o descartados enmarañan a los animales marinos, causándoles heridas, asfixia, restricciones de movilidad y la muerte. </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PollutingImpact'
}
</script>


<style scoped>
    * { font-family: 'Poppins', sans-serif; }
    #polluting-impact p.custom-width-pi { max-width: 700px; margin: 50px auto; display: table; }
    #image-polluting-impact { width: 400px; }
</style>