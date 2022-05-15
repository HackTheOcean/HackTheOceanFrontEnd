<template>
    <div class="container-fluid" id="polluting-impact">
        <div class="row">
            <div class="col-12 text-center">
                <h2 class="fw-bold">Impacto contaminante</h2>
                <p class="custom-width-pi">La contaminación por plásticos ya está presente en todos los lugares del océano y casi todas las especies marinas la han enfrentado</p>
            </div>

            <div class="offset-lg-1 offset-md-0 col-xl-5 col-lg-4 filter-negative-effect justify-content-center align-self-center">
                <p class="fw-normal">Selecciona el efecto negativo y conoce su impacto</p>
                <div class="container-input-radio-for-negative-effect" v-for="(pollutingImpact, index) in pollutingImpacts" :key="index">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="negative-effect" :id="'polluting-impact-'+index"  v-model="NegativeEffectPollutingImpact" :value="pollutingImpact.nombreImpacto" @change="onChange($event)">
                        <label class="form-check-label" :for="'polluting-impact-'+index">
                            {{ pollutingImpact.nombreImpacto }}
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
    import PollutingImpactService from "../services/PollutingImpactService";

export default {
    name: 'PollutingImpact',
    data() {
        return{
            NegativeEffectPollutingImpact: 'Enredos',
            pollutingImpacts: [],
        }
    },
    methods:{
        getAllPollutingImpacts(){
            PollutingImpactService.getAll()
            .then(response => {
                this.pollutingImpacts = response.data;
                this.NegativeEffectPollutingImpact =  this.pollutingImpacts[0].nombreImpacto;
            })
            .catch(e => {
            console.log(e);
            });
        },
        getPollutingImpact(id) {
            PollutingImpactService.get(id)
            .then(response => {
                const polluting_impact_description = response.data.detalleImpacto;
                this.NegativeEffectPollutingImpact = response.data.nombreImpacto;
                document.getElementById('text-polluting-impact').textContent = polluting_impact_description;
            })
            .catch(e => {
            console.log(e);
            });
        },
        onChange(event) {
            let data = event.target.value;
            
            if(data == 'Enredos'){
                this.getPollutingImpact(1);
                document.getElementById('image-polluting-impact').src = require('@/assets/img/polluting-impact/turtle-polluting-impact.png');
            }
            else if(data == 'Ingesta'){
                this.getPollutingImpact(2);
                document.getElementById('image-polluting-impact').src = require('@/assets/img/polluting-impact/seagull-polluting-impact.png');
            }
            else if(data == 'Asfixia'){
                this.getPollutingImpact(3);
                document.getElementById('image-polluting-impact').src = require('@/assets/img/polluting-impact/seal-polluting-impact.png');
            }
            else if(data == 'Contaminación química'){
                this.getPollutingImpact(4);
                document.getElementById('image-polluting-impact').src = require('@/assets/img/polluting-impact/chemical-polluting-impact.png');
            }
            else{
                document.getElementById('image-polluting-impact').src = require('@/assets/img/polluting-impact/turtle-polluting-impact.png');
                document.getElementById('text-polluting-impact').textContent = 'Selecciona el efecto negativo y conoce su impacto';
            }
        }
    },
    mounted() {
        this.getAllPollutingImpacts();
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