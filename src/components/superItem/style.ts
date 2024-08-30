import styled from "styled-components";

export const SuperItemWrapper = styled.div`
  display: flex;
  width: 329px;
  border: 1px solid #ccc;
  box-shadow: 0px 1px 2px 1px rgba(129, 129, 129, 0.44);
  margin-right: 20px;
  font-size: 14px;
  position: relative;
  padding: 25px 0;
  .avater {
    width: 100px;
    display: flex;
    align-items: center;
    padding-left: 16px;
    img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
    }
  }
  .details {
    display: flex;
    flex-direction: column;
    .name,
    .job {
      margin-bottom: 16px;
    }
    .care {
      margin-left: 14px;
      background-color: #3873f8;
      color: #fff;
      padding: 3px 8px;
      font-size: 12px;
      cursor: pointer;
    }
    .access {
      > span:nth-child(1) {
        margin-right: 25px;
      }
      .num {
        font-size: 12px;
        font-weight: 700;
      }
    }
  }
  .rankicon {
    position: absolute;
    top: 0;
    right: 0px;
    width: 60px;
    height: auto;
  }
`;
