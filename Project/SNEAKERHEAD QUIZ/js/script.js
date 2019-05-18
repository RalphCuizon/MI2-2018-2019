"use strict";

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
];
window.addEventListener("load", function() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "question.json");
  xhr.addEventListener("readystatechange", function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var question = JSON.parse(xhr.responseText);
      var qList = '';
      for (var i = 0; i < question.length; i += 1) {
        qList += '<ul class="question"><li class="vraag">';
        qList += question[i].question + "</li>";
        if (question[i].type == "MCSA") {
          for (var x = 0; x < question[i].answers.length; x += 1) {
            qList += `<li><label><input name="answer${i}" type="radio">`;
            qList += question[i].answers[x].answer + "</label> </li>";
            
          }
        }
        if (question[i].type == "open") {
          for (var y = 0; y < question[i].answers.length; y += 1) {
            qList += '<li><input type="text"></li>';

            
          }

        }
        qList += "</ul>";
      }
    }
    document.getElementById("questions").innerHTML = qList;
  });

  xhr.send();

  /*function hideQuestion() {
    $("#question").hide("slow");
  }
  $("#btnPrevious").click(hideQuestion);
  /*function showQuestion() {
    $("#question:first").show("slow");
  }
  $("btnNext").click(showQuestion);*/
});
