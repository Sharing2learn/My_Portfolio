const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');

}
let likebtn = document.querySelector('#likebtn');
          let dislikebtn = document.querySelector('#dislikebtn');
          let input1 = document.querySelector('#input1');
          let input2 = document.querySelector('#input2');
      
          likebtn.addEventListener('click', (event) => {
            event.preventDefault();
            input1.value = parseInt(input1.value) + 1;
            input1.style.color = "#12ff00";
          });
      
          dislikebtn.addEventListener('click', (event) => {
            event.preventDefault();
            input2.value = parseInt(input2.value) + 1;
            input2.style.color = "#ff0000";
          });



