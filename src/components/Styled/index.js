import styled, {css} from 'styled-components'

export const Container = styled.div`
    margin-top: 70px;
    margin-bottom: 50px;
    color: #3c3b3b;
    font-size: 14px;
`;
export const TableContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(0,0,0,0.1);
`;
export const Table = styled.div`
    flex: auto 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    border-collapse: collapse;
    overflow: auto;
`;
export const Thead = styled.div`
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    user-select: none;
    min-width: 500px;
    background: rgba(0,0,0,0.03);
`;
export const Tr = styled.div`
    flex: 1 0 auto;
    display: flex;
    text-align: center;
    & > div:last-child {
      border-right: none;
    }
`;
export const Tbody = styled.div`
    flex: 99999 1 auto;
    display: flex;
    flex-direction: column;
    overflow: auto;
`;
export const TitleTd = styled.div`
    flex: 1 0 auto;
    flex-direction: column;
    padding: 5px 5px;
    min-width: 500px;
    border-top: 1px solid rgba(0,0,0,0.05);
    border-bottom: 1px solid rgba(0,0,0,0.05);
`;
export const Td = styled.div`
  flex: 1 0 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 5px 5px;
  line-height: normal;
  position: relative;
  border-right: 1px solid rgba(0,0,0,0.05);
  transition: box-shadow .3s cubic-bezier(.175,.885,.32,1.275);
  box-shadow: inset 0 0 0 0 transparent;
  ${props => props.head && css`
    width: 100px;
  `};
  ${props => props.last && css`
    border-right: 0;
  `}
  & > a {
    text-decoration: none;
  }
`;

export const StatusSuccess = styled.span`
    color: #227D51;
`;
export const StatusFailure = styled.span`
    color: #CB1B45;
`;
export const StatusPending = styled.span`
    color: #828282;
`;