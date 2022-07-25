function BrowserDetect(){

	let userAgent = navigator.userAgent;
    let browserName;
         
        if(userAgent.match(/chrome|chromium|crios/i)){
             browserName = "chrome";
        	}else if(userAgent.match(/firefox|fxios/i)){
             browserName = "firefox";
           	}  else if(userAgent.match(/safari/i)){
             browserName = "safari";
           	}else if(userAgent.match(/opr\//i)){
             browserName = "opera";
           	} else if(userAgent.match(/edg/i)){
             browserName = "edge";
           	}else{
             browserName="No browser detection";
           	}

        console.log(browserName)

    	if (browserName == "chrome") {
    	  	 document.write("<link rel=\"stylesheet\" href=\"src/styles/style.css\" >");
   			}else if (browserName == "firefox") {
    	  	 document.write("<link rel=\"stylesheet\" href=\"src/styles/style.sass\" >");
    		}else {
    	  	 document.write("<link rel=\"stylesheet\" href=\"src/styles/style.css\" >");
    		}
}

export{}