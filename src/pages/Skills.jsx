import React from 'react'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaPython,
  FaDatabase,
} from "react-icons/fa";
import { SiDjango, SiMysql } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 />, color: "bg-orange-500" },
    { name: "CSS", icon: <FaCss3Alt />, color: "bg-blue-500" },
    { name: "JavaScript", icon: <FaJs />, color: "bg-yellow-400 text-black" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "bg-purple-600" },
    { name: "React.js", icon: <FaReact />, color: "bg-cyan-500" },
    { name: "Python", icon: <FaPython />, color: "bg-green-600" },
    { name: "Django", icon: <SiDjango />, color: "bg-gray-800" },
    { name: "MySQL", icon: <SiMysql />, color: "bg-indigo-600" },
    { name: "Database", icon: <FaDatabase />, color: "bg-teal-600" },
  ];
  return (
    <>
      <div id='skills' className='bg-black h-fit hover:border-3'>
        <h1 className='text-5xl font-bold text-white text-center py-20'>Skills</h1>
        <div className="grid grid-cols-2 py-10 sm:grid-cols-3 md:grid-cols-4 gap-6 md:py-15">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center p-6 rounded-xl shadow-md text-white font-semibold text-lg transform transition duration-300 hover:scale-105 hover:shadow-lg ${skill.color}`}
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Skills