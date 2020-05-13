class Slider {

    constructor(slideContents) {
        this.slideContents = [];
        // this.numberOfSlides = 0;
        this.activeIndex = 0
        this.sliderPresentationWindow = [];

        // if (numberOfSlides !== slideContents.length) {
        //     console.error("Slider Configuration error")
        // }
        // this.numberOfSlides = numberOfSlides;
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
        this.toggleSlide(slideToHide, slideToShow);
        return;
    }

    toggleSlide(slideToHide, slideToShow) {
        
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