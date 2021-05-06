<template>
  <div>
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
      <b-button
        style="background-color: #457b9d; color: white; font-weight: bold"
        >Envoyer</b-button
      >
      <h1>ProfilStagiaireMini</h1>
      <p style="font-size: 2rem; font-weight: bold">Ginette Lebrun</p>
      <div class="d-flex justify-content-around">
        <b-button class="btn-info" style="font-weight: bold"
          >Contacter</b-button
        >
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
      <!-- Est déjà dans un v-for avec les donné dans le script (A) -->
      <div>
        <h1>StagiaireMini.vue</h1>
        <div class="table-responsive">
          <table
            class="table table-head-custom table-vertical-center table-head-bg table-borderless"
          >
            <tbody>
              <template v-for="(item, i) in list">
                <tr v-bind:key="i">
                  <td class="pl-0 pt-8">
                    <div class="d-flex align-items-center">
                      <div class="symbol symbol-50 symbol-light mr-4">
                        <span class="symbol-label">
                          <img
                            :src="item.img"
                            class="h-75 align-self-end"
                            alt=""
                          />
                        </span>
                      </div>
                      <div>
                        <a
                          class="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                          >{{ item.name }}</a
                        >
                        <span class="text-muted font-weight-bold d-block">{{
                          item.desc
                        }}</span>
                      </div>
                    </div>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
      <!-- ################################################################################# -->
      <div>
        <!-- Est déjà dans un v-for avec les donné dans le script (B) -->
        <h1>ProgrammeMini.vue</h1>
        <div class="card-body pt-2">
          <template v-for="(item, i) in listSessionMini">
            <!--begin::Item-->
            <div class="d-flex align-items-center mb-10" v-bind:key="i">
              <!--begin::Symbol-->
              <div
                class="symbol symbol-40 mr-5"
                v-bind:class="`symbol-light-${item.style}`"
              >
                <span class="symbol-label">
                  <span
                    class="svg-icon svg-icon-lg"
                    v-bind:class="`svg-icon-${item.style}`"
                  >
                    <!--begin::Svg Icon-->
                    <inline-svg :src="item.svg"></inline-svg>
                    <!--end::Svg Icon-->
                  </span>
                </span>
              </div>
              <!--end::Symbol-->
              <!--begin::Text-->
              <div class="d-flex flex-column font-weight-bold">
                <a class="text-dark text-hover-primary mb-1 font-size-lg">
                  {{ item.title }}
                </a>
                <span class="text-muted">
                  {{ item.desc }}
                </span>
              </div>
              <!--end::Text-->
            </div>
            <!--end::Item-->
          </template>
        </div>
      </div>
      <!-- ################################################################################# -->
      <div>
        <!-- Est déjà dans un v-for avec les donné dans le script (B) -->
        <h1>SessionMini.vue</h1>
        <div class="card-body pt-2">
          <template v-for="(item, i) in listSessionMini">
            <!--begin::Item-->
            <div class="d-flex align-items-center mb-10" v-bind:key="i">
              <!--begin::Symbol-->
              <div
                class="symbol symbol-40 mr-5"
                v-bind:class="`symbol-light-${item.style}`"
              >
                <span class="symbol-label">
                  <span
                    class="svg-icon svg-icon-lg"
                    v-bind:class="`svg-icon-${item.style}`"
                  >
                    <!--begin::Svg Icon-->
                    <inline-svg :src="item.svg"></inline-svg>
                    <!--end::Svg Icon-->
                  </span>
                </span>
              </div>
              <!--end::Symbol-->
              <!--begin::Text-->
              <div class="d-flex flex-column font-weight-bold">
                <a class="text-dark text-hover-primary mb-1 font-size-lg">
                  {{ item.title }}
                </a>
              </div>
              <!--end::Text-->
            </div>
            <!--end::Item-->
          </template>
        </div>
      </div>
      <!-- ################################################################################# -->
      <div>
        <!-- Est déjà dans un v-for avec les donné dans le script (A) -->
        <h1>Etoiles.vue</h1>
        <p>
          C'est pas exactement celui ou on peut avoir 3étoiles sur 5... va
          falloir chercher plus, mais d'ici là, c'est ce que l'on a!
        </p>
        <tbody>
          <template v-for="(item, i) in list">
            <div v-bind:key="i" class="ml-5">
              <!-- La class="ml-5" c'est pour lui donner de la margin à droite. -->
              <div>
                <img
                  src="media/logos/stars.png"
                  alt="image"
                  style="width: 5rem"
                />
                <span class="text-muted font-weight-bold d-block">{{
                  item.rate
                }}</span>
              </div>
            </div>
          </template>
        </tbody>
      </div>
      <!-- ################################################################################# -->
      <div>
        <h1>CarteTuteur.vue</h1>
        <b-card class="CarteTuteur p-0 text-left">
          <div class="d-flex flex-row">
            <div class="d-flex flex-column font-weight-bold p-2">
              <a class="text-dark text-hover-primary mb-1 font-size-lg">
                Nom du tuteur
              </a>
              <span class="text-muted"> Entrepise </span>
              <v-col class="text-center" cols="12" sm="4">
                <div class="m-0">
                  <b-button class="btn-info" style="font-weight: bold">
                    Contacter
                  </b-button>
                </div>
              </v-col>
            </div>
            <div>
              <span class="symbol-label">
                <!--Pour la src dans un v-for      :src="item.img"       -->
                <img
                  src="media/svg/avatars/001-boy.svg"
                  class="h-75 align-self-end"
                  alt=""
                  style="width: 6rem"
                  align-v="end"
                />
              </span>
            </div>
          </div>
        </b-card>
      </div>
      <!-- ################################################################################# -->
      <b-container class="d-flex flex-row">
        <b-col class="d-flex flex-column font-weight-bold p-2">
          <a class="text-dark text-hover-primary mb-1 font-size-lg">
            Nom du tuteur
          </a>
          <span class="text-muted"> Entrepise </span>
          <b-button class="btn-info" style="font-weight: bold">
            Contacter
          </b-button>
        </b-col>
        <b-col>
          <span class="symbol-label">
            <!--Pour la src dans un v-for      :src="item.img"       -->
            <img
              src="media/svg/avatars/001-boy.svg"
              class="h-75 align-self-end"
              alt=""
              style="width: 6rem"
              align-v="end"
            />
          </span>
        </b-col>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeliMelo",
  data() {
    return {
      // Les donnés (A)
      list: [
        {
          img: "media/svg/avatars/001-boy.svg",
          name: "Brad Simmons",
          desc: "HTML, JS, ReactJS",
          paid: "$8,000,000",
          status: "In Proccess",
          status2: "Paid",
          amount: "$520",
          company: "Intertico",
          company_desc: "Web, UI/UX Design",
          rate: "Best Rated",
        },
        {
          img: "media/svg/avatars/018-girl-9.svg",
          name: "Jessie Clarcson",
          desc: "C#, ASP.NET, MS SQL",
          paid: "$23,000,000",
          status: "Pending",
          status2: "Rejected",
          amount: "$1,600",
          company: "Agoda",
          company_desc: "Houses & Hotels",
          rate: "Above Average",
        },
        {
          img: "media/svg/avatars/014-girl-7.svg",
          name: "Lebron Wayde",
          desc: "PHP, Laravel, VueJS",
          paid: "$2,600,000",
          status: "Paid",
          status2: "Paid",
          amount: "$6,700",
          company: "RoadGee",
          company_desc: "Transportation",
          rate: "Best Rated",
        },
        {
          img: "media/svg/avatars/047-girl-25.svg",
          name: "Natali Trump",
          desc: "Python, PostgreSQL, ReactJS",
          paid: "$2,600,000",
          status: "Paid",
          status2: "Pending",
          amount: "$14,000",
          company: "The Hill",
          company_desc: "Insurance",
          rate: "Average",
        },
      ],
      // Les donnés (A)
      listSessionMini: [
        {
          title: "Briefing",
          desc: "Project Manager",
          svg: "media/svg/icons/Home/Library.svg",
          style: "primary",
        },
        {
          title: "Design",
          desc: "Art Director",
          svg: "media/svg/icons/Communication/Write.svg",
          style: "warning",
        },
        {
          title: "Logics",
          desc: "Lead Developer",
          svg: "media/svg/icons/Communication/Group-chat.svg",
          style: "success",
        },
        {
          title: "Development",
          desc: "DevOps",
          svg: "media/svg/icons/General/Attachment2.svg",
          style: "danger",
        },
        {
          title: "Testing",
          desc: "QA Managers",
          svg: "media/svg/icons/Communication/Shield-user.svg",
          style: "info",
        },
      ],
    };
  },
};
</script>

<style scoped>
.CarteTuteur {
  background-color: white;
  max-width: fit-content;
}
.card-body {
  padding: 0;
}
</style>
