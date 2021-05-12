import React, { useEffect, useState } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { getPublicUrlParam } from '../apis/apiController'

import FinalView from './FinalView'

function PublicView(props) {
  const [publicView, setPublicView] = useState({
    public: false,
    userId: null,
    profileName: null
  })

  useEffect(() => {
    const { userId, profileName } = props.match.params
    if (props.match.path === "/publicView/:userId/:profileName") {
      getPublicUrlParam(userId, profileName)
        .then(response => {
          if (response[0].userId)
            return setPublicView({ public: true, userId, profileName })
        })
        .catch(error => console.log(error, 'this profile is not listed for public view'))
    }
  }, [props.match.params.profileName])

  return (
    <div>
      {
        publicView.public ? (
          <Router>
            <Route path='/publicView/:userId/:profileName' exact={true} render={props =>
              (<FinalView {...props} publicView={publicView} />)
            } />
            {/* Re-use FinalView with different path*/}
          </Router>
        )
          : <h1>Does not exist</h1>
      }
    </div>
  )
}

export default PublicView;