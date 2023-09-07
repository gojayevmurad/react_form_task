import MainLayout from "../layouts/MainLayout/index.tsx";

import GetStarted from "../pages/GetStarted/index.tsx";

import Education from "../pages/GetStarted/components/Education/index.tsx";
import GeneralQuestions from "../pages/GetStarted/components/Education/GeneralQuestions/index.tsx";
import EducationQuestions from "src/pages/GetStarted/components/Education/EducationQuestions/index.tsx";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: "/get-started",
    element: <GetStarted />,
    children: [
      {
        path: "education",
        element: <Education />,
        children: [
          {
            index: true,
            element: <GeneralQuestions />,
          },
          {
            path: "education-questions",
            element: <EducationQuestions />,
          },
        ],
      },
    ],
  },
];

const authMap = (routes) => {
  return routes.map((route) => {
    if (route?.auth) {
      // private route
    }

    if (route?.children) {
      route.children = authMap(route.children);
    }

    return route;
  });
};

export default authMap(routes);
