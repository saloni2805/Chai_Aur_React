function customRender(reactElement, container) {
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    // container.appendChild(domElement)

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children')
            continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

// This is JSX code 

// <div  >
// <h1>Heyy</h1>
// </div >

// React Converts above code into below code bcz JS understands this below type of HTML elements 

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

// <div  >
// <h1>Heyy</h1>
// </div >

const mainContainer = document.querySelector('#root')

// Render method
customRender(reactElement, mainContainer)