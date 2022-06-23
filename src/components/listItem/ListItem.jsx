import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useState } from "react";

export default function ListItem({ adults, index, src, name, lan }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='listItem'
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={src} alt='' />
      {isHovered && (
        <>
          <div className='itemInfo'>
            <div className='icons'>
              <PlayArrow className='icon' />
              <Add className='icon' />
              <ThumbUpAltOutlined className='icon' />
              <ThumbDownOutlined className='icon' />
            </div>
            <div className='itemInfoTop'>
              <span className='limit'>{adults ? "+18" : "+14"}</span>
              <span className='limits'> Language: {lan}</span> <br />
            </div>
            <div className='desc'>{name}</div>
          </div>
        </>
      )}
    </div>
  );
}
