window.onload = function () {

    //获取元素
    var container =  document.getElementById("container");
    var banner = document.getElementById("banner");
    var li = document.querySelectorAll("#banner li");
    var spanNode = document.querySelectorAll("#buttons span");
    var img = document.getElementsByTagName("img")[0];

    //前后按钮
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');

    //索引
    var index = 1;

    //给 container 设置宽，高，以及overflow:hidder
    container.style.width = img.offsetWidth + "px";
    container.style.height = img.offsetHeight + "px";
    container .style.overflow = "hidden";

    //给banner 设置宽高
    banner.style.height = img.offsetHeight + "px";
    banner.style.width = img.offsetWidth * li.length + "px";
    banner.style.left = "-600px"; /*默认位移设置*/
}

function animate(offset) {
    banner.style.transition = "0.5s";
    banner.style.left = -parseInt(offset )* index + "px";
}

next.onclick = function () {
    //点击下一页：移动
    index ++;
    console.log("索引index:"+index);
    animate(img.offsetWidth)
    
}

prev.onclick = function () {
    index--;
    animate(img.offsetWidth)
    showButton()

}

next.onclick = function () {
    //点击下一页：移动
     if(index == spanNode.length){
        index = 0;
    }
    index ++;
    console.log("索引index:"+index);

    animate(img.offsetWidth)
    showButton() //同步小圆点的函数

}

prev.onclick = function () {
    if(index == 1){
      index = li.length-1;

  }
  index--;
  animate(img.offsetWidth)
  showButton()  //同步小圆点的函数

}