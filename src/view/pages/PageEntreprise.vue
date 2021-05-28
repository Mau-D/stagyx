<template>
  <b-container>
    <b-row>
      <b-col class="entreprise" cols="9">

        <!-- titre -->
          <b-row>
            <b-col>
              <h1 class="text-muted mt-5">Entreprises de stage</h1>
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

          <b-row>
            <b-col class="carteEntreprise p-0">
              <EntrepriseDetails />
            </b-col>
          </b-row>
      </b-col>
      <b-col class="sectionDroiteEntreprise" cols="3">
        <EntrepriseEnChiffre />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import EntrepriseDetails from "../content/components/EntrepriseDetails";
import EntrepriseEnChiffre from "../content/components/EntrepriseEnChiffre";
export default {
    name:"PageEntreprise",
    components:{
      EntrepriseDetails,
      EntrepriseEnChiffre,
    }
}
</script>

<style scoped>
.carteEntreprise {
  display: flex;
  justify-content: center;
  align-content: center;
}
.sectionDroiteEntreprise {
  background-color: #ffffff;
  height: 100vh;
}
</style>
