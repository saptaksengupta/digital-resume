
var sl = new Slider([
    "medical-app", 
    "todo-pwa"
]);

function onSwipeRight() {
    sl.onChangeSlide('right');
}

function onSwipeLeft() {
    sl.onChangeSlide('left')
}