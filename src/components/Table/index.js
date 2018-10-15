import React, {Component} from 'react';
import PropTypes from 'prop-types'
import TableRow from '../../components/TableRow'
import styled from 'styled-components'

const StyledContainer = styled.div`
  margin-top: 70px;
  margin-bottom: 50px;
  color: #3c3b3b;
`
const StyledtTd = styled.td`
  padding: 20px;
  font-weight: bold;
  font-size: 1.3rem;
`

class Table extends Component {

    tabRow() {
        return this.props.siteList.map((object, i) => (
            <TableRow obj={object} key={i}/>
        ))
    }

    render() {
        return (
            <StyledContainer>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <StyledtTd>Name</StyledtTd>
                        <StyledtTd>URL</StyledtTd>
                        <StyledtTd>Status</StyledtTd>
                    </tr>
                    </thead>
                    <tbody>
                    {this.tabRow()}
                    </tbody>
                </table>
            </StyledContainer>
        );
    }
}

Table.propTypes = {
    siteList: PropTypes.array
}
export default Table;
