<template>
  <div id="conteudo" class="d-flex">
    <v-navigation-drawer
        permanent
        expand-on-hover
        dark
      >
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-icon x-large>mdi-format-list-bulleted-square</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
          nav
          dense
        >
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-code-braces</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Configuration Options in JavaScript</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

    <div ref="myDiv" class="plot">
      <!-- Plotly chart will be drawn inside this DIV -->
    </div>
  </div>
</template>


<script>
import Plotly from "plotly.js-dist/plotly";

export default {
  data() {
    return {
      data: [
        {
          x: ["2020-10-04", "2021-11-04", "2023-12-04"],
          y: [90, 40, 60],
          type: "scatter",
        },
      ],
      layout: {
        title: "Scroll and Zoom",
        showlegend: false,
      },
    };
  },
  mounted() {
    Plotly.newPlot(this.$refs.myDiv, this.data, this.layout, {
      scrollZoom: true,
    });
  },
};
</script>

<style>

.plot{
height: 500px;
width: 1000px;
}

.v-list-item{
    overflow-wrap: break-word !important;
}
</style>