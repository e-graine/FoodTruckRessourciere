var app = new Vue({
    el: '#app',
    data: {
        message:"",
        messageCallBack:null,

        iaSpeeking: false,
        currentScreen: "intro",
        introImage: data.introImage,
        enigmes: data.enigmes,
        currentEnigme:null,
        enigmeTitle: null,
        enigmeImage: null,
        enigmeZones: null,
        currentQuestion: null,
        question: null,
        answer:null,
        answerMessage:"",
        nextTxt:"",
        step:null,
    },
    mounted: function () {
        this.checkLandScape();
    },

    methods:{

        okMessage : function () {
            this.iaSpeeking = false;
            if (this.messageCallBack){
                let callBack = this.messageCallBack;
                this.messageCallBack = null
                callBack();
            }
        },

        checkLandScape: function () {
            if (window.innerWidth < window.innerHeight) {
                this.messageCallBack = this.checkLandScape;
                this.iaSpeech([data.landscapeMessage]);
                // this.messageCallBack = null;
            }
        },
        
        iaSpeech : function (speech) {
            this.iaSpeeking = true;
            this.message = speech.shift();
        },
        
        nextStep : function () {
            this.answer = null;
            if (this.currentQuestion >= data.questions.length) {
                this.currentQuestion = 0;
            }
            this.question = data.questions[this.currentQuestion];
        },

        resolve : function (answer) {
            this.answer = answer;
            this.nextTxt = "SUIVANT >>";
            this.answerMessage = "Bien joué !";
            if (answer === this.question.answerImage){
                return this.step = "questionText"
            }
            if (answer === this.question.answerText){
                this.currentQuestion ++;
                this.answerMessage += this.question.correction;
                return this.step = "questionImage";
            }
            /////////// si aucune condition de victoir n'est validée
            this.answerMessage = "Mauvaise réponse"
            if (this.zones[answer]) this.answerMessage = this.zones[answer].wrongText;
            this.nextTxt = "ESSAYES ENCORE >>";
        },
    },
});