import React, {Component} from 'react';
import PropTypes from 'prop-types'
import axios from 'axios';
import * as Styled from '../Styled'
import TableRow from "./index";


class TableRowLink extends Component {
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
        const {status} = this.state;
        let StyleStatus;
        if (status === 'pending' || status === '') {
            StyleStatus = (<Styled.StatusPending>{status}</Styled.StatusPending>)
        } else if (status === 'failure') {
            StyleStatus = (
                <Styled.StatusFailure>
                    {status}
                </Styled.StatusFailure>
            )
        } else if (status === 'success') {
            StyleStatus = (
                <Styled.StatusSuccess>
                    {status}
                </Styled.StatusSuccess>
            )
        }
        return (
            <Styled.Td>
                <a href={this.props.obj.URL} target="_blank">{StyleStatus}</a>
            </Styled.Td>
        )
    }
}

TableRow.propTypes = {
    status: PropTypes.string
};
export default TableRowLink;
