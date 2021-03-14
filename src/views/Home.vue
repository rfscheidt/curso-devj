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
      Quem tiver interesse, só me chamar no privado.<br><br>
      Corre lá, são apenas 20 vagas. <br><br>
      Lembrando que irei encaminhar os melhores 5 classificados para algumas empresas. <br><br>
      O curso tem o investimento de 50 reais para comprometimento e presença do aluno. <br><br>
      Início do curso 22/03 e término 16/04, aulas online segunda, quarta e sexta das 13 as 14 (Terça e quinta monitoria de código) <br><br>
      #soudev #java #springboot #vuejs #javascript #googlecloud #firebase
        </div>
      </v-card>
    </div>
    </template>

    <v-text-field
      v-model="form.name"
      label="Nome completo"
      required
    ></v-text-field>

    <v-text-field
      v-model="form.email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-textarea
      v-model="form.historical"
      label="Descreva sua história profissional com detalhes (Qual faculdade, curso, fase, já trabalhou, linguagens que conhece e objetivos de vida)"
      required
    ></v-textarea>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="saveStudent"
    >
      Salvar inscrição!!!
    </v-btn>

  </v-form>

  <v-dialog
        transition="dialog-bottom-transition"
        max-width="600"
        v-model="dialog"
      >
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >Curso Dev Fullstack</v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-12">Parabéns, você está inscrito no curso, aguarde instruções de pagamento.</div>
              <div>
              <br>
                Este projeto está disponível no <a href="https://github.com/rfscheidt/curso-devj" target="_blank">Github</a> e será tema de aula. Começe a estudar agora mesmo! <br>
              </div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Fechar</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
</v-container>
</template>

<script>
import { StudentService } from '@/service/StudentService'

export default {
  name: 'Home',
  data () {
    return {
      valid: true,
      dialog: false,
      form: {
        name: '',
        email: '',
        historical: ''
      },
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  methods: {
    saveStudent () {
      console.log('save student')
      this.dialog = true
      StudentService.save(this.form)
      this.form.name = ''
      this.form.email = ''
      this.form.historical = ''
    }
  },
  created () {
  }
}
</script>
