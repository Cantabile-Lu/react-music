import styled from "styled-components";
import recommendBg from "@/assets/image/wrap-bg.png";
export const RecommedWrap = styled.div`
  > .content {
    display: flex;
    border: 1px solid #d3d3d3;

    background: url(${recommendBg});
    //border-bottom: none;
    .content-left {
      box-sizing: border-box;
      width: 729px;
      padding: 20px 20px 40px;
    }
    .content-right {
      width: 250px;
    }
  }
`;
