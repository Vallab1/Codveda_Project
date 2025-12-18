import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../component/Loader";

const UserDetails = () => {
    const { username } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`https://api.github.com/users/${username}`)
            .then((res) => setUser(res.data))
            .finally(() => setLoading(false));
    }, [username]);

    if (loading) return <Loader />;

    return (
        <div className="p-6 text-center">
            <img
                src={user.avatar_url}
                alt={user.login}
                className="w-32 h-32 rounded-full mx-auto"
            />
            <h2 className="text-2xl font-bold mt-4">{user.login}</h2>
            <p className="mt-2">Followers: {user.followers}</p>
            <p>Repositories: {user.public_repos}</p>
        </div>
    );
};

export default UserDetails;

