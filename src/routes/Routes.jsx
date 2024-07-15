import { Route } from "wouter";
import Home from "../pages/Home";
import About from "../pages/About";
import Register from "../pages/Register";

export default function Routes() {
  return (
    <>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/register" component={Register} />
    </>
  );
}
