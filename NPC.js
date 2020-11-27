class NPC {
	constructor(x,y){
		this.x = x;
		this.y = y;
		this.w = 70;
		this.h = 154;
		this.isLeftBehind = false;		
	}
	display(){
		image(NPCImage,this.x, this.y, 80, 160);
	}
	move (){
		this.y += 4.2;
	}
	collide(PC1){
		var NPC1LeftEdge = this.x + this.w;
		var PC1LeftEdge = PC1.x + PC1.w;
		var NPC1TopEdge = this.y + this.h;
		var PC1TopEdge = PC1.y + PC1.h;
        var PC1RightEdge = PC1.x;
		var NPC1RightEdge = this.x;
		var PC1BottomEdge = PC1.y;
		var NPC1BottomEdge = this.y;
		if(PC1RightEdge < NPC1LeftEdge && PC1LeftEdge > NPC1RightEdge)
			if(PC1BottomEdge < NPC1TopEdge && PC1TopEdge > NPC1BottomEdge) /*Return true*/ return true;		
	}

	continue(){
		return (this.y > 600);
	}
	isLeftBehindBy(PC1){
		if (PC1.y < this.y)  return true;
	}
}
