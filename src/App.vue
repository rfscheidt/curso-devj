<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        Dev2Me - Formação Fullstack (2 Edição)
      </div>

      <v-spacer></v-spacer>

      <span class="mr-2">Ambiente de cadastro</span>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>
