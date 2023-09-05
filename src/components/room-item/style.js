import { styled } from 'styled-components'

const RoomItemWrapper = styled.li`
  .img-wrapper {
    width: 100%;
    height: 60%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .desc,
  .price {
    font-size: 14px;
    padding: 8px 0;
    color: ${(props) => props.theme.secondaryFontColor};
  }

  .rating {
    display: flex;
    align-items: center;
    gap: 5px;

    & > span {
      font-size: 12px;
      color: ${(props) => props.theme.secondaryFontColor};
    }
  }
`
export default RoomItemWrapper
