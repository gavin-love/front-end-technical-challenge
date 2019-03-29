import styled from 'styled-components';
import homepageHeaderImg from '../../images/homepage-header.png';
import profileHeaderImg from '../../images/profile-header.png';

const HeaderWrapper = styled.div`
  padding: 23rem 0 0;
  height: 60vh;
  margin: ${props => (props.profile ? '0' : '0 0 4rem 0')};
  background-image: ${props =>
    props.profile ? `url(${profileHeaderImg})` : `url(${homepageHeaderImg})`};
  background-repeat: no-repeat;
  background-size: ${props => (props.profile ? '100% 100%' : '100% 120%')};
  background-position: center;
`;

export default HeaderWrapper;
