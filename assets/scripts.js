var vid;

function good(){
	var gcon = document.getElementById('gcon');	
	gcon.style.transition = "2s ease-out";
	gcon.style.right = "99%";
	gcon.style.opacity = "0";


	var bcon = document.getElementById('bcon');
	bcon.style.transition = "2s ease-out";
	bcon.style.left = "99%";
	bcon.style.opacity = "0";

	vid = document.getElementById('icy');
	setTimeout(function rest()
		{document.getElementById('i1').style.opacity = "1";
		vid.load();
		vid.play();
		document.getElementById('butts').style.opacity = "1";
		if (canPlayType()==false){
			window.alert("You can't play this html5 video. Sad!");
		}
		}, 1500);

}

function pause(){
	var paus = document.getElementById('pause');
	var pcon = document.getElementById('pcon');
	if (vid.paused){
		vid.play();
		paus.style.borderWidth = "0px 0px 0px 50px";
		paus.style.borderStyle = "double";
		pcon.style.borderWidth = "0px 0px 0px 50px";
		pcon.style.borderStyle = "double";
		pcon.style.right = "19.8%"
	
	}
	else{
		vid.pause();
		paus.style.borderWidth = "37px 0px 37px 60px";
		paus.style.borderStyle = "solid";
		pcon.style.borderWidth = "37px 0px 37px 60px";
		pcon.style.borderStyle = "solid";
		pcon.style.right = "19.6%";
		
	}
}

function bad(){
	var gcon = document.getElementById('gcon');	
	gcon.style.transition = "2s ease-out";
	gcon.style.right = "99%";
	gcon.style.opacity = "0";


	var bcon = document.getElementById('bcon');
	bcon.style.transition = "2s ease-out";
	bcon.style.left = "99%";
	bcon.style.opacity = "0";

	vid = document.getElementById('baddy');
	setTimeout(function rest()
		{document.getElementById('i2').style.opacity = "1";
		document.getElementById('butts').style.opacity = "1";
		vid.load()
		vid.play();}, 1500);

}

