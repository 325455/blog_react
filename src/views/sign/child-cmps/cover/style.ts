import styled from "styled-components";

export const CoverWrapper = styled.div`   
  .cover{
    position: relative;
    img{
      width: 100%;
      height: 100%;
    }
    &::after{
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      background-color: rgba(37,106,242,.8);
    }
  }
`