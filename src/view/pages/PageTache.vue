<template>
  <b-container fluid>
    <b-row>
      <b-col cols="9" class="containerTache">
        <b-row class="barometre pt-5">
          <b-col cols="7">
            <h3>Détail de la tâche</h3>
          </b-col>
          <b-col cols="5" class="speedometer">
            <img
              class="speedometer"
              src="https://pngimg.com/uploads/gauge/gauge_PNG27.png"
              alt="speedometer"
            />
            <h5 class="text-muted pl-5">
              15 tâche
            </h5>
            <!-- <vue-speedometer /> -->
          </b-col>
        </b-row>
        <hr />
        <b-row class="texte">
          <b-col>
            <b-row class="titreTexte mb-5">
              <b-col cols="10">
                <h1>
                  Trip Reminder. Thanks flying with us!
                </h1>
              </b-col>
              <b-col cols="2">
                <p class="text-muted mb-0">
                  Jul 15, 2019,11:19 AM
                </p>
              </b-col>
            </b-row>
            <b-row class="mb-5">
              <b-col>
                <p class="text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  voluptatum quam rem minima iure inventore, dolore dolor totam!
                  Similique magnam aliquid qui alias provident architecto ab
                  nostrum veniam illo eum? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Sequi voluptatum quam rem minima
                  iure inventore, dolore dolor totam! Similique magnam aliquid
                  qui alias provident architecto ab nostrum veniam illo eum?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  voluptatum quam rem minima iure inventore, dolore dolor totam!
                  Similique magnam aliquid qui alias provident architecto ab
                  nostrum veniam illo eum?
                </p>
              </b-col>
            </b-row>
          </b-col> </b-row
        ><!--texte-->
        <b-row class="etoile">
          <b-col cols="8" class="etoileGauche text-left" align-v="center">
            <div class="ligneEtoiles">
              <h5>MES étoiles</h5>
              <p class="text-muted pl-5">Auto-Évaluation</p>
            </div>
            <div class="ligneEtoiles">
              <h5>MES étoiles</h5>
              <p class="text-muted pl-5">Tuteur</p>
            </div>
            <div class="ligneEtoiles">
              <h5>MES étoiles</h5>
              <p class="text-muted pl-5">Responsable du stage</p>
            </div>
          </b-col>
          <b-col cols="4">
            <p class="text-muted">Évaluation globale</p>
            <h1>MES ÉTOILES</h1>
          </b-col> </b-row
        ><!--etoile-->
        <hr />
        <!--CHAT-->
        <b-row class="messageTache font-weight-bold m-4">
          <b-col md="8">
            <p class="mb-1">
              Lina Nelson <span class="text-muted">2 Day</span>
            </p>
            <p class="text-muted ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea esse
              ipsam soluta unde distinctio sint animi tempora vero nihil enim.
            </p>
          </b-col>
          <b-col md="2" offset-md="2" class="text-right">
            <p class="text-muted mb-0">test</p>
            <p class="text-muted">test</p>
          </b-col> </b-row
        ><!--messageTache-->
        <hr />
        <b-row class="messageTache font-weight-bold m-4">
          <b-col md="8">
            <p class="mb-1">
              Lina Nelson <span class="text-muted">2 Day</span>
            </p>
            <p class="text-muted ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea esse
              ipsam soluta unde distinctio sint animi tempora vero nihil enim.
            </p>
          </b-col>
          <b-col md="2" offset-md="2" class="text-right">
            <p class="text-muted mb-0">test</p>
            <p class="text-muted">test</p>
          </b-col> </b-row
        ><!--messageTache-->
        <hr />
        <b-row>
          <b-col class="cartMessage">
            <b-row>
              <p class="titreMessage pl-5">Laisser un commentaire</p>
            </b-row>
            <hr />
            <b-row>
              <p>CA JE NE SAIS PAS COMMENT LE FAIRE</p>
            </b-row>
            <b-row>
              <b-col>
                <b-form-textarea
                  id="textarea-rows"
                  placeholder="Tall textarea"
                  rows="8"
                ></b-form-textarea>
                <b-button class="btn-info mt-5" style="font-weight: bold">
                  Envoyer
                </b-button>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="3" class="sectionDroite">
        <b-row class="carteDroite">
          <b-col>
            <h1 class="titreDroite text-muted pt-4">Profil</h1>
            <p style="font-size: 2rem; font-weight: bold">Ginette Lebrun</p>
            <div class="d-flex justify-content-around">
              <b-button class="btn-info" style="font-weight: bold">
                Contacter
              </b-button>
              <b-button
                style="background-color: #eee5ff; color: #8950fc; font-weight: bold"
              >
                Modifier
              </b-button>
            </div>
            <h1 class="titreDroite text-muted pt-4 mt-5">Tuteur</h1>
            <div class="carteTuteur">
              <CarteTuteurs />
            </div>
            <h1 class="titreDroite text-muted pt-4 mt-5">Hôte</h1>
            <b-col cols="5" class="sectionGauche">
              <b-row class="imgEntreprise mb-5">
                <img
                  class="mb-5"
                  src="https://phenixweb.com/img/phenix/logo_PhenixWeb.png"
                  alt="compagnieImg"
                />
              </b-row>
              <b-row class="adresseEntreprise">
                <p class="coordonneUn text-muted ml-0">
                  481 Saint-Joseph Est - 3e étage
                  <br />
                  Québec QC G1k 3B6
                </p>
              </b-row>
              <b-row>
                <p class="coordonneDeux text-muted mb-5">
                  (1) 581-707 8272
                  <br />
                  www.testweb.com
                </p>
              </b-row>
              <b-row class="responsable text-muted">
                <h5 class="textBold">Responsable</h5>
                <p class="mb-0">Samuel Caron</p>
                <p>s.caron@gmail.com</p>
              </b-row>
              <b-row>
                <b-button class="btn-info" style="font-weight: bold">
                  Contacter
                </b-button>
              </b-row>
              <b-row>
                <vue-speedometer />
              </b-row>
            </b-col>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import VueSpeedometer from "vue-speedometer";
import CarteTuteurs from "../content/components/CarteTuteurs";
export default {
  name: "PageTache",
  components: {
    CarteTuteurs,
    VueSpeedometer,
  },
  template: `<vue-speedometer />`,
  // components: { VueSpeedometer },
  // template: `<vue-speedometer />`,
};
</script>

<style>
.containerTache {
  background-color: #ffffff;
  border-radius: 10px;
}
.barometre {
  display: flex;
  justify-content: start;
  align-items: center;
}
.barometre h3,
.titreMessage {
  color: blueviolet;
  font-weight: bold;
}
.speedometer {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.titreTexte {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ligneEtoiles {
  display: flex;
}
.cartMessage {
  margin: 15px;
  padding: 25px 15px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.titreDroite {
  font-size: 2rem;
}
.carteDroite {
  background-color: #ffffff;
  margin: 0px 5px;
  border-radius: 10px;
  height: 100%;
}
.imgEntreprise img {
  height: 45px;
}
.carteTuteur {
  display: flex;
  justify-content: flex-start;
}
</style>
