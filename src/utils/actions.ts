import firebase from 'database/firebase';

export const authSesionUser = () => {
  firebase.auth.onAuthStateChanged((user) => {
    if(user){
      console.log("SESION ACTIVA");
    }else{
      console.log("NO HAY SESION ACTIVA")
    }
  });
}

export const logout = async() => {
  await firebase.auth.signOut()
}