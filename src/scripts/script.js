function ChangeDate(){
	let dateEl = document.getElementById("current-year")
	dateEl.innerText = new Date().getFullYear();
	console.log('hi')
}

function SideBar(){

	let progress = document.getElementById('progressbar');
	let totalHeight = document.body.scrollHeight - window.innerHeight;
	
		window.onscroll = function () {
  			let progressHeight = (window.pageYOffset / totalHeight) * 100;
  			progress.style.height = progressHeight + "%";
		}
}
