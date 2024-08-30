import styled from "styled-components";

export const AppHeaderWrapper = styled.div`
  box-shadow: 0px 1px 4px 2px rgba(129, 129, 129, 0.44);
  background-color: #f8f8f8;
  height: 60px;

  .tabs-extra-demo-button {
    margin-right: 16px;
  }

  .ant-row-rtl .tabs-extra-demo-button {
    margin-right: 0;
    margin-left: 16px;
  }

  :where(.css-dev-only-do-not-override-1uq9j6g).ant-tabs-top > .ant-tabs-nav {
    margin: 0;
  }
`;
