// TaskForm.styles.ts
import styled from 'styled-components';

export const FormContainer = styled.form`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-family: 'Times New Roman', Times, serif;
  font-size: 16px;

`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 10px ;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-family: 'Times New Roman', Times, serif;
  font-size: 16px;
  resize: vertical;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-family: 'Times New Roman', Times, serif;
  font-size: 16px;

`;

export const Button = styled.button`
  padding: 10px 15px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-family: 'Times New Roman', Times, serif;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;
