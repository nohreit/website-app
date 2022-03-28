function Admin() {
  return {
    firstName: "Yunthar",
    lastName: "Leecaon",
    interest: "Web development, Android development",
    skill: {
      proficency: "Java, HTML, CSS, Bootstrap, SQL, MySQL, PostgreSQL",
      exposure: "Python, Kotlin, Javascript, ReactJS, NodeJS, Firebase",
      tool:
        "IntelliJ IDEA, PyCharm IDEA, Android SDK, Visual Studio Code, " +
        "MS Visual Studio, Git, Github, Windows, Linux, macOS, Tableau",
    },
    education: {
      school_1: {
        name: "Lehman College",
        degree: "Bachelor of Science",
        major: "Computer Science",
        gpa: 3.5,
        graduation: new Date(2022, 0),
        duration: { start: new Date(2018, 7), end: new Date(2022, 0) },
      },
    },
    work_exp: {
      work_1: {
        organization: "Lehman College",
        office_1: {
          fullName: "Math Computer Science Learning Center",
          short: "MCSLC",
          position: "Tutor",
          description: {
            a:
              "Helping students in Mathematics and Computer Science by breaking down " +
              "complicated concepts into simpler everyday ideas using Java and Python, improving " +
              "their understanding of concepts, and raising grades by two letter grades on average.",
          },
        },
        office_2: {
          fullName: "Pathways to Student Stem Success",
          short: "PTS3",
          position: "Tutor",
          description: {
            a:
              "Helping students in Mathematics and Computer Science by breaking down " +
              "complicated concepts into simpler everyday ideas using Java and Python, improving " +
              "their understanding of concepts, and raising grades by two letter grades on average.",
            b:
              "Managed log entries of students and matched them with specific tutors based on needs " +
              "using Blackboard Collaborate resulting in a seamless transition between students and " +
              "tutors.",
          },
        },
      },
    },
    project: {
      p1: {},
      p2: {},
      p3: {},
    },
  };
}

export default Admin;
