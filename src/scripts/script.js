function ChangeAge(){
	let ageEl = document.getElementById("current-age")
	
	var birthDate = new Date(2005, 10, 19);
	var currentDate = new Date();
	var age = currentDate.getFullYear() - birthDate.getFullYear();
	var month = currentDate.getMonth() - birthDate.getMonth();
	var day = currentDate.getDate() - birthDate.getDate();

	if ( month < 0 || month == 0 && day < 0 )
	{
    	age--;
	}

	ageEl.innerText = age;
}

function SideBar(){

	let progress = document.getElementById('progressbar');
	let totalHeight = document.body.scrollHeight - window.innerHeight;
	
		window.onscroll = function () {
  			let progressHeight = (window.pageYOffset / totalHeight) * 100;
  			progress.style.height = progressHeight + "%";
		}
}
