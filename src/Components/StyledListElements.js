import { List as ReactVirtualizedList } from 'react-virtualized';
import styled from 'styled-components';

export const VirtualList = styled(ReactVirtualizedList)`
  width: 15rem;
  height: 15rem;
  overflow: auto;
  font-size: 12px;
  border: 1px solid #CFD8DC;
  margin: 1rem 0;
`;

export const List = styled.div`
  width: 15rem;
  height: 15rem;
  overflow: auto;
  font-size: 12px;
  border: 1px solid #CFD8DC;
  margin: 1rem 0;
`;

export const ListWithBorderRadius = styled(List)`
  border-radius: 1rem;
  border-width: 4px;
  overflow: auto;
`;

export const ListRow = styled.div`
  padding: 0 0.5rem;
  width: 100%;
  height: 40px;
  line-height: 40px;
  transition: 0 all;
  white-space: pre;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #e9e9e9;
`;

export const ListRowActive = styled(ListRow)`
  background-color: #e9e9e9;
`;

export const RowNumber = styled.div`
  flex: 0 0 2rem;
  display: inline-block;
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  border-radius: 2rem;
  text-align: center;
  color: #fff;
`;

export const RowStack = styled.div`
  flex: 1 0 5.25rem;
  margin: 0 0.5rem;
  font-size: 20px;
`;

export const RowName = styled.div`
  font-size: .8rem;
  line-height: .8rem;
  font-weight: bold;
`;

export const RowSummary = styled.div`
  font-size: 0.6rem;
  line-height: 0.6rem;
  margin-top: 0.25rem;
`;

export const RowStar = styled.div`
  flex: 0 0 auto;
  font-size: 1rem !important;
  color: #FF502F !important;
`;

export const ListScrolling = styled.div`
  font-style: italic;
  opacity: 0.5;
`;
