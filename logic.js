//function that converts the input into dec and sends to output

function con() {
  const bin = document.getElementById('bin').value //get the binary number from the user input

  if (bin.match("^[0-1]{1,}$")) { //regex to verify if the entry is a binary

    const decimal = parseInt(Number(bin), 2); //convert the binary to decimal
    document.getElementById('dec').value = decimal; //output the decimal value to the user
  }
  else {
    return alert('Please, enter a binary number'); //if the entry is not a binary show this message.
  }

  return true;
};


