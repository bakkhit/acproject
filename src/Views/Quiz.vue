<template>
  <div>
    <h1>Quiz Assassin's Creed</h1>

    <div v-if="questions.length && currentQuestionIndex < questions.length">
      <h2>Question {{ currentQuestionIndex + 1 }} / {{ questions.length }}</h2>
      <h3>{{ questions[currentQuestionIndex].question }}</h3>

      <div v-for="(answer, index) in questions[currentQuestionIndex].answers" :key="index">
        <label>
          <input type="radio" :name="'question-' + currentQuestionIndex" :value="answer" v-model="selectedAnswer">
          {{ answer }}
        </label>
      </div>

      <button @click="confirmAnswer" :disabled="selectedAnswer === null || answerConfirmed">Confirmer</button>

      <p v-if="answerConfirmed" :style="{ color: isCorrect ? 'green' : 'red' }">
        {{ isCorrect ? 'Vrai ✅' : 'Faux ❌' }}
      </p>

      <p v-if="answerConfirmed" style="color: white;">
        La bonne réponse est : {{ correctAnswer }}.
      </p>

      <p v-if="answerConfirmed">
        Score total : {{ totalScore }} / {{ maxScore }}
      </p>

      <button v-if="answerConfirmed" @click="nextQuestion">Suivant</button>
    </div>

    <div v-else-if="currentQuestionIndex >= questions.length">
      <h2>Quiz terminé !</h2>
      <p>Score final : {{ totalScore }} / {{ maxScore }}</p>
      <button @click="restartQuiz">Recommencer</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          question: "Quel est le premier Assassin dans Assassin's Creed ?",
          answers: ["Altaïr", "Ezio", "Connor", "Bayek"],
          correct: "Altaïr"
        },
        {
          question: "Dans quel jeu Ezio apparaît-il pour la première fois ?",
          answers: ["AC I", "AC II", "AC Brotherhood", "AC Revelations"],
          correct: "AC II"
        },
        {
          question: "Quel studio développe Assassin's Creed ?",
          answers: ["Ubisoft", "EA", "Rockstar", "Square Enix"],
          correct: "Ubisoft"
        },
        {
          question: "Qui est le protagoniste principal d'Assassin's Creed 2 ?",
          answers: ["Ezio Auditore", "Altaïr Ibn-La'Ahad", "Connor Kenway", "Arno Dorian"],
          correct: "Ezio Auditore"
        },
        {
          question: "En quelle année commence Assassin's Creed 3 ?",
          answers: ["1754", "1776", "1800", "1860"],
          correct: "1754"
        },
        {
          question: "Comment s'appelle le vaisseau d'Edward Kenway dans AC4 ?",
          answers: ["Le Jackdaw", "Le Redcoat", "L'Argonauta", "Le Black Flag"],
          correct: "Le Jackdaw"
        },
        {
          question: "Quel est le véritable nom de Shay Cormac dans Assassin's Creed Rogue ?",
          answers: ["Shay Patrick Cormac", "Shay O'Conner", "Shane Cormac", "Shaylan Cormac"],
          correct: "Shay Patrick Cormac"
        },
        {
          question: "Qui est le maître Assassin que Connor Kenway affronte dans AC3 ?",
          answers: ["Charles Lee", "Haytham Kenway", "George Washington", "Connor Kenway"],
          correct: "Charles Lee"
        },
        {
          question: "Dans quel jeu Arno Dorian est-il le protagoniste ?",
          answers: ["Assassin's Creed Unity", "Assassin's Creed Syndicate", "Assassin's Creed Brotherhood", "Assassin's Creed IV"],
          correct: "Assassin's Creed Unity"
        },
        {
          question: "Comment s'appelle le mentor d'Ezio Auditore dans Brotherhood ?",
          answers: ["Niccolò Machiavelli", "Leonardo da Vinci", "Cesare Borgia", "Lucrezia Borgia"],
          correct: "Niccolò Machiavelli"
        },
        {
          question: "Quel est le premier Assassin's Creed à introduire le système de batailles navales ?",
          answers: ["Assassin's Creed 3", "Assassin's Creed 4", "Assassin's Creed Unity", "Assassin's Creed Rogue"],
          correct: "Assassin's Creed 3"
        },
        {
          question: "Qui est le père de Connor Kenway ?",
          answers: ["Haytham Kenway", "Charles Lee", "Edward Kenway", "Juno"],
          correct: "Haytham Kenway"
        },
        {
          question: "Quel artefact Ezio Auditore recherche-t-il dans Revelations ?",
          answers: ["Les clés de Masyaf", "La pomme d'Eden", "Les écrits d'Altaïr", "La dague de Tomoe"],
          correct: "Les clés de Masyaf"
        },
        {
          question: "Dans quel jeu voit-on la destruction de la ville de Lisbonne par un tremblement de terre ?",
          answers: ["Assassin's Creed Rogue", "Assassin's Creed 3", "Assassin's Creed Brotherhood", "Assassin's Creed IV"],
          correct: "Assassin's Creed Rogue"
        },
        {
          question: "Quel personnage incarne le dernier descendant des Assassins dans AC1 ?",
          answers: ["Desmond Miles", "Altaïr Ibn-La'Ahad", "Ezio Auditore", "Haytham Kenway"],
          correct: "Desmond Miles"
        },
        {
          question: "Quel Assassin fonde la Confrérie des Assassins en Amérique dans AC3 ?",
          answers: ["Connor Kenway", "Ezio Auditore", "Altair Ibn-La'Ahad", "Haytham Kenway"],
          correct: "Connor Kenway"
        },
        {
          question: "Quel Assassin apparaît dans les événements de la Révolution française ?",
          answers: ["Arno Dorian", "Ezio Auditore", "Connor Kenway", "Edward Kenway"],
          correct: "Arno Dorian"
        },
        {
          question: "Quel Templier est responsable de la mort d'Edward Kenway ?",
          answers: ["Reginald Birch", "Charles Lee", "Haytham Kenway", "Juno"],
          correct: "Reginald Birch"
        },
        {
          question: "Dans AC Syndicate, comment s'appelle la sœur de Jacob Frye ?",
          answers: ["Evie Frye", "Lydia Frye", "Marie Frye", "Clara Frye"],
          correct: "Evie Frye"
        },
        {
          question: "Qui est le grand méchant principal d'Assassin's Creed 1 ?",
          answers: ["Robert de Sablé", "Juno", "Abstergo", "Borgia"],
          correct: "Robert de Sablé"
        },
        {
          question: "Quel est le vrai nom d'Altaïr Ibn-La'Ahad ?",
          answers: ["Altaïr Ibn-La'Ahad", "Altair Ben-La'Ahad", "Altaïr al-Din", "Aladdin Ibn-La'Ahad"],
          correct: "Altaïr Ibn-La'Ahad"
        }
      ],
      currentQuestionIndex: 0,
      selectedAnswer: null,
      score: 0,
      totalScore: 0,  // Le score total mis à jour
      scorePerQuestion: 0,  // Le score pour chaque question
      answerConfirmed: false,
      isCorrect: false,
      correctAnswer: "",
      maxScore: 20, // Le score maximum basé sur le nombre total de questions
    };
  },
  methods: {
    confirmAnswer() {
      this.isCorrect = this.selectedAnswer === this.questions[this.currentQuestionIndex].correct;
      this.correctAnswer = this.questions[this.currentQuestionIndex].correct;

      // Si la réponse est correcte, on attribue 1 point pour cette question
      if (this.isCorrect) {
        this.scorePerQuestion = 1;
        this.totalScore++;  // Augmenter le score total
      } else {
        this.scorePerQuestion = 0;  // Pas de point si la réponse est incorrecte
      }

      // Marquer la réponse comme confirmée
      this.answerConfirmed = true;
    },
    nextQuestion() {
      // Passer à la question suivante
      this.currentQuestionIndex++;
      this.selectedAnswer = null;
      this.answerConfirmed = false;
      this.scorePerQuestion = 0;  // Réinitialiser le score de la question
    },
    restartQuiz() {
      // Redémarrer le quiz
      this.currentQuestionIndex = 0;
      this.totalScore = 0;  // Réinitialiser le score total
      this.selectedAnswer = null;
      this.answerConfirmed = false;
      this.scorePerQuestion = 0;
    }
  }
};
</script>

<style scoped>
h1 {
  color: white;
  text-align: center;
}

h2 {
  color: gray;
}

h3{
  color: rgb(253, 59, 59);
}

label {
  display: block;
  color: white;
  margin: 5px 0;
}

button {
  margin-top: 10px;
  padding: 8px 15px;
  background-color: rgb(253, 59, 59);
  color: white;
  border: none;
  cursor: pointer;
}

button:disabled {
  background-color: grey;
  cursor: not-allowed;
}

p {
  color: white;
  font-size: 1.1em;
  margin-top: 10px;
}
</style>