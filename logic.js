//function that converts the input into dec and sends to output

function con() {
  const bin = document.getElementById('bin').value //get the binary number from the user input

  if (bin.match("^[0-1]{1,}$")) { //se o valor de entrada for um binario

    const decimal = parseInt(Number(bin), 2); //convert the binary to decimal
    document.getElementById('dec').value = decimal; //output the decimal value to the user
  }
  else {
    return alert('Please, enter a binary number');
  }

  return true;
};


