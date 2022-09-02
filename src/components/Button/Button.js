import styled from "styled-components";


const ButtonStyled = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  color: #FFFFFF;
  border: none;

  background: #FF6464;
  border-radius: 2px;
  width: 208px;
  height: 47px;
`


export const Button = (props) => {
    const {children} = props;
    return <ButtonStyled>{children}</ButtonStyled>
}
