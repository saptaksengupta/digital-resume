
var sl = new Slider([
    "medical-app", 
    "todo-pwa",
    "manocha-academy"
]);

function onSwipeRight() {
    sl.onChangeSlide('right');
}

function onSwipeLeft() {
    sl.onChangeSlide('left')
}