function my3() {
    document.querySelector(".img__sec1").innerHTML = "<img src='aylin/3 (3).jpg' alt=''>";
    setTimeout(my1, 5000);
}
function my2() {
    document.querySelector(".img__sec1").innerHTML = "<img src='aylin/byRanoGafurova-70323.jpg' alt=''>";
    setTimeout(my3, 5000);
}
function my1() {
    document.querySelector(".img__sec1").innerHTML = "<img src='aylin/byRanoGafurova-70627.jpg' alt=''>";
    setTimeout(my2, 5000);
}
my1();