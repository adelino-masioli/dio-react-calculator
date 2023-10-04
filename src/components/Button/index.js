import { ButtonContainer } from './styles';

const Button = ({label, border=true,  onClick}) => {
    return (
      <ButtonContainer $border={border} onClick={onClick} type="button">
       {label}
      </ButtonContainer>
    );
  }
  
  export default Button;