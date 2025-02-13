// import { useState, useEffect } from "react";

// interface User {
//   id: string;
//   name: string;
//   email: string;
// }

// export const useAuth = () => {
//   const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   const login = (userData: User) => {
//     localStorage.setItem("user", JSON.stringify(userData));
//     setUser(userData);
//   };

//   const logout = () => {
//     localStorage.removeItem("user");
//     setUser(null);
//   };

//   return { user, login, logout };
// };
