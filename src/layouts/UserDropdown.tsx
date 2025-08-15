import { User } from "lucide-react";

export function UserDropdown() {
  return (
    <div className="relative inline-block text-left group z-0">
      {/* Trigger button */}
      <div className="flex items-center gap-2 px-2 py-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
        <User className="w-5 h-5" strokeWidth={2.5} />
        user name
      </div>

      {/* Hover bridge */}
      <div className="absolute top-full h-2 w-full bg-transparent"></div>

      {/* Dropdown menu */}
      <div
        className="absolute right-0 mt-0 w-40 bg-card border border-border rounded-md shadow-md text-sm p-0 
               opacity-0 group-hover:opacity-100
               translate-y-1 group-hover:translate-y-0
               transition-all duration-150 ease-out
               pointer-events-none group-hover:pointer-events-auto z-50"
      >
        <div className="bg-card hover:bg-muted px-4 py-2 cursor-pointer rounded-t-md">
          Profile
        </div>
        <div className="bg-card hover:bg-muted px-4 py-2 cursor-pointer">
          Settings
        </div>
        <div className="bg-card hover:bg-muted px-4 py-2 cursor-pointer rounded-b-md">
          Logout
        </div>
      </div>
    </div>
  );
}
