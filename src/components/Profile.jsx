import React from 'react';
import { FaHandsClapping } from "react-icons/fa6";

function Profile() {
  return (
    <div className='py-28'>
      <div className="container mx-auto flex items-center">
        <div className='w-1/2'>
          <img
            src="images/profile/profile.png"
            alt="profile"
            className='w-400 bg-blend-multiply rounded-lg shadow-md'
          />
        </div>
        <div className='w-1/2 mx-10'>
          <div className='flex items-center text-2xl font-medium text-gray-800'>
            <span className='mr-4'>Hi</span>
            <FaHandsClapping className='mr-5 text-yellow-600' />
            <span>My name is Witchapol Inaksorn</span>
          </div>
          <h1 className='text-gray-800 text-2xl font-medium mb-5'>
            Student - Computer Science, Kasetsart University Sriracha Campus
          </h1>
          <p className='text-gray-800 text-lg font-normal leading-relaxed mb-5'>
            I've been learning to code for 4 years, after I started studying computer science.
            <br />
            I'm looking for an internship related to automated Front-End Development or Testing.
          </p>
          <ul className='font-normal text-lg text-gray-800 mb-5'>
            <li>
              🌍 I'm based in Bangkok, Thailand
            </li>
            <li>
              ✉️ You can contact me at
              <a href="mailto:w.inaksorn@gmail.com" className='text-gray-800 hover:underline ml-1'>
                w.inaksorn@gmail.com
              </a>
            </li>
          </ul>
          <section>
            <h3 className='font-semibold text-lg text-gray-800 mt-4 mb-2'>Skills</h3>
            <div className='flex flex-wrap items-center justify-start gap-4'>
              <a href="https://docs.microsoft.com/en-us/cpp/?view=msvc-170" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/c-colored.svg" width="36" height="36" alt="C" />
              </a>
              <a href="https://www.python.org/" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg" width="36" height="36" alt="Python" />
              </a>
              <a href="https://www.oracle.com/java/" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg" width="36" height="36" alt="Java" />
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" />
              </a>
              <a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="36" height="36" alt="CSS3" />
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="JavaScript" />
              </a>
              <a href="https://vuejs.org/" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg" width="36" height="36" alt="Vue" />
              </a>
              <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="36" height="36" alt="NodeJS" />
              </a>
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" />
              </a>
              <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg" width="36" height="36" alt="Bootstrap" />
              </a>
              <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" width="36" height="36" alt="TailwindCSS" />
              </a>
              <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg" width="36" height="36" alt="Figma" />
              </a>
              <a href="https://dart.dev/" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/dart-colored.svg" width="36" height="36" alt="Dart" />
              </a>
              <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg" width="36" height="36" alt="PostgreSQL" />
              </a>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

export default Profile;
