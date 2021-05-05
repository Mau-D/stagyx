<!--EvaluationTaches.vue, composant incluant un graphique représentant les évaluations d'un stagiaire sélectionné(évaluations: stagiaire, tuteur et de l'hôte)
Maud Harvey-Guillaume Labrecque, 4 mai 2021-->
<template>
  <div id="chart">
    <apexchart
      type="area"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  name: "EvaluationTaches",
  data() {
    return {
      series: [
        {
          name: "Stagiaire",
          data: [0, 1, 2, 3, 4, 5, 4, 3],
        },
        {
          name: "Tuteur",
          data: [4, 2, 5, 4, 3, 4, 2, 3],
        },
        {
          name: "Hôte",
          data: [4, 5, 4, 3, 4, 5, 3, 4],
        },
      ],

      chartOptions: {
        chart: {
          height: 350,
          type: "area",
          toolbar: {
            show: false,
          },
        },
        title: {
          text: "Évaluation des tâches",
          align: "left",
          margin: 10,
          offsetX: 0,

          floating: false,
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            fontFamily: undefined,
            color: "#263238",
          },
        },
        subtitle: {
          text: "Nombre de tâches",
          align: "left",
          margin: 10,
          offsetX: 0,
          offsetY: 20,
          floating: false,
          style: {
            fontSize: "12px",
            fontWeight: "normal",
            fontFamily: undefined,
            color: "#9699a2",
          },
        },
        legend: {
          markers: {
            fillColors: ["#ead3a3", "#a8dadc", "#6c63ff"],
          },
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          colors: ["#ead3a3", "#a8dadc", "#6c63ff"],
        },
        markers: {
          colors: ["#ead3a3", "#a8dadc", "#6c63ff"],
        },
        stroke: {
          curve: "smooth",
          colors: ["#ead3a3", "#a8dadc", "#6c63ff"],
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2021-04-12T00:00:00.000Z",
            "2021-04-19T00:00:00.000Z",
            "2021-04-26T00:00:00.000Z",
            "2021-05-03T00:00:00.000Z",
            "2021-05-10T00:00:00.000Z",
            "2021-05-17T00:00:00.000Z",
            "2021-05-24T00:00:00.000Z",
            "2021-05-31T00:00:00.000Z",
          ],
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
      },
    };
  },
};
</script>

<style>
</style>