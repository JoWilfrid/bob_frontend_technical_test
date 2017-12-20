import React from 'react';
import {render} from 'react-dom';

import Tabs from './components/Tabs.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'AlbumsList'
    };
    this.toggleTab = this.toggleTab.bind(this);
  }

  toggleTab(e, value) {
    this.setState({activeTab: value});
  }

  render () {
    return (
      <div>
        <ul>
          <li>
            <a href="#" onClick={(e) => this.toggleTab(e, "AlbumsList")}>Mes albums</a>
          </li>
          <li>
            <a href="#" onClick={(e) => this.toggleTab(e, "PlaylistsList")}>Mes playlists</a>
          </li>
        </ul>
        <Tabs activeTab={this.state.activeTab} />
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
