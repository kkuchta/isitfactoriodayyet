const update = () => {
  function getTimeRemaining(duration) {
    let str = "";
    const days = Math.floor(duration / (1000 * 60 * 60 * 24));
    if (days > 0) {
      str += `${days} days, `;
    }
    const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    if (days > 0 || hours > 0) {
      str += `${hours} hours, `;
    }
    const minutes = Math.floor((duration / 1000 / 60) % 60);
    if (days > 0 || hours > 0 || minutes > 0) {
      str += `${minutes} minutes, and `;
    }
    const seconds = Math.floor((duration / 1000) % 60);
    if (seconds > 0) {
      str += `${seconds} seconds`;
    }
    return str;
  }

  const releaseDate = new Date(Date.UTC(2024, 9, 21, 11));
  const durationRemaining = releaseDate - Date.parse(new Date());
  const remainingString = getTimeRemaining(durationRemaining);

  const answerDiv = document.getElementById("answer");
  const remainingDiv = document.getElementById("remaining");
  if (durationRemaining > 0) {
    answerDiv.textContent = "No.";
    remainingDiv.innerHTML = remainingString + " remaining until <a href='https://factorio.com/blog/post/fff-418'>Factorio: Space Age is released.</a>"
  } else {
      answerDiv.textContent = "Yes!";
      remainingDiv.textContent = "The Factory Must Grow";
  }
}
update();
setInterval(update, 1000);
