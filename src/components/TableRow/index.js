import React, {Component} from 'react';
import PropTypes from 'prop-types'
import axios from 'axios';
import TableRowLink from '../../components/TableRow/link'
import * as Styled from '../Styled'


class TableRow extends Component {
    render() {
        return (
            <div>
                <Styled.Tr>
                    <Styled.TitleTd>
                        {this.props.obj.portal}
                    </Styled.TitleTd>
                </Styled.Tr>
                {this.props.obj.sites.map((object, i) => (
                    <Styled.Tr key={i}>
                        <Styled.Td>{object.name}</Styled.Td>
                        {object.details.map((subObject, j) => (
                            <TableRowLink obj={subObject} key={j}/>
                        ))}
                    </Styled.Tr>
                ))}
            </div>
        );
    }
};

TableRow.propTypes = {
    sites: PropTypes.array,
    status: PropTypes.string
};

export default TableRow;