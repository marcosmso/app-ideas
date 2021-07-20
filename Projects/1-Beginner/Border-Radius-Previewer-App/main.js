radius_values = document.querySelectorAll("input");
previewBttn  = document.getElementById("previewBttn");
square = document.getElementById("square");

previewBttn.addEventListener("click", function() {
    
    var string = ""
    for(i = 0; i < radius_values.length; i++) {
        if (radius_values[i].value == "") {
            string = string + ` 0px`;
        } else {
            string = string + ` ${radius_values[i].value}px`;
        }
    }
    square.style.borderRadius = string;
});


