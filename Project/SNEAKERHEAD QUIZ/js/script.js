"use strict";

// Elke slide heeft een aparte afbeelding
let photos = [
    { url: "/Project/SNEAKERHEAD QUIZ/img/home.jpg" },
    { url: "/Project/SNEAKERHEAD QUIZ/img/vraag1.jpg" },
    { url: "/Project/SNEAKERHEAD QUIZ/img/vraag2.jpg" },
    { url: "/Project/SNEAKERHEAD QUIZ/img/vraag3.jpg" },
    { url: "/Project/SNEAKERHEAD QUIZ/img/vraag4.jpg" },
    { url: "/Project/SNEAKERHEAD QUIZ/img/vraag5.jpg" },
    { url: "/Project/SNEAKERHEAD QUIZ/img/vraag6.jpg" },
    { url: "/Project/SNEAKERHEAD QUIZ/img/vraag7.jpg" },
    { url: "/Project/SNEAKERHEAD QUIZ/img/vraag8.jpg" },
    { url: "/Project/SNEAKERHEAD QUIZ/img/vraag9.jpg" },
    { url: "/Project/SNEAKERHEAD QUIZ/img/vraag10.jpg" }
  ],
  i = 0,
  score = 0,
  antwoordVier,
  timer = 15;

//Wat er gebeurt wnr de pagina wordt geladen
window.addEventListener("load", function() {
  createQuestion();

  //Wat er gebeurt bij het clicken van btnStart
  document.getElementById("btnStart").addEventListener("click", function() {
    showQuestion();
    createButton();
    showPhoto();
    createScore();
    showTimer();
  });

  //Wat er gebeurt bij het clicken van btnNext
  document.getElementById("btnNext").addEventListener("click", function() {
    checkAnswer();
    showScore();
    showQuestion();
    showPhoto();
  });
});

//Toevoegen van alle vragen en antwoorden
function createQuestion() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "question.json");
  xhr.addEventListener("readystatechange", function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var question = JSON.parse(xhr.responseText);
      var qList = "";
      for (var i = 0; i < question.length; i += 1) {
        qList += '<ul class="question"><li class="vraag">';
        qList += question[i].question + "</li>";
        if (question[i].type == "MCSA") {
          for (var x = 0; x < question[i].answers.length; x += 1) {
            qList += `<li><label><input name="answer${i}"`;
            qList += ' value="';
            qList += question[i].answers[x].right;
            qList += '" type="radio">';
            qList += question[i].answers[x].answer + "</label> </li>";
          }
        }
        if (question[i].type == "open") {
          for (var y = 0; y < question[i].answers.length; y += 1) {
            qList += '<li><input type="text" value="YYYY"></li>';
            antwoordVier = question[i].answers[y].answer;
          }
        }
        qList += "</ul>";
      }
      document.getElementById("questions").innerHTML = qList;
    }
  });
  xhr.send();
}

// Het tonen van vragen
function showQuestion() {
  if (i > 0) {
    var x = i - 1;
    document.querySelectorAll(".question")[x].removeAttribute("id");
  }
  document
    .querySelectorAll(".question")
    [i].setAttribute("id", "currentQuestion");
  i++;
}

// Next button creëren en Start en How To Play verwijderen
function createButton() {
  $("#btnNext").show();
  $("#btnStart").hide();
  $("#btnHowTo").hide();
}

// Toon de gepaste foto bij elke vraag
function showPhoto() {
  document.getElementById("imgBig").src = photos[i].url;
}

//Check de antwoord
function checkAnswer() {
  if ($("#currentQuestion input:checked").val() == "true") {
    score++;
  }
  if (document.querySelector("#currentQuestion input").value == antwoordVier) {
    score++;
  }
}

//Creëer een score
function createScore() {
  $("#score").show();
  document.getElementById("score").innerHTML = score + "/10";
  $("#timer").show();
}

//Toon score
function showScore() {
  document.getElementById("score").innerHTML = score + "/10";
}

//Toon timer
function showTimer() {
  
  setInterval(function() {
    document.getElementById("timer").innerHTML = "00:" +timer;
    timer--;
  }, 1000);
}
