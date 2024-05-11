import About from "./About";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import Details from "./Details";
import ToDo from "./ToDo";

const pagesData = [
    {
        path: "",
        Component: Home,
        title: "home"
    },
    {
        path: "about",
        Component: About,
        title: "about"
    },
    {
        path: "projects",
        Component: Projects,
        title: "projects"
    },
    {
        path: "contact",
        Component: Contact,
        title: "contact"
    },
    {
        path: "details/:id",
        Component: Details,
        title: "details"
    },
    {
        path: "todo",
        Component: ToDo,
        title: "todo"
    }
];

export default pagesData;