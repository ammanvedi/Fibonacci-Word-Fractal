window.onload = function (e){

	var gr = 1.61803398875;
	//1234 | N-E-S-W
	var heading = 3;
	var seglength = 2;
	var segwidth = 1;

	var canvas = document.getElementById('pcanvas');
    var ctx = canvas.getContext('2d');
    //ctx.transform(2,0.5,-0.5,1,30,10);




    var o;
    var i;

for(i = 1; i < 5; i++){

	heading = i;
	var x_ = 400;
    var y_ = 400;

    for(o = 1; o < 10000; o++){
    	
    	var seq = generate(o);
    	drawSegment(ctx, x_, y_);
    	console.log('char is ' + seq);
   		
    	if(seq == 0){
    		console.log('the heading is : ' + changeHeading(o));
    	}

    }
}


    //for generating debug graphs, retrieve a random hex color code
 function get_random_color() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.round(Math.random() * 15)];
        }
        return color;
    }

function generate(n){
	
	var digit = 2 + Math.floor(n*gr) - Math.floor((n+1) * gr);
	return digit;
}

function drawSegment(context, ptx, pty){

	context.beginPath();
      context.moveTo(ptx, pty);
      context.lineWidth = segwidth;
      //context.strokeStyle = get_random_color();


      if(heading == 1){
      	//draw line north

      	    context.lineTo(ptx, pty - seglength);
      		x_ = ptx; y_= pty - seglength;
      
      }
      if(heading == 2){
      	//draw line east
      	    context.lineTo(ptx + seglength, pty);
      		x_ = ptx + seglength; y_= pty;

      		
      }
      if(heading == 3){
      	//draw line south
      	    context.lineTo(ptx, pty + seglength);
	      	x_ = ptx; y_= pty + seglength;

	      
      }
      if(heading == 4){
      	//draw line west
      	    context.lineTo(ptx - seglength, pty);
      		x_ = ptx - seglength; y_= pty;

      	
      }

      context.stroke();

}

function changeHeading(nth){

	if(nth%2 == 0){
	//even (left)
		if(heading == 1){
			heading = 2;
			return heading;
		}

		if(heading == 2){
			heading = 3;
			return heading;
		}

		if(heading == 3){
			heading = 4;
			return heading;
		}

		if(heading == 4){
			heading = 1;
			return heading;
		}
	}else{
	//odd (right)
		if(heading == 1){
			heading = 4;
			return heading;
		}

		if(heading == 2){
			heading = 1;
			return heading;
		}

		if(heading == 3){
			heading = 2;
			return heading;
		}

		if(heading == 4){
			heading = 3;
			return heading;
		}

	}

	

}


	
}