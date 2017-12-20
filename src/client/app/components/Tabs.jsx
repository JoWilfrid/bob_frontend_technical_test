import React from 'react';

import AlbumsList from './AlbumsList.jsx';
import PlaylistsList from './PlaylistsList.jsx';

class Tabs extends React.Component {
  render() {
    let currentTab = null;

    if (this.props.activeTab == 'AlbumsList') {
      currentTab = <AlbumsList />;
    } else {
      currentTab = <PlaylistsList />;
    }
    return (
      <div className="tabs">
        <div className="tab">
          {currentTab}
        </div>
      </div>
    );
  }

}

export default Tabs;
