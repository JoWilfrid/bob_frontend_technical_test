import React from 'react';

class PlaylistsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      order: 'desc',
      data: []
    };
    this.onSort = this.onSort.bind(this);
  }

  onSort () {
    this.sortData();
  }

  toggleSortDirection() {
    const inverseOrder = {
      asc: 'desc',
      desc: 'asc'
    };

    this.setState({ order: inverseOrder[this.state.order] });
  }

  sortData() {
    this.toggleSortDirection();

    const infValue = this.state.order == 'desc' ? -1 : 1;
    const supValue = infValue * -1;

    this.setState({
      data: this.state.data.sort((a,b) => {
        let result = 0;

        if (a.size < b.size) result = infValue;
        if (a.size > b.size) result = supValue;

        return result;
      })
    })
  }

  componentWillMount() {
    // Fake fetching data
    setTimeout(() => {
      this.setState({
        data: [
          {
            name: 'Playlist 1',
            size: 15
          },
          {
            name: 'Playlist 2',
            size: 10
          },
          {
            name: 'Playlist 3',
            size: 0
          },
          {
            name: 'Playlist 4',
            size: 20
          },
          {
            name: 'Playlist 5',
            size: 0
          }
        ]
      });

      this.sortData();
    }, 400);
  }

  render() {
    const playlists = this.state.data.map(playlist => {
      let iconTd = null;

      if (playlist.size === 0) {
        iconTd = (
          <td>
            <img src="public/assets/images/icon-empty.svg" alt="Empty" height="20" width="20" />
          </td>
        );
      } else {
        iconTd = <td></td>;
      }

      return (
        <tr key={playlist.name}>
          {iconTd}
          <td>{playlist.name}</td>
          <td>{playlist.size}</td>
        </tr>
      );
    });

    return (
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Titre</th>
            <th onClick={this.onSort} className="sort">Taille</th>
          </tr>
        </thead>
        <tbody>{playlists}</tbody>
      </table>
    );
  }

}

export default PlaylistsList;
