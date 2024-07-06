
var img = ["../IMG/TrangChu/TrangChu09.jpg",
    "../IMG/TrangChu/TrangChu10.jpg",
    "../IMG/TrangChu/TrangChu11.jpg",
    "../IMG/TrangChu/TrangChu12.jpg",
];
var num =0;
function next(){
    var slider = document.getElementById("../IMG");
    num++;
    if(num>=img.length){
        num=0;
    }
    slider.src=img[num];
}
function comeback(){
    var slider = document.getElementById("../IMG");
    num--;
    if(num<0){
        num= img.length-1;
    }
    slider.src=img[num];
}

let currentIndex = 0;
const images = [
    "../IMG/TrangChu/TrangChu09.jpg",
    "../IMG/TrangChu/TrangChu10.jpg",
    "../IMG/TrangChu/TrangChu11.jpg",
    "../IMG/TrangChu/TrangChu12.jpg"
];

document.addEventListener('DOMContentLoaded', function() {
    const imgElement = document.getElementById('IMG');

    function showImage(index) {
        imgElement.src = images[index];
    }

    window.comeback = function() {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        showImage(currentIndex);
    }

    window.next = function() {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        showImage(currentIndex);
    }

    setInterval(next, 2500);

    showImage(currentIndex);
});

// ---------Chi tiết sản phẩm ---------------

var img = ["../IMG/ChiTiet/4bcfcc45-2814-4dbb-a40b-3670e8b299f8-360x360.jpg",
    "../IMG/ChiTiet/ChiTiet06.jpg",
    "../IMG/ChiTiet/ChiTiet09.jpg",
    "../IMG/ChiTiet/ChiTiet10.jpg",
];
var num =0;
function next_product(){
    var slider = document.getElementById("panel");
    num++;
    if(num>=img.length){
        num=0;
    }
    slider.src=img[num];
}
function comeback_product(){
    var slider = document.getElementById("panel");
    num--;
    if(num<0){
        num= img.length-1;
    }
    slider.src=img[num];
}