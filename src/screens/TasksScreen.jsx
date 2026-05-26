import { useMemo, useState } from "react";
import { Bell, BookOpen, CheckCircle2, ListChecks } from "lucide-react";
import Card from "../components/Card";
import ConnectUIcon from "../components/ConnectUIcon";
import StatusBadge from "../components/StatusBadge";
import { tasks as initialTasks } from "../data/mockData";

const tabOptions = [
  { key: "all", label: "הכל" },
  { key: "week", label: "השבוע" },
  { key: "done", label: "הושלמו" },
];

const taskChip = {
  todo: { label: "דחוף", tone: "teal" },
  inprogress: { label: "בתהליך", tone: "orange" },
  done: { label: "הושלם", tone: "green" },
};

export default function TasksScreen() {
  const [tab, setTab] = useState("all");
  const [taskList, setTaskList] = useState(initialTasks);
  const [expandedTask, setExpandedTask] = useState(null);
  const [toast, setToast] = useState("");

  const visibleTasks = useMemo(() => {
    if (tab === "done") return taskList.filter((task) => task.status === "done");
    if (tab === "week") return taskList.filter((task) => task.status !== "done");
    return taskList;
  }, [tab, taskList]);

  const handleDone = (id) => {
    setTaskList((prev) =>
      prev.map((task) => (task.id === id ? { ...task, status: "done", chip: "הושלם" } : task)),
    );
    setToast("המשימה סומנה כהושלמה. כל הכבוד, אדם.");
  };

  return (
    <div className="space-y-5">
      <section className="text-center">
        <div className="flex items-center justify-center gap-2">
          <ConnectUIcon size={34} />
          <h1 className="text-[28px] font-extrabold text-[#12324A]">המשימות שלי</h1>
        </div>
        <p className="mt-1 font-semibold text-[#12324A]/58">
          צעד קטן היום, הישג גדול מחר.
        </p>
      </section>

      <div className="grid grid-cols-3 rounded-[22px] bg-white p-1 shadow-[0_10px_28px_rgba(18,50,74,0.05)]">
        {tabOptions.map((option) => (
          <button
            type="button"
            key={option.key}
            onClick={() => setTab(option.key)}
            className={`min-h-11 rounded-[18px] text-sm font-extrabold transition active:scale-[0.98] ${
              tab === option.key ? "bg-[#008C95] text-white" : "text-[#12324A]/58"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      {toast && (
        <div className="rounded-[22px] border border-[#BFE8C8] bg-[#EAF8EC] p-3 text-center text-sm font-bold text-[#247A38]">
          {toast}
        </div>
      )}

      <Card className="border-[#CFECEF] bg-[#EAF6F7]">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#008C95]">
            <Bell size={22} />
          </span>
          <p className="font-semibold leading-7 text-[#12324A]">
            אפשר להתחיל בקטן. פרקי משימה אחת לשלב הבא.
          </p>
        </div>
      </Card>

      <div className="space-y-4">
        {visibleTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            expanded={expandedTask === task.id}
            onToggleSteps={() => setExpandedTask(expandedTask === task.id ? null : task.id)}
            onDone={() => handleDone(task.id)}
          />
        ))}
      </div>
    </div>
  );
}

function TaskCard({ task, expanded, onToggleSteps, onDone }) {
  const chip = taskChip[task.status] || taskChip.todo;

  return (
    <Card>
      <div className="flex items-start gap-3">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EAF6F7] text-[#008C95]">
          {task.status === "done" ? <CheckCircle2 size={24} /> : <BookOpen size={24} />}
        </span>
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex items-start justify-between gap-2">
            <div>
              <p className="text-sm font-bold text-[#008C95]">{task.course}</p>
              <h3 className="text-xl font-extrabold leading-7 text-[#12324A]">{task.title}</h3>
            </div>
            <StatusBadge label={chip.label} tone={chip.tone} />
          </div>
          <p className="text-sm font-medium leading-6 text-[#12324A]/60">{task.subtitle}</p>
          <p className="mt-2 text-sm font-bold text-[#12324A]/70">תאריך יעד: {task.due}</p>
        </div>
      </div>

      {expanded && (
        <div className="mt-4 rounded-[22px] bg-[#F4FAFB] p-3">
          <div className="mb-2 flex items-center gap-2 font-extrabold text-[#12324A]">
            <ListChecks size={18} className="text-[#008C95]" />
            פירוק לשלבים
          </div>
          <ol className="space-y-2 text-sm font-semibold text-[#12324A]/70">
            {(task.steps.length ? task.steps : ["המשימה כבר הושלמה"]).map((step, index) => (
              <li key={step} className="flex gap-2">
                <span className="text-[#008C95]">{index + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      )}

      {task.status !== "done" ? (
        <div className="mt-4 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={onToggleSteps}
            className="min-h-11 rounded-full border border-[#008C95] bg-[#EAF6F7] px-3 py-3 text-sm font-extrabold text-[#008C95] shadow-[0_8px_18px_rgba(0,140,149,0.08)] transition active:scale-[0.98]"
          >
            פרקי לשלבים
          </button>
          <button
            type="button"
            onClick={onDone}
            className="min-h-11 rounded-full bg-[#008C95] px-3 py-3 text-sm font-extrabold text-white shadow-[0_12px_24px_rgba(0,140,149,0.18)] transition active:scale-[0.98]"
          >
            סימנתי שסיימתי
          </button>
        </div>
      ) : (
        <p className="mt-4 rounded-2xl bg-[#EAF8EC] p-3 text-sm font-bold text-[#247A38]">
          יפה מאוד. עוד משימה ירדה מהראש.
        </p>
      )}
    </Card>
  );
}
