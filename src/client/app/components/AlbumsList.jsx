import React from 'react';

class AlbumsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentWillMount() {
    // Fake fetching data
    setTimeout(() => {
      this.setState({
        data: [
          { name: 'Album 1' },
          { name: 'Album 2' },
          { name: 'Album 3' },
          { name: 'Album 4' }
        ]
      });
    }, 400);
  }

  onSort () {
    // TODO: implement
  }

  render() {
    const albums = this.state.data.map(album => {
      return (
        <tr key={album.name}>
          <td>{album.name}</td>
        </tr>
      );
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Titre</th>
          </tr>
        </thead>
        <tbody>
          {albums}
        </tbody>
      </table>
    );
  }

}

export default AlbumsList;
