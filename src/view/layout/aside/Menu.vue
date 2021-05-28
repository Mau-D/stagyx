<template>
  <ul class="menu-nav mb-20">
    <!-- En-tête du menu BEGIN -->
    <!-- Tableau de bord mène à la PageGroupes -->

    <router-link
      to="/dashboard"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <!-- Le menu est actif, lorsqu'il est sur le dashboard -->
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active',
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-architecture-and-city"></i>
          <span class="menu-text">Tableau de bord</span>
        </a>
      </li>
    </router-link>
    <!-- Changer ou sélectionner un groupe, Liste des groupes, condition si l'on se trouve sur PageGroupes ou PageGroupe -->
    <router-link
      to="/pagegroupe"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item menu-item-submenu"
      >
        <a href="#" class="menu-link menu-toggle">
          <i class="menu-icon flaticon2-group"></i>
          <span class="menu-text">Sélectionner un groupe</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="menu-submenu">
          <span class="menu-arrow"></span>
          <ul class="menu-subnav">
            <li aria-haspopup="true" class="menu-item menu-item-parent">
              <span class="menu-link">
                <span class="menu-text">Sélectionner un groupe</span>
              </span>
            </li>
            <!-- Si le sous menu est actif afficher la liste des groupes -->
            <li
              v-for="groupe in groupes"
              :key="groupe"
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active',
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">GROUPE: {{ groupe }}</span>
              </a>
            </li>
            <!-- Exemple des buttons pour un sous-menu -->
            <!-- <li
            aria-haspopup="true"
            data-menu-toggle="hover"
            class="menu-item menu-item-submenu"
            v-bind:class="{
              'menu-item-open': hasActiveChildren('/vue-bootstrap/button'),
            }"
          >
            <a href="#" class="menu-link menu-toggle">
              <i class="menu-bullet menu-bullet-dot">
                <span></span>
              </i>
              <span class="menu-text">Buttons</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="menu-submenu">
              <span class="menu-arrow"></span>
              <ul class="menu-subnav">
                <li aria-haspopup="true" class="menu-item menu-item-parent">
                  <span class="menu-link">
                    <span class="menu-text"></span>
                  </span>
                </li>

                <router-link
                  to="/vue-bootstrap/button"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active',
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot">
                        <span></span>
                      </i>
                      <span class="menu-text">Button</span>
                    </a>
                  </li>
                </router-link>

                <router-link
                  to="/vue-bootstrap/button-group"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active',
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot">
                        <span></span>
                      </i>
                      <span class="menu-text">Button Group</span>
                    </a>
                  </li>
                </router-link>

                <router-link
                  to="/vue-bootstrap/button-toolbar"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <li
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                    class="menu-item"
                    :class="[
                      isActive && 'menu-item-active',
                      isExactActive && 'menu-item-active',
                    ]"
                  >
                    <a :href="href" class="menu-link" @click="navigate">
                      <i class="menu-bullet menu-bullet-dot">
                        <span></span>
                      </i>
                      <span class="menu-text">Button Toolbar</span>
                    </a>
                  </li>
                </router-link>
              </ul>
            </div>
          </li> -->
          </ul>
        </div>
      </li>
    </router-link>
    <!-- En-tête du menu END -->
    <!-- Menu section Groupe, visible seulement avec PageGroupe -->

    <li class="menu-section">
      <h4 class="menu-text">GROUPE: #groupe</h4>
      <i class="menu-icon flaticon-more-v2"></i>
    </li>
    <!-- stagiaires -->
    <router-link
      to="/stagiaires"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active',
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-avatar"></i>
          <span class="menu-text">Stagiaires</span>
        </a>
      </li>
    </router-link>
    <!-- tuteurs -->
    <router-link
      to="/tuteurs"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active',
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-avatar"></i>
          <span class="menu-text">Tuteurs</span>
        </a>
      </li>
    </router-link>
    <!-- entreprises -->
    <router-link
      to="/entreprise"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active',
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-laptop"></i>
          <span class="menu-text">Entreprises</span>
        </a>
      </li>
    </router-link>
    <!-- évaluations -->
    <router-link
      to="/pageTache"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active',
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-notepad"></i>
          <span class="menu-text">Évaluations</span>
        </a>
      </li>
    </router-link>
    <!-- rapports de stage -->
    <router-link
      to="/stagiaire"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active',
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-document"></i>
          <span class="menu-text">Rapports de stage</span>
        </a>
      </li>
    </router-link>
    <!-- paramètres de stage -->
    <router-link
      to="/parametresstage"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active',
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-gear"></i>
          <span class="menu-text">Paramètres de stage</span>
        </a>
      </li>
    </router-link>
    <!-- Section groupe END -->
    <!-- Section Gestion globale BEGIN -->
    <li class="menu-section">
      <h4 class="menu-text">GESTION GLOBALE</h4>
      <i class="menu-icon flaticon-more-v2"></i>
    </li>
    <!-- calendrier -->
    <router-link
      to="/calendrier"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active',
        ]"
      >
        <a href="#" class="menu-link menu-toggle">
          <i class="menu-icon flaticon2-calendar"></i>
          <span class="menu-text">Calendrier</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="menu-submenu">
          <span class="menu-arrow"></span>
          <ul class="menu-subnav">
            <!-- Si le sous menu est actif afficher la liste des groupes -->
            <li
              v-for="calendrier in calendriers"
              :key="calendrier"
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active',
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text"> {{ calendrier }}</span>
              </a>
            </li>
          </ul>
        </div>
      </li>
    </router-link>
    <!-- tâches -->
    <router-link
      to="/taches"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active',
        ]"
      >
        <a href="#" class="menu-link menu-toggle">
          <i class="menu-icon flaticon2-list"></i>
          <span class="menu-text">Tâches</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="menu-submenu">
          <span class="menu-arrow"></span>
          <ul class="menu-subnav">
            <!-- Si le sous menu est actif afficher la liste des groupes -->
            <li
              v-for="tache in taches"
              :key="tache"
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active',
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text"> {{ tache }}</span>
              </a>
            </li>
          </ul>
        </div>
      </li>
    </router-link>
    <!-- entraide -->
    <router-link
      to="/entraide"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active',
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-help"></i>
          <span class="menu-text">Entraide</span>
        </a>
      </li>
    </router-link>
    <!-- entreprises -->
    <router-link
      to="/entreprises"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active',
        ]"
      >
        <a href="#" class="menu-link menu-toggle">
          <i class="menu-icon flaticon2-laptop"></i>
          <span class="menu-text">Entreprises</span>
        </a>
        <div class="menu-submenu">
          <span class="menu-arrow"></span>
          <ul class="menu-subnav">
            <!-- Si le sous menu est actif afficher la liste des groupes -->
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active',
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text"> Ajouter une entreprise</span>
              </a>
            </li>
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active',
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text"> Toutes les entreprises</span>
              </a>
            </li>
          </ul>
        </div>
      </li>
    </router-link>
    <!-- stages -->
    <router-link
      to="/stages"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active',
        ]"
      >
        <a href="#" class="menu-link menu-toggle">
          <i class="menu-icon flaticon2-contract"></i>
          <span class="menu-text">Stages</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="menu-submenu">
          <span class="menu-arrow"></span>
          <ul class="menu-subnav">
            <!-- Si le sous menu est actif afficher la liste des groupes -->
            <li
              v-for="stage in stages"
              :key="stage"
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active',
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text"> {{ stage }}</span>
              </a>
            </li>
          </ul>
        </div>
      </li>
    </router-link>
    <!-- utilisateurs -->
    <router-link
      to="/utilisateurs"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active',
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-user"></i>
          <span class="menu-text">Utilisateurs</span>
        </a>
      </li>
    </router-link>
    <!-- programmes -->
    <router-link
      to="/programmes"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active',
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-schedule"></i>
          <span class="menu-text">Programmes</span>
        </a>
      </li>
    </router-link>
    <!-- Section gestion globale END -->
    <!-- Section vous BEGIN -->
    <li class="menu-section">
      <h4 class="menu-text">VOUS</h4>
      <i class="menu-icon flaticon-more-v2"></i>
    </li>
    <!-- Préférences -->
    <router-link
      to="/preferences"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active',
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-favourite"></i>
          <span class="menu-text">Préférences</span>
        </a>
      </li>
    </router-link>
    <!-- votre profil -->
    <router-link
      to="/profil"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active',
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-user"></i>
          <span class="menu-text">Votre profil</span>
        </a>
      </li>
    </router-link>
    <!-- quitter -->
    <router-link to="/" v-slot="{ href, navigate }">
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item menu-item-submenu"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-back"></i>
          <span class="menu-text">Quitter</span>
        </a>
      </li>
    </router-link>
    <!-- Section vous END -->
  </ul>
</template>

<script>
export default {
  name: "KTMenu",
  data() {
    return {
      groupes: [1017, 2039, 3672],
      calendriers: ["Automne 2020", "Hiver 2021", "Été 2021"],
      taches: [
        "Exploration",
        "Étude du framework",
        "Intégration des maquettes",
      ],
      stages: ["Stage1", "Stage2", "Stage3"],
    };
  },
  methods: {
    hasActiveChildren(match) {
      return this.$route["path"].indexOf(match) !== -1;
    },
  },
};
</script>
