import React, { useEffect, useState } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import FinalView from './FinalView'

function PublicView(props) {
  return (
    <div>
      test
      <Router>
        <Route path='/publicView/:userId/:profileName' exact={true} component={FinalView} />
        {/* Re-use FinalView with different path*/}
      </Router>
    </div>
  )
}

export default PublicView;