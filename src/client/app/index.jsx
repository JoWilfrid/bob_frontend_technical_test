import React from 'react';
import {render} from 'react-dom';

import Tabs from './components/Tabs.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'AlbumsList',
      tabNames: {
        AlbumsList: 'Mes albums',
        PlaylistsList: 'Mes playlists'
      }
    };
    this.toggleTab = this.toggleTab.bind(this);
  }

  toggleTab(e, value) {
    this.setState({activeTab: value});
  }

  render () {
    const activeTabName = this.state.tabNames[this.state.activeTab];

    return (
      <div className="wrapper">
        <header>
          <p>{activeTabName}</p>
        </header>
        <nav>
          <ul>
            <li onClick={(e) => this.toggleTab(e, "AlbumsList")}>
              <a href="#">Mes albums</a>
            </li>
            <li onClick={(e) => this.toggleTab(e, "PlaylistsList")}>
              <a href="#">Mes playlists</a>
            </li>
          </ul>
        </nav>
        <Tabs activeTab={this.state.activeTab} />
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
