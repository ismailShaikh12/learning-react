function customRender(reactElement, container) {
    /*const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    container.appendChild(domElement);*/

    const domElementTwo = document.createElement(reactElement.type);
    domElementTwo.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElementTwo.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElementTwo);
}

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click me to Visit ReactElementTwo22'
}
const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer)