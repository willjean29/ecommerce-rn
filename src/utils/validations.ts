import { Length } from 'utils/enums';
export const validationEmail = (email: string) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export const validationPassword = (password: string) => {
  let resp = true;
  if(password.length < Length.PASSWORD){
    resp = false
  }
  return resp;
}

export const comparePassword = (password: string, repeatedPassword: string) => {
  if(password === repeatedPassword){
    return true;
  }else{
    return false;
  }
}

export const validationPhone = (number: string) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(number);
}