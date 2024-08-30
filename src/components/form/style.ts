import styled from "styled-components";

export const FormWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  h3 {
    font-size: 16px;
    font-weight: 400;
    margin-top: 10px;
    span {
      color: #477ce9;
    }
  }
  .inputItem {
    display: flex;
    justify-content: right;
    align-items: center;
    position: relative;
    font-size: 12px;
    color: #606060;
    width: 458px;
    .icon1 {
      margin: 0 12px 0 3px;
      width: 18px;
      height: 18px;
      position: relative;
      top: -2px;
    }
    .other {
      width: 350px;
      display: flex;
      align-items: center;
      input {
        box-sizing: border-box;
        flex: 1;
        height: 34px;
        color: #9c9c9c;
        border-radius: 10px;
        background-color: #ebebeb;
        border: none;
        outline: none;
        padding-left: 20px;
      }
      .icon2 {
        width: 20px;
        height: 20px;
        position: absolute;
        right: 22px;
        top: 7px;
        cursor: pointer;
      }
      .identy {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 150px;
        color: black;
        height: 34px;
        border-radius: 18px;
        margin-left: 20px;
        cursor: pointer;
      }
    }
  }
  button {
    width: 181px;
    height: 34px;
    font-size: 15px;
    text-align: center;
    line-height: 34px;
    border: none;
    background-color: #3873f8;
    color: #fff;
    border-radius: 10px;
    cursor: pointer;
  }
  .text {
    font-size: 14px;
    span {
      color: #3873f8;
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;
