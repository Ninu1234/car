class PC {
	constructor(x,y){
		this.x = x;
		this.y = y;
		this.w = 70;
		this.h = 154;
	}

	display(){
		image(PCImage,this.x, this.y, 80, 160);
	}

	right(){
		this.x += 5;
	}

	left(){
		this.x -= 5;
	}
}

