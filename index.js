function showDisplay(input) {
    $(".display").val($(".display").val() + input);
}


function clearDisplay() {
    $('.display').val(''); 
}

function calculate(){
    try {
        $(".display").val(eval($(".display").val()))
    }
    catch(error) {
        display.value = "Error";
    }

}

