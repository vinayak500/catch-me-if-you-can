var box = document.getElementById('box');

box.addEventListener('mousemove' , function(){

  var veiwport_height = window.innerHeight;
  var veiwport_width = window.innerWidth;


  let box_height=box.clientHeight;
  let box_width=box.clientWidth;

  box.style.marginTop =   Math.floor(Math.random() * (veiwport_height-box_height)).toString() + "px";
  box.style.marginLeft = Math.floor(Math.random() * (veiwport_width-box_width)).toString() + "px";
});