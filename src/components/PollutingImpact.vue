<template>
    <div class="container-fluid" id="polluting-impact">
        <div class="row">
            <div class="col-12 text-center">
                <h2 class="fw-bold">Impacto contaminante</h2>
                <p class="custom-width-pi">La contaminación por plásticos ya está presente en todos los lugares del océano y casi todas las especies marinas la han enfrentado</p>
            </div>

            <div class="offset-lg-1 offset-md-0 col-xl-5 col-lg-4 filter-negative-effect justify-content-center align-self-center">
                <p class="fw-normal">Selecciona el efecto negativo y conoce su impacto</p>
                <div class="container-input-radio-for-negative-effect">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="negative-effect" id="Enredos"  v-model="NegativeEffectPollutingImpact" value="Enredos" checked @change="onChange($event)">
                        <label class="form-check-label" for="Enredos">
                            Enredos
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="negative-effect" id="Ingesta" v-model="NegativeEffectPollutingImpact" value="Ingesta" @change="onChange($event)">
                        <label class="form-check-label" for="Ingesta">
                            Ingesta
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="negative-effect" id="Asfixia" v-model="NegativeEffectPollutingImpact" value="Asfixia" @change="onChange($event)">
                        <label class="form-check-label" for="Asfixia">
                            Asfixia
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="negative-effect" id="chemicalContamination" v-model="NegativeEffectPollutingImpact" value="Contaminación química" @change="onChange($event)">
                        <label class="form-check-label" for="chemicalContamination">
                            Contaminación química
                        </label>
                    </div>
                </div>      
            </div>
            <div class="col-xl-5 col-lg-6 text-center justify-content-center align-self-center">
                <img src="@/assets/img/polluting-impact/turtle-polluting-impact.png" class="img-fluid" id="image-polluting-impact">
                <p class="fw-normal">{{ NegativeEffectPollutingImpact }}</p>
                <p id="text-polluting-impact">Artículos como sogas, redes, trampas y líneas de monofilamento de equipos de pesca abandonados, perdidos o descartados enmarañan a los animales marinos, causándoles heridas, asfixia, restricciones de movilidad y la muerte. </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PollutingImpact',
    data() {
        return{
            NegativeEffectPollutingImpact: 'Enredos'
        }               // initialize the_answer to be your checked option
    },
    methods:{
        onChange(event) {
            var data = event.target.value;
            if(data == 'Enredos'){
                document.getElementById('image-polluting-impact').src = require('@/assets/img/polluting-impact/turtle-polluting-impact.png')
                document.getElementById('text-polluting-impact').textContent = 'Artículos como sogas, redes, trampas y líneas de monofilamento de equipos de pesca abandonados, perdidos o descartados enmarañan a los animales marinos, causándoles heridas, asfixia, restricciones de movilidad y la muerte.'
            }
            else if(data == 'Ingesta'){
                document.getElementById('image-polluting-impact').src = require('@/assets/img/polluting-impact/seagull-polluting-impact.png')
                document.getElementById('text-polluting-impact').textContent = 'Los animales marinos de todo tipo ingieren plástico, desde los superpredadores hasta el plancton en la base de la cadena alimenticia. Esto puede ocasionarles lesiones graves, afectando la ingesta de alimentos al generar un falso sentido de saciedad, bloqueando su sistema digestivo o causando heridas internas'
            }
            else if(data == 'Asfixia'){
                document.getElementById('image-polluting-impact').src = require('@/assets/img/polluting-impact/seal-polluting-impact.png')
                document.getElementById('text-polluting-impact').textContent = 'La contaminación por plásticos priva de luz, alimentos y oxígeno a los corales, esponjas y animales que viven en el lecho marino y reduce la cantidad de oxígeno y comida disponible en los sedimentos. Esto puede impactar negativamente a los ecosistemas y darle cabida a los patógenos en deteriorode la vida marina'
            }
            else if(data == 'Contaminación química'){
                document.getElementById('image-polluting-impact').src = require('@/assets/img/polluting-impact/chemical-polluting-impact.png')
                document.getElementById('text-polluting-impact').textContent = 'Aunque no todos los ingredientes en el plástico son dañinos, algunos sí lo son y pueden filtrarse en el ambiente marino. Las partículas de plástico más pequeñas pueden atravesar las células de los animales marinos y algunas pueden llegar hasta el cerebro.'
            }
            else{
                document.getElementById('image-polluting-impact').src = require('@/assets/img/polluting-impact/turtle-polluting-impact.png')
                document.getElementById('text-polluting-impact').textContent = 'Selecciona el efecto negativo y conoce su impacto'
            }
        }
    }
}
</script>


<style>
    * { font-family: 'Poppins', sans-serif; font-weight: 300; color: white; }
    body { background: rgb(2,0,36); background: -moz-linear-gradient(360deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%); background: -webkit-linear-gradient(360deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%); background: linear-gradient(360deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#020024",endColorstr="#00d4ff",GradientType=1); }
    #polluting-impact { padding-top: 50px; padding-bottom: 50px; }
    #polluting-impact p.custom-width-pi { max-width: 700px; margin: 50px auto; display: table; }
    #image-polluting-impact { width: 400px; }
    #text-polluting-impact { min-height: 140px; }

    @media screen and (max-width: 1330px){
        #text-polluting-impact { min-height: 150px; }
    }

    @media screen and (max-width: 991px){
        div#polluting-impact { text-align: center; }
        #text-polluting-impact { min-height: unset; }
        .container-input-radio-for-negative-effect { margin: 0 auto; display: table; text-align: left; }
    }
</style>