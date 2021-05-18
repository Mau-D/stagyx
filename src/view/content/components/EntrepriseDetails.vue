<!--EntrepriseDetails.vue, Section des détails de l'entreprise
Maud Harvey-Guillaume Labrecque, 5 Mai 2021-->
<template>
  <b-container class=" carteEntreprise  my-5">
    <b-row class="py-5">
        <!-- Première COL Gauche-->
        <b-col cols="5" class="sectionGauche">
            <b-row class="imgEntreprise mb-5">
                 <img class="mb-5" src="https://phenixweb.com/img/phenix/logo_PhenixWeb.png" alt="compagnieImg">
            </b-row>
            <b-row class="adresseEntreprise">
                <p class="coordonneUn text-muted ml-0">
                    481 Saint-Joseph Est - 3e étage
                    <br>
                    Québec QC G1k 3B6
                </p>
            </b-row>
            <b-row>
                <p class="coordonneDeux text-muted mb-5">
                    (1) 581-707 8272
                    <br>
                    www.testweb.com
                </p>
            </b-row>
            <b-row class="responsable text-muted">
                <h5 class="textBold">Responsable</h5>
                <p class="mb-0">Samuel Caron</p> 
                <p>s.caron@gmail.com</p>                
            </b-row>            
        </b-col>
        <!-- Seconde COL Centre-->
        <b-col cols="6" class="sectionDroite">
            <b-row class="text-muted">
                <h5>Ses stagiaires</h5>
            </b-row>
            <b-row>
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
            </b-row>
            <b-row>
                <b-button
                    class="w-75 mt-5 px-5"
                    variant="success"
                    style="font-weight: bold"
                    >Associer un nouveau stagiaire
                </b-button>
            </b-row>
        </b-col>
        <!-- Troisième COL Droite-->
        <b-col cols="1" class="iconEntreprise text-right"> 
          <!-- Modifier -->
          <span class="symbol-label">
            <span class="svg-icon svg-icon-lg" style="fill: #3699ff">
              <inline-svg
                src="media/svg/icons/Communication/Write.svg"
              ></inline-svg>
            </span>
          </span>
          <span class="symbol-label">
            <span class="svg-icon svg-icon-lg" style="fill: #3699ff">
              <inline-svg
                src="media/svg/icons/Communication/trash-can-outline.svg"
              ></inline-svg>
            </span>
          </span>
        </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "EntrepriseDetails",
  data() {
    return {
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
        }
      ],
    };
  },
};
</script>

<style>
.carteEntreprise {
    background-color: #ffffff;
    border-radius: 5px;
}
.imgEntreprise img {
    height: 50px;
}
.responsable {
    display: flex;
    flex-direction: column;
}
.textBold {
    font-weight: bold;
}
.iconEntreprise {
    display: flex;
    flex-direction: row;
}

</style>