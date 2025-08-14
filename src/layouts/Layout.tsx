import { Outlet } from "react-router";
import { Link } from "react-router";
import { CalendarCheck, ClipboardList, Settings, Info } from "lucide-react";
import { UserDropdown } from "./UserDropdown";

export default function Layout() {
  return (
    <div className="serika-dark pt-6 min-h-screen flex flex-col bg-background text-foreground">
      {/* Top navigation bar */}
      <header className="bg-background/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto h-14 flex items-center justify-between">
          {/* Left: Logo + Nav */}
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="flex items-center gap-2 text-3xl font-bold "
            >
              <CalendarCheck className="w-7 h-7 text-primary" />
              HabitTracker
            </Link>

            <nav className="flex items-center gap-6 text-lg font-medium">
              <Link
                to="/dashboard"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <ClipboardList className="w-5 h-5 " strokeWidth={2.5} />
              </Link>
              <Link
                to="/settings"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Settings className="w-5 h-5" strokeWidth={2.5} />
              </Link>
              <Link
                to="/about"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Info className="w-5 h-5" strokeWidth={2.5} />
              </Link>
            </nav>
          </div>

          {/* <div className="relative inline-block group">
            
            <button className="flex items-center gap-2 px-2 py-1 text-muted-foreground hover:text-foreground transition-colors">
              <User className="w-5 h-5" strokeWidth={2.5} />
              {"user name"}
            </button>

          
            <div
              className="absolute right-0 top-full 
      w-40 bg-card border border-border rounded-md shadow-md 
      opacity-0 group-hover:opacity-100 
      translate-y-1 group-hover:translate-y-0
      transition-all duration-150 ease-out
      pointer-events-none group-hover:pointer-events-auto text-sm "
            >
              <div className="hover:bg-muted px-4 py-2 cursor-pointer rounded-t-md">
                Profile
              </div>
              <div className="hover:bg-muted px-4 py-2 cursor-pointer">
                Settings
              </div>
              <div className="hover:bg-muted px-4 py-2 cursor-pointer rounded-b-md">
                Logout
              </div>
            </div>
          </div> */}
          <UserDropdown />
        </div>
      </header>

      <main className="flex-1 flex justify-center">
        <div className="w-full max-w-5xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
