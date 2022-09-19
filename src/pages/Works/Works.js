import styled from "styled-components";
import {useNavigate} from "react-router-dom";

import {works} from "../../constants";

import {Work} from "../../components/Work";
import {Search} from "../../components/Search";
import {useEffect, useMemo, useState} from "react";

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
const WorkStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 61px;
  max-width: 1152px;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  padding: 55px 235px 0;
  cursor: pointer;

  > div {
    border-bottom: 1px solid #E0E0E0;
    max-width: 682px;

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

export default function Works() {
    const navigate = useNavigate();
    const handleClick = (work) => {
        navigate(`/work/${work.id}`);
    }

    const [search, setSearch] = useState('');

    const filterWorks = useMemo(() => {

        return works.filter((post) => {
            return post.title.toLowerCase().includes(search) || post.description.toLowerCase().includes(search)
        })

    }, [works, search])


    useEffect(() => {

        console.log('match: ' + filterWorks.length);

    }, [filterWorks])


    return (
        <>
            <Title>Works</Title>
            <Search onSearch={setSearch}/>

            <WorkStyled>
                {filterWorks.map(work => (
                    <Work
                        onClick={() => handleClick(work)}
                        key={work.title}
                        preview={work.preview}
                        title={work.title}
                        label1={work.label1}
                        label2={work.label2}
                        description={work.description}
                    />
                ))}
            </WorkStyled>
        </>
    );
}
