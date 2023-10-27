function customRender(ele,container){
   const domEle= document?.createElement(ele.type)
   domEle.innerHTML=ele.children
   
   for (const prop in ele.props) {
    if(prop==='children') continue
    
    domEle.setAttribute(prop,ele.props[prop])
   }
   container.appendChild(domEle)
}


const reactElement={
    type:'a',
    props:{
        href:'www.google.com',
        target:'blank',
        style:'color:red'
    },
    children:"Click Me"
}

const mainContainer=document.querySelector('#root')

customRender(reactElement,mainContainer)