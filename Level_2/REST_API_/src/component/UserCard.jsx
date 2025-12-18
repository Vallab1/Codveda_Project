import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow text-center">
            <img
                src={user.avatar_url}
                alt={user.login}
                className="w-24 h-24 rounded-full mx-auto"
            />
            <h3 className="mt-4 font-semibold">{user.login}</h3>
            <Link to={`/user/${user.login}`} className="text-blue-500 mt-2 block">
                View Details
            </Link>
        </div>
    );
};

export default UserCard;
