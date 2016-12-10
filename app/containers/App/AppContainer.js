import React, { PropTypes, Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux' // connects a react component to the redux store.
import { ReactModoroNavigator } from '~/containers'
import { PreSplash } from '~/components'

class AppContainer extends Component {
  static propTypes = {
   isAuthenticating: PropTypes.bool.isRequired
  }
  render () {
    return (
      <View style={{flex: 1}}>
        {this.props.isAuthenticating === true 
        	? <PreSplash/> 
        	: <ReactModoroNavigator /> }
      </View>
    )
  }
}

function mapStateToProps ({authentication}) {
	return {
		// Specify which part of the redux store you need in your components.
		isAuthenticating: authentication.isAuthenticating
	}
}

// Allows AppContainer to access the state 
export default connect(
	mapStateToProps
)(AppContainer)