import styled from "styled-components";

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  padding: 0 148px;
`
const TitleStyled = styled.div`
  display: flex;
  //flex-direction: row;
  align-items: center;
  max-width: 1152px;
  width: 100%;
  margin: 0 auto;

  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 60px;
  color: #21243D;
  padding: 0 148px;
  @media (max-width: 768px) {
    justify-content: center;
    font-size: 16px;
    padding: 0;
  }
`
const ContentStyled = styled.div`
  max-width: 1152px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-Content: space-between;
  flex-wrap: wrap;
  padding: 0 148px;
  gap: 20px;
  @media (max-width: 768px) {
    font-size: 22px;
    padding: 0;
  }
`


export const Works = (props) => {
    const {title, children} = props;

    return (
        <ContainerStyled>
            <TitleStyled>{title}</TitleStyled>

            <ContentStyled>
                {children}
            </ContentStyled>
        </ContainerStyled>
    )
}
