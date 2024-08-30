import styled from "styled-components";
import bg from "@/assets/images/login-regist-bg.png";

export const LoginWrapper = styled.div<{ transx: number }>`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-image: url(${bg});
    background-size: cover;
    background-position: center;

    .sign {
      width: 1235px;
      height: 541px;
      border-radius: 29px;
      overflow: hidden;

      .wrapper {
        display: flex;
        transform: translatex(${(props) => props.transx}px);
        transition: transform 0.3s ease-in-out;

        .item {
          width: 617px;
          height: 541px;
          flex-shrink: 0;
        }

        .cover {
          position: relative;

          img {
            width: 100%;
            height: 100%;
          }

          &::after {
            content: "";
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            background-color: rgba(37, 106, 242, 0.8);
          }
        }
      }
    }
  }
`;
