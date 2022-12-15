<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>
.row {
  width: 100%;
}

#contato {
  width: 100%;
}

#geral {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#conteudo {
  justify-content: start;
  width: 100%;
  height: 100%;
  background: #414141;
}

</style>