import styled from "styled-components";

export const HeaderRightWrapper = styled.div`
  display: flex;
  padding-right: 30px;
  align-items: center;
  .search {
    position: relative;
    input {
      width: 230px;
      height: 30px;
      border-radius: 3px;
      outline: none;
      border: none;
      color: #818181;
      padding-left: 20px;
      margin-right: 20px;
      position: relative;
      outline: none;
      box-shadow: 0px 1px 2px 1px rgba(129, 129, 129, 0.44);
    }
    .searchicon {
      position: absolute;
      top: 8px;
      right: 33px;
      cursor: pointer;
    }
  }

  .userInfo {
    margin: 0 15px 0 9px;
    position: relative;
    #avater {
      width: 40px;
      height: 40px;
    }
    img {
      border-radius: 50%;
    }
    .changeMessageBox {
      width: 165px;
      height: 70px;
      padding: 10px;
      position: absolute;
      top: 40px;
      left: -146px;
      z-index: 10;
      border: 1px solid #ccc;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0px 1px 2px 1px rgba(129, 129, 129, 0.44);
      .user {
        display: flex;
        img {
          width: 40px;
          height: 40px;
        }
        align-items: center;
        span {
          margin: 0 10px;
          font-size: 13px;
        }
      }
      button {
        position: relative;
        left: 75px;
        top: 8px;
        height: 20px;
        padding: 3px 10px;
        font-size: 10px;
      }
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    span:nth-child(1) {
      color: #ffba2d;
      font-size: 14px;
    }
    span:nth-child(2) {
      color: #000;
      font-size: 15px;
      margin-top: -4px;
    }
  }
  button {
    padding: 8px 13px;
    border: 1.5px solid blue;
    margin-left: 20px;
    border-radius: 8px;
    background-color: #e0f7fa;
    color: blue;
    cursor: pointer;
  }
`;
