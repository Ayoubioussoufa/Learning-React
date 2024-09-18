import PropTypes from 'prop-types';

function UserGreeting(props) {
  const welcome = <h2 className="test">Welcome {props.userName}</h2>;
  const login = <h2>Please log in to continue</h2>;

  return props.isLoggedIn ? welcome : login;
}

UserGreeting.prototypes = {
  isLoggedIn: PropTypes.bool,
  userName: PropTypes.string,
}

UserGreeting.defaultProps = {
  isLoggedIn: false,
  userName: 'Guest',
}

export default UserGreeting;
