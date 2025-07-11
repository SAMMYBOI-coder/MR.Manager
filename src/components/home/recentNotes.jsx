import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function RecentNotes() {
  return (
    <Card className="recent-notes-card force-visible-text"> {/* ONLY ADDED force-visible-text */}
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-primary">Recent Notes</h3>
          <Button size="sm">+ New Note</Button>
        </div>
        <div className="text-sm">
          <div className="font-semibold text-primary">Project Meeting Notes</div>
          <div className="text-secondary">
            Discussed the new features for Q1 release...
          </div>
          <div className="text-xs text-tertiary">2 hours ago</div>
        </div>
      </CardContent>
    </Card>
  );
}