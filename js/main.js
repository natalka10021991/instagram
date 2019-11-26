class App extends Component {
    render() {

        const list = new PhotosList();

        return `<div class="container">
                    <div class="photos">
                        ${ list.render()}
                    </div>
                </div>`
    };
}

const app = new App();

app.mount(document.getElementById('app'));