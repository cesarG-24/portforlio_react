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

    const user = 'https://s3-alpha-sig.figma.com/img/c316/adc4/65a80990af3a0075303343f0d615c92a?Expires=1662336000&Signature=HmlBYYumJ9qIXb5YIxSPBuTxeAUkLWcI1y46R9dwqc1KTU7MgRNxGrVLL1~On2GzJW20MwAs9HKnj9F3mC-9usLzYIsxQDhh6PrF~zpYKTKJL1wevWs-hFZkvtvp2xROzJh50uMS0wAv4CMnjvu3vEFS5rb~y92QYqrL3Pz7aMbEep4JmJWPqYr~I0NzItKYJX1CK4kztoxFb75aQPCzbUbSC9BGlJGB2nwpcpYSFsgUGq3fSwbNl748Tmw-seqptNRhhdd6ULp2qfyJExTJeve8A4wUp1W27lbFKTgpdS2xU~psVCPaZLslOP93tr9CYPeX0qSZ5O1o6aGUk3soGg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'

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
