
import PropTypes from 'prop-types';

const User = ({ user }) => {
    const {id, name, email} = user;
    return (
        <div className='border-2 rounded-2xl p-4'>
            <h2>{id}</h2>
            <h2>{name}</h2>
            <h2>{email}</h2>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object
};

export default User;