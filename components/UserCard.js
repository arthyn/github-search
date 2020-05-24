const UserCard = ({ children, className }) => (
    <div className={`px-8 py-6 rounded-md shadow-md bg-white ${className || ''}`}>
        {children}
    </div>
)

export default UserCard