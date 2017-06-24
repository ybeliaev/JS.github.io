function Triangle(w, h, color) {
	this.w = w;
	this.h = h;
	this.color = color;
	this.init_ = function () {
		this.element = document.createElement("div");
		this.element.style.width = "0";
		this.element.style.height = "0";
		this.element.style.border = `${this.w / 2}px solid transparent`;
		this.element.style.borderBottom = `${this.h}px solid ${this.color}`;

	}
	this.show = function () {
		document.body.appendChild(this.element);
	}
	this.setDirection = function(direction){
		switch(direction){
			case "up":
				this.element.style.transform = "rotate(0deg)";
				break;
			case "down":
				this.element.style.transform = "rotate(180deg)";
				break;
			case "left":
				this.element.style.transform = "rotate(-90deg)";
				break;
			case "right":
				this.element.style.transform = "rotate(90deg)";
				break;
						}
	}
	this.init_();
}
var t = new Triangle(150, 150, "lime");
t.setDirection("left");
t.show();
