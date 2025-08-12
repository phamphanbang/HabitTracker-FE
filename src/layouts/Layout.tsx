import { Outlet } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router";
import { ChevronDown, CalendarCheck } from "lucide-react";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col ">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* App name */}
          <div className="flex items-center gap-6">
            {/* App title */}
            <Link to="/" className="flex gap-2 text-lg font-bold text-blue-500">
              <CalendarCheck />
              HabitTracker
            </Link>

            {/* Navigation links */}
            <nav className="flex items-center gap-4">
              <Link
                to="/dashboard"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                Dashboard
              </Link>
              <Link
                to="/settings"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                Settings
              </Link>
              <Link
                to="/about"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                About
              </Link>
            </nav>
          </div>

          {/* Profile dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors focus:outline-none px-2 py-1">
                <Avatar className="w-9 h-9">
                  <AvatarImage
                    src="https://via.placeholder.com/150"
                    alt="User"
                  />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 bg-gray-50 p-6">
        <Outlet />
      </main>
    </div>
  );
}
