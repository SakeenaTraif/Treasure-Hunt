import { Logo, AuthButtonStyled, UsernameStyled, NavStyled } from "../styles";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FiLogOut } from "react-icons/fi";
import { signout } from "../store/actions/authActions";

// import darkLogo from "../dark-logo.png";

const NavBar = () => {
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();

  return (
    <NavStyled className="navbar navbar-expand">
      <Logo className="navbar-brand" to="/">
        <img
          src="https://www.beconwiz.com/wp-content/uploads/2020/04/BCW-ICON-Treasure-Hunt-297x300.png"
          alt="logo"
        />
      </Logo>
      <h4>Treasure Hunt!</h4>

      <div className="navbar-nav ml-auto">
        {user ? (
          <>
            <UsernameStyled>Hello, {user.username}! </UsernameStyled>
            <FiLogOut
              onClick={() => dispatch(signout())}
              color="yellow"
              size="1.5em"
            />
          </>
        ) : (
          <>
            <Link to="/signup">
              <AuthButtonStyled>Sign up</AuthButtonStyled>
            </Link>
            <Link to="/signin">
              <AuthButtonStyled>Sign in</AuthButtonStyled>
            </Link>
          </>
        )}
      </div>
    </NavStyled>
  );
};

export default NavBar;
