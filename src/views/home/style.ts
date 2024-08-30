import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px 12px;
  align-items: flex-start;
  .left {
    overflow-x: hidden;
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera */
    }
  }
`;
