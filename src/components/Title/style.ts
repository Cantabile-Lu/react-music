import styled from "styled-components";

export const TitleWrap = styled.div`
  height: 33px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #c10d0c;
  background-position: -225px -156px;

  .wrap-left {
    display: flex;
    align-items: center;
    .wrap-left-title {
      padding-left: 34px;
      a {
        font-size: 20px;
      }
    }
    .wrap-left-keywords {
      display: flex;
      margin-left: 10px;
      align-items: center;
      color: #ccc;
      .keyword {
        position: relative;
        top: 2px;
        .keyword-text {
          margin: 0 15px;
          cursor: pointer;
        }
        &:last-child {
          .keyword-divider {
            display: none;
          }
        }
      }
    }
  }
  .wrap-right {
    display: flex;
    align-items: center;
    color: #ccc;
    .icon {
      width: 12px;
      height: 12px;
      margin: 0 0 0 4px;
      background-position: 0 -240px;
    }
  }
`;
