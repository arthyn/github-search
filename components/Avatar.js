import { v4 as uuidv4 } from 'uuid'

const Avatar = ({ className, url }) => {
    const avatar = url || `https://avatars.dicebear.com/api/human/${uuidv4()}.svg?r=50&m=6&mood[]=happy`;

    return <img className={`w-16 sm:w-24 h-16 sm:h-24 rounded-full ${className}`} src={avatar} loading="lazy" alt=""/>
}

export default Avatar