import { User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function UserDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="focus-visible:ring-0 focus-visible:ring-offset-0">
        <button className="flex items-center gap-2 px-2 py-1 text-muted-foreground hover:text-foreground transition-colors">
          <User className="w-5 h-5" strokeWidth={2.5} />
          user name
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-40 bg-card border border-border rounded-md shadow-md text-sm p-0"
      >
        <DropdownMenuItem className="bg-card hover:bg-muted focus:bg-muted focus:text-foreground px-4 py-2 cursor-pointer rounded-t-md">
          Profile
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <div className="bg-card hover:bg-muted px-4 py-2 cursor-pointer">
            Settings
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <div className="bg-card hover:bg-muted px-4 py-2 cursor-pointer rounded-b-md">
            Logout
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
