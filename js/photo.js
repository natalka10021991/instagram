class Photos extends Component {
    constructor(src, alt) {
        super();
        this.src = src;
        this.alt = alt;

    }

    render() {
        return `
        <li class="photos__item">
            <img src= "${ this.src }" alt="${ this.alt}" class="photos__photo">
        </li>
    `
    }
}