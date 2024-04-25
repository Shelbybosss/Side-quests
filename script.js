document.getElementById('buttonstyle2').addEventListener('click', function() {
    var userInput = window.prompt("You can't say no!");
    
    if (userInput === null || userInput.toLowerCase() === 'no') {
      alert('You said no! Try again.');
    } else {
      alert('Great! You didn\'t say no.');
    }
  });
  