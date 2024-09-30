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
      str += `${minutes} minutes`;
    }
    const seconds = Math.floor((duration / 1000) % 60);
    if (seconds > 0) {
      str += `, and ${seconds} seconds`;
    }
    return str;
  }

  function calcProgress(releaseDate, currentDate, announcement, dec){ // calculate progress as a percentage
    let pr = (currentDate - announcement) / (releaseDate - announcement) * 100; // calculate percentage of time elapsed from announcement - release
    if(pr < 0) return 0; // date before announcement
    if(pr > 100) return 100; // data after release
    return Math.round(pr * (10**dec)) / (10**dec); // round to $dec decimals
  }

  const announcement = Number(new Date("2024-07-05 00:00:00")); // announcement date according to fff 418
  const releaseDate = Number(new Date("2024-10-21 00:00:00"));
  const currentDate = Date.parse(new Date());
  const durationRemaining = releaseDate - currentDate;
  const remainingString = getTimeRemaining(durationRemaining); 
  const decimals = 6; // amount of decimals to round progress to
  const progress = calcProgress(releaseDate, currentDate, announcement, decimals); // I dislike this way of handling functions and variables but consistency is more important

  const answerDiv = document.getElementById("answer");
  const remainingDiv = document.getElementById("remaining");
  if (durationRemaining > 0) {
    answerDiv.textContent = "No.";
    remainingDiv.innerHTML = remainingString + " remaining until <a href='https://factorio.com/blog/post/fff-418'>Factorio: Space Age is released.</a>"
  } else {
      answerDiv.textContent = "Yes!";
      remainingDiv.textContent = "The Factory Must Grow";
  }

  const progressEl = document.getElementById("progress"); // oh how i love unefficient code like this. But tis your project, after all.
  progressEl.value = progress;
  const percentEl = document.getElementById("percentage"); // oh how i love unefficient code like this. But tis your project, after all.
  const days = Math.floor(durationRemaining / (1000 * 60 * 60 * 24));
  const totaldays = Math.floor((releaseDate - announcement) / (1000 * 60 * 60 * 24));
  percentEl.innerText = "Progress: " + progress + "% - Day " + (totaldays - days) + " of " + totaldays;

}
update();
setInterval(update, 1000);
