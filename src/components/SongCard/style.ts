import styled from "styled-components";

export const SongCardWrap = styled.div`
  width: 140px;
  margin: 15px 0;
  .wrap-top {
    position: relative;
    &-image {
      height: 100%;
      width: 100%;
    }
    &-cover {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-position: 0 0;

      &-info {
        width: 100%;
        height: 27px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-position: 0 -537px;
        color: #ccc;

        &-icon {
          display: inline-block;
          margin-right: 5px;
          margin-left: 5px;
          width: 14px;
          height: 11px;
          background-position: 0 -23px;
        }
        &-count {
          font-size: 12px;
        }

        &-play {
          width: 16px;
          height: 17px;
          margin-right: 10px;
          background-position: 0 0;
          cursor: pointer;
        }
      }
    }
  }

  .wrap-bottom {
    font-size: 14px;
    color: #000;
    margin-top: 5px;
  }
`;
