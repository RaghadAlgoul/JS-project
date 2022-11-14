
console.log("hi1");
let x=localStorage.getItem("score3");
console.log(localStorage.getItem("score3"));
var y=((x/20)*100);
if(y<50)
{
  document.getElementById("fail").style.display='block';
}
else{ document.getElementById("pass").style.display='block';
}

document.getElementsByClassName("rating")[0].innerHTML=y+"%";
const ratings = document.querySelectorAll(".rating");



// Iterate over all rating items
ratings.forEach((rating) => {
  // Get content and get score as an int
  const ratingContent = rating.innerHTML;
  const ratingScore = parseInt(ratingContent, 10);

  // Define if the score is good or bad according to its value
  const scoreClass =
    ratingScore < 50 ? "bad" : "good" ;

  // Add score class to the rating
  rating.classList.add(scoreClass);

  // After adding the class, get its color
  const ratingColor = window.getComputedStyle(rating).backgroundColor;

  // Define the background gradient according to the score and color
  const gradient = `background: conic-gradient(${ratingColor} ${ratingScore}%, transparent 0 100%)`;

  // Set the gradient as the rating background
  rating.setAttribute("style", gradient);

  // Wrap the content in a tag to show it above the pseudo element that masks the bar
  rating.innerHTML = `<span>${ratingScore} ${
    ratingContent.indexOf("%") >= 0 ? "<small>%</small>" : ""
  }</span>`;
});

