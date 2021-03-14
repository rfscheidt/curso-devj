<template>
<v-container>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <template>
    <div>
      <v-card
        class="d-flex align-center justify-center pa-4 mx-auto"
        outlined
      >
        <div>
          Todo mundo sabe que trabalhar com tecnologia é uma ótima opção de carreira, que é um segmento que só cresce e que tende a crescer cada vez mais. Mas o que nem sempre se sabe é COMO se posicionar nesse mercado, COMO conseguir experiência que traga um diferencial para um profissional que é recém-formado ou que está migrando de carreira.
      Ministro aulas no ensino superior de computação há 10 anos, porém percebo que a necessidade do mercado é imediata, pra equipes de desenvolvimento que precisavam de profissionais de alta performance.
      Por isso, resolvi criar um curso para desenvolvedores, onde vou ensinar o pessoal que está começando (ou migrando de carreira), tudo que eles precisam saber na prática, pra se posicionarem bem no mercado de tecnologia. Durante um mês, todos os dias, nós vamos trabalhar juntos para desenvolver habilidades em tecnologias como Java, Spring Boot, Maven, Postgres, Javascript, Vuejs, Vuetify, Nodejs, Github. Estes são itens que vamos praticar e criar novos projetos.
      Quem tiver interesse, só me chamar no privado. Corre lá, são apenas 20 vagas .
      Lembrando que irei encaminhar os melhores 5 classificados para algumas empresas.
      #soudev #java #springboot #vuejs #javascript #googlecloud
        </div>
      </v-card>
    </div>
    </template>

    <v-text-field
      v-model="name"
      label="Nome completo"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Item"
      required
    ></v-select>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="saveStudent"
    >
      Salvar inscrição!!!
    </v-btn>

  </v-form>
</v-container>
</template>

<script>
import { StudentService } from '@/service/StudentService'

export default {
  name: 'Home',
  data () {
    return {
      valid: true,
      name: '',
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4'
      ]
    }
  },
  methods: {
    saveStudent () {
      console.log('save student')
      StudentService.save()
    }
  },
  created () {
  }
}
</script>
