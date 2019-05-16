var xhr = new XMLHttpRequest();
xhr.open("GET", "https://raw.githubusercontent.com/RalphCuizon/MI2-2018-2019/master/Project/SNEAKERHEAD%20QUIZ/question.json");
xhr.addEventListener("readystatechange", function() {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var question = JSON.parse(xhr.responseText);
    var qList = '<ul class="question">';
    for (var i = 0; i < question.length; i += 1) {
      qList += '<li class="vraag">';
      qList += question[i].question + "<br>";
      qList += "</li>";
      
    }
    qList += "</ul>";
  }
  
  document.getElementById("questions").innerHTML = qList;
});

xhr.send();
