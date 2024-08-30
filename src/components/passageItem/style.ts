import styled from "styled-components";

export const PassageItemWrapper = styled.div`
  width: 1012px;
  background-color: #fafafa;
  padding-left: 18px;
  box-shadow: 0px 1px 2px 1px rgba(129, 129, 129, 0.44);
  margin-bottom: 10px;
  cursor: pointer;
  .passageTitle {
    border: none !important;
    font-size: 16px;
    padding: 0;
    margin: 0;
    padding: 20px 0;
  }
  > p {
    font-size: 14px;
    height: 32px;
    margin-bottom: 20px;
    padding-right: 20px;
  }
  > .other {
    display: flex;
    width: 100%;
    align-items: center;
    font-size: 14px;
    padding-bottom: 14px;
    & > :nth-child(n) {
      margin-right: 16px;
    }
    .recommed {
      color: #e96357;
      padding: 2px 14px;
      border: 1px solid #e96357;
      text-align: center;
    }
    .classfy {
      font-weight: 700;
    }
    .avater {
      width: 25px;
      height: 25px;
      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
    }
    .counter {
      font-size: 12px;
      color: #8a919f;
      display: flex;
      align-items: center;
      img {
        width: 20px;
        height: 20px;
        position: relative;
        top: -1px;
        right: 3px;
      }
    }
    > .time {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      font-size: 12px;
      color: #8a919f;
    }
  }
`;
