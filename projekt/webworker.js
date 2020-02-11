var i = 0;

function timedCount() {
  i = i + 1;
  switch(i%9)
  {
  	case 0:{postMessage("img/cnn/maxpool/0.jpg"); break;}
  	case 1:{postMessage("img/cnn/maxpool/1.jpg"); break;}
  	case 2:{postMessage("img/cnn/maxpool/2.jpg"); break;}
  	case 3:{postMessage("img/cnn/maxpool/3.jpg"); break;}
    	case 4:{postMessage("img/cnn/maxpool/4.jpg"); break;}
  	case 5:{postMessage("img/cnn/maxpool/5.jpg"); break;}
  	case 6:{postMessage("img/cnn/maxpool/6.jpg"); break;}
  	case 7:{postMessage("img/cnn/maxpool/7.jpg"); break;}
  	case 8:{postMessage("img/cnn/maxpool/8.jpg"); break;}
  }
  
  setTimeout("timedCount()",500);
}

timedCount();
