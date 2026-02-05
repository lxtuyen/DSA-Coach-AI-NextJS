"use client";

import Editor from "@monaco-editor/react";
import { useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/app/components/ui/Resizable";
import CodeEdtHeader from "./CodeEdtHeader";
import SubmitFooter from "./SubmitFooter";

const CodeEditor = () => {
  const [testResult, setTestResult] = useState<"running" | "success" | null>(
    "success"
  );

  const runCode = () => {
    setTestResult("running");
    setTimeout(() => setTestResult("success"), 1500);
  };

  return (
    <div className="h-full flex flex-col min-h-96">
      <CodeEdtHeader />

      <ResizablePanelGroup orientation="vertical" className="flex-1">
        <ResizablePanel defaultSize={55} minSize={40}>
          <Editor
            height="100%"
            language="javascript"
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              fontFamily: "JetBrains Mono",
              fontSize: 14,
              automaticLayout: true,
            }}
          />
        </ResizablePanel>

        <ResizableHandle withHandle />

        <ResizablePanel defaultSize={45} minSize={15}>
          <SubmitFooter testResult={testResult} runCode={runCode} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default CodeEditor;
