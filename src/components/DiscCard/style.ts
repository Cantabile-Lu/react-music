import styled from "styled-components";

export const DiscCardWrap = styled.div`
  .disc-wrap-top {
    position: relative;
    width: 118px;
    height: 100px;
    overflow: hidden;
    margin-top: 15px;
    img {
      width: 100px;
      height: 100px;
    }
    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 -570px;
    }
  }
  .disc-wrap-bottom {
    font-size: 14px;
    width: 100px;
    .name {
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .artist {
      color: #666;
    }
  }
`;
