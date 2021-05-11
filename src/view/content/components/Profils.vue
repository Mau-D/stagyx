<!--Profils.vue, composant à trois sections, dans le aside de droite, pour le profil du stagaire sélectionné de son tuteur et de son entreprise-hôte
Maud Harvey-Guillaume Labrecque, 4 mai 2021-->
<template>
  <b-container fluid>
    <!-- Profil du stagiaire -->

    <b-row class="my-5">
      <b-col>
        <h1 class="text-muted ml-0">Profil</h1>
        <p style="font-size: 1.3rem; font-weight: bold">Ginette Lebrun</p>
        <div class="d-flex justify-content-center">
          <b-button class="btn-info btn-sm" style="font-weight: bold"
            >Contacter</b-button
          >
          <b-button
            class="btn-sm ml-2"
            style="background-color: #eee5ff; color: #8950fc; font-weight: bold"
            >Modifier</b-button
          >
        </div>
      </b-col>
    </b-row>
    <!-- Profil du tuteur -->
    <b-row class="my-5">
      <b-col>
        <h1 class="text-muted">Tuteur</h1>
        <b-container>
          <b-row>
            <b-col sm="6" class="font-weight-bold">
              <p class="m-0" style="font-size: 1.3rem; font-weight: bold">
                Nom du tuteur
              </p>
              <span class="text-muted d-block"> Entreprise </span>
              <b-button class="btn-info btn-sm mt-5" style="font-weight: bold">
                Contacter
              </b-button>
            </b-col>

            <b-col sm="6">
              <span class="symbol-label">
                <!--Pour la src dans un v-for      :src="item.img"       -->
                <img
                  src="media/svg/avatars/001-boy.svg"
                  class="h-75 align-self-end"
                  alt=""
                  style="width: 5rem"
                />
              </span>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
    </b-row>
    <!-- Profil de l'entreprise -->
    <b-row class="my-5">
      <b-col>
        <h1 class="text-muted">Hôte</h1>
        <b-container class="bg-light px-auto">
          <!-- image -->
          <b-row class="my-4">
            <b-img
              src="https://media-exp1.licdn.com/dms/image/C510BAQFwLtju9HLGmA/company-logo_200_200/0/1519904112141?e=2159024400&v=beta&t=IZ6QmSlVgBNQPlKOGS8Dgqnf0YrH9URZmphNNKuSbas"
              fluid
              alt="Responsive image"
            ></b-img>
          </b-row>
          <!-- adresse -->
          <b-row class="my-4 text-muted">
            <p>
              481 Saint-Joseph Est - 3e étage<br />
              Québec QC G1K 3B6
            </p>
          </b-row>
          <!-- tel, site web -->
          <b-row class="my-4 text-muted">
            <p>
              (+1) 581-701-8272<br />
              www.phenixweb.com
            </p>
          </b-row>
          <!-- titre -->
          <b-row class="my-4">
            <strong>Responsable</strong>
          </b-row>
          <!-- Nom du responsable, courriel -->
          <b-row class="my-4 text-muted">
            <p>
              Samuel Caron<br />
              s.caron@gmail.com
            </p>
          </b-row>
          <b-row>
            <b-button class="btn-info btn-sm" style="font-weight: bold"
              >Contacter</b-button
            >
          </b-row>
        </b-container>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Profils",
};
</script>

<style>
</style>