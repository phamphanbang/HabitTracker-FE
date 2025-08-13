import { Outlet, Link } from "react-router";
import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <div className="pt-6">
      <nav className="flex gap-4">
        <Button asChild>
          <Link to="/">Home</Link>
        </Button>
        <Button asChild>
          <Link to="/about">About</Link>
        </Button>
      </nav>
      <Outlet />
    </div>
  );
}
