const UserSearchPlaceholder = () => (
    <UserCard className="flex flex-wrap justify-between items-center">
        <Avatar/>
        <div className="flex-1 stack stack-sm">
            <TextSkeleton baseSize="md" />
            <TextSkeleton baseSize="md" />
        </div>;
    </UserCard>
)

export default UserSearchPlaceholder