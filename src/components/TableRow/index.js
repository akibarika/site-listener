import React, {Component} from 'react';
import PropTypes from 'prop-types'
import axios from 'axios';
import styled from 'styled-components'

const StyledtTd = styled.td`
  padding: 20px;
`

const StyleStatusSuccess = styled.span`
  color: green;
`
const StyleStatusFailure = styled.span`
  color: red;
`
const StyleStatusPending = styled.span`
  color: gray;
`

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.state = {status: ``};
    }

    componentDidMount() {
        this.setState({status: `pending`});
        axios.get(this.props.obj.URL)
            .then(response => {
                this.setState({status: `success`});
            })
            .catch(error => {
                this.setState({status: `failure`});
            })
    }

    render() {
        const {status} = this.state
        let StyleStatus
        if (status === 'pending' || status === '') {
            StyleStatus = (<StyleStatusPending>{status}</StyleStatusPending>)
        } else if (status === 'failure') {
            StyleStatus = (
                <StyleStatusFailure>
                    {status}
                </StyleStatusFailure>
            )
        } else if (status === 'success') {
            StyleStatus = (
                <StyleStatusSuccess>
                    {status}
                </StyleStatusSuccess>
            )
        }
        return (
            <tr>
                <StyledtTd>
                    {this.props.obj.name}
                </StyledtTd>
                <StyledtTd>
                    {this.props.obj.URL}
                </StyledtTd>
                <StyledtTd>
                    {StyleStatus}
                </StyledtTd>
            </tr>
        );
    }
}

TableRow.propTypes = {
    name: PropTypes.string,
    URL: PropTypes.string,
    status: PropTypes.string
}

export default TableRow;