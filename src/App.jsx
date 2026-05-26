import { useMemo, useState } from "react";
import AppShell from "./components/AppShell";
import HomeScreen from "./screens/HomeScreen";
import TasksScreen from "./screens/TasksScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SupportPreferencesScreen from "./screens/SupportPreferencesScreen";
import LessonScreen from "./screens/LessonScreen";
import CommunityScreen from "./screens/CommunityScreen";
import PublicClassChatScreen from "./screens/PublicClassChatScreen";
import CloseCircleChatScreen from "./screens/CloseCircleChatScreen";
import { chatMessages, community } from "./data/mockData";

const NAV = {
  HOME: "home",
  TASKS: "tasks",
  COMMUNITY: "community",
  PROFILE: "profile",
  SUPPORT: "support-preferences",
  LESSON: "lesson",
  PUBLIC_CHAT: "public-chat",
  CLOSE_CHAT: "close-chat",
};

export default function App() {
  const [nav, setNav] = useState(NAV.HOME);
  const [previousNav, setPreviousNav] = useState(NAV.HOME);
  const [sharingMode, setSharingMode] = useState("private");
  const [publicChat, setPublicChat] = useState(chatMessages.public);
  const [closeCircleChat, setCloseCircleChat] = useState(chatMessages.closeCircle);
  const [closeCircleNotifications, setCloseCircleNotifications] = useState([]);
  const [mentorNotifications, setMentorNotifications] = useState([]);
  const [closeCircleMembers, setCloseCircleMembers] = useState(() =>
    community.closeCircle.map((member, index) => ({
      id: member.id || member.name,
      name: member.name,
      role: ["חברה קרובה", "חברה ללימודים", "שותפה לשיעור"][index] || "איש קשר",
    })),
  );

  const activeNav = useMemo(() => {
    if (nav === NAV.SUPPORT) return NAV.PROFILE;
    if ([NAV.PUBLIC_CHAT, NAV.CLOSE_CHAT].includes(nav)) return NAV.COMMUNITY;
    if (nav === NAV.LESSON) return NAV.HOME;
    return nav;
  }, [nav]);

  const goTo = (nextNav) => {
    setPreviousNav(nav);
    setNav(nextNav);
  };

  const openCommunity = () => {
    setPreviousNav(nav);
    setNav(NAV.COMMUNITY);
  };

  const openPublicChat = () => {
    setPreviousNav(NAV.COMMUNITY);
    setNav(NAV.PUBLIC_CHAT);
  };

  const openCloseChat = () => {
    setPreviousNav(NAV.COMMUNITY);
    setNav(NAV.CLOSE_CHAT);
  };

  const sendCloseCircleHelpAlert = () => {
    const alert = {
      id: Date.now(),
      title: "התראה נשלחה למעגל הקרוב שלך",
      recipients: closeCircleMembers.map((member) => member.name),
      body: "אני צריך עזרה כרגע. אשמח שמישהו יפנה אליי.",
      channel: "הדמיית Push לטלפון",
    };

    setCloseCircleNotifications((prev) => [alert, ...prev]);
    setCloseCircleChat((prev) => [
      ...prev,
      {
        sender: "אדם",
        text: alert.body,
        time: "עכשיו",
      },
    ]);

    return alert;
  };

  const sendMentorHelpAlert = () => {
    const alert = {
      id: Date.now(),
      title: "התראה נשלחה למנטור שלך",
      recipients: ["עדי"],
      body: "אני צריך עזרה כרגע. אשמח שהמנטור יפנה אליי.",
      channel: "הדמיית Push לטלפון",
    };

    setMentorNotifications((prev) => [alert, ...prev]);
    setCloseCircleChat((prev) => [
      ...prev,
      {
        sender: "אדם",
        text: alert.body,
        time: "עכשיו",
      },
    ]);

    return alert;
  };

  const backToPrevious = () => {
    if ([NAV.PUBLIC_CHAT, NAV.CLOSE_CHAT].includes(nav)) {
      setNav(NAV.COMMUNITY);
      return;
    }
    setNav(previousNav === NAV.SUPPORT ? NAV.PROFILE : previousNav || NAV.HOME);
  };

  let screen = null;

  if (nav === NAV.HOME) {
    screen = (
      <HomeScreen
        sharingMode={sharingMode}
        onGoTasks={() => goTo(NAV.TASKS)}
        onGoCommunity={openCommunity}
        onSendCloseCircleHelpAlert={sendCloseCircleHelpAlert}
        onSendMentorHelpAlert={sendMentorHelpAlert}
        onGoMentor={() => {
          setPreviousNav(NAV.HOME);
          setNav(NAV.COMMUNITY);
        }}
        onGoLesson={() => goTo(NAV.LESSON)}
        onGoProfile={() => goTo(NAV.PROFILE)}
      />
    );
  }

  if (nav === NAV.TASKS) {
    screen = <TasksScreen />;
  }

  if (nav === NAV.PROFILE) {
    screen = (
      <ProfileScreen
        sharingMode={sharingMode}
        setSharingMode={setSharingMode}
        onGoSupportPreferences={() => goTo(NAV.SUPPORT)}
      />
    );
  }

  if (nav === NAV.SUPPORT) {
    screen = <SupportPreferencesScreen onBack={() => goTo(NAV.PROFILE)} />;
  }

  if (nav === NAV.LESSON) {
    screen = <LessonScreen sharingMode={sharingMode} onBack={backToPrevious} />;
  }

  if (nav === NAV.COMMUNITY) {
    screen = (
      <CommunityScreen
        sharingMode={sharingMode}
        closeCircleMembers={closeCircleMembers}
        onUpdateCloseCircle={setCloseCircleMembers}
        onOpenPublicChat={openPublicChat}
        onOpenCloseChat={openCloseChat}
        onOpenMentorChat={openCloseChat}
      />
    );
  }

  if (nav === NAV.PUBLIC_CHAT) {
    screen = (
      <PublicClassChatScreen
        messages={publicChat}
        setMessages={setPublicChat}
        onBack={backToPrevious}
      />
    );
  }

  if (nav === NAV.CLOSE_CHAT) {
    screen = (
      <CloseCircleChatScreen
        messages={closeCircleChat}
        setMessages={setCloseCircleChat}
        closeCircleMembers={closeCircleMembers}
        onUpdateCloseCircle={setCloseCircleMembers}
        notifications={closeCircleNotifications}
        mentorNotifications={mentorNotifications}
        onBack={backToPrevious}
        onManageCircle={() => goTo(NAV.PROFILE)}
      />
    );
  }

  return (
    <AppShell
      nav={activeNav}
      setNav={goTo}
      onCommunityNav={openCommunity}
      sharingMode={sharingMode}
    >
      {screen}
    </AppShell>
  );
}
