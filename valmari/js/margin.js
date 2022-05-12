let header_height = document.querySelector("header").clientHeight;
console.log(header_height);
document.querySelector("main").style.padding=`${header_height - 5}px 0 0 0`