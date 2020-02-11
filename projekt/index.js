
curr_con = 'ann_wrapper';
 var w;

function toggleSidebar()
 {
   document.getElementById("sidebar").classList.toggle('active');
 }


function showContent(element)
 {
 	hideCurrentContent();
 	curr_con = element;
 	document.getElementById(curr_con).style.display = 'block'


	// document.getElementById("t2").innerHTML= 'Sieci';
	// document.getElementById("t3").innerHTML= 'Neuronowe';
  //document.getElementById("main_subtitle").style.display
  window.scrollTo(0,0);
  if(curr_con == 'cnn_wrapper') startWorker();
	else if (w != undefined) stopWorker();

 	// switch(curr_con)
 	// {	
 	// 	case 'cnn_wrapper': {document.getElementById("t1").innerHTML= ''; ;break;}
 	// 	case 'dnn_wrapper': {document.getElementById("t1").innerHTML= 'Gęste'; break;}
 	// 	case 'rnn_wrapper': {document.getElementById("t1").innerHTML= 'Rekurencyjne'; break;}
 	// 	case 'ann_wrapper': {document.getElementById("t1").innerHTML= 'Sztuczne'; break;}
 	// 	case 'about_wrapper': {document.getElementById("t1").innerHTML= '';
		// 				 	   document.getElementById("t2").innerHTML= 'O Stronie';
		// 				 	   document.getElementById("t3").innerHTML= ''; 
		// 				 	   break;}
 	// }
 	
 }

 function hideCurrentContent()
 {
 	document.getElementById(curr_con).style.display = 'none'
 }

 ////////////////////////




function startWorker() {
  if (typeof(Worker) !== "undefined") {
    if (typeof(w) == "undefined") {
      w = new Worker("webworker.js");
    }
    w.onmessage = function(event) {
      document.getElementById("cnn_image").src = event.data;
    };
  } else {
    document.getElementById("cnn_wrapper").innerHTML = "Sorry! No Web Worker support.";
  }
}

function stopWorker() {
  w.terminate();
  w = undefined;
}
