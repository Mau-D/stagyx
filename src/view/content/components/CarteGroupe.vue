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
          :title="groupName" 
          :sub-title="schedule"
          overlay
        >
          <b-card-text class="mt-4">
            <p class="m-0"><strong>Début: </strong>{{startDate | date}}</p>
            <p class="m-0"><strong>Fin: </strong>{{endDate | date}}</p>
            <p class="m-0"><strong>Stagiaires: </strong>{{nombreStagiaires}}</p>
            <p class="m-0"><strong>Type: </strong>{{type}}</p>
          </b-card-text>
        </b-card-body>
        <!-- Le router-link refuse de fonctionner... -->
      </b-card>
    </b-overlay>
    <!-- L'id du groupe sélectionné est transmis dans l'url -->
    <router-link :to='"/bilanGroupe/" + this.id'>
      <b-button class="rounded-0 text-light mt-0" block>Accéder</b-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CarteGroupe",
  props:{
    id:String,
    groupName: String,
    schedule:String,
    startDate: String,
    endDate: String,
    nombreStagiaires:Number,
    type: String
  },
 
};
</script>

<style scoped>
button {
  background-color: #e63946 !important;
  cursor: pointer;
}
</style>
