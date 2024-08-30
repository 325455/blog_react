import styled from "styled-components";

export const CoverWrapper = styled.div`
  .cover {
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    .form {
      padding: 30px;
      width: 480px;
      height: 488px;
      background-color: #fff;
      border-radius: 20px;
      /* background-color: #000; */
      .title {
        font-size: 22px;
        font-weight: 700;
        color: rgba(0, 0, 0, 0.7);
      }
      .avater {
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        .fileInput {
          width: 90px;
          height: 90px;
          position: absolute;
          overflow: hidden;
          z-index: 10;
          border-radius: 50%;
          opacity: 0;
          cursor: pointer;
        }
        img {
          width: 90px;
          height: 90px;
          border-radius: 50%;
        }
        .mask {
          position: absolute;
          border-radius: 50%;
          width: 90px;
          height: 90px;
          background-color: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 45px;
            height: 45px;
          }
        }
      }

      .name,
      .rank {
        padding-top: 20px;
        width: 400px;
        input {
          width: 100%;
          height: 25px;
          border-radius: 6px;
          outline: none;
          border: 1px solid black;
          padding-left: 10px;
        }
        margin: 0 auto;
      }
      .btns {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 40px;
      }
    }
  }
`;
