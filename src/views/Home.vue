<template>
<v-container>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <template>
      <div class="caption q-py-sm">
        <div class="wrapper__box">
            <div>
                <div class="text-h6">Dev2Me</div>

                <p>Curso prático para desenvolvedores iniciantes, totalmente hand-ons (Dev mão na massa).</p>

                <div class="text-h6">Objetivo do curso</div>

                <p>Esse curso visa desenvolver habilidades práticas em Java e Javascript além de frameworks comumente usados em equipes de desenvolvimento. Oferecendo conhecimento e vivência prática, o nosso objetivo é encaminhar os alunos mais bem colocados para vagas em empresas parceiras. </p>

                <div class="text-h6">Pra quem é?</div>

                <p>Para quem está entrando no mercado de trabalho agora. Tanto recém formados ou pessoas que estão migrando de área e querem ter uma vivência prática.</p>

                <div class="text-h6">Ementa</div>

                <p>Desenvolver habilidades práticas para trabalhar com Java, Spring Boot, Maven, Postgres, Javascript, Vuejs, Vuetify, JQuery, Nodejs, Firebase, Firestore, Firebase Hosting. Github. Estes são itens que vamos praticar e criar novos projetos.</p>

                <div class="text-h6">Como serão as aulas?</div>

                <p>As aulas começam na segunda dia 22/03. Elas acontecem todos os dias, das 13 às 14h.
                  Segundas, quartas e sextas teremos aulas teóricas/práticas juntos. Nas terças e quintas, faremos a monitoria de código.
                  A conclusão do curso está prevista para 16/04.
                </p>

                <div class="text-h6">Investimento</div>

                <p>Estamos cobrando o valor simbólico de R$ 50 por inscrição, para a reserva da vaga e registro do comprometimento do aluno com o curso.</p>

                <div class="text-h6">Como se inscrever?</div>

                <p>Preencha o formulário abaixo com os seus dados: </p>

            </div>
        </div>
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
