let html = document.querySelector('#html')
let style = document.querySelector('#style')

let string = `/*
* 大家好，我是大徐
* 接下来，给大家展示一个会动的简历
* 首先，我来准备一个div
* */
#div1{
    border: 1px solid red;
    height: 200px;
    width: 200px;
}
/* 
* 接下来我要把div变成一个八卦图
* 首先，把div变成一个圆
* */
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,.5);
    border: none;
}  
/*
* 八卦是阴阳形成的
* 一黑一白
* */ 
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 下面再加两个风火轮 */
#div1::before{
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
#div1::after{
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
`


console.log(string)
let n=0
let string2 = ''
let step=() => {
    setTimeout(()=>{
        if(string[n] ==='\n'){
            string2 += '<br>'
        } else if(string[n] === ' '){
            string2 += '&nbsp;'
        } else {
            string2 += string[n]
        }
        html.innerHTML = string2
        style.innerHTML = string.substring(0,n)
        window.scrollTo(0,99999);
        html.scrollTo(0,99999);
        console.log(string.length)
        if(n < string.length-1) {
            n+=1
            step()
        }
    },50)
}  
step()
