import styled from "styled-components";
import spriteIcon from "@/assets/image/sprite_icon.png";

export const PlayerToolsWrap = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 53px;
  background-position: 0 0;
  background-repeat: repeat;
  transition: bottom linear 100ms;
  .player-tools-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 47px;
  }
`;

export const ActionWrap = styled.div`
  display: flex;
  align-items: center;
  width: 108px;
  justify-content: space-between;
  .icon {
    cursor: pointer;
  }
  .action-prev,
  .action-next {
    width: 28px;
    height: 28px;
  }
  .action-prev {
    background-position: -2px -131px;
    &:hover {
      background-position: -32px -131px;
    }
  }
  .action-play {
    width: 36px;
    height: 36px;
    background-position: 0 -205px;
    //   props.isPlay ? "-2px -166px" : "-2px -205px"};
    // &:hover {
    //     props.isPlay ? "-42px -166px" : "-42px -205px"};
    // }
  }
  .action-next {
    background-position: -82px -131px;
    &:hover {
      background-position: -112px -131px;
    }
  }
`;

export const ProgressWrap = styled.div`
  display: flex;
  align-items: center;
  //width: 642px;
  margin-left: 20px;
  flex: 1;
  .image {
    width: 34px;
    height: 35px;
    border-radius: 5px;
  }
  .container {
    color: #a1a1a1;
    margin-left: 10px;
    &-song {
      position: relative;
      top: 8px;
      left: 8px;
      color: #e1e1e1;
      &-singer {
        color: #a1a1a1;
        margin-left: 10px;
      }
    }
    &-progress {
      display: flex;
      align-items: center;
      .ant-slider {
        position: relative;
        width: 493px;
        top: -3px;
        margin-right: 10px;
        //.ant-slider-rail {
        //  height: 9px;
        //}
        //.ant-slider-track {
        //  height: 9px;
        //}
        .ant-slider-handle {
          height: 24px;
          width: 24px;
          border: none;
          margin-top: -7px;
          background: url(${spriteIcon}) 0 -250px;
          &::before {
            display: none;
          }
          &::after {
            display: none;
          }
        }
      }
    }
  }
`;

export const ToolsWrap = styled.div`
  width: 300px;
`;
