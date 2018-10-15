import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import styled from 'styled-components'
import {bindActionCreators} from 'redux'
import {checkSite} from './reducers/site'
import {siteList} from './constants'
import logo from './logo.svg';
import './App.css';

const StyledFailureStatus = styled.div`
  color: red;
`
const StyledPendingStatus = styled.div`
  color: gray;
`
const StyledSucessStatus = styled.div`
  color: green;
`

class App extends Component {
    componentDidMount() {
        this.props.checkSite()
    }

    render() {
        const {status} = this.props
        let statusBlock

        if (status === '' || status === 'pending') {
            statusBlock = (
                <StyledPendingStatus>pending</StyledPendingStatus>
            )
        } else if (status === 'failure') {
            statusBlock = (
                <StyledFailureStatus>failure</StyledFailureStatus>
            )
        } else if (status === 'success') {
            statusBlock = (
                <StyledSucessStatus>success</StyledSucessStatus>
            )
        }
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                        {siteList.map(item => (
                            <p>{item.name}</p>,
                            {statusBlock}
                        ))}

                </header>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    status: state.site.status
})
const mapDispatchToProps = dispatch => bindActionCreators({checkSite}, dispatch)
App.propTypes = {
    siteList: PropTypes.array,
    status: PropTypes.string
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

