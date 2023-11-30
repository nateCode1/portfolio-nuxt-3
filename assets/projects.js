import skills from './skills.js'

//dates are expressed as [yyyy,mm]

export default {
  retiremint: {
    name: 'Retiremint',
    jobTitle: 'Junior Developer',
    featured: true,
    skills: [
      skills.aws,
      skills.vueJS,
      skills.nuxtJS,
      skills.vuetify,
      skills.reactJS,
      skills.mui,
      skills.github,
    ],
    startDate: [2022, 3],
    endDate: [2023, 9],
    link: 'https://retiremint.ca',
    shortDescription:
      'Worked as part of a 3-person team in a startup environment developing a web-based product. Used Vue JS and Vuetify to create dynamic device-reactive pages. Created multiple full-stack systems including google single sign-on and an integrated tool to poll users.',
    longDescription: `Retiremint is a startup aimed at being an all-in-one retirement planning tool that encompasses all areas of retirement. I worked there in the summer of 2022 and 2023 as a part of a three person team.
    I joined the startup when they were working on the site beta using React JS and Material UI. After the site beta was published we switched to using Vue JS, Nuxt, and Vuetify. My duties included taking mockups and creating site pages based on them that work on all screen sizes. Pages often included dynamic elements including animated and reactive components. Developed a template to allow 12 pages for different areas of retirement to be generated with just JSON. Ended my first summer working for Retiremint by creating an internal tool to allow anyone to upload new content to a database, which would automatically be added to the site.
    In my second year working with Retiremint I continued doing my front-end work, but also began working in more of a back-end and design role. I implemented numerous full-stack features from start to finish including: Google single sign-on, a system to poll site users, and an automated mailing list that doesn't require an account.`,
    images: ['/retiremint/retiremintHome.png', '/retiremint/aiop.PNG', '/retiremint/learningCentre.PNG'],
  },
  walmart: {
    name: 'Walmart',
    jobTitle: 'E-Commerce Associate',
    hideAsProject: true,
    startDate: [2020, 5],
    endDate: [2022, 4],
    shortDescription:
      'Joined the team in response to a 1000% increase in demand brought on by Covid-19. Began working in order fulfillment and customer service, before transitioning to lead a small team that oversaw service during off-peak hours.',
    // images: ['v.png'],
  },
  fencingData: {
    name: 'Fencing Data Webscraper',
    featured: true,
    startDate: [2023, 5],
    endDate: [2023, 9],
    skills: [skills.nodeJS, skills.mongoDB, skills.javascript],
    shortDescription:
      "Partnered with Queen's Fencing Club to create a program to webscrape tournament results and generate advanced statistics. Solo developed a program to compile statistics and export them into an excel-readable format using Node JS and Mongo DB. Guidance provided by PhD math student Luke Steverango.",
    longDescription: `During my first year as a member of Queen's Fencing Team, I noticed that stats were manually computed from data on a website which took approximately 50 hours each season. Seeing the potential to save a lot of time, I offered to automate this problem using a webscraper.
    Using Node JS and selenium, I created a way to find all the data on a given person from a tournament, then store it in Mongo DB. With the help of PhD math student Luke Steverango, I created a way to turn the basic information into advanced statistics. The system is currently in use by the team, and has allowed more advanced statistics to be computed than is humanly feasible. So far in the 2023 season this system has saved over 30 hours.`,
    images: ['/qfcStats/main.png', '/qfcStats/stats.png',  '/qfcStats/fetch.png'],
  },
  pantryPilot: {
    name: 'Food App',
    startDate: [2023, 2],
    endDate: [2023, 5],
    skills: [
      skills.reactNative,
      skills.figma,
      skills.nativebase,
      skills.typescript,
      skills.github,
    ],
    shortDescription:
      "Created as part of my first-year studies at Queen's. This cross-platform app was designed in Figma, then developed using React Native. It allows students to track whats in their pantry, then reccomends recipes that use the food they already have. Available on the google play store and apple app store.",
    longDescription: `During my first year design course we were tasked with coming up with and creating innovation that used technology. We came up with Pantry Pilot, an app to help students cope with having to cook for themselves. It allows students to track what's in their pantry, and then recommend them recipes to make with what they have. It also helps to prevent food loss by tracking the age of foods in the pantry.
    The app was designed and developed by me and one other student. It was designed in figma, then developed using React Native and Nativebase.IO. The app uses Spoonacular API for all of its food and recipe data. The app was built using Expo, and published to the Apple App Store and Google Play Store.`,
    images: ['/pantryPilot/playPage.png'],
  },
  campusCanvas: {
    name: 'Interactive Campus Map',
    startDate: [2023, 9],
    ongoing: true,
    skills: [
      skills.nodeJS,
      skills.kubernetes,
      skills.mqtt,
      skills.sql,
      skills.docker,
      skills.javascript,
      skills.github,
    ],
    shortDescription:
      'Working with fellow student David Lafleur created a containerized backend for an interactive map of campus that allows students to draw artwork one pixel at a time based on their location. Front-end is currently web-based, with plans to migrate to a flutter app.',
    longDescription: `At the start of my second year I did a development sprint on an interactive campus map that allows students to "paint" pixels on a digital map of their campus. I worked on the project with David Lafleur, and together we build a containerized backend to allow the app to scale quickly if needed. The app used MQTT and Node JS along with an SQL database in order to both save the state of the map, but also to provide live updates as pixels were placed. Challenges arose in transmitting display data for millions of colours within an acceptable loading time, but by optimizing SQL queries, and representing pixels with less data, load times were reduced to under 50ms on average.
    This project is still in active development, with plans to replace the current web-based UI with a flutter app, to allow the integration of location services to improve user engagement. User authentication is also being developed, using a proprietary system to allow students to sign-in using their school ID.`,
  },
  nathanFM: {
    name: 'RFID Music Player',
    startDate: [2023, 6],
    endDate: [2023, 8],
    skills: [
      skills.mqtt,
      skills.javascript,
      skills.python,
      skills.electricalSystems,
    ],
    shortDescription:
      'Using a Raspberry Pi 0 created a device to read RFID tags, then play the corresponding album on a web app accessible from any computer. Created a complementary PyTube application to automatically download albums and generate corresponding JSON files.',
  },
  aStar: {
    name: 'A* Pathfinding Demo',
    date: [2022, 7],
    skills: [skills.javascript],
    link: '/aStar/index.html',
    shortDescription:
      'A very simple pure JS implementation of the A star pathfinding algorithm. Created using HTML canvas. Supports customizable environments and movement patterns.',
    images: ['/aStar/king.png', '/aStar/std.png', '/aStar/knight.png']
  },
  deobf: {
    name: 'HTML Canvas Game',
    date: [2022, 2],
    skills: [skills.javascript],
    shortDescription:
      'Created as my final project for my Grade 12 computer science course. A platforming game written entirely using javascript and HTML canvas. Written using the principles of object oriented programming.',
    link: '/deobf/page3.html',
    images: ['/deobf/main.png', '/deobf/lv2.png', '/deobf/lv6.png',]
  },
  pacManPumpkin: {
    name: 'Pac Man Pumpkin',
    date: [2021, 10],
    skills: [skills.cpp, skills.electricalSystems],
    shortDescription:
      'Created for an Instructables competition, a team of friends and I converted a pumpkin into a console that can play pac man. The device ran off an Arduino, and used an LED matrix. I programmed a majority of the game logic, using the Arduino language, a variation on c++.',
    link: 'https://www.instructables.com/Make-a-Pumpkin-Into-a-Pacman-Playing-Game-Console/',
    images: ['/pacmanPumpkin/main.png', '/pacmanPumpkin/meCarve.png', '/pacmanPumpkin/matrix.jpg',]
  },
  itch: {
    name: 'Itch.io Page',
    startDate: [2021, 2],
    ongoing: true,
    skills: [skills.cs, skills.unity],
    shortDescription:
      'My itch.io page. Currently contains three solo-developed games, two of which are from game jams. All games were made using Unity 2D. I still work on game development from time to time, and will update the itch page as projects are finished.',
    link: 'https://shrek5x.itch.io/',
  },
  itch: {
    name: 'June Blender 3D Challenge',
    startDate: [2023, 6],
    endDate: [2023, 6],
    skills: [skills.blender],
    images: ['/blendJune/room.png', '/blendJune/house.png', '/blendJune/contraption.gif', '/blendJune/musg.png', '/blendJune/kayak.png', '/blendJune/sculpt.png', '/blendJune/ch&t.png', '/blendJune/sink.png',],
    shortDescription:
      'In June of 2023 I decided I wanted to learn 3D modelling, as all I previously knew was CAD tools. I challenged myself to create one render each day of the month, and to try to learn something new with each one. Forcing myself to create something each day was a great way to encourage learning and experimentation.',
    longDescription: `During the month of June 2023 I took on a challenge to create a render each day using Blender3D, and to try to learn something new with each one. The one day nature of each rendering meant that I would only spend 2-4 hours on each render, so if an experiment failed, I didn't lose too much time.
    During the month I worked learned the fundamentals of many skills including: hard-body modelling, lighting, sculpting, retopology, procedural geometry, animation, physics simulation, and procedural textures. Some of the my favourites are shown below:`,
  },
}
