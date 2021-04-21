import { createContext } from 'react';
import { UserContextI } from 'context/user/interfaces/userContext.interface';

const UserContext = createContext({} as UserContextI);

export default UserContext;