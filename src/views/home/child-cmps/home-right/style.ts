import styled from "styled-components";

export const HomeRightWrapper = styled.div`
  width: 440px;
  flex-shrink: 0;
  font-size: 16px;
  position: sticky;
  top: 0;
  .publish {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    color: #fff;
    background-color: #3873f8;
    cursor: pointer;
    img {
      width: 20px;
      margin-right: 10px;
    }
  }
  .passageRaking {
    margin-top: 20px;
    border-top: 10px solid #3873f8;
    background-color: #f3f5f7;
    padding: 0 25px;
    padding-bottom: 5px;
    .head {
      display: flex;
      justify-content: space-between;
      margin: 25px 0 18px 0;
      h4 {
        font-size: 19px;
        color: #000;
        font-weight: 400;
      }
      .right {
        color: #8a919f;
        display: flex;
        align-items: center;
        cursor: pointer;
        img {
          width: 18px;
          margin-right: 5px;
        }
      }
    }
    .item {
      display: flex;
      margin-bottom: 18px;
      cursor: pointer;
      span {
        margin-right: 15px;
      }
    }
    .more {
      display: flex;
      align-items: center;
      justify-content: center;
      border-top: 1px solid #d9d9d9;
      height: 44px;
      color: #8a919f;
      img {
        margin-left: 6px;
      }
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
`;

export const FinePassageWrapper = styled.div`
  margin-top: 20px;
  border-top: 10px solid #3873f8;
  background-color: #f3f5f7;
  padding: 0 25px;
  padding-bottom: 5px;
  h4 {
    font-size: 19px;
    color: #000;
    font-weight: 400;
    margin: 25px 0 18px 0;
  }
  .item {
    display: flex;
    margin-top: 10px;
    cursor: pointer;
    .avatar {
      width: 44px;
      height: 48px;
      border-radius: 50%;
      flex-shrink: 0;
    }
    .passage {
      font-size: 13px;
      margin-left: 12px;
      border-bottom: 1px solid #8a919f;
      padding-bottom: 9px;
      line-height: 17px;
      .author {
        margin-top: 5px;
        font-size: 11px;
        color: #8a919f;
      }
    }
  }
`;

export const ContactMeWrapper = styled.div`
  margin-top: 20px;
  border-top: 10px solid #3873f8;
  background-color: #f3f5f7;
  padding: 0 25px;
  padding-bottom: 5px;
  h4 {
    font-size: 19px;
    color: #000;
    font-weight: 400;
    margin: 25px 0 18px 0;
  }
  .items {
    display: flex;
    justify-content: space-between;
    .qq,
    .weichat,
    .tiktok {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    img {
      width: 70px;
      height: 70px;
      margin: 10px 0;
    }
  }
`;
