import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,

});

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = { currentUser, setCurrentUser };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
};

UserProvider.defaultProps = {
  children: {},
};
