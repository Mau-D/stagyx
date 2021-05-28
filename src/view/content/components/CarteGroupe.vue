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
          title="GROUPE #1034"
          sub-title="Genie mécanique NW.1045"
          overlay
        >
          <b-card-text class="mt-4">
            <p class="m-0"><strong>Début: </strong>15-06-2021</p>
            <p class="m-0"><strong>Fin: </strong>15-08-2021</p>
            <p class="m-0"><strong>Stagiaires: </strong>17</p>
            <p class="m-0"><strong>Type: </strong>Alternance travail-études</p>
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
};
</script>

<style scoped>
button {
  background-color: #e63946 !important;
  cursor: pointer;
}
</style>
