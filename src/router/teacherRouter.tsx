import { createBrowserRouter } from "react-router-dom";
import TeacherDashboard from "../pagesForTeachers/TeacherDashboard";
import LoadingScreen from "../components/static/LoadingScreen";
import TeacherLayout from "../pagesForTeachers/components/layout/TeacherLayout";
import Schedule from "../pagesForTeachers/pages/Schedule";
import MyClass from "../pagesForTeachers/pages/MyClass";
import Subjects from "../pagesForTeachers/pages/Subjects";
import LessonNote from "../pagesForTeachers/pages/LessonNote";
import Store from "../pagesForTeachers/pages/Store";
import Exams from "../pagesForTeachers/pages/Exams";
import WeekReport from "../pagesForTeachers/pages/WeekReport";

export const teacherRouter = createBrowserRouter([
  {
    path: "/teacher",
    element: <TeacherLayout />,
    children: [
      {
        index: true,
        element: <TeacherDashboard />,
      },
      {
        path: "my-schedule",
        element: <Schedule />,
      },
      {
        path: "my-class",
        element: <MyClass />,
      },
      {
        path: "subjects",
        element: <Subjects />,
      },
      {
        path: "lesson-note",
        element: <LessonNote />,
      },
      {
        path: "lesson-note",
        element: <LessonNote />,
      },
      {
        path: "store",
        element: <Store />,
      },
      {
        path: "exams",
        element: <Exams />,
      },
      {
        path: "week-report",
        element: <WeekReport />,
      },
    ],
  },
  {
    path: "*",
    element: <LoadingScreen />,
  },
]);
