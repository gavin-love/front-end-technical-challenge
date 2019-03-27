import styled from 'styled-components';

const H1 = styled.h1`
  font-size: ${props => (props.primaryHeader ? '4rem' : '2rem')};
  text-align: ${props => (props.primaryHeader ? 'center' : 'left')};
  color: ${props => (props.primaryHeader ? '#FAA353' : 'black')};
  margin: 0;
`;

export default H1;
