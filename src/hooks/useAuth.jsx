import { useDispatch, useSelector } from 'react-redux';
import { setUser, removeUser } from 'store/slices/userSlice';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { app } from 'services/firebaseService.js';

export function useAuth() {
  const { email, name, photo, phone, token, id } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const auth = getAuth(); 
  const db = getFirestore(app); 

  onAuthStateChanged(auth, (user) => {  
    if (user && user.accessToken === localStorage.getItem('token')) {
      let docRef = doc(db, 'users', user.email); 
      getDoc(docRef).then((collection) => {
        dispatch(
          setUser({
            email: user.email,
            phone: collection.get('phone'),
            photo: user.photoURL,
            name: user.displayName,
            id: user.uid,
          }),
        );
      });
    } else {
      dispatch(removeUser());
    }
  });

  return {
    email,
    phone,
    name,
    photo,
    token,
    id,
  };
}

