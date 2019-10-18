function renderComponent(comp) {
    return comp.render();
}

class Component {
    mount(element) {
        element.innerHTML = renderComponent(this);

    }
}

class App extends Component {
    render() {
        return app.componentHtml;
    }

    componentHtml =
        `<div class="container">
        <div class="photos">
            <ul class="photos__list">
                <li class="photos__item">
                    <img src="img/1.jpg" alt="" class="photos__photo">
                </li>
                <li class="photos__item">
                    <img src="img/2.jpg" alt="" class="photos__photo">
                </li>
                <li class="photos__item">
                    <img src="img/3.jpg" alt="" class="photos__photo">
                </li>
                <li class="photos__item">
                    <img src="img/4.jpg" alt="" class="photos__photo">
                </li>
                <li class="photos__item">
                    <img src="img/5.jpg" alt="" class="photos__photo">
                </li>
                <li class="photos__item">
                    <img src="img/6.jpg" alt="" class="photos__photo">
                </li>
            </ul>
        </div>
    </div>`
}

const app = new App();

app.mount(document.getElementById('app'));