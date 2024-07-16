import me from '../../../assets/images/me.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faNodeJs, faPython } from '@fortawesome/free-brands-svg-icons';

const mCardData = [
  {
    heading: "Hi There!",
    children: <img 
    src={ me }
    alt='Anusha'
    />,
    colorClass: "bg-customWhite"
  },
  {
    heading: "About Me",
    children: <p>
    I'm deeply passionate about full-stack web development and am currently working with web animations using GSAP and Framer Motion.
  </p>,
    colorClass: "bg-customIndigo"
  },
  {
    heading: "Experience",
    children: (
      <ul>
            <li class="mb-4">
                👩🏻‍💻 Samsung R&D: Frontend Engineer
                <div class="mt-1 text-gray-500">(Jan 2023 - Sep 2023)</div>
            </li>
            <li class="mb-4">
                👩🏻‍💻 Article: Full-Stack Web Developer
                <div class="mt-1 text-gray-500">(May 2021 - Jan 2022)</div>
            </li>
        </ul>
    ),
    colorClass: "bg-customOrange"
  },
  {
    heading: "Education",
    children: (
       <ul className="list-inside space-y-2 mt-4">
  <li>
    👩🏻‍🎓 Bachelor of Computer Science, University of British Columbia (UBC)
    <div className="text-gray-500">(Expected graduation: 2024 )</div>
  </li>
  <li>
    👩🏻‍🎓 Bachelor of Engineering in Chemical Engineering (International)
    <div className="text-gray-500">(Graduated 2015)</div>
  </li>
</ul>
    ),
    colorClass: "bg-customGreen"
  },
  {
    heading: "Skills",
    children: (
      <div className="mt-6">
  <div className="grid grid-cols-2 gap-4">
    <ul className="space-y-2">
      <li className="flex items-center">
        <FontAwesomeIcon icon={faHtml5} className="mr-2 text-orange-500" />
        HTML
      </li>
      <li className="flex items-center">
        <FontAwesomeIcon icon={faCss3Alt} className="mr-2 text-blue-500" />
        CSS
      </li>
      <li className="flex items-center">
        <FontAwesomeIcon icon={faJsSquare} className="mr-2 text-yellow-500" />
        JavaScript
      </li>
      <li className="flex items-center">
        <FontAwesomeIcon icon={faReact} className="mr-2 text-blue-500" />
        React
      </li>
      <li className="flex items-center">
            <img src="https://nextjs.org/static/favicon/favicon-32x32.png" alt="Next.js" className="mr-2 w-4 h-4" />
            Next.js
          </li>
    </ul>
    <ul className="space-y-2">
      <li className="flex items-center">
        <FontAwesomeIcon icon={faNodeJs} className="mr-2 text-green-500" />
        Node.js
      </li>
      <li className="flex items-center">
        <FontAwesomeIcon icon={faNodeJs} className="mr-2 text-green-500" />
        Express
      </li>
      <li className="flex items-center">
        <FontAwesomeIcon icon={faNodeJs} className="mr-2 text-green-500" />
        MongoDB
      </li>
      <li className="flex items-center">
        <FontAwesomeIcon icon={faPython} className="mr-2 text-blue-500" />
        Python
      </li>
       <li className="flex items-center">
            <img src="https://static.djangoproject.com/img/logos/django-logo-positive.svg" alt="Django" className="mr-2 w-4 h-4" />
            Django
          </li>
    </ul>
  </div>
</div>
    ),
    colorClass: "bg-customBlue"
  },
  {
    heading: "Projects",
    children: (
      <p>
  Check out my projects on{" "}
  <a
    href="https://github.com/nyananu"
    target="_blank"
    rel="noreferrer"
    className="hover:underline flex items-center justify-center"
  >
    <FontAwesomeIcon icon={faGithub} className="ml-1" />
  </a>
</p>
    ),
    colorClass: "bg-customYellow"
  },
  {
    heading: "Contact",
    children: (
      <p>
          You can reach me at {" "}
           <a href="https://www.linkedin.com/in/nyananu/" target="_blank" rel="noreferrer">
           <FontAwesomeIcon icon={faLinkedin} />
            </a>
        </p>
    ),
    colorClass: "bg-customPurple"
  },
  {
    heading: "Hobbies",
    children: (
       <div className="mt-6">
        <p>🧁 🎮 🎨</p>
  <p>When I'm not baking delicious treats for my husband and son, I love immersing myself in open-world RPG games.</p>
  <p>I'm also exploring my creativity through digital art with Procreate!</p>
</div>
    ),
    colorClass: "bg-customPink"
  },
  // Add more cards as needed
];

export default mCardData;
