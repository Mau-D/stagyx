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
      <!--begin::Item-->

      <!--begin::Symbol-->
      <div class="symbol symbol-25 mr-5" v-bind:class="`symbol-light-success`">
        <span class="symbol-label">
          <span class="svg-icon svg-icon-sm" v-bind:class="`svg-icon-success`">
            <!--begin::Svg Icon-->
            <inline-svg src="media/svg/icons/Home/Library.svg"></inline-svg>
            <!--end::Svg Icon-->
          </span>
        </span>
      </div>
      <!--end::Symbol-->
      <!--begin::Text-->

      <div class="d-flex flex-column font-weight-bold">
        <p class="text-dark mb-1 font-size-xs my-auto">Par moyenne</p>
      </div>

      <!--end::Text-->
    </b-row>
    <b-row>
      <!-- begin étoiles -->
      <ul class="mx-auto">
        <li v-for="n in 4" :key="n">
          <img src="media/logos/stars.png" alt="image" style="width: 8rem" />
        </li>
      </ul>
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
      <!--end::Symbol-->
      <!--begin::Text-->
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
      <!--end::Symbol-->
      <!--begin::Text-->

      <div class="d-flex flex-column font-weight-bold">
        <a class="text-dark text-hover-primary mb-1 font-size-xs my-auto">
          Non affecté à un stage
        </a>
      </div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "FiltreStagiaires",
  data() {
    return {};
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>