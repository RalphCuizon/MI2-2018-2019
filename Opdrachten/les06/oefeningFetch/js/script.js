(function() {
  "use strict";
  window.addEventListener("load", function() {
    document.getElementById("btnSearch").addEventListener("click", function() {
      let artist = document.getElementById("artist").value;
      
      let url =
        "https://www.songsterr.com/a/wa/bestMatchForQueryString?s=" +
        title +
        "&a=" +
        artist;
        function handleError(err) {
            console.log('Request failed', err)
        }
        function handleResponse(resp) {
          console.log('response status: ', resp.status);
          return resp.json();
        }
        function handleSuccess(data) {
          console.log('data received: ', data);
        }
        
        fetch(url)
            .then(handleResponse)
            .then(handleSuccess)
            .catch(handleError);
    });
  });
})();
