import styled from 'styled-components';
import { darken } from 'polished'
import PropTypes from 'prop-types';

const Button = styled.button`
    padding: 5px;
    border-radius: 3px;
    color: ${props => props.color};
    background-color: ${props => props.background};
    border: 0;
    cursor: pointer;
    font-size: ${props => props.fontSize};
    
    &:hover {
        background-color: ${props => darken(.05, props.background)};
        border-color: ${props => darken(.05, props.background)};
    }
    
    &:active {
        background-color: ${props => darken(.1, props.background)};
        border-color: ${props => darken(.1, props.background)};
    }
    
    &:active,
    &:focus {
        outline: none;
        border-color: transparent;
    }
`;

Button.propTypes = {
    background: PropTypes.string,
    color: PropTypes.string
};

Button.defaultProps = {
    background: '#1ab394',
    color: '#ffffff'
};

export default Button;
