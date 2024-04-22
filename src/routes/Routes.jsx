import { Route } from "wouter";
import Home from "../pages/Home";
import About from "../pages/About";

export default function Routes() {
  return (
    <>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </>
  );
}
