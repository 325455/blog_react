import styled from "styled-components";

export const SearchWrapper = styled.div`
  .container {
    max-width: 900px;
    margin: 30px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    padding-bottom: 30px;

    .results-nav {
      display: flex;
      justify-content: space-between;
      padding: 15px 0;
      background-color: #e7e7e7;
      border-bottom: 2px solid #ddd;
      margin-bottom: 25px;
      border-radius: 10px;

      button {
        background-color: #4a90e2;
        color: white;
        border: none;
        padding: 12px 25px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 18px;
        flex: 1;
        margin: 0 10px;
        transition: background-color 0.3s ease;

        &:hover {
          background-color: #357abd;
        }
      }
    }

    #user-results {
      padding: 25px;
      background-color: white;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

      h2 {
        margin-bottom: 15px;
        color: #4a90e2;
        font-size: 24px;
        text-align: center;
      }

      .result {
        margin-bottom: 20px;
        padding: 15px;
        background-color: #fafafa;
        border-radius: 10px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        gap: 15px;

        h3 {
          margin-bottom: 5px;
          color: #333;
          font-size: 20px;
        }

        p {
          font-size: 16px;
          color: #666;
        }

        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #4a90e2;
        }
      }
    }
    #article-results {
      padding: 25px;
      background-color: white;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

      h2 {
        margin-bottom: 15px;
        color: #4a90e2;
        font-size: 24px;
        text-align: center;
      }

      .result {
        margin-bottom: 20px;
        padding: 20px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;

        &:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
        }

        h3 {
          margin-bottom: 10px;
          color: #333;
          font-size: 22px;
          font-weight: bold;
        }

        p {
          font-size: 16px;
          color: #555;
          line-height: 1.6;
          margin: 0;
        }
      }
    }
  }
`;
