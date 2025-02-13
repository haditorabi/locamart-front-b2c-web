// Example global app types (can be shared across components)
export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

export interface Theme {
  darkMode: boolean;
}
