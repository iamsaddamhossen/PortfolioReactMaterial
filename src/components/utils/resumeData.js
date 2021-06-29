import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { AssessmentOutlined, Language, WebOutlined, YouTube } from '@material-ui/icons';


export default {
    name: 'Saddam Hossen.',
    title: 'Full Stack Developer',
    birthday: '31 December 1992',
    email: 'saddam.cse@gmail.com',
    address: 'Dhaka, Bangladesh',
    phone: '+8801511687524',

    socials: {
        Facebook: {
            link: 'https://www.facebook.com',
            text: 'SaddamIsCoding',
            icon: <FacebookIcon />,
        },
        Twitter: {
            link: 'https://www.facebook.com',
            text: 'MyTwitter',
            icon: <TwitterIcon />,
        },
        Linkedin: {
            link: 'https://www.facebook.com',
            text: 'MyLinkedIn',
            icon: <LinkedInIcon />,
        },
        Github: {
            link: 'https://www.facebook.com',
            text: 'MyGitHub',
            icon: <GitHubIcon />,
        }
    },

    about: "Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced frequently use unsatiable devonshire get. They why quit gay cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position. Breakfast as zealously incommode do agreeable furniture. One too nay led fanny allow plate. \n\n Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat. Her bachelor honoured perceive securing but desirous ham required. Questions deficient acuteness to engrossed as. Entirely led ten humoured greatest and yourself. Besides ye country on observe. She continue appetite endeavor she judgment interest the met. For she surrounded motionless fat resolution may.",

    experiences: [
        {
            title: 'Work One',
            date: '2019-Present',
            description: 'Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.',
        },

        {
            title: 'Work Two',
            date: '2019-05-01',
            description: 'Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.',
        },

        {
            title: 'Work Three',
            date: '2019-05-01',
            description: 'Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.',
        },
    ],

    educations: [
        {
            title: 'Education One',
            date: '2019-Present',
            description: 'Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.',
        },

        {
            title: 'Education Two',
            date: '2019-05-01',
            description: 'Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.',
        },

        {
            title: 'Education Three',
            date: '2019-05-01',
            description: 'Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.',
        },
    ],

    services: [
        {
            title: 'Web Development',
            description: 'I have a been a badaas for 10 years',
            icon: <WebOutlined />
        },
        {
            title: 'Branding Identity',
            description: 'We will make you a brand that is catchy and leaves a trace.',
            icon: <AssessmentOutlined />
        },
        {
            title: 'Illustrator',
            description: 'I have been working on illustration design for 6 years.',
            icon: <WebOutlined />
        },
        {
            title: 'Fast Delivery',
            description: 'I deliver your business as fast as possible.',
            icon: <WebOutlined />
        },
    ],

    skills: [
        {
            title: 'FRONT-END',
            description: ['ReactJS', 'JavaScript', 'TypeScript', 'Bootstrap', 'Material UI']
        },
        {
            title: 'BACK-END',
            description: ['C#', 'ASP.Net Core', 'Node JS', 'PHP']
        },

        {
            title: 'DATABASES',
            description: ['Firebases', 'Ms Sql Server', 'MySQL', 'MongoDB']
        },
        {
            title: 'SOURCE-CONTROL',
            description: ['Git', 'Github', 'Gitlab']
        },
    ],

    projects: [
        {
            tag: 'React',
            images: [
                'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
                'https://picsum.photos/id/1019/250/150/'
            ],

            title: 'Project 1',
            caption: 'A short description',
            description: 'This is my project description. It should be filled soon.',
            links: [
                { link: 'https://www.google.com', icon: <YouTube /> },
                { link: 'https://www.google.com', icon: <GitHubIcon /> },
                { link: 'https://www.google.com', icon: <Language /> },
            ]
        },

        {
            tag: 'ASP.NET',
            images: [
                'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
                'https://picsum.photos/id/1019/250/150/'
            ],
            title: 'Project 2',
            caption: 'A short description',
            description: 'This is my project description. It should be filled soon.',
            links: [
                { link: 'https://www.google.com', icon: <YouTube /> },
                { link: 'https://www.google.com', icon: <GitHubIcon /> },
                { link: 'https://www.google.com', icon: <Language /> },
            ]
        },

        {
            tag: 'C#',
            images: [
                'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
                'https://picsum.photos/id/1019/250/150/'
            ],
            title: 'Project 3',
            caption: 'A short description',
            description: 'This is my project description. It should be filled soon.',
            links: [
                { link: 'https://www.google.com', icon: <YouTube /> },
                { link: 'https://www.google.com', icon: <GitHubIcon /> },
                { link: 'https://www.google.com', icon: <Language /> },
            ]
        },

        {
            tag: 'PHP',
            images: [
                'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
                'https://picsum.photos/id/1019/250/150/'
            ],
            title: 'Project 4',
            caption: 'A short description',
            description: 'This is my project description. It should be filled soon.',
            links: [
                { link: 'https://www.google.com', icon: <YouTube /> },
                { link: 'https://www.google.com', icon: <GitHubIcon /> },
                { link: 'https://www.google.com', icon: <Language /> },
            ]
        },
    ],

    blogs: [
        {
            tag: 'React',
            images: [
                'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
                'https://picsum.photos/id/1019/250/150/'
            ],
            title: 'How to become a web developer?',
            caption: 'Web Design',
            description: 'These gentlemen are always still sitting there eating their breakfasts.',
            date: '12-June-2021',
            links: [
                { link: 'https://www.google.com', icon: <YouTube /> },
                { link: 'https://www.google.com', icon: <GitHubIcon /> },
                { link: 'https://www.google.com', icon: <Language /> },
            ]
        },

        {
            tag: 'ASP.NET',
            images: [
                'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
                'https://picsum.photos/id/1019/250/150/'
            ],
            title: 'How to become a web developer?',
            caption: 'Web Development',
            description: 'These gentlemen are always still sitting there eating their breakfasts.',
            date: '12-June-2021',
            links: [
                { link: 'https://www.google.com', icon: <YouTube /> },
                { link: 'https://www.google.com', icon: <GitHubIcon /> },
                { link: 'https://www.google.com', icon: <Language /> },
            ]
        },

        {
            tag: 'C#',
            images: [
                'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
                'https://picsum.photos/id/1019/250/150/'
            ],
            title: 'How to become a web developer?',
            caption: 'Database',
            description: 'These gentlemen are always still sitting there eating their breakfasts.',
            date: '12-June-2021',
            links: [
                { link: 'https://www.google.com', icon: <YouTube /> },
                { link: 'https://www.google.com', icon: <GitHubIcon /> },
                { link: 'https://www.google.com', icon: <Language /> },
            ]
        },

        {
            tag: 'PHP',
            images: [
                'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
                'https://picsum.photos/id/1019/250/150/'
            ],
            title: 'How to become a web developer?',
            caption: 'Front End',
            description: 'These gentlemen are always still sitting there eating their breakfasts.',
            date: '12-June-2021',
            links: [
                { link: 'https://www.google.com', icon: <YouTube /> },
                { link: 'https://www.google.com', icon: <GitHubIcon /> },
                { link: 'https://www.google.com', icon: <Language /> },
            ]
        },

        
        {
            tag: 'PHP',
            images: [
                'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
                'https://picsum.photos/id/1019/250/150/'
            ],
            title: 'How to become a web developer?',
            caption: 'Mern Stack',
            description: 'These gentlemen are always still sitting there eating their breakfasts.',
            date: '12-June-2021',
            links: [
                { link: 'https://www.google.com', icon: <YouTube /> },
                { link: 'https://www.google.com', icon: <GitHubIcon /> },
                { link: 'https://www.google.com', icon: <Language /> },
            ]
        },

        
        {
            tag: 'PHP',
            images: [
                'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
                'https://picsum.photos/id/1019/250/150/'
            ],
            tagline: 'General',
            title: 'How to become a web developer?',
            caption: 'Mong DB',
            description: 'These gentlemen are always still sitting there eating their breakfasts.',
            date: '12-June-2021',
            links: [
                { link: 'https://www.google.com', icon: <YouTube /> },
                { link: 'https://www.google.com', icon: <GitHubIcon /> },
                { link: 'https://www.google.com', icon: <Language /> },
            ]
        },
    ],

}