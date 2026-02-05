import { ChevronDown } from "lucide-react";

const FooterTabs = ({
  activeTab,
  setActiveTab,
  isExpanded,
  toggleExpand,
}: any) => (
  <div className="px-6 py-3 flex items-center justify-between border-b border-[#1a1f2e]">
    <div className="flex gap-2">
      {["testcase", "result", "submissions"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 text-sm rounded-lg transition-colors ${activeTab === tab
              ? "bg-[#1a1f2e] text-cyan-400"
              : "text-gray-400 hover:text-gray-300"
            }`}
        >
          {tab === "testcase"
            ? "Testcase"
            : tab === "result"
              ? "Test Result"
              : "Submissions"}
        </button>
      ))}
    </div>

    <button onClick={toggleExpand}>
      <ChevronDown
        className={`w-4 h-4 ${isExpanded ? "rotate-180" : ""}`}
      />
    </button>
  </div>
);

export default FooterTabs;
