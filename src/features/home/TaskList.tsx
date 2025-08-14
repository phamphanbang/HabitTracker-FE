import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2 } from "lucide-react";

export default function TaskList() {
  return (
    <Card className="flex-1">
      <CardContent className="p-4 space-y-2">
        {[1, 2, 3].map((task) => (
          <div
            key={task}
            className="flex items-center justify-between gap-3 p-3 bg-secondary rounded-md hover:bg-muted transition-colors"
          >
            <Checkbox className="bg-foreground border-none"/>

            <span className="flex-1 font-medium">Task {task}</span>

            <Button
              variant="ghost"
              size="icon"
              className=" bg-destructive hover:bg-foreground hover:text-destructive" 
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
