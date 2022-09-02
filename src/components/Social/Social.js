import styled from "styled-components";

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1152px;
  gap: 24px;
  padding: 20px;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 10px;
    max-width: fit-content;
    
  }
`
const ImgStyled = styled.img`
  max-width: 30px;
  width: 30px;
  max-height: 30px;
  height: 30px;
  object-fit: cover;
  object-position: center;
`


export const Social = (props) => {
    const {icon} = props;
    return (
        <ContainerStyled>
            <ImgStyled src = {icon} alt = ''/>
        </ContainerStyled>
    )
}
