function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function demo() {
    console.log('Taking a break...');
    await sleep(2000);
    console.log('Two second later');
}
function my3() {
    document.querySelector(".img__sec1").innerHTML = "<img src='aylin/3 (3).jpg' alt=''>"
    my4()
}
function my2() {
    document.querySelector(".img__sec1").innerHTML = "<img src='aylin/byRanoGafurova-70323.jpg' alt=''>"
    setTimeout(my3, 2000);
}
function my1() {
    document.querySelector(".img__sec1").innerHTML = "<img src='aylin/byRanoGafurova-70627.jpg' alt=''>"
    setTimeout(my2, 2000);
}
function my4() {
    setTimeout(my1, 2000);
}
my4()