data = {
  backGroundImage: "img/fond.png",
  introImage: "img/test_accueil.png",
  timesUp: 10 * 60,
  timesMalus: 60,
  landscapeMessage: "Veuillez passer en mode paysage pour jouer",
  enigmes: [
    {
      title: "Jardiner au naturel",
      welcomeMessage: "TEXTE D'INTRO MISSION",
      doc: "doc3",
      image: "img/test_poubelle.png",
      zones: {
        emballage: {
          top: "35%",
          left: "70%",
          width: "15%",
          height: "28%",
          border: "1px solid black",
          wrongText: "humm.. non ça c'est une banane",
        },
        produit: {
          top: "10%",
          left: "60%",
          width: "12%",
          height: "40%",
          border: "1px solid black",
          wrongText: "Non le torchon ça marche pas",
        },
        bocal: {
          top: "60%",
          left: "50%",
          width: "20%",
          height: "35%",
          border: "1px solid black",
          wrongText: "Non la liste de courses ça marche pas",
        },
        bouteille: {
          top: "10%",
          left: "30%",
          width: "20%",
          height: "30%",
          border: "1px solid black",
          wrongText: "Non le yaourt ça marche pas",
        },
        pomme: {
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
            "Trouve un déchet que tu peux refuser lors de ton achat.",
          answerImage: "emballage",
          qcm: {
            question:
              "Quelle quantité de déchet est produite en moyenne par un français chaque année ?",
            propositions: ["278 Kg", "344 Kg", "568 Kg", "690 Kg"],
            answer: "568 Kg",
            correction:
              "Un français produit chaque année 573 kg de déchets. Les objets dont vous n’avez pas besoin ou ceux à usage unique. Pour cela il faut prévoir des objets réutilisables (gourde, beewrap, sac en tissus..).",
          },
        },
        {
          questionImage:
            "Trouve un déchet que tu peux réduire en le fabriquant par toi-même.",
          answerImage: "produit",
          qcm: {
            question: "Avec du vinaigre je peux :",
            propositions: [
              "Fabriquer un produit multi-usage",
              "Faire la vaisselle",
              "Assouplir le linge",
              "Nettoyer le sol",
            ],
            answer: "Fabriquer un produit multi-usage, Assouplir le linge",
            correction:
              "Le vinaigre est un produit de base très économique qui remplis de multiples usages. Sa consommation en repensant ses besoins. Des produits de bases très économiques permettent répondre à de nombreuses utilités et d’éviter l’achat de produits transformés sur-emballés. ",
          },
        },
        {
          questionImage: "Trouve un déchet que tu peux réutiliser",
          answerImage: "bocal",
          qcm: {
            question:
              "Quel est le principal moyen de traitement des déchets en France ?",
            propositions: ["L'incinération", "Le recyclage", "L'enffouisement"],
            answer: "L'incinération",
            correction:
              "Avant d’être un déchet, un objet peut trouver une nouvelle utilité. Vous pouvez l’utiliser en l’état ou en faire autre chose.",
          },
        },
        {
          questionImage: "Trouve un objet qui peut être recyclé.",
          answerImage: "bouteille",
          qcm: {
            question:
              "Quelle est la proportion de nos déchets qui sont recyclés aujourd’hui ? ",
            propositions: [
              "Fabriquer un produit multi-usage",
              "Faire la vaisselle",
              "Assouplir le linge",
              "Nettoyer le sol",
            ],
            answer: "Fabriquer un produit multi-usage, Assouplir le linge",
            correction:
              "Le tri n’est pas encore optimisé. Pour trier correctement, renseignez-vous auprès de votre collectivité.",
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
          top: "35%",
          left: "70%",
          width: "15%",
          height: "28%",
          border: "1px solid black",
          wrongText: "humm.. non ça c'est une banane",
        },
        produit: {
          top: "10%",
          left: "60%",
          width: "12%",
          height: "40%",
          border: "1px solid black",
          wrongText: "Non le torchon ça marche pas",
        },
        bocal: {
          top: "60%",
          left: "50%",
          width: "20%",
          height: "35%",
          border: "1px solid black",
          wrongText: "Non la liste de courses ça marche pas",
        },
        bouteille: {
          top: "10%",
          left: "30%",
          width: "20%",
          height: "30%",
          border: "1px solid black",
          wrongText: "Non le yaourt ça marche pas",
        },
        pomme: {
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
            "Trouve un déchet que tu peux refuser lors de ton achat.",
          answerImage: "emballage",
          qcm: {
            question:
              "Quelle quantité de déchet est produite en moyenne par un français chaque année ?",
            propositions: ["278 Kg", "344 Kg", "568 Kg", "690 Kg"],
            answer: "568 Kg",
            correction:
              "Un français produit chaque année 573 kg de déchets. Les objets dont vous n’avez pas besoin ou ceux à usage unique. Pour cela il faut prévoir des objets réutilisables (gourde, beewrap, sac en tissus..).",
          },
        },
        {
          questionImage:
            "Trouve un déchet que tu peux réduire en le fabriquant par toi-même.",
          answerImage: "produit",
          qcm: {
            question: "Avec du vinaigre je peux :",
            propositions: [
              "Fabriquer un produit multi-usage",
              "Faire la vaisselle",
              "Assouplir le linge",
              "Nettoyer le sol",
            ],
            answer: "Fabriquer un produit multi-usage, Assouplir le linge",
            correction:
              "Le vinaigre est un produit de base très économique qui remplis de multiples usages. Sa consommation en repensant ses besoins. Des produits de bases très économiques permettent répondre à de nombreuses utilités et d’éviter l’achat de produits transformés sur-emballés. ",
          },
        },
        {
          questionImage: "Trouve un déchet que tu peux réutiliser",
          answerImage: "bocal",
          qcm: {
            question:
              "Quel est le principal moyen de traitement des déchets en France ?",
            propositions: ["L'incinération", "Le recyclage", "L'enffouisement"],
            answer: "L'incinération",
            correction:
              "Avant d’être un déchet, un objet peut trouver une nouvelle utilité. Vous pouvez l’utiliser en l’état ou en faire autre chose.",
          },
        },
        {
          questionImage: "Trouve un objet qui peut être recyclé.",
          answerImage: "bouteille",
          qcm: {
            question:
              "Quelle est la proportion de nos déchets qui sont recyclés aujourd’hui ? ",
            propositions: [
              "Fabriquer un produit multi-usage",
              "Faire la vaisselle",
              "Assouplir le linge",
              "Nettoyer le sol",
            ],
            answer: "Fabriquer un produit multi-usage, Assouplir le linge",
            correction:
              "Le tri n’est pas encore optimisé. Pour trier correctement, renseignez-vous auprès de votre collectivité.",
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
