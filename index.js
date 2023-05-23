const slide = document.querySelectorAll(".slide");
var counter =0

slide.forEach((obj, index)=>{
    obj.style.left = `${index*100}%`
})
const goBack=()=>{
    counter--;
    (counter >=0) ? slideImage() : counter=0
    
}
const goNext =() =>{
    counter++;
    
    (counter <=3) ? slideImage() : counter=-1  
   
}
const slideImage = ()=>{
    slide.forEach((obj)=>{
        obj.style.transform = `translateX(-${counter*100}%)`
    })
}
setInterval(()=>{
    goNext()
},3000)