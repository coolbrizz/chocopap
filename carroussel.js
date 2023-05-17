function previous(){
    const widthSlider = document.querySelector('.carouselContentImage').offsetWidth;
    document.querySelector('.carouselContent').scrollLeft -= widthSlider;
}
function next(){
const widthSlider = document.querySelector('.carouselContentImage').offsetWidth;
    document.querySelector('.carouselContent').scrollLeft += widthSlider;
}