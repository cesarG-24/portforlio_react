import {useParams} from "react-router-dom";
import styled from "styled-components";

import {works} from "../../constants";
import {Work} from "../../components/Work";

const Title = styled.h1`
  max-width: 652px;
  width: 652px;
  margin: 0 auto;
  @media (max-width: 768px) {
    max-width: none;
    width: 100%;
    justify-content: flex-start;
    padding: 0 21px  ;
  }
`
const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 61px;
  max-width: 1152px;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  padding: 55px 235px 0;

  > div {
    flex-direction: column-reverse;
    border-bottom: 1px solid #E0E0E0;
    max-width: 682px;

    h1:first-child{
      max-width: 506px;
      width: 100%;
      font-style: normal;
      font-weight: 700;
      font-size: 34px;
      line-height: 50px;
      color: #21243D;

    }
    span:first-child{
      background-color: #FF7C7C;
    }
    span:last-child{
      color: #21243D;
    }
    img{
      max-width: none;
      width:100%;
      max-height: none;
      height: auto;
    }
    &:last-child {
      border: 0;
    }

    @media (max-width: 768px) {
      max-width: fit-content;
    }

  }

  @media (max-width: 768px) {
    padding: 2px;
  }

`


export default function WorkDetail() {
    const params = useParams();

    const work = works.find(({id}) => `${id}` === params.id)

    return work ? (
        <>
            <ContainerStyled>
                <Work
                    key = {work.title}
                    preview = {work.preview}
                    title = {work.title}
                    label1 = {work.label1}
                    label2 = {work.label2}
                    description = {work.description}
                />
            </ContainerStyled>
        </>
    ) : `Work with id="${params.id}" not found!`;
}
