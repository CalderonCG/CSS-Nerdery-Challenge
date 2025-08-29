import { FaEllipsisH } from 'react-icons/fa'
import './RecentCard.scss'
import clsx from 'clsx';

type RecentCardProps={
    name: string;
    members: number;
    date: string;
    color: 'green' | 'red' | 'primary'
}

function RecentCard({name, members, date, color} : RecentCardProps) {
  return (
    <div className='recent_card'>
        <div className='recent_card_name'>
            <div className={clsx('recent_card_name_square',
                {
                    recent_red: color === 'red',
                    recent_green: color === 'green'
                }
            )}/>
            <p>{name}</p>
        </div>
        <p>{members} members</p>
        <p>{date}</p>

        <FaEllipsisH className='recent_card_icon'/>
    </div>
  )
}

export default RecentCard