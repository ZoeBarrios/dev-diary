export default function useAuth() {
  const [user, setUser] = useState(null);
  const login = async () => {
    let user = await fetch("http://localhost:5000/auth/google/callback");
  };

  const logout = () => {
    localStorage.removeItem("isLogged");
  };

  return {
    login,
    logout,
  };
}
