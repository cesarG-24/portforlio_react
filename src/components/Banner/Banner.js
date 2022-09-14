import styled from "styled-components";

import {Button} from "../Button";

const BannerStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 106px;
  max-width: 1152px;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  padding: 70px 148px;
  @media (max-width: 768px) {
  flex-direction: column-reverse;
  }
`
const LeftStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (max-width: 768px) {
    text-align: center;
    align-content: center;
    align-items: center;
    justify-content: center;
  }
`
const TitleStyled = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 60px;
  color: #21243D;
`
const DescStyled = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #21243D;
`
const RightStyled = styled.div`
  display: flex;
  flex-direction: column;
  
`
const UserImgStyled = styled.img`
  border-radius: 9999px;
  width: 243px;
  height: 243px;
  object-fit: cover;
  object-position: center;

  box-shadow: -5px 13px 0px 1px #edf7fa;
`


export const Banner = (props) => {
    const {title, description} = props;

    const user = 'https://s3-alpha-sig.figma.com/img/c316/adc4/65a80990af3a0075303343f0d615c92a?Expires=1664150400&Signature=anxqoJR~2wIcOMpHMYYWqkjZvSGAC~NW4ElVl3slInzDuDVKdS~jI3HgIFweLGy55aAUOykMbrFJkf2YvCMh1DyCbBgGI87jSoz1OOIUhUdPTQB3fXNSt5bVJjXIn1dC91vNrH2cQsfwc1ZhNZjWZ5YDC30rQAnD~d9-P41B3~CxJIi3uvYa1DjFL1uY1vXxuZcWASNqfkdJ8uIMNtlzoHWIQ0o5YgnwEopGg7hoJyBDQ1XSpt5e~uy4Kprk8BwTCZU~k5Pf6gH7eZizKjM-w8HbNio981RekwlLgk4fW3i5z-BRf-7pvrk~8MbPANksoBeQ7e871x~PbuXbPPjktg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'

    return (
        <BannerStyled>
            <LeftStyled>
                <TitleStyled> {title}</TitleStyled>
                <DescStyled>{description}</DescStyled>
                <Button>
                    Download Resume
                </Button>
            </LeftStyled>

            <RightStyled>
                <div>
                    <UserImgStyled src = {user}/>
                </div>
            </RightStyled>
        </BannerStyled>
    )
}
