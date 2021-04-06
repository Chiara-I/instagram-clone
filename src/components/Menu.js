import "../styles/menu.scss"
import { ReactComponent as Home } from "../images/home.svg"
import { ReactComponent as Inbox } from "../images/inbox.svg"
import { ReactComponent as Explore } from "../images/explore.svg"
import { ReactComponent as Activity } from "../images/activity.svg"
import ProfileIcon from "./ProfileIcon"
import image from "../images/profilePic.jpg"

function Menu() {
  return (
    <div className='menu'>
      <Home className='icon' />
      <Inbox className='icon' />
      <Explore className='icon' />
      <Activity className='icon' />
      <ProfileIcon iconSize='small' image={image} />
    </div>
  )
}

export default Menu
