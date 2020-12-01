class Shape{
    constructor(height, width){
        this.height = height
        this.width = width
        this.div = $('<div class="shape"></div>')
        this.render();
    }

    render(){
        $('.canvas').append(this.div)
        this.div.css({
            height: `${this.height}px`, 
            width: `${this.width}px`,
            top: `${this.randomPos(this.height)}px`,
            left: `${this.randomPos(this.width)}px`,
        })
    }

    randomPos(offset){
        return Math.floor((Math.random() * (601 - offset)));
    }
}

new Shape(200,200)
new Shape(300,300)