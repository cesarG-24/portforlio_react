import styled from "styled-components";
import {useEffect, useState} from "react";

const SearchWrapper = styled.div`
  display: flex;
  gap: 10px;
  max-width: 652px;
  width: 652px;
  margin: 10px auto;
  @media (max-width: 768px) {
    max-width: none;
    width: 100%;
    justify-content: flex-start;
    padding: 0 21px  ;
  }

`

export const Search = (props) => {cesar

    const {onSearch} = props;

    const [value, setValue] = useState('');

    const searchHandle = (event) => {
        setValue(event.target.value)
    }

    useEffect(() => {
        console.log('Searching: ' + value);
        onSearch?.(value)
    }, [value])

    return (
        <SearchWrapper>
            <div> Search</div>
            <input type='text'
                   placeholder='Search'
                   value={value}
                   onChange={searchHandle}
            />
        </SearchWrapper>
    )

}