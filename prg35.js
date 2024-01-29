//w a p to check whether a give number is a mobile number or not  using arrow function


const mobile=(num)=>{
               
       return num.length==10?'mobile':'not mobile'}

console.log(mobile('563788236'));



//w a p to check whether given mail id is gmail or not

gm=(mai)=>{
    return mai.endsWith('@gmail')?'gmail':'not gmail'
}
console.log(gm('abhi@gmail'));








//w a p to check whether given word starts with q

word=(str)=>{ return  str.startsWith('Q')||str.startsWith('q')?'starts with q':'not starts with q'

}
console.log(word('qwerty'));


