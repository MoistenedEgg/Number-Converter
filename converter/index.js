
function convert_num(mode) {
    var dec = document.getElementById('dec');
    var hex = document.getElementById('hex');
    var bin = document.getElementById('bin');

    // Determine which number was inputted
    var dec_val, hex_val, bin_val;
    
    if(mode == 0){
        num = dec.value;
        console.log("Converted Dec")
        
        if(isNaN(num)){
            document.getElementById('dec_warn').style.display = 'block';
            console.log('Format error occurred')
        } else {
            document.getElementById('dec_warn').style.display = 'none';
        }
        dec_val = num
        hex_val = Number(num).toString(16).toUpperCase();
        bin_val = Number(num).toString(2);
        
    } else if(mode == 1){
        num = hex.value;
        console.log("Converted hexadecimal")

        dec_val = parseInt(num, 16);
        bin_val = dec_val.toString(2).toUpperCase();
        hex_val = num

    } else {
        num = bin.value;
        console.log("Converted binary")

        dec_val = parseInt(num, 2);
        hex_val = dec_val.toString(16).toUpperCase();
        bin_val = num
    }

    if(num == ''){
        clear_text()
        return
    }

    dec.value = dec_val;
    hex.value = hex_val;
    bin.value = bin_val;
}

function copy_text(mode){
    var text = [document.getElementById("dec"), 
    document.getElementById("hex"),
    document.getElementById("bin")];
    
    navigator.clipboard.writeText(text[mode].value);
    text[mode].style.background = 'lime';
    
    setTimeout(function() {
        text[mode].style.background = '';
    }, 100)
}

function clear_text() {
    document.getElementById('dec').value = "";
    document.getElementById('hex').value = "";
    document.getElementById('bin').value = "";
}