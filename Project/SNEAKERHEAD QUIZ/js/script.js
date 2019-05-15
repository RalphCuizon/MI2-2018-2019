var xhr = new XMLHttpRequest();
xhr.open("GET", "/question.json");
xhr.addEventListener("readystatechange", function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          var question = JSON.parse(xhr.responseText);
          var qList = '<ul class="questions">';
          for (var i=0; i<question.length; i += 1) {
           
            qList += question[i].question + '<br>'  ;

          }
          document.getElementById("question").innerHTML = qList;
        }
      });
     
      xhr.send();
    