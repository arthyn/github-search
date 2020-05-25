import UserCard from 'components/UserCard'
import Avatar from 'components/Avatar'
import TextSkeleton from 'components/TextSkeleton'

const UserSearchPlaceholder = () => (
    <UserCard className="flex flex-wrap justify-between items-center">
        <Avatar className="mr-4 sm:mr-8" />
        <div className="flex-1 stack stack-sm">
            <TextSkeleton baseSize="md" />
            <TextSkeleton baseSize="md" />
        </div>
    </UserCard>
)

export default UserSearchPlaceholder