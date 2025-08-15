import { Outlet, useLocation } from "react-router";
import { Link } from "react-router";
import { CalendarCheck, ClipboardList, Settings, Info } from "lucide-react";
import { UserDropdown } from "./UserDropdown";

export default function Layout() {
  const location = useLocation();

  // Decide mode based on path
  const isDashboardStyle = location.pathname === "/" || location.pathname.startsWith("/dashboard");
  return (
    <div
      className={`serika-dark flex flex-col py-6 ${
        isDashboardStyle ? "h-screen" : "min-h-screen"
      } bg-background text-foreground`}
    >
      {/* Top navigation bar */}
      <header className="bg-background/80 backdrop-blur-sm z-10 h-14 flex-shrink-0">
        <div className="max-w-5xl mx-auto h-full flex items-center justify-between">
          {/* Left: Logo + Nav */}
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2 text-3xl font-bold">
              <CalendarCheck className="w-7 h-7 text-primary" />
              HabitTracker
            </Link>

            <nav className="flex items-center gap-6 text-lg font-medium">
              <Link
                to="/dashboard"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <ClipboardList className="w-5 h-5" strokeWidth={2.5} />
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

          <UserDropdown />
        </div>
      </header>

      {/* Main content area */}
      <main className="flex-1 flex justify-center min-h-0">
        <div className="w-full max-w-5xl flex flex-col min-h-0">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
