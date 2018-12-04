//Contributed by: Paul Gurman
//Group members: Lord Gerald Marapao, Ishaan Patel, Jie Dai, Dylan Regan
function handleFormSubmit(event) {
   event.preventDefault();

   var imgLocation = './images/under-construction.jpg';
   
   addNewContent(imgLocation);
}

function validate(){
	var x = document.getElementById("chooseImage").src;
	alert(x);
}

function addNewContent(imgLocation) {
	var Element = document.createElement("div");
	Element.className = "content";
	var Element2 = document.createElement("div");
	Element2.className = "post";
	var Image = document.createElement("img");
	Image.className = "meme";
	Image.src = imgLocation;
	
	
	Element2.appendChild(Image);
	Element.appendChild(Element2);
	
	document.getElementById("container").appendChild(Element);

	
}

window.onload = () => {
   document.getElementById("Post").addEventListener('click', handleFormSubmit);
};
