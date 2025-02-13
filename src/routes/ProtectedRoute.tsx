// import { ReactNode } from "react";
// import { Navigate } from "react-router-dom";

// interface ProtectedRouteProps {
//   children: ReactNode;
// }

// export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
//   const isAuthenticated = Boolean(localStorage.getItem("token")); // Replace with actual auth logic

//   return isAuthenticated ? children : <Navigate to="/login" replace />;
// };
