<!--FiltreStagiaires.vue, Section de la PageStagiaires pour faire le tri du tableau (TableauStagiaires) par moyenne, non-tâche ou non-stage
Maud Harvey-Guillaume Labrecque, 29 avril 2021-->
<template>
  <b-container>
    <!-- Titre -->
    <b-row>
      <h1 class="text-muted mt-5 mb-20">Filtres</h1>
    </b-row>
    <!-- Filtre par moyenne -->
    <b-row>
      <div class="symbol symbol-25 mr-5" v-bind:class="`symbol-light-success`">
        <span class="symbol-label">
          <span class="svg-icon svg-icon-sm" v-bind:class="`svg-icon-success`">
            <!--begin::Svg Icon-->
            <inline-svg src="media/svg/icons/Home/Library.svg"></inline-svg>
            <!--end::Svg Icon-->
          </span>
        </span>
      </div>
      <div class="d-flex flex-column font-weight-bold">
        <p class="text-dark mb-1 font-size-xs my-auto">Par moyenne</p>
      </div>
    </b-row>
    <b-row class="mx-auto mt-5">
      <!-- begin étoiles cliquable-->
      <a v-for="n in 5" :key="n" @click="setRating(n)">
        <StarRating
          :rating="n"
          :read-only="true"
          :increment="1"
          :star-size="14"
          :show-rating="false"
          :padding="2"
          :border-width="2"
          border-color="#ffd055"
          inactive-color="#ffffff"
        />
      </a>
      <!-- end étoiles cliquable-->
    </b-row>
    <!-- Filtre par aucune tâche inscrite-->
    <b-row class="my-10">
      <div class="symbol symbol-25 mr-5" v-bind:class="`symbol-light-success`">
        <span class="symbol-label">
          <span class="svg-icon svg-icon-sm" v-bind:class="`svg-icon-success`">
            <!--begin::Svg Icon-->
            <inline-svg src="media/svg/icons/Home/Library.svg"></inline-svg>
            <!--end::Svg Icon-->
          </span>
        </span>
      </div>
      <div class="d-flex flex-column font-weight-bold">
        <a class="text-dark text-hover-primary mb-1 font-size-xs my-auto">
          Aucune tâche inscrite
        </a>
      </div>
    </b-row>
    <!-- Filtre par non affecté à un stage-->
    <b-row class="my-10">
      <div class="symbol symbol-25 mr-5" v-bind:class="`symbol-light-success`">
        <span class="symbol-label">
          <span class="svg-icon svg-icon-sm" v-bind:class="`svg-icon-success`">
            <!--begin::Svg Icon-->
            <inline-svg src="media/svg/icons/Home/Library.svg"></inline-svg>
            <!--end::Svg Icon-->
          </span>
        </span>
      </div>
      <div class="d-flex flex-column font-weight-bold">
        <a class="text-dark text-hover-primary mb-1 font-size-xs my-auto">
          Non affecté à un stage
        </a>
      </div>
    </b-row>
  </b-container>
</template>

<script>
//Composant pour la gestion de la notation par étoiles
import StarRating from "vue-star-rating";
export default {
  components: {
    StarRating,
  },
  name: "FiltreStagiaires",
  data() {
    return {
      rating: 0,
    };
  },
  methods: {
    //Fonction pour récupérer le nombre d'étoiles sélectionnées dans le filtre de stagiaires par l'évaluation
    setRating: function (rating) {
      console.log("Nombre d'étoiles" + rating);
    },
  },
};
</script>

<style scoped>
a:hover {
  cursor: pointer;
}
</style>