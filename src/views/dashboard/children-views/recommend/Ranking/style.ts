import styled from "styled-components";

import recommendBackground from "@/assets/image/recommend-top-bg.png";
export const RankingWrap = styled.div`
  .container {
    height: 472px;
    background: url(${recommendBackground});
    margin-top: 20px;
    display: flex;
  }
`;
export const RankingItemWrap = styled.div`
  font-size: 12px;
  width: 230px;
  &:last-child {
    width: 228px;
  }
  .wrap-top {
    display: flex;
    margin: 20px 0 20px 20px;
    &-image {
      width: 80px;
      height: 80px;
      position: relative;
    }
    &-cover {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background-position: -145px -57px;
    }
    &-info {
      padding: 6px 0 0 10px;
      &-name {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        font-weight: 600;
        :hover {
          text-decoration: underline;
        }
      }
      &-button {
        display: flex;
        align-items: center;
        margin-top: 10px;
        div {
          width: 22px;
          height: 22px;
        }
        &__play {
          margin-right: 10px;
          background-position: -267px -205px;
          &:hover {
            background-position: -267px -235px;
          }
        }
        &__fover {
          background-position: -300px -205px;
          &:hover {
            background-position: -300px -235px;
          }
        }
      }
    }
  }

  .wrap-center {
    &-cell {
      width: 100%;
      height: 32px;
      display: flex;
      align-items: center;
      padding-left: 25px;
      &__index {
        font-size: 16px;
      }
      &:nth-child(-n + 3) {
        color: #c10d0c;
      }
      &__info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 17px;
        width: 180px;
        .info-title {
          margin-left: 20px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          flex: 1;
        }
        .info-icons {
          display: none;
        }
        &:hover {
          .info-icons {
            display: flex;
            align-items: center;
            .icon {
              width: 17px;
              height: 17px;
              margin-right: 8px;
              cursor: pointer;
            }
            .icon-play {
              background-position: -267px -268px;
              &:hover {
                background-position: -267px -288px;
              }
            }
            .icon-add {
              background-position: 21px -699px;
              &:hover {
                background-position: -21px -699px;
              }
            }
            .icon-favor {
              background-position: -297px -269px;
              &:hover {
                background-position: -297px -289px;
              }
            }
          }
        }
      }
    }
  }
  .wrap-bottom {
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 20px;
  }
`;
