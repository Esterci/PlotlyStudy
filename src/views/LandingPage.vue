<template>
  <div id="conteudo" class="d-flex">
    <v-navigation-drawer permanent expand-on-hover dark>
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-icon x-large>mdi-format-list-bulleted-square</v-icon>
          </v-list-item-avatar>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-code-braces</v-icon>
          </v-list-item-icon>
          <v-list-item-title
            >Configuration Options in JavaScript</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-text-field
        v-model="trace.x"
        label="X"
        outlined
        number
        dense
        class="mx-2"
      ></v-text-field>
      <v-text-field
        v-model="trace.y"
        label="Y"
        outlined
        dense
        class="mx-2"
      ></v-text-field>
      <v-text-field
        v-model="trace.type"
        label="Type"
        outlined
        dense
        class="mx-2"
      ></v-text-field>
      <v-text-field
        v-model="trace.name"
        label="Name"
        outlined
        dense
        class="mx-2"
      ></v-text-field>

      <v-btn @click="update()" class="mx-2">Update</v-btn>
      <div ref="myDiv" class="plot">
        <!-- Plotly chart will be drawn inside this DIV -->
      </div>
    </v-main>
  </div>
</template>


<script>
import Plotly from "plotly.js-dist/plotly";

export default {
  data() {
    return {
      trace: {
        x: [],
        y: [],
        type: "",
        name: "",
      },
      data: [],
      layout: {
        title: "Scroll and Zoom",
        showlegend: false,
      },
    };
  },
  methods: {
    // Updates the chart with the current user input
    update() {
      // Convert comma-separated string of x and y values to arrays
      this.trace.x = this.trace.x.split(",").map(parseFloat);
      this.trace.y = this.trace.y.split(",").map(parseFloat);

      // Build trace data array
      this.buildData();

      // Update the chart
      this.updateChart();
    },

    // Validates user input
    buildData() {
      this.data = [
        {
          x: this.trace.x,
          y: this.trace.y,
          type: this.trace.type,
          name: this.trace.name,
        },
      ];
    },
    updateChart() {
      Plotly.react(this.$refs.myDiv, this.data, this.layout, {
        scrollZoom: true,
      });
    },
  },
};
</script>


<style>
.plot {
  height: 500px;
  width: 1000px;
}

.v-list-item {
  overflow-wrap: break-word !important;
}
</style>