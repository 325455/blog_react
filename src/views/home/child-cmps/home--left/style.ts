import styled from "styled-components";

export const HomeLeftWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  font-size: 16px;
  h3 {
    border-left: 5px solid #3873f8;
    margin: 25px 0;
    padding-left: 13px;
  }
  .dalao {
    font-size: 17px;
    .items {
      display: flex;
    }
  }
`;

export const ClassfyWrapper = styled.div`
  .classfy {
    width: 325px;
    height: 390px;
    box-sizing: border-box;
    padding-left: 15px;
    border-top: 10px solid #3873f8;
    background-color: #f3f5f7;
    h3 {
      margin: 14px 0;
      font-weight: 600;
    }
    .items {
      display: flex;
      flex-wrap: wrap;
      .item {
        position: relative;
        font-size: 14px;
        display: block;
        width: 130px;
        flex-shrink: 0;
        margin: 10px 0;
        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
        &:nth-child(2n + 1)::after {
          content: "|";
          position: absolute;
          right: 23px;
          top: 0;
          color: #dcdcdc;
        }
        &:nth-child(2n)::after {
          content: ">";
          position: absolute;
          right: 10px;
          top: 0;
          color: #dcdcdc;
        }
      }
      .active {
        color: #3873f8;
        text-decoration: underline;
      }
    }
  }
`;

export const BannerWrapper = styled.div`
  width: 692px;
  height: 390px;
  position: relative;
  margin-left: 15px;
  img {
    width: 692px;
    height: 390px;
  }
  .cover {
    height: 70px;
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    img {
      width: 80px;
      height: 45px;
      margin: 0 10px;
    }
  }
`;

export const LoaerWrapper = styled.div`
  font-size: 17px;
  .loaers {
    display: flex;
  }
`;

export const GreatePassages = styled.div``;
