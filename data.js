data = {
  backGroundImage: "img/fondparechemin.png",
  introImage: "img/ECOLOC_Couverture.png",
  timesUp: 20 * 60,
  timesMalus: 60,
  landscapeMessage: "Veuillez passer en mode paysage pour jouer",
  enigmes: [
    {
      title: "Jardiner au naturel",
      welcomeMessage: "TEXTE D'INTRO MISSION",
      doc: "doc3",
      image: "img/ECOLOC_test.png",
      zones: {
        zone1: {
          top: "35%",
          left: "70%",
          width: "15%",
          height: "28%",
          border: "1px solid black",
          wrongText: "humm.. non ça c'est une banane",
        },
        zone2: {
          top: "10%",
          left: "60%",
          width: "12%",
          height: "40%",
          border: "1px solid black",
          wrongText: "Non le torchon ça marche pas",
        },
        zone3: {
          top: "60%",
          left: "50%",
          width: "20%",
          height: "35%",
          border: "1px solid black",
          wrongText: "Non la liste de courses ça marche pas",
        },
        zone4: {
          top: "10%",
          left: "30%",
          width: "20%",
          height: "30%",
          border: "1px solid black",
          wrongText: "Non le yaourt ça marche pas",
        },
        zone5: {
          top: "15%",
          left: "5%",
          width: "20%",
          height: "40%",
          border: "1px solid black",
          wrongText: "Non le frigo du désert ça marche pas",
        },
      },
      questions: [
        {
          questionImage:
            "TROUVE N°1",
          answerImage: "zone1",
          qcm: {
            question:
              "QCM",
            propositions: ["JUSTE", "FAUX", "FAUX", "FAUX"],
            answer: "JUSTE",
            correction:
              "CORRECTIONS ET INFOS",
          },
        },
        {
          questionImage:
            "TROUVE N°2",
          answerImage: "zone2",
          qcm: {
            question:
              "QCM",
            propositions: ["JUSTE", "FAUX", "FAUX", "FAUX"],
            answer: "JUSTE",
            correction:
              "CORRECTIONS ET INFOS",
          },
        },
        {
          questionImage:
            "TROUVE N°3",
          answerImage: "zone3",
          qcm: {
            question:
              "QCM",
            propositions: ["JUSTE", "FAUX", "FAUX", "FAUX"],
            answer: "JUSTE",
            correction:
              "CORRECTIONS ET INFOS",
          },
        },
        {
          questionImage:
            "TROUVE N°4",
          answerImage: "zone4",
          qcm: {
            question:
              "QCM",
            propositions: ["JUSTE", "FAUX", "FAUX", "FAUX"],
            answer: "JUSTE",
            correction:
              "CORRECTIONS ET INFOS",
          },
        },
        {
          questionImage:
            "TROUVE N°5",
          answerImage: "zone5",
          qcm: {
            question:
              "QCM",
            propositions: ["JUSTE", "FAUX", "FAUX", "FAUX"],
            answer: "JUSTE",
            correction:
              "CORRECTIONS ET INFOS",
          },
        },
      ],
    },
    {
      title: "Acheter responsable",
      welcomeMessage: "Votre frigo contient des anomalies.",
      doc: "doc2",
      image: "img/test_frigo.png",
      zones: {
        plat: {
          top: "35%",
          left: "70%",
          width: "15%",
          height: "28%",
          border: "1px solid black",
          wrongText: "humm.. non ça c'est une banane",
        },
        banane: {
          top: "10%",
          left: "60%",
          width: "12%",
          height: "40%",
          border: "1px solid black",
          wrongText: "Non le torchon ça marche pas",
        },
        oignon: {
          top: "60%",
          left: "50%",
          width: "20%",
          height: "35%",
          border: "1px solid black",
          wrongText: "Non la liste de courses ça marche pas",
        },
        yaourt: {
          top: "10%",
          left: "30%",
          width: "20%",
          height: "30%",
          border: "1px solid black",
          wrongText: "Non le yaourt ça marche pas",
        },
        avocat: {
          top: "15%",
          left: "5%",
          width: "20%",
          height: "40%",
          border: "1px solid black",
          wrongText: "Non le frigo du désert ça marche pas",
        },
      },
      questions: [
        {
          questionImage: "Retrouve un plat qui ne peut plus être consommée",
          answerImage: "plat",
          qcm: {
            question:
              "Le gaspillage alimentaire d'un foyer par an représente en moyenne",
            propositions: ["200€", "350€", "450€", "600€"],
            answer: "450€",
            correction:
              "Dans un foyer, en moyenne 30% des aliments sont gaspillés. Cela équivaut à 450€ par an ! Acheter ce dont on a besoin permet de limiter le gaspillage et faire des économies.",
          },
        },
        {
          questionImage: "Trouve un aliment qui peut encore être consommé",
          answerImage: "banane",
          qcm: {
            question: "Avec une conserve de pois chiche, je peux faire :",
            propositions: [
              "Une mousse au chocolat",
              "Une meringue",
              "De la mayonnaise",
              "Une pâte à tarte",
            ],
            answer: "Une mousse au chocolat, Une meringue, De la mayonnaise",
            correction:
              "L'eau des conserves de pois chiche, aussi appelée aquafaba peut remplacer les blancs d'oeufs dans vos préparations.",
          },
        },
        {
          questionImage: "Trouve un aliment qui doit être consommé autrement.",
          answerImage: "oignon",
          qcm: {
            question:
              "Quelle part de la production alimentaire mondiale est gaspillée ?",
            propositions: ["15%", "40%", "50%", "70%"],
            answer: "40%",
            correction:
              "40% de la production alimentaire mondiale est gaspillée. Le gaspillage survient à toutes les étapes de la production : lors de la culture, le stockage, la distribution et à la maison.",
          },
        },
        {
          questionImage:
            "Trouve un aliment qui peut être consommé alors que sa date date de durabilité minimale est dépassée.",
          answerImage: "yaourt",
          qcm: {
            question:
              "Qu'est-ce qui génère le plus d'émission carbone dans le monde ?",
            propositions: ["Le trafic aérien", "La production alimentaire"],
            answer: "La production alimentaire",
            correction:
              "La production alimentaire génère 3 fois plus d'émission de carbone que le trafic aérien.",
          },
        },
        {
          questionImage:
            "Trouve un aliment qui a parcourus 9800 km pour arriver dans la cuisine.",
          answerImage: "avocat",
          qcm: {
            question:
              "Lorsque j'achète un litre de lait à 1€, quelle est la part qui revient au producteur ?",
            propositions: ["0,27€", "0,32€", "0,52€", "0,74€"],
            answer: "0,27€",
            correction:
              "En moyenne, lorsque l'on achète 1 litre de lait à 1€, seulement 0,27€ revient au producteur.",
          },
        },
      ],
    },
    {
      title: "Réduire ses déchets",
      welcomeMessage: "TEXTE D'INTRO MISSION",
      doc: "doc3",
      image: "img/test_poubelle.png",
      zones: {
        emballage: {
          top: "69%",
          left: "37%",
          width: "10%",
          height: "29%",
          border: "1px solid black",
          wrongText: "Mauvaise réponse",
        },
        produit: {
          top: "3%",
          left: "19%",
          width: "8%",
          height: "19%",
          border: "1px solid black",
          wrongText: "Mauvaise réponse",
        },
        bocal: {
          top: "69%",
          left: "57%",
          width: "7%",
          height: "20%",
          border: "1px solid black",
          wrongText: "Mauvaise réponse",
        },
        bouteille: {
          top: "80%",
          left: "76%",
          width: "16%",
          height: "14%",
          border: "1px solid black",
          wrongText: "Mauvaise réponse",
        },
        pomme: {
          top: "78%",
          left: "8%",
          width: "7%",
          height: "14%",
          border: "1px solid black",
          wrongText: "Mauvaise réponse",
        },
      },
      questions: [
        {
          questionImage:
            "Trouve un déchet que tu peux refuser lors de ton achat.",
          answerImage: "emballage",
          qcm: {
            question:
              "Quelle quantité de déchet est produite en moyenne par un français chaque année ?",
            propositions: ["278 Kg", "344 Kg", "568 Kg", "690 Kg"],
            answer: "568 Kg",
            correction:
              "Un français produit chaque année 573 kg de déchets.",
          },
        },
        {
          questionImage:
            "Trouve un déchet que tu peux réduire en le fabriquant par toi-même.",
          answerImage: "produit",
          qcm: {
            question: "Avec du vinaigre blanc je peux :",
            propositions: [
              "Limiter la diffusion de bactéries",
              "Lutter contre le calcaire",
              "Assouplir le linge",
              "Faire briller les vitres",
            ],
            answer:  [
              "Limiter la diffusion de bactéries",
            ],
            correction:
              "Le vinaigre d’alcool limite la diffusion des bactéries, lutte contre le calcaire et les moisissures, assouplit le linge, fait briller la vaisselle et les vitres. On le trouve à partir de 0,30€/litre dans le commerce !",
          },
        },
        {
          questionImage: "Trouve un déchet que tu peux réutiliser",
          answerImage: "bocal",
          qcm: {
            question:
              "Quel est le principal moyen de traitement des déchets en France ?",
            propositions: ["L'incinération", "Le recyclage", "L'enffouisement", "Le compostage"],
            answer: "L'enfouissement",
            correction:
              "Le principal moyen de traitement des déchets en France est l’enfouissement. Elle représente XX% du traitement des déchets, suivi par l’incinération. L’enfouissement des déchets produit du NOM DES GAZS TOXIQUES.",
          },
        },
        {
          questionImage: "Trouve un objet qui peut être recyclé.",
          answerImage: "bouteille",
          qcm: {
            question:
              "Quelle proportion de nos déchets ménagers sont recyclables ?",
            propositions: [
              "10%",
              "25%",
              "40%",
              "45%",
            ],
            answer: "40%",
            correction:
              "40 % de nos déchets sont recyclables. 35% de nos déchets sont des papiers et emballages, et 5% bénéficient de filières dédiées.",
          },
        },
        {
          questionImage: "Trouve un objet qui peut être composté.",
          answerImage: "pomme",
          qcm: {
            question:
              "Quelle proportion de nos déchets ménagers sont compostables ?",
            propositions: ["5%", "10%", "15%", "27%"],
            answer: "27%",
            correction:
              "Le compostage permet de valoriser 27% de nos déchets ménagers en engrais. Un compost bien géré reste sain et sans odeurs !",
          },
        },
      ],
    },
  ],
};
