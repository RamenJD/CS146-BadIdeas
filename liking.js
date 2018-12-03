function liking() {
document.getElementsByIdName("meme").addEventListener("mouseover", mouseover);
document.getElementsByIdName("meme").addEventListener("mouseout", mouseout);
}

function mouseover(){
	overlay.style.opacity = "1"
}

function mouseOut() {
    overlay.style.opacity = "0.25";
}


window.onload = () => {
   // Need to edit this;
   meme.addEventListener('submit', liking);
};
