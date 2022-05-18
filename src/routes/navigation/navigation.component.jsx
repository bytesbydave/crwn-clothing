import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { UserContext } from '../../contexts/user.context';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

function Navigation() {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser
            ? (
              <span
                className="nav-link"
                onClick={signOutUser}
                onKeyPress={signOutUser}
                role="link"
                tabIndex="0"
              >
                Sign Out
              </span>
            )
            : (
              <Link className="nav-link" to="/auth">
                Sign In
              </Link>
            )}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
