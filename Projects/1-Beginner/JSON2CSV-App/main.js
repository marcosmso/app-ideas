json_textarea = document.querySelector("#json-textarea");
csv_textarea = document.querySelector("#csv-textarea");
btn_convert = document.querySelector("#btn-convert");

btn_convert.addEventListener("click", function() {
    var objects = JSON.parse(json_textarea.value);
    csv_textarea.value = parseObjects2CSV(objects);
});

function parseObjects2CSV(objects){
    var csv_lines = [];

    keys_in_string = Object.keys(objects[0]).map(stringfy);
    csv_lines.push(keys_in_string.join(","));
    
    for (let i = 0; i < objects.length; i++) {     
        values_in_string = Object.values(objects[i]).map(stringfy);
        csv_lines.push(values_in_string.join(','));
    }
    
    return csv_lines.join("\n");
}

function stringfy(obj){
    return "\"" + obj + "\""; 
}
