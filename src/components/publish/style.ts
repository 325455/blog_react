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
    flex-direction: column;
    .editor {
      width: 1088px;
      height: 660px;
      background-color: #fff;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      > .title {
        width: 1038px;
        height: 50px;
        border-bottom: 1px solid black;
        position: relative;
        display: flex;
        align-items: end;
        input {
          width: 100%;
          height: 80%;
          outline: none;
          border: none;
          padding-left: 10px;
          font-size: 18px;
          font-weight: 700;
        }
        .passageType {
          position: absolute;
          top: 50%;
          right: 50%;
          transform: translateY(-50%);
          #passageType {
            margin-left: 10px;
            outline: none;
          }
        }
        .btns {
          position: absolute;
          right: 17px;
          top: 13px;
          display: flex;
          button {
            color: black;
            border: 1px solid #3873f8;
            color: #3873f8;
            background-color: #fff;
            padding: 4px 10px;
            margin: 0 10px;
            cursor: pointer;
            &:last-of-type {
              color: #fff;
              background-color: #3873f8;
            }
          }
          .close {
            width: 30px;
            height: 30px;
            cursor: pointer;
            img {
              width: 100%;
              height: 100%;
            }
            position: relative;
            right: -20px;
            margin-left: 40px;
          }
        }
      }
      .passage {
        width: 1020px;
        height: 525px;
        display: flex;
        .paper {
          width: 494px;
          height: 525px;
          border: none;
          outline: none;
          padding: 28px;
          resize: none;
          font-family: "fangsong";
          border-right: 1px solid black;
        }
        .md_show {
          font-family: "shufa";
          width: 494px;
          height: 525px;
          overflow: auto;
          padding: 28px;
          pre {
            background-color: #f2f2f2;
            font-family: "Courier New", Courier, monospace;
          }
        }
      }
      .tip {
        width: 300px;
        height: 200px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
`;
