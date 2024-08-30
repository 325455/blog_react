import styled from "styled-components";

export const CaresWrapper = styled.div`
  .main {
    width: 1000px;
    margin: 0 auto;
    font-family: Arial, sans-serif;
    color: #1e90ff;
    .tabs {
      font-family: Arial, sans-serif;
    }
    .header {
      font-family: Arial, sans-serif !important;
      margin-top: 40px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      border: 2px solid #ececec;
      padding: 20px;
      background-color: #f8f8f8;
      .avatar {
        width: 130px;
        img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: 2px solid #ececec;
        }
      }
      .info {
        .name {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 5px;
        }
        .rank {
          margin-bottom: 5px;
        }
        .fans_cares {
          font-size: 14px;
          span {
            margin-right: 10px;
          }
        }
      }
    }
    .content {
      border: 2px solid #ececec;
      padding: 20px;
      background-color: #f8f8f8;
      margin-top: 17px;
      font-size: 22px;
      .tabs {
        > div {
          cursor: pointer;
          > span {
            font-size: 19px;
          }
        }
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid #ececec;
        padding-bottom: 5px;
        margin-bottom: 10px;
        .active {
          color: #1677ff;
          text-decoration: underline;
        }
      }
      .items {
        .item {
          display: flex;
          align-items: center;
          padding-bottom: 5px;
          border-bottom: 1px solid #ececec;
          margin-bottom: 10px;
          position: relative;
          .cared_avatar {
            width: 100px;
            img {
              width: 70px;
              height: 70px;
              border-radius: 50%;
              border: 3px solid #ececec;
            }
          }
          .cared_info {
            .cared_name {
              font-family: "shufa";
              margin-bottom: 5px;
            }
            .rank {
              font-family: Arial, sans-serif;
              font-size: 14px;
            }
          }
          .has_cared {
            border: 2px solid #ececec;
            color: #8c8c8c;
            height: 24px;
            padding: 0 15px;
            font-size: 18px;
            position: absolute;
            right: 20px;
            top: 20px;
            border-radius: 12px;
            text-align: center;
            line-height: 24px;
          }
        }
      }
    }
  }
`;
