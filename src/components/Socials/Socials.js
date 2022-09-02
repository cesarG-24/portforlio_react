import styled from "styled-components";


const ContainerStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 0 148px;
  max-width: 1152px;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  margin: 134px auto 0;
  @media (max-width: 768px) {
    margin: 150px auto 26px;
    padding: 0;
  }
`


export const Socials = (props) => {
    const {children} = props;

    return (
        <ContainerStyled>
            {children}
        </ContainerStyled>
    )
}
