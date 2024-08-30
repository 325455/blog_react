import styled from "styled-components";

export const DetailWrapper = styled.div`
  .container {
    font-family: Arial, sans-serif;
    background-color: #e0eafc; /* 柔和的淡蓝色背景 */
    background: linear-gradient(to right, #e0eafc, #cfdef3); /* 淡蓝色渐变 */
    color: #333;
    margin: 0;
    padding: 0;
    min-height: 100vh; /* 占满整个视窗 */
    display: flex;
    justify-content: center;
    align-items: center;

    .contentContainer {
      max-width: 800px;
      background-color: white;
      border-radius: 10px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
      padding: 30px;
      margin: 40px 20px;

      .articleInfo {
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        padding: 20px;
        border-radius: 10px;
        background-color: #f9f9f9;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border: 1px solid #ddd;

        img {
          border-radius: 50%;
          width: 70px;
          height: 70px;
          margin-right: 20px;
          border: 2px solid #ddd;
          transition: transform 0.3s ease, border-color 0.3s ease;

          &:hover {
            transform: scale(1.1);
            border-color: #3498db;
          }
        }

        div {
          p {
            margin: 0;
            font-family: "Arial", sans-serif;

            strong {
              display: inline;
              color: #34495e;
            }
          }

          p:first-child {
            font-size: 1.3em;
            font-weight: 600;
            color: #2c3e50;
          }

          p:last-child {
            color: #95a5a6;
            font-size: 0.95em;
          }
        }
      }

      .articleContent {
        font-family: "Helvetica", "Arial", sans-serif;
        line-height: 1.7;
        color: #444;

        h1,
        h2,
        h3,
        h4 {
          color: #2c3e50;
          margin-top: 1.5em;
          margin-bottom: 0.5em;
          font-weight: bold;
        }

        p {
          margin-bottom: 1em;
        }

        strong {
          color: #e74c3c;
        }

        img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
        }

        pre {
          background: #f4f4f4;
          padding: 1em;
          border-radius: 5px;
          overflow-x: auto;

          code {
            background: #f4f4f4;
            padding: 0.2em 0.4em;
            border-radius: 3px;
            font-family: "Courier New", Courier, monospace;
          }
        }

        blockquote {
          border-left: 5px solid #e74c3c;
          padding-left: 10px;
          margin-left: 0;
          color: #666;
          font-style: italic;
          background: #f9f9f9;
          padding: 1em;
          border-radius: 5px;
        }
      }

      .articleInteraction {
        display: flex;
      }

      .likeButton,
      .publishButton {
        background-color: #3498db;
        color: white;
        border: none;
        margin-left: 8px;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
          background-color: #2980b9;
        }
      }

      .articleComments {
        .title {
          display: flex;
          margin: 8px 0;
        }
        > h3 {
        }
      }
    }
  }
`;
