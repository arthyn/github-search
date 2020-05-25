const UserCard = ({ children, className }) => (
    <div className={`p-4 sm:px-8 sm:py-6 rounded-md shadow-md bg-white ${className || ''}`}>
        {children}
    </div>
)

export default UserCard