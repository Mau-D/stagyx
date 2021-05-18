<!--PageTuteurs.vue, page contenant les détails des tuteurs par groupe sélectionné le aside de droite comporte le nombre de stagiaires et d'entreprises
Maud Harvey-Guillaume Labrecque, 4 mai 2021-->
<template>
  <b-container class="h-100">
    <b-row class="h-100">
      <!-- section des cartes des tuteurs -->
      <b-col sm="9" class="px-0">
        <b-container class="pl-0">
          <!-- titre -->
          <b-row>
            <b-col>
              <h1 class="text-muted mt-5">Tuteurs de stage</h1>
            </b-col>
          </b-row>
          <!-- bouton -->
          <b-row class="text-right">
            <b-col>
              <b-button variant="success" style="font-weight: bold">
                <span class="symbol-label">
                  <span class="svg-icon">
                    <!--begin::Svg Icon-->
                    <inline-svg
                      src="media/svg/icons/Communication/Add-user.svg"
                    ></inline-svg>
                    <!--end::Svg Icon-->
                  </span>
                </span>
                Nouveau</b-button
              >
            </b-col>
          </b-row>
          <!-- Section pour les cartes des tuteurs -->
          <b-row v-for="n in 5" :key="n" class="my-3">
            <b-col>
              <TuteurDetails></TuteurDetails>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
      <!-- section des deux cartes pour le nombres de stagiaires et d'entreprises -->
      <b-col sm="3" class="bg-light">
        <TuteurEnChiffre></TuteurEnChiffre>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import TuteurDetails from "../content/components/TuteurDetails";
import TuteurEnChiffre from "../content/components/TuteurEnChiffre";
export default {
  name: "PageTuteurs",
  components: {
    TuteurEnChiffre,
    TuteurDetails,
  },
};
</script>

<style scoped>
</style>