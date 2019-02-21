let img = document.querySelector('#img-van');

    let range = document.getElementById('range');
    range.addEventListener('change', function(){
        let val = this.value;
        console.log(val);
        img.style.opacity = val /100;
        // =   val + "%";
    });

    /*range.oninput = function(){
        document.getElementById("value").innerHTML = this.value + "%";}*/
    range.addEventListener('change', function(){
        document.getElementById("value").innerHTML = this.value + "%";})
    