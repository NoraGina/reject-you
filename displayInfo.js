function display(){
    
    const string="You  must  have  an  account ...!!!";
    const stringArray = [...string];
    const para = document.querySelector("#info");
    let count = 0;
    let time =200;
    clearTimeout();
      stringArray.forEach(element=>{
          count ++;
      setTimeout(function () {
  para.innerHTML += element;
     }, count*time)
      })
        }
  
function delay(){
  setTimeout(display, 1000);
}
delay();