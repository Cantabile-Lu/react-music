import styled from "styled-components";

export const TitleWrap = styled.div`
  height: 33px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #c10d0c;
  background-position: -225px -154px;

  .wrap-left {
    display: flex;
    align-items: center;
    .wrap-left-title {
      padding-left: 34px;
      a {
        font-size: 20px;
        cursor: pointer;
      }
    }
    .wrap-left-keywords {
      display: flex;
      margin-left: 8px;
      align-items: center;
      font-size: 12px;
      color: #666;
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
    color: #666;
    font-size: 12px;
    .icon {
      width: 12px;
      height: 12px;
      margin: 0 0 0 4px;
      background-position: 0 -240px;
    }
  }
`;
