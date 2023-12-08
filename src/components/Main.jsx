import { useEffect, useState } from "react";
import axios from "axios";
import ProjectItem from "./projectItem";
import DashboardProjectItem from "./DashBoardProjectItem";
import { Route, Link, Routes, useLocation } from "react-router-dom";
import { faL } from "@fortawesome/free-solid-svg-icons";
export default function Main() {
  let Location = useLocation();
  let { pathname } = location;
  let projects = [];
  const [isOnDiscover, setDiscover] = useState(false);
  const [projectArray, setProjectArray] = useState([]);
  const [AllProject, setAllProject] = useState([]);
  useEffect(() => {
    // console.log(pathname);
    if (pathname == "/dashboard/discover") {
      setDiscover(true);
      getAllData();
    } else {
      setDiscover(false);
      getData();
    }
  }, []);

  let username;
  username = localStorage.getItem("uname");
  useEffect(() => {
    // projects = getData();
    // console.log(data);
  }, []);

  async function getData() {
    let data = await axios.post("http://localhost:8000/myprojects", {
      username,
    });
    projects = data;
    setProjectArray(projects.data);
  }
  async function getAllData() {
    let data = await axios.get("http://localhost:8000/dashboard", {});
    projects = data;
    setAllProject(projects.data);
  }

  // let projects = [
  //   {
  //     projectId: {
  //       $numberInt: "5",
  //     },
  //     projectName: "Todo List",
  //     projectDescription:
  //       "This was a simple todo List made by Mr. Gurjot Singh. It had the backend connected to it which makes is much useful and easier to use being a minimalist, it helps you to remember what you have 'TODO'",
  //     Creator: "Gurjot",
  //     countOfMember: {
  //       $numberInt: "3",
  //     },
  //     projectLinks: "",
  //     _id: {
  //       $oid: "6571503cb1d1d66a3a0362d0",
  //     },
  //   },
  //   {
  //     projectId: {
  //       $numberInt: "6",
  //     },
  //     projectName: "CodeCompiler",
  //     projectDescription:
  //       "This project was made using JS, Node, Express and react. It was a basic online code Compiler which was nothing but to run the programs without installing multiple softwares on your PC.",
  //     Creator: "Gurjot",
  //     countOfMember: {
  //       $numberInt: "2",
  //     },
  //     projectLinks: "",
  //     _id: {
  //       $oid: "6571503cb1d1d66a3a0362d1",
  //     },
  //   },
  //   {
  //     projectId: {
  //       $numberInt: "13",
  //     },
  //     projectName: "ProjectNimbo",
  //     projectDescription: "trial",
  //     countOfMember: {
  //       $numberInt: "1",
  //     },
  //     projectLinks: "cysabca",
  //     _id: {
  //       $oid: "6571940d90d78c114989a808",
  //     },
  //   },
  // ];

  // let UserProject = [
  //   {
  //     _id: {
  //       $oid: "65714e5eb1d1d66a3a0362cb",
  //     },
  //     name: "Ansh Kaushal",
  //     email: "anshkaushal@nigga.com",
  //     username: "nigga",
  //     password: "anshkiex",
  //     projects: [
  //       {
  //         projectId: {
  //           $numberInt: "3",
  //         },
  //         projectName: "CMS",
  //         projectDescription:
  //           "This is the description of the project created by Mr. Ansh Kaushal. The main idea of the project as the name suggests 'Content ManagementS System(CMS)' is to manage the content created by the owner.",
  //         Creator: "Ansh",
  //         countOfMember: {
  //           $numberInt: "1",
  //         },
  //         projectLinks: "",
  //         _id: {
  //           $oid: "65714e5eb1d1d66a3a0362cc",
  //         },
  //       },
  //       {
  //         projectId: {
  //           $numberInt: "4",
  //         },
  //         projectName: "Notesy",
  //         projectDescription:
  //           "This is the description of the project created by Mr. Ansh Kaushal. The main idea of the project is to build a desktop application which is also a clone of the Notion app which is nothing but a simple Daily life management helper.",
  //         Creator: "Ansh",
  //         countOfMember: {
  //           $numberInt: "2",
  //         },
  //         projectLinks: "",
  //         _id: {
  //           $oid: "65714e5eb1d1d66a3a0362cd",
  //         },
  //       },
  //     ],
  //     __v: {
  //       $numberInt: "0",
  //     },
  //   },
  //   {
  //     _id: {
  //       $oid: "6571503cb1d1d66a3a0362cf",
  //     },
  //     name: "Gurjot Singh",
  //     email: "gurjot@gmail.com",
  //     username: "Guri",
  //     password: "nosql",
  //     projects: [
  //       {
  //         projectId: {
  //           $numberInt: "5",
  //         },
  //         projectName: "Todo List",
  //         projectDescription:
  //           "This was a simple todo List made by Mr. Gurjot Singh. It had the backend connected to it which makes is much useful and easier to use being a minimalist, it helps you to remember what you have 'TODO'",
  //         Creator: "Gurjot",
  //         countOfMember: {
  //           $numberInt: "3",
  //         },
  //         projectLinks: "",
  //         _id: {
  //           $oid: "6571503cb1d1d66a3a0362d0",
  //         },
  //       },
  //       {
  //         projectId: {
  //           $numberInt: "6",
  //         },
  //         projectName: "CodeCompiler",
  //         projectDescription:
  //           "This project was made using JS, Node, Express and react. It was a basic online code Compiler which was nothing but to run the programs without installing multiple softwares on your PC.",
  //         Creator: "Gurjot",
  //         countOfMember: {
  //           $numberInt: "2",
  //         },
  //         projectLinks: "",
  //         _id: {
  //           $oid: "6571503cb1d1d66a3a0362d1",
  //         },
  //       },
  //       {
  //         projectId: {
  //           $numberInt: "13",
  //         },
  //         projectName: "ProjectNimbo",
  //         projectDescription: "trial",
  //         countOfMember: {
  //           $numberInt: "1",
  //         },
  //         projectLinks: "cysabca",
  //         _id: {
  //           $oid: "6571940d90d78c114989a808",
  //         },
  //       },
  //     ],
  //     __v: {
  //       $numberInt: "4",
  //     },
  //   },
  // ];

  return (
    <>
      <div className="main-container">
        {isOnDiscover ? (
          <>
            {AllProject.map((user) =>
              user.projects.map((project) => (
                <DashboardProjectItem
                  username={user.username}
                  name={user.name}
                  data={project}
                />
              ))
            )}
          </>
        ) : (
          <>
            {projectArray &&
              projectArray.map((project, index) => (
                <ProjectItem key={index} data={project} />
              ))}
          </>
        )}
      </div>
    </>
  );
}
