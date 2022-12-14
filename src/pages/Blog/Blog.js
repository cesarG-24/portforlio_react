import styled from "styled-components";

import {Post} from "../../components/Post/Post";
import { Search } from "../../components/Search";
import {useMemo, useState} from "react";


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
const Posts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 61px;
  max-width: 1152px;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  padding: 55px 235px 0;

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

const posts = [
    {
        title: 'UI Interactions of the week 1',
        subTitle: '12 Feb 2020 | Express, Handlebars',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.' +
            'Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'

    },
    {
        title: 'UI Interactions of the week 2',
        subTitle: '12 Feb 2020 | Express, Handlebars',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.' +
            'Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'

    },
    {
        title: 'UI Interactions of the week 3',
        subTitle: '12 Feb 2020 | Express, Handlebars',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.' +
            'Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'

    },
    {
        title: 'UI Interactions of the week 4',
        subTitle: '12 Feb 2020 | Express, Handlebars',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.' +
            'Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'

    },
]

export default function Blog() {
   const [search , setSearch] = useState('')


    const filteredPosts = useMemo( () =>

            posts.filter((post) => {
            return post.title.toLowerCase().includes(search.toLowerCase()) || post.description.includes(search)
            })
        ,[search,posts])

    return (
        <div>
            <Title>Blog</Title>
            <Search onSearch={setSearch}/>
            <Posts>
                {filteredPosts.map(post => (
                    <Post
                        key = {post.title}
                        title = {post.title}
                        subTitle = {post.subTitle}
                        description = {post.description}
                    />
                ))}
            </Posts>

        </div>
    );
}
