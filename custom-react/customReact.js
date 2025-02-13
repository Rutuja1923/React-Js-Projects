// function customRender(reactElement, container) {
//     const domElement = document.createElement(reactElement.type);
//     domElement.innerHTML = reactElement.childeren;
//     domElement.setAttribute('href', reactElement.props.href);
//     domElement.setAttribute('target', reactElement.props.target); 

//     container.appendChild(domElement);
// }

function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.childeren;

    for (const prop in reactElement.props) {
        if (prop === 'childeren') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com/',
        target: '_blank',
    },
    childeren: 'Take me to google!'
}

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);
