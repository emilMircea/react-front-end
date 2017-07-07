import React from 'react'
import Page from '../../components/Page'

class New extends React.PureComponent {
  extras = 'Already have an account? Sign In'
  render() {
    return (
      <Page.Auth title='Sign Up'>
        Something to show on the page
      </Page.Auth>
    )
  }
}


export default New;
