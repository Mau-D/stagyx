<!--TuteurEnChiffre.vue, Section des détails du tuteur
Maud Harvey-Guillaume Labrecque, 26 avril 2021-->
<template>
  <b-container fluid class="px-2">
    <!-- Nombre de tuteurs -->
    <b-row class="my-5">
      <b-col class="px-2">
        <v-card
          class="mx-auto couleurRose"
          max-width="344"
          style="background-color: #f4e3f1 !important"
        >
          <v-list-item>
            <v-list-item-content>
              <v-card-avatar class="mb-5">
                <span class="symbol-label">
                  <span class="svg-icon svg-icon-3x" style="fill: #744568">
                    <!--begin::Svg Icon-->
                    <inline-svg
                      src="media/svg/icons/Communication/Group.svg"
                    ></inline-svg>
                    <!--end::Svg Icon-->
                  </span>
                </span>
              </v-card-avatar>
              <v-list-item-title style="font-size: 2rem; font-weight: bold">
                3 Entreprises
              </v-list-item-title>
              <v-list-item-subtitle class="mb-3"># group</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </b-col>
    </b-row>
    <!-- Nombre de stagiaires -->
    <b-row class="my-5">
      <b-col class="px-2">
        <v-card
          class="mx-auto couleurRose"
          max-width="344"
          style="background-color: #f4e3f1 !important"
        >
          <v-list-item>
            <v-list-item-content>
              <v-card-avatar class="mb-5">
                <span class="symbol-label">
                  <span class="svg-icon svg-icon-3x" style="fill: #744568">
                    <!--begin::Svg Icon-->
                    <inline-svg
                      src="media/svg/icons/Communication/Group.svg"
                    ></inline-svg>
                    <!--end::Svg Icon-->
                  </span>
                </span>
              </v-card-avatar>
              <v-list-item-title style="font-size: 2rem; font-weight: bold">
                9 Stagiaires
              </v-list-item-title>
              <v-list-item-subtitle class="mb-3"># group</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "EntrepriseEnChiffre",
};
</script>

<style>
</style>