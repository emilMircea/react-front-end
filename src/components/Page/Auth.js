import React from 'react'

class Auth extends React.PureComponent {
  render() {
    return(
      <div className="container">
        <div className="row signIn-wrap">
            <a className='logoLink' href='#'>{this.props.title}</a>
            {this.props.children}
            <a href="">{this.props.extras || null}</a>
        </div>
      </div>
    )
  }
}

export default Auth
