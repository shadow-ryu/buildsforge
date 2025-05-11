import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Calendar, Sparkles } from "lucide-react";

export function BuildLogDisplay({
  logs,
}: {
  logs: {
    id: string;
    logDate: string;
    summary: string;
    sourceTasks: { title: string; category: string }[];
    generatedAt: string;
  }[];
}) {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-[#F4F4F5] mb-6 flex items-center gap-2">
        <Sparkles className="text-yellow-400" size={24} /> Build Logs
      </h2>
      <div className="space-y-6">
        {logs.map((log) => (
          <Card
            key={log.id}
            className="bg-[#181A20] border-0 rounded-2xl shadow-sm"
          >
            <CardHeader>
              <CardTitle className="text-lg text-[#F4F4F5] flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Calendar size={16} className="text-[#FBBF24]" />
                  {new Date(log.logDate).toDateString()}
                </span>
                <Badge
                  variant="secondary"
                  className="text-xs text-[#A1A1AA] bg-[#23262F]"
                >
                  Generated {new Date(log.generatedAt).toLocaleTimeString()}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-[#D4D4D8] space-y-3">
              <p className="text-sm leading-relaxed whitespace-pre-wrap">
                {log.summary}
              </p>
              <div>
                <p className="text-xs text-[#A1A1AA] mb-1">Source Tasks:</p>
                <ScrollArea className="max-h-32">
                  <ul className="text-sm list-disc ml-6 space-y-1">
                    {log.sourceTasks.map((t, i) => (
                      <li key={i} className="text-[#A1F59F]">
                        {t.title}{" "}
                        <span className="text-[#A1A1AA] text-xs ml-2">
                          [{t.category}]
                        </span>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
