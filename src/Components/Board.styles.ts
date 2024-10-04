
import styled from 'styled-components';

export const BoardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background-color: #f4f4f4;
  min-height: 100vh;
`;

export const ColumnContainer = styled.div`
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

export const ColumnTitle = styled.h2`
  font-size: 20px;
  text-align: center;
  color: #333;
`;

export const TaskList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const TaskItem = styled.li`
  background-color: #e6f7f2; 
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

