import React, { Component } from 'react';
import ReactGA from 'react-ga';

export class AboutRakib extends Component {
    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => {},
            active_screen: 'about', // by default 'about' screen is active
            navbar: false,
        };
    }

    componentDidMount() {
        this.screens = {
            about: <About />,
            education: <Education />,
            skills: <Skills />,
            projects: <Projects />,
            resume: <Resume />,
        };

        let lastVisitedScreen = localStorage.getItem('about-section');
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = 'about';
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem('about-section', screen);

        // google analytics
        ReactGA.pageview(`/${screen}`);

        this.setState({
            screen: this.screens[screen],
            active_screen: screen,
        });
    };

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    };

    renderNavLinks = () => {
        return (
            <>
                <div
                    id="about"
                    tabIndex="0"
                    onFocus={this.changeScreen}
                    className={
                        (this.state.active_screen === 'about'
                            ? ' bg-ub-orange bg-opacity-100 hover:bg-opacity-95'
                            : ' hover:bg-gray-50 hover:bg-opacity-5 ') +
                        ' w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5'
                    }
                >
                    <img
                        className=" w-3 md:w-4"
                        alt="about Rakib"
                        src="./themes/Yaru/status/about.svg"
                    />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">
                        About Me
                    </span>
                </div>
                <div
                    id="education"
                    tabIndex="0"
                    onFocus={this.changeScreen}
                    className={
                        (this.state.active_screen === 'education'
                            ? ' bg-ub-orange bg-opacity-100 hover:bg-opacity-95'
                            : ' hover:bg-gray-50 hover:bg-opacity-5 ') +
                        ' w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5'
                    }
                >
                    <img
                        className=" w-3 md:w-4"
                        alt="Rakib' education"
                        src="./themes/Yaru/status/education.svg"
                    />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">
                        Education
                    </span>
                </div>
                <div
                    id="skills"
                    tabIndex="0"
                    onFocus={this.changeScreen}
                    className={
                        (this.state.active_screen === 'skills'
                            ? ' bg-ub-orange bg-opacity-100 hover:bg-opacity-95'
                            : ' hover:bg-gray-50 hover:bg-opacity-5 ') +
                        ' w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5'
                    }
                >
                    <img
                        className=" w-3 md:w-4"
                        alt="Rakib' skills"
                        src="./themes/Yaru/status/skills.svg"
                    />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div
                    id="projects"
                    tabIndex="0"
                    onFocus={this.changeScreen}
                    className={
                        (this.state.active_screen === 'projects'
                            ? ' bg-ub-orange bg-opacity-100 hover:bg-opacity-95'
                            : ' hover:bg-gray-50 hover:bg-opacity-5 ') +
                        ' w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5'
                    }
                >
                    <img
                        className=" w-3 md:w-4"
                        alt="Rakib' projects"
                        src="./themes/Yaru/status/projects.svg"
                    />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">
                        Projects
                    </span>
                </div>
                <div
                    id="resume"
                    tabIndex="0"
                    onFocus={this.changeScreen}
                    className={
                        (this.state.active_screen === 'resume'
                            ? ' bg-ub-orange bg-opacity-100 hover:bg-opacity-95'
                            : ' hover:bg-gray-50 hover:bg-opacity-5 ') +
                        ' w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5'
                    }
                >
                    <img
                        className=" w-3 md:w-4"
                        alt="Rakib's resume"
                        src="./themes/Yaru/status/download.svg"
                    />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
            </>
        );
    };

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div
                    onClick={this.showNavBar}
                    className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1"
                >
                    <div className=" w-3.5 border-t border-white"></div>
                    <div
                        className=" w-3.5 border-t border-white"
                        style={{ marginTop: '2pt', marginBottom: '2pt' }}
                    ></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div
                        className={
                            (this.state.navbar
                                ? ' visible animateShow z-30 '
                                : ' invisible ') +
                            ' md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20'
                        }
                    >
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen ubuntu-font">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutRakib;

export const displayAboutRakib = () => {
    return <AboutRakib />;
};

function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                <img
                    className="w-full"
                    src="./images/logos/bitmoji.png"
                    alt="Rakib Patel Logo"
                />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>
                    my name is <span className="font-bold">Rakib Hasan</span> ,
                </div>
                <div className="font-normal ml-1">
                    I'm a{' '}
                    <span className="text-pink-600 font-bold">
                        Web Developer!
                    </span>
                </div>
            </div>
            <div className=" my-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-pc">
                    Supremely passionate to constantly develop my soft skills
                    and grow up professionally. <br />
                    I have the capacity to think creatively and to test
                    something with analytical curiosity about new things. Still
                    primed for fresh challenges. <br />
                    To build a long-term career in the field of Software
                    Engineer, I can optimize my experience, knowledge, skills.
                    That will help me to make a difference with honesty dignity
                    with minimal supervision.
                    <br /> <br /> <br />
                </li>
                <li className=" mt-3 list-building">
                    {' '}
                    I enjoy building awesome softwares that solve practical
                    problems.
                </li>
                <li className=" mt-3 list-time">
                    {' '}
                    When I am not coding my next project, I like to spend my
                    time by traveling somewhere, customize my PC or watching{' '}
                    anime series.
                </li>
                <li className=" mt-3 list-star">
                    {' '}
                    And I also have interest in Deep Learning & Computer Vision!
                </li>
            </ul>
        </>
    );
}
function Education() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Daffodil International University
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">
                        2015 - 2020
                    </div>
                    <div className=" text-sm md:text-base">
                        Computer Science & Engineering
                    </div>
                    <div className="text-sm text-gray-300 font-bold mt-1">
                        CGPA &nbsp; 3 out of 4
                    </div>
                </li>
            </ul>
        </>
    );
}
function Skills() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    I've worked with a wide variety of programming languages &
                    frameworks.
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>
                        {' '}
                        My areas of expertise are <br />
                        <strong className="text-ubt-gedit-orange">
                            front-end development (React.js & Django Template
                            language)
                        </strong>
                        <br />
                        <strong className="text-ubt-gedit-orange">
                            back-end development (Djangp, Django REST framework)
                        </strong>
                    </div>
                </li>

                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>Here are my most frequently used</div>
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">
                    Languages & Tools
                </div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">
                    Frameworks & Libraries
                </div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img
                            className="m-1"
                            src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A"
                            alt="javascript"
                        />

                        <img
                            className="m-1"
                            src="http://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff"
                            alt="python"
                        />
                        <img
                            src="https://img.shields.io/badge/-Java-007396?style=flat&logo=java&logoColor=000000"
                            alt="Java"
                            className="m-1"
                        />

                        <img
                            className="m-1"
                            src="https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white"
                            alt="HTML5"
                        />

                        <img
                            className="m-1"
                            src="https://img.shields.io/badge/-Markdown-000000?style=flat&logo=markdown&logoColor=white"
                            alt="Markdown"
                        />

                        <img
                            src="https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff"
                            alt="git"
                            className="m-1"
                        />
                        <img
                            src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgreSQL&logoColor=ffffff"
                            alt="SQL"
                            className="m-1"
                        />
                        <img
                            src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=ffffff"
                            alt="Docker"
                            className="m-1"
                        />
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img
                            className="m-1"
                            src="https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=000000&style=flat"
                            alt="React"
                        />
                        <img
                            className="m-1"
                            src="https://img.shields.io/badge/Django-092E20?style=flat&logo=django&logoColor=white"
                            alt="Django"
                        />
                        <img
                            className="m-1"
                            src="https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white"
                            alt="Bootstrap"
                        />
                        <img
                            src="https://img.shields.io/badge/-Material_UI-0081CB?style=flat&logo=material-UI&logoColor=ffffff"
                            alt="Material UI"
                            className="m-1"
                        />

                        <img
                            className="m-1"
                            src="https://img.shields.io/badge/Redux-593D88?style=flat&logo=redux&logoColor=white"
                            alt="Rakib redux"
                        />

                        <img
                            src="https://img.shields.io/badge/pandas-150458?style=flat&logo=pandas&logoColor=white"
                            alt="pandas"
                            className="m-1"
                        />

                        <img
                            src="https://img.shields.io/badge/NumPy-013243?style=flat&logo=numPy&logoColor=white"
                            alt="NumPy"
                            className="m-1"
                        />

                        <img
                            src="https://img.shields.io/badge/scikit_learn-F7931E?style=flat&logo=scikit-learn&logoColor=white"
                            alt="scikit-learn"
                            className="m-1"
                        />

                        <img
                            src="https://img.shields.io/badge/OpenCV-5C3EE8?style=flat&logo=openCV&logoColor=white"
                            alt="OpenCV"
                            className="m-1"
                        />

                        <img
                            src="https://img.shields.io/badge/TensorFlow-FF6F00?style=flat&logo=tensorFlow&logoColor=white"
                            alt="TensorFlow"
                            className="m-1"
                        />

                        <img
                            src="https://img.shields.io/badge/Android_Studio-3DDC84?style=flat&logo=androidStudio&logoColor=white"
                            alt="Android Studio"
                            className="m-1"
                        />
                    </div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <span> And ofcourse,</span>{' '}
                    <img
                        className=" inline ml-1"
                        src="http://img.shields.io/badge/-Arch_Linux-1793D1?style=plastic&logo=archLinux&logoColor=ffffff"
                        alt="Arch Linux"
                    />{' '}
                    <span>!</span>
                </li>
            </ul>
        </>
    );
}

function Projects() {
    const project_list = [
        {
            name: 'Ecommerce project like Amazon or Daraz with complete features',
            date: 'Nov 2020',
            link: 'https://github.com/MonadWizard/django_ecommerce_project',
            description: [
                "all work done by specific branches with discriptions. all description added to branch's readme file ",
            ],
            domains: ['django'],
        },
        {
            name: '• React Django e-commerce site.',
            date: 'Jun 2021',
            link: 'https://github.com/MonadWizard/ecommerce_site_proshop_REACT-DJANGO',
            description: [
                "all work done by specific branches with discriptions. all description added to branch's readme file ",
            ],
            domains: [
                'DjangoREST',
                'React.js',
                'reactbootstrap',
                'firebase auth',
                'axios',
                'cors-headers',
            ],
        },
        {
            name: 'AI_ChatBot project, 3 type of chat-(Bangla Bot,Flask web Bot, English CLI bot.',
            date: 'Dec 2020',
            link: 'https://github.com/MonadWizard/AI_chatBot',
            description: [
                '3 chatbot complete with python by Deep Nural-Net apps. (1.Bangla_chatBot, 2.chatbot_in flask-framework, 3. demo nuralNet bot)',
            ],
            domains: ['python', 'tensorflow'],
        },
        {
            name: 'Online consult and Disease Prediction Based on Symptoms Using Machine Learning',
            date: 'Nov 2020',
            link: 'https://github.com/MonadWizard/Django_-Online-consult-and-Disease-Prediction-Based-on-Symptoms-Using-Machine-Learning',
            description: [
                'General Disease Prediction based on symptoms provided by patient- powered by Django & Machine Learning',
            ],
            domains: ['django', 'ML'],
        },
        {
            name: '• Human VS Bot, (car racing game). complete with Hybride NuralNet, implement in python. (Python,tensorflow,pyglet)',
            date: 'Sep 2020',
            link: 'https://github.com/Rakib9patel/Improve-Codeforces',
            description: [
                'Django web application to suggest practice problems from the areas in which the user struggles to get pass in code-forces.',
            ],
            domains: ['python', 'tensorflow', 'pyglet'],
        },
        {
            name: '• Sort funny project as( snapping text to image, CLI voice assistant, etc...)',
            date: 'Dec 2019',
            link: 'https://github.com/MonadWizard/roomProjectContest',
            description: ['funny noob try on free time in varsity life'],
            domains: ['python'],
        },
    ];

    const tag_colors = {
        javascript: 'yellow-300',
        firebase: 'red-600',
        firestore: 'red-500',
        'chrome-extension': 'yellow-400',
        flutter: 'blue-400',
        dart: 'blue-500',
        'react-native': 'purple-500',
        html5: 'pink-600',
        sass: 'pink-400',
        tensorflow: 'yellow-600',
        django: 'green-600',
        python: 'green-200',
        'codeforces-api': 'gray-300',
    };

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            {project_list.map((project, index) => {
                return (
                    <a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex w-full flex-col px-4"
                    >
                        <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                            <div className="flex flex-wrap justify-between items-center">
                                <div className=" text-base md:text-lg">
                                    {project.name.toLowerCase()}
                                </div>
                                <div className="text-gray-300 font-light text-sm">
                                    {project.date}
                                </div>
                            </div>
                            <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                {project.description.map((desc, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className="list-disc mt-1 text-gray-100"
                                        >
                                            {desc}
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                {project.domains
                                    ? project.domains.map((domain, index) => {
                                          let tag_color = tag_colors[domain];
                                          return (
                                              <span
                                                  key={index}
                                                  style={{ borderWidth: '1pt' }}
                                                  className={`px-1.5 py-0.5 w-max border-${tag_color} text-${tag_color} m-1 rounded-full`}
                                              >
                                                  {domain}
                                              </span>
                                          );
                                      })
                                    : null}
                            </div>
                        </div>
                    </a>
                );
            })}
        </>
    );
}
function Resume() {
    return (
        <iframe
            className="h-full w-full"
            src="./files/Software Engineer_Rakib-Hasan_CV.pdf"
            title="Rakib Hasan resume"
            frameBorder="0"
        ></iframe>
    );
}
