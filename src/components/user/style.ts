import styled from "styled-components";

export const UserWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 20px;

  .header {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    text-align: center;
  }

  .profile {
    display: flex;
    background-color: white;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    img {
      border-radius: 50%;
      width: 120px;
      height: 120px;
      margin-right: 20px;
    }

    .profile-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;

      .username {
        margin: 0;
        font-size: 24px;
        font-weight: 700;
      }

      p {
        margin: 5px 0;
        color: #777;
      }
      .follow {
        margin-left: 14px;
        width: 43px;
        border-radius: 2px;
        background-color: #3873f8;
        color: #fff;
        padding: 3px 8px;
        font-size: 14px;
        position: relative;
        top: -2px;
        cursor: pointer;
      }
    }
  }

  .stats {
    display: flex;
    justify-content: space-between;
    background-color: white;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    div {
      text-align: center;
      flex: 1;
      border-right: 1px solid #f4f4f4;

      &:last-child {
        border-right: none;
      }

      h3 {
        margin: 0;
        font-size: 24px;
      }

      p {
        color: #777;
      }
    }
  }

  .recent-posts,
  .settings {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;

    h3 {
      margin-top: 0;
    }

    .post-item {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px solid #f4f4f4;

      &:last-child {
        border-bottom: none;
      }

      a {
        text-decoration: none;
        color: #007bff;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .settings {
    button {
      display: inline-block;
      padding: 10px 20px;
      color: white;
      background-color: #007bff;
      border: none;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
`;
