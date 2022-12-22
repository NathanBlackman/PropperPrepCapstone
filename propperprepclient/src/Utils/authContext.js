import React, { 
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
  } from 'react';
  import { auth } from './client';
  import { onAuthStateChanged } from 'firebase/auth';
  
  const AuthContext = createContext();
  
  AuthContext.displayName = 'AuthContext'; 

  const AuthProvider = (props) => {
    const [user, setUser] = useState(null);
  
    // there are 3 states for the user:
    // null = application initial state, not yet loaded
    // false = user is not logged in, but the app has loaded
    // an object/value = user is logged in
  
    useEffect(() => {
      onAuthStateChanged( auth, (fbUser) => {
        if (fbUser) {
          setUser(fbUser);
        } else {
          setUser(false);
        }
      });
    }, []);
  
    const value = useMemo(
      () => ({
        user,
        userLoading: user === null,
        // as long as user === null, will be true
        // As soon as the user value !== null, value will be false
      }),
      [user],
    );
  
    return <AuthContext.Provider value={value} {...props} />;
  };
  const AuthConsumer = AuthContext.Consumer;
  
  const useAuth = () => {
    const context = useContext(AuthContext);
  
    if (context === undefined) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  };
  
  export { AuthProvider, useAuth, AuthConsumer };
