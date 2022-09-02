import styled from "styled-components";

const ContainerStyled = styled.div`
  background: #EDF7FA;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  gap: 30px;
`
const MenuStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1152px;
  width: 100%;
  margin: 0 auto;
  padding: 0 148px;
  @media (max-width: 768px) {
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 0;
    max-width: none;
  }
`
const TitleStyled = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 60px;
  color: #21243D;
`
const LinkStyled = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #00A8CC;
  @media (max-width: 768px) {
    display: none;
  }
`
const ContentStyled = styled.div`
  max-width: 1152px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 148px;
  gap: 20px;
  @media (max-width: 768px) {
    padding: 0;
  }
`


export const Posts = (props) => {
    const {children, menuTitle, menuLink} = props;
    return (
        <ContainerStyled>
            <MenuStyled>
                <TitleStyled>{menuTitle}</TitleStyled>
                <LinkStyled>{menuLink}</LinkStyled>
            </MenuStyled>
            <ContentStyled>
                {children}
            </ContentStyled>
        </ContainerStyled>
    )
}
