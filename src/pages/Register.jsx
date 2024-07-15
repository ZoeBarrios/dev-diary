import { useEffect } from "react";

export default function MyComponent() {
  useEffect(() => {
    async function fetchUser() {
      let user = await fetch("http://localhost:5000/auth/login/success");
      console.log(user);
    }
    fetchUser();
  }, []);
  return <div>Mi componente</div>;
}
