let shapeName = $('#shapeName');
let shapeWidth = $('#shapeWidth');
let shapeHeight = $('#shapeHeight');
let shapeRadius = $('#shapeRadius');
let shapeArea = $('#shapeArea');
let shapePerimeter = $('#shapePerimeter');
let rectangleHeight = $('#rectangleHeight');
let rectangleWidth = $('#rectangleWidth');
let squareWidth = $('#squareWidth')
let circleRadius = $('#circleRadius')
let triangleHeight = $('#triangleHeight')

class Shape{
    constructor(height, width){
        this.height = height
        this.width = width
        this.div = $('<div class="shape"></div>')
        this.render();
        this.div.click(() => this.describe());
        this.div.dblclick(() => this.destroy());
        this.area = (height * width);
        this.radius = 'N/A';
        this.perimeter = (height * 2) + (width * 2);
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

    describe(){
        shapeName.val(this.name);
        shapeWidth.val(this.width);
        shapeHeight.val(this.height);
        shapeRadius.val(this.radius);
        shapeArea.val(this.area);
        shapePerimeter.val(this.perimeter);
    }

    destroy(){
        this.div.remove();
        shapeName.val('')
        shapeWidth.val('')
        shapeHeight.val('')
        shapeRadius.val('')
        shapeArea.val('')
        shapePerimeter.val('')

    }

    
}

class Square extends Shape {
    constructor(width){
        super(width, width);
        this.name = "Square";
        this.div.css('background-color', 'red');
    }
}

class Rectangle extends Shape{
    constructor(height, width){
        super(height, width);
        this.div.css('background-color', 'green');
        this.name = "Rectangle";
    }
}

class Circle extends Shape{
    constructor(radius){
        super(radius, radius);
        this.name = "Circle";
        this.div.css({
            backgroundColor: 'purple',
            borderRadius: '50%'
        })
        this.radius = radius
        this.area = Math.pow(Math.PI, 2);
        this.perimeter = Math.PI * this.radius;
    }
}

class Triangle extends Shape{
    constructor(height){
        super(height, height);
        this.name = "Triangle";
        this.div.css({
            borderLeft: `${this.height}px solid transparent`,
            borderBottom: `${this.height}px solid yellow`,
        })
        this.area = (this.height * this.height * 0.5);
        this.perimeter = 2 * this.height + (Math.sqrt(2)) * this.height;
    }
}


$('#rectangleBtn').click(function (e) {
    e.preventDefault();
    new Rectangle(rectangleHeight.val(), rectangleWidth.val());
    rectangleHeight.val('')
    rectangleWidth.val('')
})

$('#squareBtn').click(function (e) {
    e.preventDefault();
    new Square(squareWidth.val());
    squareWidth.val('');
    
})

$('#circleBtn').click(function (e) {
    e.preventDefault();
    new Circle(circleRadius.val());
    circleRadius.val('')
})

$('#triangleBtn').click(function (e) {
    e.preventDefault();
    new Triangle(triangleHeight.val());
    triangleHeight.val('')
})

