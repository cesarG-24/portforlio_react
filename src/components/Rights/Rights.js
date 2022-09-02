import styled from 'styled-components';

const RightsStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 0 148px;
  max-width: 1152px;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  margin: 2px auto 54px;
  @media (max-width: 768px) {
    padding: 0;
  }
`

export const Rights = (props) => {
    const {right = 'Copyright ©2020 All rights reserved'} = props;

    return (
        <RightsStyled>
            {right}
        </RightsStyled>
    )
}
