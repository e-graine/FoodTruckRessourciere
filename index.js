var app = new Vue({
    el: '#app',
    data: {
        message:"",
        waitingSpeech:null,
        messageCallBack:null,
        iaSpeeking: false,
        qcmMessage:null,
        currentScreen: "intro",
        introImage: data.introImage,
        enigmes: data.enigmes,
        currentEnigme:null,
        currentQuestion: 0,
    },
    mounted: function () {
        this.checkLandScape();
        for (enigme of this.enigmes){
            enigme.currentQuestion = 0;
        }
    },

    methods:{

        iaSpeech : function (speech) {
            this.message = speech.shift();
            this.waitingSpeech = speech.length > 0 ? speech : null
            this.iaSpeeking = true;
        },

        okMessage : function () {
            this.iaSpeeking = false;

            if (this.messageCallBack){
                let callBack = this.messageCallBack;
                this.messageCallBack = null
                callBack();
            }
        },

        nextMessage : function () {
            this.iaSpeech(this.waitingSpeech);
        },

        checkLandScape: function () {
            if (window.innerWidth < window.innerHeight) {
                this.iaSpeech([data.landscapeMessage]);
                return false;
            }
            return true;
        },

        letsPlay : function () {
            alert("yolo");
            // var appli = document.getElementById('app').requestFullscreen();
            // console.log (document.getElementById('app'))
            // if (appli.requestFullscreen) {
            //     appli.requestFullscreen();
            // } else if (appli.webkitRequestFullscreen) {
            //     appli.webkitRequestFullscreen();
            // } else if (appli.mozRequestFullScreen) {
            //     appli.mozRequestFullScreen();
            // } else if (appli.msRequestFullscreen) {
            //     appli.msRequestFullscreen();
            // }


            if (this.checkLandScape()) {
                this.currentScreen = 'board';
            }
        },

        chooseEnigme : function (enigme) {
            this.currentScreen = "enigme";
            this.currentEnigme = enigme;
            this.displayEnigme();
        },

        displayEnigme : function (enigme) {
            this.currentEnigme = enigme;
            this.iaSpeech([enigme.welcomeMessage, enigme.questions[enigme.currentQuestion].questionImage])
            this.currentScreen = "enigme";
        },
        
        nextStep : function () {
            if (this.currentQuestion >= data.questions.length) {
                this.currentQuestion = 0;
            }
        },

        resolve : function (answer) {
            const question = this.currentEnigme.questions[this.currentEnigme.currentQuestion];
            let speech = ["Mauvaise Réponse :/"];

            if (answer === question.answerImage){
                this.qcmMessage = question.qcm;
                speech = ["Bien joué !"];
            }

            if (answer === question.qcm.answer){
                this.qcmMessage = null;
                speech = ["Bien joué !", question.qcm.correction];
                this.endEnigme();
            }
            this.iaSpeech(speech);
        },

        endEnigme : function (){
            this.messageCallBack = () => { this.currentScreen = "board"};
            let e = this.currentEnigme;
            e.currentQuestion ++;
            const nextQuestion = e.questions[e.currentQuestion];
            if (nextQuestion){
                this.messageCallBack = () => {
                    this.iaSpeech(["Question suivante : " + nextQuestion.questionImage]);
                }
            }

        }
    },
});