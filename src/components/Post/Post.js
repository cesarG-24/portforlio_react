import styled from "styled-components";

const PostStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 295px;
  height: 100%;
  background: #FFFFFF;
  gap: 24px;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    object-fit: fill;
    box-sizing: content-box;
    max-width: none;
    max-height: none;
  }
`
const TitleStyled = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 38px;
  color: #21243D;
  @media (max-width: 768px) {
    font-size: 22px;
  }
`
const SubtitleStyled = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: #21243D;
`
const DescriptionStyled = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #21243D;
`
export const Post = (props) => {
    const {title, subTitle, description, ...rest} = props;

    return (
        <PostStyled {...rest}>
            <TitleStyled> {title}</TitleStyled>
            <SubtitleStyled>{subTitle}</SubtitleStyled>
            <DescriptionStyled>{description}</DescriptionStyled>
        </PostStyled>)
}
