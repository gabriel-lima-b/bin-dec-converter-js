//function that converts the input into dec and sends to output

function con() {
    const bin = document.getElementById('bin').value //get the binary number from the user input
    //TODO: tratamento de entrada

    const decimal = parseInt(bin, 2); //convert the binary to decimal
    document.getElementById('dec').value = decimal; //output the decimal value to the user
    return true;
};