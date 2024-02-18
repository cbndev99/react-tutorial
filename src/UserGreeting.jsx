import propTypes from "prop-types"

function UserGreeting(props) {
  //   if (props.isLoggedIn) {
  //     return <h2>Welcome {props.username}</h2>
  //   } else {
  //     return <h2>Please log in to continue</h2>
  //   }

  const welcomeMsg = <h2 className="welcome-msg">Welcome {props.username}</h2>
  const logoutMsg = <h2 className="logout-msg">Please log in to continue</h2>

  return props.isLoggedIn ? welcomeMsg : logoutMsg
}

UserGreeting.propTypes = {
  username: propTypes.string,
  isLoggedIn: propTypes.bool,
}

UserGreeting.defaultProps = {
  username: "Guest",
  isLoggedIn: false,
}

export default UserGreeting
