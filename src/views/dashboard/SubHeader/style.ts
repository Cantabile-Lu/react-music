import styled from "styled-components";

export const SubHeaderWrap = styled.div`
  height: 30px;
  background-color: #c20c0c;
  // background-color: ${(props) => props.theme.color.primary};
  .sub-header-container {
    padding-left: 180px;
    display: flex;
    position: relative;
    top: -4px;
    &-header {
      a {
        display: block;
        margin: 7px 17px 0;
        padding: 0 13px;
        border-radius: 20px;
        line-height: 21px;
        color: #fff;
      }
      a:hover {
        background: #9b0909;
      }
      .active {
        background: #9b0909;
      }
    }
  }
`;
