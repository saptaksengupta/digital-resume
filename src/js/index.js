import '../sass/common.scss';
import '../sass/_variables.scss';
import '../sass/_mixins.scss';
import '../sass/textAnimation.scss';
import '../sass/pageContent.scss';
import '../sass/slider.scss'


import Slider from './Slider';

var sl = new Slider([
    "medical", 
    "education"
]);

window.onSwipeRight = function onSwipeRight() {
    sl.onChangeSlide('right');
}

window.onSwipeLeft = function onSwipeLeft() {
    sl.onChangeSlide('left')
}

