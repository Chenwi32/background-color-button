const colorButton = document.querySelector(".colorBtn")
const bodyBG = document.querySelector('body')

const colors = ['yellow', 'red', 'green',
                'rgb(25, 210, 8)', '#025', 'blue', 'pink']

colorButton.addEventListener('click',changeColor)

function changeColor(){
     /* bodyBG.style =`background-color: ${colors[3]};` */
     // We could still write the above like this;
     /* bodyBG.style.backgroundColor = colors[3]; */
    let random = Math.floor(Math.random()*colors.length);
    bodyBG.style.backgroundColor = colors[random]


}






