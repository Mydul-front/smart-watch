const ringButtons = document.querySelectorAll(".ring-button");
// console.log(ringButtons);
for (let i = 0; i < ringButtons.length; i++) {
  // console.log(ringButtons[i])
  const ringBtn = ringButtons[i];
  ringBtn.addEventListener("click", function (event) {
    const color = event.target.id.replace('-color', '');
    console.log(color);
    // purple add korar age sobar age check kore nitaci purple thakle remove kore dibo and gray border add kore dibo
    for (let j = 0; j < ringButtons.length; j++) {
      ringButtons[j].classList.remove("border-purple-700");
      ringButtons[j].classList.add("border-yellow-700");
    }
    // console.log('clicked')
    // console.log(event.target)
    // color add
    event.target.classList.add("border-purple-700");
    event.target.classList.remove("border-yellow-700");
    //     akhn amra image change korbo
    const productImage = document.getElementById("product-image");
    // console.log(productImage);
//     productImage.src = "./images/teal.png";
productImage.src='./images/' + color +'.png';
  });
}


function selectWristSize(size){
     
     const sizes=['S','M','L','XL'];
     // console.log(size);

     for(let i=0; i<sizes.length; i++){
          const button = document.getElementById("size-"+ sizes[i]);
          // console.log(sizes[i]);
          const element=sizes[i];
          // console.log(element , size)
          if(size === element){
               button.classList.add('border-purple-700');
          }
          else{
               button.classList.remove("border-purple-700");
          }
     }
}