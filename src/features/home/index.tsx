import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import TaskList from "./TaskList";

export default function Home() {
  const today = new Date();

  return (
    <div className="flex gap-6 pt-4 flex-1 min-h-0">
      {/* Left side - Task Section */}
      <div className="flex flex-col gap-4 w-2/3 min-h-0">
        {/* Action Bar */}
        <div className="flex-shrink-0 flex items-center justify-between bg-card p-4 rounded-lg border border-border">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <span className="font-medium">
              {today.toLocaleDateString("en-US", {
                weekday: "long",
                month: "short",
                day: "numeric",
              })}
            </span>
            <Button variant="outline" size="icon">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Task input */}
          <div className="flex items-center gap-2">
            <Input
              placeholder="Add a new task..."
              className="bg-background border-border"
            />
            <Button variant="default">
              <Plus className="w-4 h-4" />
              Create Task
            </Button>
          </div>
        </div>

        {/* Scrollable Task List */}
        <TaskList />
      </div>

      {/* Right side - Calendar */}
      <div className="w-1/3 flex justify-center">
        <Card>
          <CardContent>
            <Calendar
              mode="single"
              selected={today}
              className="rounded-md border border-border"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
