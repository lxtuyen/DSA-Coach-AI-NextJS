"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/app/components/ui/Resizable";
import ProblemDescription from "./components/ProblemDes";
import CodeEditor from "./components/CodeEditor";

export default function ProblemPage() {
  return (
    <div className="h-full bg-[#0a0e1a] text-gray-100">
      <ResizablePanelGroup
        orientation="horizontal"
        className="h-full"
      >
        <ResizablePanel defaultSize={50} minSize={30}>
          <ProblemDescription />
        </ResizablePanel>

        <ResizableHandle withHandle />

        <ResizablePanel defaultSize={50} minSize={30}>
          <CodeEditor />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
