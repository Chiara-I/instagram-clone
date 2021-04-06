import "../styles/cardMenu.scss"
import { ReactComponent as Inbox } from "../images/inbox.svg"
import { ReactComponent as Comments } from "../images/comments.svg"
import { ReactComponent as Activity } from "../images/activity.svg"
import { ReactComponent as Bookmark } from "../images/save.svg"

function CardMenu() {
  return (
    <div className='cardMenu'>
      <div className='interactions'>
        <Activity className='icon' />
        <Comments className='icon' />
        <Inbox className='icon' />
      </div>
      <Bookmark className='icon' />
    </div>
  )
}

export default CardMenu
