import styled from "styled-components";

export const DiscWrap = styled.div`
  .wrap-container {
    height: 184px;
    background: #f5f5f5;
    border: 1px solid #d3d3d3;
    margin: 20px 0 10px;
    padding: 0 5px;
    display: flex;
    align-items: center;
    .arrow {
      width: 17px;
      height: 17px;
      cursor: pointer;
    }
    .arrow-left {
      background-position: -265px -77px;
      &:hover {
        background-position: -285px -77px;
      }
    }
    .arrow-right {
      background-position: -298px -77px;
      &:hover {
        background-position: -318px -77px;
      }
    }
    .banner {
      flex: 1;
      overflow: hidden;
      .album-container {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
    }
  }
`;
