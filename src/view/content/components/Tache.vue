<!--Tache.vue, composant incluant une card avec les informations principales d'une tâche, un bouton donne accès à la tâche détaillée
Maud Harvey-Guillaume Labrecque, 4 mai 2021-->
<template>
  <b-container class="bg-light mx-0 py-3">
    <!-- En-tête -->
    <b-row class="my-5">
      <!-- Logo -->
      <b-col sm="2">
        <span class="symbol-label">
          <span class="svg-icon svg-icon-lg svg-icon-primary">
            <!--begin::Svg Icon-->
            <inline-svg
              src="media/svg/icons/Communication/Clipboard-list.svg"
            ></inline-svg>
            <!--end::Svg Icon-->
          </span>
        </span>
      </b-col>
      <!-- Titre, date et Logo -->
      <b-col sm="7">
        <h5>Exploration du milieu de stage</h5>

        <span class="symbol-label mx-1">
          <span class="svg-icon svg-icon-lg svg-icon-primary">
            <!--begin::Svg Icon-->
            <inline-svg src="media/svg/icons/Home/clock.svg"></inline-svg>
            <!--end::Svg Icon-->
          </span>
        </span>
        <p class="text-muted d-inline">date de la tâche</p>
      </b-col>
      <!-- Bouton voir -->
      <b-col sm="3">
        <b-button
          class="mx-auto"
          style="background-color: #eee5ff; color: #8950fc; font-weight: bold"
          ><span class="px-5">Voir</span></b-button
        >
      </b-col>
    </b-row>
    <!-- Texte -->
    <b-row class="mb-5">
      <b-col>
        <p>kslakshdfkasjhdfkajhdf</p>
      </b-col>
    </b-row>
    <!-- Comments et moyenne de l'évaluation -->
    <b-row class="mb-5">
      <b-col class="text-left">
        <span class="symbol-label mx-1">
          <span class="svg-icon svg-icon-lg svg-icon-primary">
            <!--begin::Svg Icon-->
            <inline-svg
              src="media/svg/icons/Communication/Group-chat.svg"
            ></inline-svg>
            <!--end::Svg Icon-->
          </span>
        </span>
        <p class="text-muted d-inline">Nombre commentaires</p>
      </b-col>
      <b-col class="text-right mr-3">
        <img src="media/logos/stars.png" alt="image" style="width: 5rem" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Tache",
};
</script>

<style scoped>
</style>