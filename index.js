var timer = {
  data: function () {
    return {
      seconds: 0,
      stopTime: false,
    };
  },
  computed: {
    timeBarWidth: function () {
      return (1 / data.timesUp) * 100 * this.seconds + "%";
    },
  },
  methods: {
    tic: function () {
      if (!this.stopTime) this.seconds++;
      if (this.seconds > data.timesUp) return this.$parent.endGame();
      setTimeout(() => {
        this.tic();
      }, 1000);
    },
    timeForward: function (seconds) {
      this.seconds += seconds;
    },
    giveMeTime: function () {
      return this.seconds;
    },
  },
};

var app = new Vue({
  el: "#app",
  components: {
    timer: timer,
  },
  data: {
    message: "",
    userName: "",
    waitingSpeech: null,
    messageCallBack: null,
    iaSpeeking: false,
    qcmMessage: null,
    currentScreen: "intro",
    historic: ["intro"],
    introImage: data.introImage,
    enigmes: data.enigmes,
    currentEnigme: null,
    currentQuestion: 0,
    timesMalus: 0,
    endTime: 0,
    score: 0,
    currentDoc: 0,
    docs: [],
    docsCall: false,
    appSize: null,
    scoreLink: "null",
    scoreSaver: false,
  },
  mounted: function () {
    this.appSize = this.checkSize();
    for (enigme of this.enigmes) {
      enigme.currentQuestion = 0;
    }
  },
  updated: function () {
    console.log("yolo");
    // this.$emit('myEvent')
    // timer.options.methods.timeForward();
  },
  computed: {
    // testScore: function () {
    //   return this.scoreIsHigh;
    // },
  },

  watch: {
    currentScreen: function (screen) {
      this.historic.push(screen);
    },
    docs: function () {
      this.docsCall = true;
    },
  },

  methods: {
    iaSpeech: function (speech) {
      this.message = speech.shift();
      this.waitingSpeech = speech.length > 0 ? speech : null;
      this.iaSpeeking = true;
    },

    okMessage: function () {
      this.iaSpeeking = false;

      if (this.messageCallBack) {
        let callBack = this.messageCallBack;
        this.messageCallBack = null;
        callBack();
      }
    },

    nextMessage: function () {
      this.iaSpeech(this.waitingSpeech);
    },

    checkSize: function () {
      if (window.innerWidth < window.innerHeight) {
        this.iaSpeech([data.landscapeMessage]);
        return null;
      }
      const appHeight = parseInt((window.innerHeight - window.screenY) * 0.9);
      const appWidth = parseInt((appHeight * 5) / 3);
      const styleSize = {
        "max-height": appHeight + "px",
        "max-width": appWidth + "px",
      };
      return styleSize;
    },

    letsPlay: function () {
      this.appSize = this.checkSize();
      if (this.appSize) {
        this.currentScreen = "board";
        this.$refs.timer.tic();
      }
    },

    // chooseEnigme : function (enigme) {
    //     this.currentScreen = "enigme";
    //     this.currentEnigme = enigme;
    //     this.displayEnigme();
    // },

    displayEnigme: function (enigme) {
      this.currentEnigme = enigme;
      this.iaSpeech([
        enigme.welcomeMessage,
        enigme.questions[enigme.currentQuestion].questionImage,
      ]);
      this.currentScreen = "enigme";
      if (enigme.doc) this.docs.push(doc[enigme.doc]);
    },

    // nextStep : function () {
    //     if (this.currentQuestion >= data.questions.length) {
    //         this.currentQuestion = 0;
    //     }
    // },

    resolve: function (answer) {
      const question = this.currentEnigme.questions[
        this.currentEnigme.currentQuestion
      ];

      if (answer === question.answerImage) {
        this.qcmMessage = question.qcm;
        return this.iaSpeech(["Bien joué !"]);
      }

      if (answer === question.qcm.answer) {
        this.qcmMessage = null;
        this.iaSpeech(["Bien joué !", question.qcm.correction]);
        return this.endEnigme();
      }

      this.iaSpeech([
        "Mauvaise Réponse :/",
        "Tu viens de perdre " + data.timesMalus + "secondes",
      ]);
      this.$refs.timer.timeForward(data.timesMalus);
    },

    endEnigme: function () {
      this.currentEnigme.currentQuestion++;
      const nextQuestion = this.currentEnigme.questions[
        this.currentEnigme.currentQuestion
      ];

      if (nextQuestion) {
        return (this.messageCallBack = () => {
          this.iaSpeech(["Question suivante : " + nextQuestion.questionImage]);
        });
      }

      // this.currentEnigme = null;
      for (enigme of this.enigmes) {
        if (enigme.currentQuestion < enigme.questions.length) {
          return (this.messageCallBack = () => {
            this.currentScreen = "board";
          });
        }
      }

      this.endGame();
    },

    endGame: function () {
      const seconds = this.$refs.timer.giveMeTime();
      this.endTime = new Date(seconds * 1000).toISOString().substr(11, 8);
      this.score = Math.round(100 - (1 / data.timesUp) * 100 * seconds);
      if (this.score < 0) this.score = 0;
      this.scoreLinkGen(this.score);
      this.highScoreTest(this.score);
      this.currentScreen = "endGame";
      // this.encryptScore(this.score);
      // this.decryptScore('poi');
    },

    docDisplay: function () {
      if (!this.historic.includes("doc")) {
        this.iaSpeech(["La lecture de document arrête le temps"]);
      }
      this.docsCall = false;
      this.$refs.timer.stopTime = true;
      this.currentDoc = 0;
      // this.doc= doc[this.currentDoc];
      this.currentScreen = "doc";
    },

    forwardDoc: function () {
      this.currentDoc++;
    },

    backDoc: function () {
      this.currentDoc--;
    },

    docExit: function () {
      this.currentScreen = this.historic[this.historic.length - 2];
      this.$refs.timer.stopTime = false;
    },

    encryptScore: function (score, callback, optionalData) {
      var request = new XMLHttpRequest();
      request.open(
        "GET",
        "https://ycallier-api.herokuapp.com/encryptScore/" + score,
        true
      );
      request.onload = function () {
        return callback(request.response, optionalData);
      };
      request.send();
    },

    decryptScore: function (score) {
      var request = new XMLHttpRequest();
      request.open(
        "GET",
        "https://ycallier-api.herokuapp.com/decryptScore/" + score,
        true
      );
      request.onload = function () {
        console.log(request.response);
      };
      request.send();
    },

    fetchData: function (data, callback) {
      data = JSON.stringify(data);
      var request = new XMLHttpRequest();
      request.open(
        "GET",
        "https://ycallier-api.herokuapp.com/fetchData/" + data,
        true
      );
      request.onload = function () {
        callback(JSON.parse(request.response));
      };
      request.send();
    },

    scoreLinkGen: function (score) {
      const url = window.location.href + "/sharedScore.html?";
      const callback = function (crypteScore, url) {
        app.scoreLink = url + crypteScore;
      };
      this.encryptScore(score, callback, url);
    },

    shareLink: function () {
      const ghostInput = document.createElement("input");
      ghostInput.value = this.scoreLink;
      document.body.appendChild(ghostInput);
      ghostInput.select();
      document.execCommand("copy");
      document.body.removeChild(ghostInput);
      this.iaSpeech(["Lien copié"]);
    },

    highScoreTest: function (score) {
      callBack = function (highScores) {
        for (highScore of highScores) {
          if (score > highScore.score) {
            app.scoreSaver = true;
          }
        }
      };
      this.fetchData({ db: "foodTruck", col: "highScore" }, callBack);
    },

    newHighScore: function (score, name) {
      var request = new XMLHttpRequest();
      app.scoreSaver = false;
      request.open(
        "GET",
        "https://ycallier-api.herokuapp.com/newHighScore/" +
          "foodTruck/" +
          "highScore/" +
          score +
          "/" +
          name,
        true
      );
      request.onload = function () {
        //   endStep("majHighScore");
      };
      request.send();
    },
  },
});
