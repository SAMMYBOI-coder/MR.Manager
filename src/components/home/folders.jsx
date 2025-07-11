import { Card, CardContent } from "@/components/ui/card";

const folders = [
  { label: "Work", count: 12 },
  { label: "Personal", count: 8 },
  { label: "Recipes", count: 5 },
  { label: "Travel", count: 3 },
];

export default function Folders() {
  return (
    <Card className="folders-card"> {/* Added custom class */}
      <CardContent className="p-4">
        <h3 className="font-semibold mb-3 text-primary">My Folders</h3>
        <div className="grid grid-cols-2 gap-3">
          {folders.map((folder, i) => (
            <div 
              key={i} 
              className="border rounded-lg px-3 py-2 text-sm flex justify-between text-primary"
            >
              <span>{folder.label}</span>
              <span>{folder.count}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}