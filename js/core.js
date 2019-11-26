function renderComponent(comp) {
    return comp.render();
}

class Component {
    mount(element) {
        element.innerHTML = renderComponent(this);

    }
}