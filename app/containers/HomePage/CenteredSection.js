import styled from 'styled-components';
import Section from './Section';

const CenteredSection = styled(Section)`
  display: ${props => (props.businessCard ? 'flex' : 'block')};
  justify-content: ${props => (props.businessCard ? 'center' : 'flex-start')};
  text-align: center;
`;

export default CenteredSection;
