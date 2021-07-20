binaryField  = document.getElementById("binaryField");
decimalField = document.getElementById("decimalField");
convertBttn  = document.getElementById("convertBttn");

binaryField.addEventListener("input", function() {
    decimalField.value = "";
    
    binaryField.style.color = isValidBin(binaryField.value) ? "black" : "red";

});

convertBttn.addEventListener("click", function() {
    var bin = binaryField.value;
    if (isValidBin(bin)){
        decimalField.value = binToDec(bin)
    } else {
        decimalField.value = "";
        binaryField.value = "";
    }
});

function isValidBin(bin) {
    for(let i = 0; i < bin.length; i++) {
        if (bin[i] != "0" && bin[i] != "1"){
            return false;
        }
    }
    return true;
}

function binToDec(bin) {
    var dec = 0;
    for(let i = 0; i< bin.length; i++) {
        if (bin[i] === "1"){
            dec = dec + 2**(bin.length - i - 1)
        }
    }
    return dec;
}