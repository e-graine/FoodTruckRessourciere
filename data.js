data = {
    introImage : "img/intro.jpg",
    test:"test",
    landscapeMessage: "Veuillez passer en mode paysage pour jouer",
    enigmes : [{
        title: "Itinéraire d'un burger",
        welcomeMessage: "Bienvenue dans l'itinéraire d'un burger !",
        image: "img/enigmeTest.jpg",
        zones : {
            bananes : {
                top : "35%",
                left : "70%",
                width : "15%",
                height : "28%",
                border : "1px solid black",
                wrongText : "humm.. non ça c'est une banane",
            },
            torchon : {
                top : "10%",
                left : "60%",
                width : "12%",
                height : "40%",
                border : "1px solid black",
                wrongText : "Non le torchon ça marche pas",
            },
            listeCourse : {
                top : "60%",
                left : "50%",
                width : "20%",
                height : "35%",
                border : "1px solid black",
                wrongText : "Non la liste de courses ça marche pas",
            },
            yaourt : {
                top : "10%",
                left : "30%",
                width : "20%",
                height : "30%",
                border : "1px solid black",
                wrongText : "Non le yaourt ça marche pas",
            },
            frigoDuDesert : {
                top : "15%",
                left : "5%",
                width : "20%",
                height : "40%",
                border : "1px solid black",
                wrongText : "Non le frigo du désert ça marche pas",
            },
            chocolat : {
                top : "60%",
                left : "5%",
                width : "20%",
                height : "30%",
                border : "1px solid red",
                wrongText : "Non le chocolat ça marche pas",
            },
        },
        questions:
        [
            {
                questionImage : "Retrouve un objet qui te permet d’économiser",
                answerImage : "listeCourse",
                qcm : {
                    question : "Quelle quantité de plats non déballés est jetée par an pour une personne ?",
                    propositions : ["7Kg", "2Kg", "10Kg", "5Kg"],
                    answer: "7Kg",
                    correction: "Une personne jette 7 kg de plat non déballé par an. Faire sa liste de course permet d’acheter seulement ce dont on a besoin.",
                }
            },
            {
                questionImage : "Retrouve un élément qui permet de conserver le pain plus longtemps",
                answerImage : "torchon",
                qcm : {
                    question : "Quelle quantité de pain est gaspillée à la maison pour une personne ?",
                    propositions : ["4Kg", "500g", "1Kg", "3Kg"],
                    answer: "4Kg",
                    correction: "Une personne jette 4 kg de pain par an en moyenne. Le pain se conserve plus longtemps dans un torchon, on peut aussi en faire du pain perdu.",
                }
            },
            {
                questionImage : "Retrouve un aliment qui se consomme encore 2 semaines après sa date de péremption.",
                answerImage : "yaourt",
                qcm : {
                    question : "Le CO2 émis par la production d’un yaourt est équivalent à un trajet de :",
                    propositions : ["12 km en voiture", "20 km en voiture", "3 km en voiture", "9 km en voiture"],
                    answer: "12 km en voiture",
                    correction: "La production de nos aliments a nécessité des ressources et du transport. Lorsque l’on jette un produit, ce sont toutes ses ressources utilisées qui sont gaspillées.",
                }
            },
        ]
    },
    {
        title: "Itinéraire d'un burger 2",
        welcomeMessage: "Bienvenue dans l'itinéraire d'un burger !",
        image: "img/enigmeTest.jpg",
        zones : {
            bananes : {
                top : "35%",
                left : "70%",
                width : "15%",
                height : "28%",
                border : "1px solid black",
                wrongText : "humm.. non ça c'est une banane",
            },
            torchon : {
                top : "10%",
                left : "60%",
                width : "12%",
                height : "40%",
                border : "1px solid black",
                wrongText : "Non le torchon ça marche pas",
            },
            listeCourse : {
                top : "60%",
                left : "50%",
                width : "20%",
                height : "35%",
                border : "1px solid black",
                wrongText : "Non la liste de courses ça marche pas",
            },
            yaourt : {
                top : "10%",
                left : "30%",
                width : "20%",
                height : "30%",
                border : "1px solid black",
                wrongText : "Non le yaourt ça marche pas",
            },
            frigoDuDesert : {
                top : "15%",
                left : "5%",
                width : "20%",
                height : "40%",
                border : "1px solid black",
                wrongText : "Non le frigo du désert ça marche pas",
            },
            chocolat : {
                top : "60%",
                left : "5%",
                width : "20%",
                height : "30%",
                border : "1px solid red",
                wrongText : "Non le chocolat ça marche pas",
            },
        },
        questions:
        [
            {
                questionImage : "Retrouve un objet qui te permet d’économiser",
                answerImage : "listeCourse",
                qcm : {
                    question : "Quelle quantité de plats non déballés est jetée par an pour une personne ?",
                    propositions : ["7Kg", "2Kg", "10Kg", "5Kg"],
                    answer: "7Kg",
                    correction: "Une personne jette 7 kg de plat non déballé par an. Faire sa liste de course permet d’acheter seulement ce dont on a besoin.",
                }
            },
            {
                questionImage : "Retrouve un élément qui permet de conserver le pain plus longtemps",
                answerImage : "torchon",
                qcm : {
                    question : "Quelle quantité de pain est gaspillée à la maison pour une personne ?",
                    propositions : ["4Kg", "500g", "1Kg", "3Kg"],
                    answer: "4Kg",
                    correction: "Une personne jette 4 kg de pain par an en moyenne. Le pain se conserve plus longtemps dans un torchon, on peut aussi en faire du pain perdu.",
                }
            },
            {
                questionImage : "Retrouve un aliment qui se consomme encore 2 semaines après sa date de péremption.",
                answerImage : "yaourt",
                qcm : {
                    question : "Le CO2 émis par la production d’un yaourt est équivalent à un trajet de :",
                    propositions : ["12 km en voiture", "20 km en voiture", "3 km en voiture", "9 km en voiture"],
                    answer: "12 km en voiture",
                    correction: "La production de nos aliments a nécessité des ressources et du transport. Lorsque l’on jette un produit, ce sont toutes ses ressources utilisées qui sont gaspillées.",
                }
            },
        ]
    }]
}



