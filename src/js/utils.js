
var sl = new Slider([
    "medical", 
    "education"
]);

function onSwipeRight() {
    sl.onChangeSlide('right');
}

function onSwipeLeft() {
    sl.onChangeSlide('left')
}