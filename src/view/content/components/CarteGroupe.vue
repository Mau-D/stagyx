<!--CarteGroupe.vue, Carte avec les informations du groupe avec un stage actif, PageGroupes
Maud Harvey-Guillaume Labrecque, 14 mai 2021-->
<template>
  <div>
    <b-overlay>
      <b-card
        no-body
        class="m-0"
        img-src="media/svg/bg-graduate.svg"
        img-alt="Card Image"
      >
        <b-card-body
          :title="name" 
          :sub-title="programme"
          overlay
        >
          <b-card-text class="mt-4">
            <p class="m-0"><strong>Début: </strong>{{dateDebut}}</p>
            <p class="m-0"><strong>Fin: </strong>{{dateFin}}</p>
            <p class="m-0"><strong>Stagiaires: </strong>{{nombreStagiaires}}</p>
            <p class="m-0"><strong>Type: </strong>{{typeStage}}</p>
          </b-card-text>
        </b-card-body>
        <!-- Le router-link refuse de fonctionner... -->
      </b-card>
    </b-overlay>
    <router-link to="/groupe">
      <b-button class="rounded-0 text-light mt-0" block>Accéder</b-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CarteGroupe",
  props:{
    name: String,
    programme:String,
    dateDebut: Date,
    dateFin: Date,
    nombreStagiaires:Number,
    typeStage: String
  }
};
</script>

<style scoped>
button {
  background-color: #e63946 !important;
  cursor: pointer;
}
</style>
