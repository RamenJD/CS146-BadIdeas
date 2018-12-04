//Contributed by: Paul Gurman
//Group members: Lord Gerald Marapao, Ishaan Patel, Jie Dai, Dylan Regan
const fileLocations = {
	1: './images/pterodactyl.jpg',
	2: './images/trex.jpg',
	3: './images/xp.jpg'
};

function handleFormSubmit(event) {
   event.preventDefault();
 
   var imgLocation = fileLocations[document.getElementById("contactQuestion").value];
   
   if (validateForm()){
	   //remove("contactMessage");
	   remove("contactForm");
	   addNewContent(imgLocation);
   }
   
   
   //addNewPost(document.getElementById("formUsername").value, document.getElementById("formCaption").value, imgLocation);
}

function validateForm() {
    var x = document.getElementById("message").value;
	 var y = document.getElementById("email").value;
	if (x == "" || y == "") {
        alert("Fields must be filled out");
        return false;
    }
	return true;
}

function remove(form_id) {
	var f = document.getElementById(form_id);
	f.parentNode.removeChild(f);
}

function addNewContent(imgLocation) {
	var newMessage = document.getElementById("contactMessage");
	newMessage.innerHTML = "";
	newMessage.innerHTML += "Thank you for your message, we will recieve it shortly! Our highly-intelligent deep learning algorithm has picked a specialized gift for you: ";

	var Image = document.createElement("img");
    Image.src = imgLocation;
	
	document.getElementById("content").appendChild(Image);
}
window.onload = () => {
   document.getElementById("contactForm").addEventListener('submit', handleFormSubmit);
};
