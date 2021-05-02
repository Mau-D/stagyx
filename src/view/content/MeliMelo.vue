<template>
  <div>
    <h1>InfoMini</h1>
    <div>
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
              <!-- <span class="svg-icon svg-icon-3x"
                >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                >
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <polygon points="0 0 24 0 24 24 0 24" />
                    <path
                      d="M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z"
                      fill="#000000"
                      fill-rule="nonzero"
                      opacity="0.3"
                      style="fill: #744568"
                    />
                    <path
                      d="M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,
                  16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,
                  21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,
                  15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,
                  13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,
                  20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,
                  21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"
                      fill="#000000"
                      fill-rule="nonzero"
                      style="fill: #744568"
                    />
                  </g></svg
                >
                </span> -->
            </v-card-avatar>
            <v-list-item-title style="font-size: 2rem; font-weight: bold">
              9 Stagiaires
            </v-list-item-title>
            <v-list-item-subtitle class="mb-3"># group</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </div>
    <h1>SupprimerModifier</h1>
    <div>
      <!-- Modifier -->
      <span class="symbol-label">
        <span class="svg-icon svg-icon-lg svg-icon-primary">
          <!--begin::Svg Icon-->
          <inline-svg
            src="media/svg/icons/Communication/Write.svg"
          ></inline-svg>
          <!--end::Svg Icon-->
        </span>
      </span>
      <!-- Supprimer -->
      <span class="symbol-label">
        <span class="svg-icon svg-icon-lg" style="fill: #3699ff">
          <!--begin::Svg Icon-->
          <inline-svg
            src="media/svg/icons/Communication/trash-can-outline.svg"
          ></inline-svg>
          <!--end::Svg Icon-->
        </span>
      </span>
    </div>
    <h1>CarteEntrepriseMini</h1>
    <div>
      <b-container class="bg-light px-auto py-5">
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
      </b-container>
    </div>
    <h1>Bouton gris/texteblanc Identification</h1>
    <b-button style="background-color: gray; color: white; font-weight: bold"
      >C'est parti</b-button
    >
    <h1>Bouton mauve pâle</h1>
    <b-button
      style="background-color: #eee5ff; color: #8950fc; font-weight: bold"
      >Créer un nouveau stage</b-button
    >
    <h1>Bouton Contacter mauve/textblanc</h1>
    <b-button class="btn-info" style="font-weight: bold">Contacter</b-button>
    <h1>Bouton bleu avec dropdown</h1>
    <b-dropdown
      id="dropdown-left"
      text="Envoyer à tous les stagiaires"
      variant="primary"
      class="m-2"
    >
      <b-dropdown-item href="#">Action</b-dropdown-item>
      <b-dropdown-item href="#">Another action</b-dropdown-item>
      <b-dropdown-item href="#">Something else here</b-dropdown-item>
    </b-dropdown>
    <h1>Bouton gris pâle charger plus</h1>
    <b-button class="font-weight-bold">Charger plus</b-button>
    <h1>Bouton Turquoise</h1>
    <b-button variant="success" style="font-weight: bold"
      >Associer un nouveau stage</b-button
    >
    <h1>Bouton Turquoise avec icône</h1>
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
    <h1>Bouton bleu-gris chat</h1>
    <b-button style="background-color: #457b9d; color: white; font-weight: bold"
      >Envoyer</b-button
    >
    <h1>ProfilStagiaireMini</h1>
    <p style="font-size: 2rem; font-weight: bold">Ginette Lebrun</p>
    <div class="d-flex justify-content-around">
      <b-button class="btn-info" style="font-weight: bold">Contacter</b-button>
      <b-button
        style="background-color: #eee5ff; color: #8950fc; font-weight: bold"
        >Modifier</b-button
      >
    </div>
    <h1>Étoile pour les stagiaires</h1>
    <span class="symbol-label">
      <span class="svg-icon svg-icon-lg" style="fill: green">
        <!--begin::Svg Icon-->
        <inline-svg
          src="media/svg/icons/Communication/star-circle.svg"
        ></inline-svg>
        <!--end::Svg Icon-->
      </span>
    </span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
