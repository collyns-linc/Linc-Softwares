let counter = document.getElementById('date')
function countdown(targetDate) {
  // Set the target date
  const targetTime = new Date(targetDate).getTime();

  // Update the countdown every second
  const countdownInterval = setInterval(() => {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the time remaining
    const timeRemaining = targetTime - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the countdown
    date.innerText = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds left`;

    // If the countdown is finished, clear the interval
    if (timeRemaining < 0) {
      clearInterval(countdownInterval);
      date = "Countdown expired!";
    }
  }, 1000); // Update every second
}

// Example usage: countdown("2024-04-01");
//
document.getElementById('date').innerText = countdown("2024-07-01")
