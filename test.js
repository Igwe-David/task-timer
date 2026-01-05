// let timer; // to hold the interval

    function startCountdown(timeInput) {
     
      // Get the value from the number input
      let minutes = parseInt(timeInput, 10);

      // Convert minutes to total seconds
      let totalSeconds = minutes * 60;

      function updateCountdown() {
        // Calculate minutes and seconds
        let m = Math.floor(totalSeconds / 60);
        let s = totalSeconds % 60;

        // Format with leading zeros
        let displayMinutes = m.toString().padStart(2, "0");
        let displaySeconds = s.toString().padStart(2, "0");

        // Update the text input
        timeDisplayed.value = `${displayMinutes}:${displaySeconds}`;

        // Stop when it reaches zero

  const timer = setInterval(() => {
  if (minutes === 0) {
    clearInterval(timer); // Stop the interval
    
  } else {
    minutes--;
    timeDisplayed.value = `${displayMinutes}:${displaySeconds}`;
    console.log("counting down");
    
  }
}, 1000); // Run every 60000ms (1 minute)
      }
      updateCountdown();
    }

    
    


    // SEPARATION

    function startCountdown(timeInput) {
      // Get the value from the number input
      let minutes = parseInt(timeInput, 10);

      // Convert minutes to total seconds
      let totalSeconds = minutes * 60;

        // Calculate minutes and seconds
        let m = Math.floor(totalSeconds / 60);
        let s = totalSeconds % 60;

        // Format with leading zeros
        let displayMinutes = m.toString().padStart(2, "0");
        let displaySeconds = s.toString().padStart(2, "0");

        // Update the text input
        timeDisplayed.value = `${displayMinutes}:${displaySeconds}`;

        // Stop when it reaches zero
  const timer = setInterval(() => {
  if (minutes === 0) {
    clearInterval(timer); // Stop the interval
    
  } else {
    minutes--;
    timeDisplayed.value = `${displayMinutes}:${displaySeconds}`;
    console.log("counting down");
  }
}, 1000); // Run every 1 second
    }

