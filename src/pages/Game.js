import React, { useState, useEffect } from 'react';
import '../styles/Game.css';
import logoBatFleche from '../assets/logos/logo_bat_flèche.png';
import iconFacebook from '../assets/logos/icon_facebook.png';
import iconInstagram from '../assets/logos/icon_ig.png';
import iconTwitter from '../assets/logos/icon_tw.png';
import flecheBas from '../assets/logos/logo_bat_flèche_2.png';
import flechedown from '../assets/logos/flèche_down_header.png';
import bartman from '../assets/images/Batgame_2.png';
import image from '../assets/images/Batgame_3.png'
import image2 from '../assets/images/Batgame_4.png'
import image3 from '../assets/images/Batgame_5.png'
import image4 from '../assets/images/Batgame_6.png'
import image5 from '../assets/images/Batgame_7.png'
import image6 from '../assets/images/Batgame_8.png'
import image7 from '../assets/images/Batgame_9.png'
import image8 from '../assets/images/Batgame_9-1.png'
import image9 from '../assets/images/Batgame_10.png'
import image10 from '../assets/images/Batgame_11.png'
import image11 from '../assets/images/Batgame_12.png'
import image12 from '../assets/images/Batgame_13.png'
import image13 from '../assets/images/Batgame_13-1.png'
import image14 from '../assets/images/Batgame_14.png'
import image15 from '../assets/images/Batgame_15.png'
import image16 from '../assets/images/Batgame_16.png'
import image17 from '../assets/images/Batgame_17.png'
import image18 from '../assets/images/Batgame_18.png'
import image19 from '../assets/images/Batgame_19.png'
import image20 from '../assets/images/Batgame_20.png'
import image21 from '../assets/images/Batgame_21.png'
const Game = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [playerResponses, setPlayerResponses] = useState([]);
  const [score, setScore] = useState(null);
  const [currentQuestionData, setCurrentQuestionData] = useState(null);

  const questions = [
    {
      question: "Quel est l'autre nom de l'Homme-Mystère ?",
      choices: ["Le Sphinx", "Saphir", "Le Joker"],
      answer: "Le Sphinx",
      image: [image],
    },
    {
      question: "Quel est l'ancienne proffession de Harley Quinn ?",
      choices: ["infirmiere", "Psychiatre", "Dentiste"],
      answer: "Psychiatre",
      image: [image2],
    },
    {
      question: "Quel est l'objet fétiche de Double Face ?",
      choices: ["Une pièce", "Un livre", "Un couteau"],
      answer: "Une pièce",
      image: [image3]
    },
    {
      question: "Qui a produit Batman en 1964 ?",
      choices: ["Stanley Kubrick", "Andy Warhol", "Peter Jackson"],
      answer: "Andy Warhol",
      image: [image4]
    },
    {
      question: "Batman c'est aussi le nom d'une ville en...",
      choices: ["Turquie", "Islande", "Allemagne"],
      answer: "Turquie",
      image: [image5]
    },
    {
      question: "Quel vilain apparaît pour la première fois dans le Batman?",
      choices: ["Le Pingouin", "Ra's al Ghul", "Poison Ivy"],
      answer: "Ra's al Ghul",
      images: [image6, image7, image8]
    },
    {
      question: "Quelle ville Batman défend-il ?",
      choices: ["Gotham City", "Starling City", "Hell's Kitchen"],
      answer: "Gotham City",
      image: [image9]
    },
    {
      question: "Tim Burton a réalisé deux Batman, qui jouait Batman ?",
      choices: ["Georges Clooney", "Val Kilmer", "Michael Keaton"],
      answer: "Michael Keaton",
      image: [image10]
    },
    {
      question: "Dans son premier Batman (1989) Jack Nicholson jouait :",
      choices: ["Le Pingouin", "L'Homme Mystère", "Le Joker"],
      answer: "Le Joker",
      images: [image11, image12, image13]
    },
    {
      question: "Qui est Jonathan Crane ?",
      choices: ["L'Épouvantail", "Le Joker", "Hugo Strange"],
      answer: "L'Épouvantail",
      images: [image14, image15, image16]
    },
    {
      question: "Qui est l'interprète de Catwoman dans le nouveau Batman de Matt Reeves (2022) ?",
      choices: ["Emma Watson", "Gigi Hadid", "Lola Iolani Momoa", "Zoë Kravitz"],
      answer: "Zoë Kravitz",
      image: [image17]
    },
    {
      question: "Quel est le prénom des parents du jeune Bruce Wayne ?",
      choices: ["Thomas et Martha", "Elaine et Georges", "Martha et James"],
      answer: "Thomas et Martha",
      image: [image18]
    },
    {
      question: "Qui interprète le Joker en 2008 ?",
      choices: ["Heath Ledger", "Haeth Ledger", "Heath Ledger"],
      answer: "Heath Ledger",
      image: [image19]
    },
    {
      question: "En quelle année Robin fait-il sa première apparition ?",
      choices: ["1940", "1939", "1941"],
      answer: "1940",
      image: [image20]
    },
    {
      question: "Qui est la fille de Batman et Catwoman (Earth-2) ?",
      choices: ["Oracle", "Huntress", "Black Canary"],
      answer: "Huntress",
      image: [image21]
    }
  ];

  const startQuiz = () => {
    setShowQuiz(true);
    setCurrentQuestion(0);
    setPlayerResponses([]);
  };

  const loadQuestion = () => {
    const currentQuestionData = questions[currentQuestion];
    setCurrentQuestionData(currentQuestionData);
    const question = currentQuestionData.question;
    const choices = currentQuestionData.choices;
    const images = currentQuestionData.images || []; // Utilisez un tableau vide par défaut
  
    const questionElement = document.getElementById('question');
    const imageContainers = document.querySelectorAll('.image-container');
    const choicesDiv = document.getElementById('choices');
  
    if (questionElement && imageContainers.length === images.length && choicesDiv) {
      questionElement.textContent = question;
  
      // Mettre à jour les images de la question
      for (let i = 0; i < images.length; i++) {
        const imageElement = document.createElement('img');
        imageElement.src = images[i];
        imageElement.alt = `Question image ${i + 1}`;
        imageContainers[i].innerHTML = '';
        imageContainers[i].appendChild(imageElement);
      }
  
      // Mettre à jour les choix de réponse
      choicesDiv.innerHTML = '';
  
      for (let i = 0; i < choices.length; i++) {
        const choiceDiv = document.createElement('div');
        choiceDiv.className = 'qcm';
  
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'choix' + (i + 1);
  
        const label = document.createElement('label');
        label.htmlFor = 'choix' + (i + 1);
        label.textContent = choices[i];
  
        choiceDiv.appendChild(checkbox);
        choiceDiv.appendChild(label);
        choicesDiv.appendChild(choiceDiv);
      }
    }
  };
  


  const nextQuestion = () => {
    const totalQuestions = questions.length;
    const selectedChoices = document.querySelectorAll('input[type="checkbox"]:checked');
    if (selectedChoices.length === 0) {
      alert("Veuillez sélectionner au moins une réponse.");
      return;
    }

    const playerAnswer = [];
    for (let i = 0; i < selectedChoices.length; i++) {
      playerAnswer.push(selectedChoices[i].nextSibling.textContent);
    }

    // Ajouter la réponse du joueur au tableau playerResponses
    setPlayerResponses([...playerResponses, playerAnswer]);

    // Réinitialiser les cases à cocher
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });

    const nextQuestionIndex = currentQuestion + 1;
    if (nextQuestionIndex < totalQuestions) {
      setCurrentQuestion(nextQuestionIndex);
      loadQuestion(); // Charger la prochaine question
    } else {
      endQuiz(); // Si toutes les questions ont été posées, terminer le quiz
    }
  };


  const endQuiz = () => {
    // Calculer le score en comparant les réponses du joueur avec les réponses correctes
    let userScore = 0;
    for (let i = 0; i < questions.length; i++) {
      const correctAnswer = questions[i].answer;
      const playerAnswer = playerResponses[i];

      // Comparer les réponses du joueur avec les réponses correctes
      if (JSON.stringify(correctAnswer) === JSON.stringify(playerAnswer)) {
        userScore++;
      }
    }

    // Mettre à jour le score dans l'état
    setScore(userScore);

    // Vous pouvez ajouter ici du code pour afficher le score à l'utilisateur
    // ou effectuer toute autre action de fin de quiz que vous souhaitez.


  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setPlayerResponses([]);
    setScore(null);
  };

  useEffect(() => {
    if (showQuiz) {
      setCurrentQuestionData(questions[currentQuestion]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showQuiz, currentQuestion]);


  return (
    <>
      <div>
        <div className="up-bar"></div>
        <div className="left-bar"></div>
        <div className="right-bar"></div>
        <main>
          <div className="scroll">
            <img src={logoBatFleche} alt="flèche-haut" />
            <img className="social" src={iconFacebook} alt="icon_facebook" />
            <img className="social" src={iconInstagram} alt="icon_instagram" />
            <img className="social" src={iconTwitter} alt="icon_twitter" />
            <img src={flecheBas} alt="flèche bas" />
          </div>

          <section id="lehero">
            <div className="container">
              <h1 className="titre">
                LET’S PLAY <br />A LITTLE GAME...
              </h1>
              <div className="espace-verticale"></div>
              <img className="fleche" src={flechedown} alt="flechedown" />
            </div>
          </section>

          <section id="quiz">
            <div className="container">
              {!showQuiz ? (
                <div className="intro">
                  <h2>Connaissez-vous bien le chevalier noir?</h2>
                  <img className="bartman" src={bartman} alt="bartman" />
                  <div className="startQuiz">
                    <button id="gamestart" onClick={startQuiz}>
                      Démarrer le quizz
                    </button>
                  </div>
                </div>
              ) : null}

              <div className="espace-verticale"></div>

              {showQuiz && currentQuestionData && (
                <div className="jeu">
                  <div className="image-container">
                    {currentQuestionData.image && (
                      <img className="image-gauche" src={currentQuestionData.image} alt="img" />
                    )}
                  </div>
                  <div className="image-container-2">
                    {currentQuestionData.image2 && (
                      <img className="image-gauche" src={currentQuestionData.image2} alt="img2" />
                    )}
                  </div>
                  <div className="image-container-3">
                    {currentQuestionData.image3 && (
                      <img className="image-gauche" src={currentQuestionData.image3} alt="img3" />
                    )}
                  </div>
                  <div className="gamebox">
                    <h1>
                      <span className="level">{currentQuestion + 1}</span>/{questions.length}
                    </h1>
                    <br />
                    <h2 id="question">{currentQuestionData.question}</h2>
                    <div className="espace-verticale"></div>
                    <div className="choices" id="choices">
                      {currentQuestionData.choices.map((choice, index) => (
                        <div className="qcm" key={index}>
                          <input type="checkbox" className="checkbox-custom" id={`choix${index + 1}`} />
                          <label htmlFor={`choix${index + 1}`} className="label">
                            {choice}
                          </label>
                        </div>
                      ))}
                    </div>

                    <button className="nextButton" id="nextButton" onClick={nextQuestion}>
                      Question Suivante
                    </button>
                    <div className="overlay-game">
                      <section id="resultat">
                        {score !== null && (
                          <div className="container">
                            <h2>Résultat du quiz</h2>
                            <p>Votre score est de : {score} / {questions.length}</p>
                            <button id="restartButton" className="restartButton" onClick={restartQuiz}>
                              Recommencer le quiz
                            </button>
                          </div>
                        )}
                      </section>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Game;