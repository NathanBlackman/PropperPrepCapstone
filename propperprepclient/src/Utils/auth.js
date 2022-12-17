import { signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth';
import { auth } from './client';

const signIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider);
};

const signOutUser = () => {
  signOut(auth);
};

export { signIn, signOutUser };
