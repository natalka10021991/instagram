class PhotosList extends Component {
    render() {

        const photos = [...Array(6)].map((value, i) => {
            return new Photos(`img/${i + 1}.jpg`);
        })

        return `
          <ul class="photos__list">
              ${photos.map(photo => photo.render()).join('')}
          </ul>
      `
    }
}