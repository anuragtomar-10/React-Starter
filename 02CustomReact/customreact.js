function customRender(reactElement,container){
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    /*
    domElement.setAttrubute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    */
    for(const prop in props){
        if(prop==children) continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}

// html returned in App is made to look like a tre graph after compilateion
// done by bundler by parsing jsx(html+js)
const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit Google'
}

const root=document.querySelector('#root')

customRender(reactElement,root) // had to be custom rendered

