
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const User = ({ user }) => {
    const {id, name, email} = user;

    const navigate = useNavigate();

    const handleShowDetails = ()=>{
        navigate(`/users/${id}`);
    }
    return (
        <div className='border-2 rounded-2xl p-4 text-xl font-semibold'>
            <h2>{id}</h2>
            <h2>{name}</h2>
            <h2>{email}</h2>
            <Link to={`/users/${id}`}><button className='btn'>Show Details</button></Link>
            <button onClick={handleShowDetails} className='btn'>Navigate Show Details</button>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object
};

export default User;