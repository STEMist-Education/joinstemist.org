import { resolveTeamImage } from "../../imageHelpers";
import { ExtendedPerson } from "../../types";

const people: ExtendedPerson[] = [
  {
    name: "Steve Yang",
    officerRoles: ["President"],
    teacherRoles: ["Biology", "Physical Science"],
    curriculumRoles: {
      phys: ["Basic Chemistry", "Chemical Reactions", "Earth Science"],
      bio: ["Chemistry of Life"],
    },
    image: resolveTeamImage("Steve Yang"),
    description:
      "Steve Yang is a sophomore at Lynbrook High who focuses on Earth Science and Chemistry.  When not reading textbooks, he likes to conduct synthesis reactions, run five miles a day, and talk with friends.",
    qualifications: [
      "Four Year Science Olympiad Competitor",
      "Fifteen+ Science Olympiad Medals, Including 2nd at States",
      "Varsity Team Ocean Science Bowl",
      "Third Place Sea Lion Bowl Regionals",
      "Two Year Science Bowl Competitor",
      "Over Two Years of Teaching Experience",
    ],
    email: "steveyang@joinstemist.org",
  },
  {
    name: "Justin Zhang",
    officerRoles: ["Secretary", "Director of Hackathon"],
    teacherRoles: ["Computer Science"],
    curriculumRoles: {
      cs: ["C++"],
    },
    image: resolveTeamImage("Justin Zhang"),
    description:
      "Justin Zhang is a computer science and math enthusiast who codes in his free time. If he's not playing video games or watching Youtube, he's busy studying for his upcoming exams.",
    qualifications: [
      "USACO Silver",
      "First place winner in many CA Hackathons",
      "Two Year Coder",
    ],
    email: "justinzhang20711@gmail.com",
  },
  {
    name: "Isaac Sun",
    officerRoles: ["Treasurer", "Director of Outreach"],
    teacherRoles: ["Math"],
    curriculumRoles: {
      math: ["Advanced Algebra"],
    },
    image: resolveTeamImage("Isaac Sun"),
    description:
      "Isaac Sun is a sophomore at Lynbrook High School who enjoys doing math, especially algebra and combinatorics. Outside of school-related work, he also likes to play chess and read novels.",
    qualifications: [
      "AIME Qualifier",
      "Berkeley Math Tournament Honorable Mentions",
      "AP Calculus BC Freshman Student",
    ],
    email: "isaacsun@joinstemist.org",
  },
  {
    name: "Johnathan Kao",
    teacherRoles: ["Biology"],
    curriculumRoles: {
      bio: ["Evolution", "Ethology"],
    },
    image: resolveTeamImage("Johnathan Kao"),
    description:
      "Johnathan Kao is a sophomore at Lynbrook High School who specializes in astronomy and oceanography. He likes to read and play videogames in his free time, as well as preparing for the next competition whatever it may be.",
    qualifications: [
      "Science Bowl 5th Nationals",
      "Biology Bowl 2nd Nationals",
      "Ocean Bowl 2nd Regionals",
      "Geography Bee State Qualifier",
    ],
  },
  {
    name: "Snehil Kakani",
    officerRoles: ["Director of Technology", "Co-Director of WEBS Studio"],
    teacherRoles: ["Computer Science"],
    curriculumRoles: {
      cs: ["Javascript", "Python"],
    },
    image: resolveTeamImage("Snehil Kakani"),
    description:
      "Snehil Kakani is a sophomore at Lynbrook High who loves web development. He enjoys working on user interfaces and backend APIs. He's also a graphic designer, drummer, actor, and more!",
    qualifications: [
      "Full Stack Web Developer",
      "Honorable Mention Synopsys Science Fair",
      "Advanced Javascript and React Developer",
      "Skilled with Python and Node.js",
    ],
    email: "snehilkakani@joinstemist.org",
  },
  {
    name: "Selena Yang",
    officerRoles: ["Curriculum Director"],
    image: resolveTeamImage("Selena Yang"),
    teacherRoles: ["Head of Biology", "Math", "Biology"],
    curriculumRoles: {
      math: ["Algebra", "Geometry"],
      bio: ["Head", "Molecular and Cell Biology", "Genetics"],
    },
    description:
      "Selena is a sophomore at Lynbrook who enjoys reading biology, especially oncology. Aside from going down wiki rabbit holes, she also draws unnecessarily detailed diagrams, plays the piano, and struggles through math problems.",
    qualifications: [
      "Two Time AIME Qualifier",
      "Two Time Semifinalist USABO",
      "Fifth Place Science Bowl Nationals",
      "First Place Science Bowl Regionals",
      "Second and Third Place Science Olympiad",
      "Top 50 USABO",
    ],
    email: "syang.yy@gmail.com",
  },
  {
    name: "Anish Bhethanabotla",
    officerRoles: ["Curriculum Director"],
    teacherRoles: ["Head of Physical Science", "Physical Science"],
    curriculumRoles: {
      phys: ["Head", "Electricity and Magnetism", "Stellar Evolution"],
    },
    image: resolveTeamImage("Anish Bhethanabotla"),
    description:
      "Anish is a sophomore at Lynbrook High School who specializes in Physics and Computer Science. He enjoys listening to music.",
    qualifications: [
      "Two time First Place Synopsys Science Fair",
      "USAAAO Semifinalist",
      "Top 30 Broadcom Finalist",
      "Most Innovative Award California Invention Convention",
      "Community Benefit Award National Invention Convention",
      "Science Olympiad Team C Astronomy",
      "Multiple time Hackathon winner",
    ],
    email: "abhethan631@gmail.com",
  },
  {
    name: "Sanya Badhe",
    officerRoles: ["Curriculum Director"],
    teacherRoles: ["Head of Math", "Math"],
    curriculumRoles: {
      math: ["Head", "Algebra", "Geometry", "Advanced Geometry"],
    },
    image: resolveTeamImage("Sanya Badhe"),
    description:
      "Sanya Badhe is a sophomore at Lynbrook who focuses on Physics and Math. Outside of school, you can find her playing basketball (for fun), painting, or playing with her friends' dogs.",
    qualifications: [
      "46 Medals in Science Olympiad",
      "1st Place Regionals Science Olympiad",
      "Second Place NorCAL States Science Olympiad",
      "Perfect Score MOEMS",
      "Perfect Score Math Kangaroo",
      "Honor Roll AMC 10",
      "Distinguished Honor Roll AMC 8",
      "2 Time AIME Qualifier",
      "AIME Score of 7",
      "Top 10 Individual Round Berkeley Math Tournament",
      "Distinguished Honor Roll Berkeley Math Tournament",
      "USACO Silver Competitor",
    ],
    email: "sanyabadhe@joinstemist.org",
  },
  {
    name: "Shanker Ram",
    officerRoles: ["Curriculum Director"],
    teacherRoles: ["Head of Computer Science", "Computer Science"],
    curriculumRoles: {
      cs: ["Head", "Python"],
    },
    image: resolveTeamImage("Shanker Ram"),
    description:
      "Sophomore at Lynbrook High School, Specializes in Math, Computer Science, and Data Science, Likes watching the NBA, in specific the Warriors",
    qualifications: [
      "USACO Silver",
      "Knows Python, Java, C++",
      "Experienced in ML with supervised learning and reinforcement learning",
      "GitHub Pro",
      "Codeforces Specialist Rank",
      "Multiple time Hackathon winner",
      "Experience with Information Theory",
    ],
    email: "shankerram@joinstemist.org",
  },
  {
    name: "Jianyu Wang",
    image: resolveTeamImage("Jianyu Wang"),
    description:
      "Jianyu Wang is a chemistry fan and a random-facts-rookie who enjoys Wikipedia and harnessing the limitless potential of unnecessary stress.",
  },
  {
    name: "Harold Wang",
    teacherRoles: ["Biology"],
    curriculumRoles: {
      bio: ["Botany"],
    },
    image: resolveTeamImage("Harold Wang"),
    description:
      "Harold Wang is a sophomore at Lynbrook High school who likes science. In his free time he plays games.",
    qualifications: ["USABO Semifinalist"],
  },
  {
    name: "Joshua Li",
    teamRoles: ["Hackathon"],
    image: resolveTeamImage("Joshua Li"),
    description:
      "Joshua is a sophomore at Lynbrook who enjoys all behind the curtain roles. He also likes exercising and gaming in his free time.",
  },
  {
    name: "Nathan Ye",
    teamRoles: ["Outreach", "Hackathon", "WEBS"],
    image: resolveTeamImage("Nathan Ye"),
    description:
      "Nathan is a high school sophomore that loves coding and football.",
  },
  {
    name: "Rohan Fernandes",
    teamRoles: ["Intern", "Technology", "Website", "Hackathon"],
    teacherRoles: ["Computer Science", "Intern"],
    curriculumRoles: {
      cs: ["Intern", "Python", "Javascript"],
    },
    image: resolveTeamImage("Rohan Fernandes"),
    description:
      "Rising Freshman at Lynbrook Highschool, Likes to code and watch the NBA in his spare time and likes math.",
    qualifications: [
      "Multiple time Hackathon winner",
      "USACO member",
      "Three years of CS Competitive Coding",
      "Knowledgable in NodeJS and React",
      "CA Synposis Science Fair Participant",
    ],
  },
  {
    name: "Sophie Mak",
    teamRoles: ["Outreach", "Hackathon", "WEBS"],
    image: resolveTeamImage("Sophie Mak"),
    description:
      "Sophie Mak is a sophomore at Lynbrook High School that enjoys writing and networking.  In her spare time, she bakes and binge-reads webtoons.",
  },
  {
    name: "Sriman Ratnapu",
    officerRoles: ["Director of HR", "Co-Director of WEBS Studio"],
    image: resolveTeamImage("Sriman Ratnapu"),
    description:
      "Sriman is a high school sophmore at Lynbrook. He likes to go to the zoo, read books and play video games. His favorite animal is the river otter.",
    email: "srimanratnapu@joinstemist.org",
  },
  {
    name: "Annie Li",
    teamRoles: ["Graphic Design", "Outreach"],
    image: resolveTeamImage("Annie Li"),
    description:
      "Annie Li is a Lynbrook sophomore who either makes digital art in her free time or is watching analysis videos on horror series.",
  },
  {
    name: "Valerie Shu",
    teamRoles: ["Graphic Design", "Outreach", "Hackathon", "WEBS"],
    image: resolveTeamImage("Valerie Shu"),
    description:
      "Valerie is a sophomore at Lynbrook High who enjoys teaching and the outdoors. She reads avidly, writes intermittently, draws digitally, and owns 2 rabbits.",
  },
  {
    name: "Sarvesh Madullapalli",
    teamRoles: ["Intern", "Technology", "Hackathon"],
    image: resolveTeamImage("Sarvesh Madullapalli"),
    description:
      "Sarvesh knows Python, Java, web development, and some C++. He has won 4 hackathons and is a very good team leader. He knows and contributes to almost all popular libraries, specializing in Python.",
    qualifications: [
      "Won 5 Hackathons",
      "Top 2% in LHD",
      "Well versed with servers and APIs",
      "Familiar with lots of libraries and programming languages",
    ],
  },
  {
    name: "Vyaas Baskar",
    teacherRoles: ["Physical Science", "Intern"],
    curriculumRoles: {
      phys: ["Intern", "Electricity and Magnetism"],
    },
    image: resolveTeamImage("Vyaas Baskar"),
    description:
      "Vyaas Baskar is a rising freshman who enjoys physics, chemistry, math, and programming. He has also been part of a robotics team for over four years. For fun, he creates games in Unity, and plays basketball with friends.",
    qualifications: [
      "Third Year Science Olympiad",
      "Consistent Science Olympiad Medal Winner",
      "Top 25 in National MYSO tournament in Engineering and Flight",
      "Circuit Designer",
    ],
  },
  {
    name: "Chaas Kandregula",
    teacherRoles: ["Biology", "Intern"],
    curriculumRoles: {
      bio: ["Intern", "Anatomy and Physiology"],
    },
    image: resolveTeamImage("Chaas Kandregula"),
    description:
      "Chaas is a rising freshman who loves chemistry and is very interested in math and science. Currently, he's on the Miller Science Bowl Team 1 and the Science Olympiad Black Team.",
  },
  {
    name: "Daniel Kim",
    teacherRoles: ["Computer Science", "Math"],
    curriculumRoles: {
      cs: ["C++"],
      math: ["Number Theory"],
    },
    image: resolveTeamImage("Daniel Kim"),
    description:
      "Daniel Kim is a sophomore at Lynbrook who enjoys studying math, computer science, and physics. When he is not studying or doing homework, he likes to swim and talk to friends.",
    qualifications: ["USACO Gold Competitor", "AIME Qualifier"],
  },
  {
    name: "Aryan Patnaik",
    teacherRoles: ["Biology"],
    curriculumRoles: {
      bio: ["Ecology"],
    },
    image: resolveTeamImage("Aryan Patnaik"),
    description:
      "Aryan is a rare specimen of the human race, despite his name being used by hundreds of other homo sapiens. He teaches ecology, and when he's not studying (aka watching wild kratts), he's on the run with his school's track team, striving for olympic gold.",
    qualifications: [
      "4 Time Science Olympiad Champion",
      "Second Place State Competition Science Olympiad",
    ],
    email: "aryanpatnaik@joinstemist.org",
  },
  {
    name: "Kasturi Kirubaharan",
    teacherRoles: ["Biology"],
    curriculumRoles: {
      bio: ["Molecular and Cell Biology", "Genetics"],
    },
    image: resolveTeamImage("Kasturi Kirubaharan"),
    description:
      "Kasturi Kirubaharan is a sophomore at Lynbrook High School who focuses on genetics and cell biology. During her free time she likes to read and spend time with her friends.",
    qualifications: [
      "Algebra and Arithmetic Tutor",
      "Algebra 2 Trig Student",
      "Science Olympiad Heredity Competitor",
    ],
  },
  {
    name: "Idhant Rao",
    teacherRoles: ["Math"],
    curriculumRoles: {
      math: ["Counting"],
    },
    image: resolveTeamImage("Idhant Rao"),
    description:
      "Idhant Rao is a math instructor who loves to study various fields of mathematics. He loves to discuss all things math.",
    qualifications: ["Former Math Kangaroo Participant"],
  },
  {
    name: "Sarthak Ratan",
    teamRoles: ["Outreach", "HR"],
    image: resolveTeamImage("Sarthak Ratan"),
    description:
      "Sarthak Ratan is a sophomore at Lynbrook high who enjoys science, designing, and business. When he isn’t working he loves swimming, playing the guitar, or talking to friends.",
  },
  // {
  //   name: "Yash Singh",
  //   teamRoles: ["Technology", "Website", "Intern"],
  //   description:
  //     "Yash Singh is a computer science and math fanatic who codes in his free time and can often be found in hackathons. He likes to go on hikes and play basketball when he is not studying.",
  //   image: resolveTeamImage("Yash Singh"),
  //   qualifications: [
  //     "Advanced TypeScript and C++ Developer",
  //     "Front-end Web Developer",
  //     "Open Source Contributor and Maintainer",
  //     "Mermaid.js Core Maintainer",
  //     "Schema-Inspector Maintainer",
  //   ],
  // },
  {
    name: "Aadharsh Rajkumar",
    description:
      "Aadharsh Rajkumar is a sophomore at Lynbrook High School, and is very passionate about computer science. In his free time you can find him reading or playing the drums or guitar.",
    image: resolveTeamImage("Aadharsh Rajkumar"),
    teacherRoles: ["Computer Science"],
    curriculumRoles: {
      cs: ["Python"],
    },
    qualifications: ["Multiple Time Hackathon Winner"],
  },
  {
    name: "Abhiram Manuguri",
    description:
      "Abhiram Manuguri is known best for being passionate about astronomy, spends his free time researching random stars and noting down interesting objects, and is currently drafting a research paper on a double star system.",
    image: resolveTeamImage("Abhiram Manuguri"),
    teacherRoles: ["Physical Science"],
    curriculumRoles: {
      phys: ["Astronomy"],
    },
  },
  {
    name: "Rohil Gupta",
    teacherRoles: ["Intern", "Biology"],
    description:
      "Rohil Gupta is a biology enthusiast, inspired by his mom, who is a doctor, and his brother, who worked on research for cancer treatment. In his free time, he loves to play many instruments, and his dog, Bruno.",
    curriculumRoles: {
      bio: ["Intern"],
    },
    image: resolveTeamImage("Rohil Gupta"),
  },
];
export default people;
