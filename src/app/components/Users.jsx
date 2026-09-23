const Users = async ({ user }) => {
    const users = await user();

    return (
        <div className='border border-amber-200 py-10 px-20 rounded-2xl'>
            <h2 className='text-4xl'>Users</h2>
            <ul>
                {users.map((currentUser) => (
                    <li key={currentUser.id}>{currentUser.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Users;