class Slider {

    constructor(slideContents) {
        this.slideContents = [];
        // this.numberOfSlides = 0;
        this.activeIndex = 0
        this.sliderPresentationWindow = [];

        this.slideContents = slideContents;
        this.initSlider();
    }

    initSlider() {
        for (let i = 0; i < this.slideContents.length; i++) {
            const contentInstance = this.getDomInstanceById(this.slideContents[i]);
            this.setSliderPresentationWindow(contentInstance);
        }

    }


    onChangeSlide(direction) {
       
        if(direction == 'left' && this.activeIndex == 0) {
            return false;
        }

        if(direction == 'right' && this.activeIndex == this.slideContents.length - 1){
            return false;
        }

        const slideToHide = this.getSlideToRepresentByIndex(this.activeIndex);
        switch (direction) {
            case 'right':
                this.activeIndex = this.activeIndex == this.slideContents.length - 1 ? this.activeIndex : this.activeIndex + 1;
                break;
            case 'left':
                this.activeIndex = this.activeIndex == 0 ? this.activeIndex : this.activeIndex - 1;
                break;
        }
        const slideToShow = this.getSlideToRepresentByIndex(this.activeIndex);
        if(direction == 'left') {
            this.slideRight(slideToHide, slideToShow)
        } else {
            this.slideLeft(slideToHide, slideToShow)
        }
        return;
    }

    slideLeft(slideToHide, slideToShow) {
        slideToHide.classList.add("hide-out-left")
        setTimeout(() => {
            slideToHide.style.display = 'none';
            slideToShow.style.display = 'flex';
            slideToShow.classList.add("show-in-left")
        }, 500)
        setTimeout(() => {
            this.removeAnimationClasses(slideToShow, slideToHide);
        }, 1000)
    }

    slideRight(slideToHide, slideToShow) {
        slideToHide.classList.add('hide-out-right');
        setTimeout(() => {
            slideToHide.style.display = 'none';
            slideToShow.style.display = 'flex';
            slideToShow.classList.add("show-in-right")
        }, 500)

        setTimeout(() => {
            this.removeAnimationClasses(slideToShow, slideToHide);
        }, 1000)
    }

    removeAnimationClasses(currentDiv, previousDiv) {
        currentDiv.classList.remove("show-in-left")
        currentDiv.classList.remove("show-in-right")
        currentDiv.classList.remove("hide-out-left")
        currentDiv.classList.remove("hide-out-right")

        previousDiv.classList.remove("hide-out-left")
        previousDiv.classList.remove("hide-out-right")

    }

    getDomInstanceById(domId) {
        return document.getElementById(domId);
    }

    setSliderPresentationWindow(domInstance) {
        this.sliderPresentationWindow.push(domInstance);
    }

    getSlideToRepresentByIndex(index) {
        return this.sliderPresentationWindow[index];
    }
}
export default Slider;