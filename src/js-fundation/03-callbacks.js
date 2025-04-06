const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Mike Doe' }
];

function getUserById( id, callbacks ) {
    const user = users.find( function( user ) {
        return user.id === id;
    });
    if (!user) {
        return callbacks(`User not found with id ${id}`);
    }
    return callbacks(null, user);
}

module.exports = {
    getUserById,
};