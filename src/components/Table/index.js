import React, {Component} from 'react';
import PropTypes from 'prop-types'
import TableRow from '../../components/TableRow'
import * as Styled from '../Styled'

class Table extends Component {

    tabRow() {
        return this.props.siteList.map((object, i) => (
            <TableRow obj={object} key={i}/>
        ))
    }

    render() {
        return (
            <Styled.Container>
                <Styled.TableContainer>
                    <Styled.Table>
                        <Styled.Thead>
                            <Styled.Tr>
                                <Styled.Td head>Brand</Styled.Td>
                                <Styled.Td head>DT</Styled.Td>
                                <Styled.Td head>DIT</Styled.Td>
                                <Styled.Td head>PreProd</Styled.Td>
                                <Styled.Td head last>Prod</Styled.Td>
                            </Styled.Tr>
                        </Styled.Thead>
                        <Styled.Tbody>
                            {this.tabRow()}
                        </Styled.Tbody>
                    </Styled.Table>
                </Styled.TableContainer>
            </Styled.Container>
        );
    }
}

Table.propTypes = {
    siteList: PropTypes.array
}
export default Table;
