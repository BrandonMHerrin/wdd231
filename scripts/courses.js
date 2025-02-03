const courses = [
  {
    subject: "CSE",
    number: 110,
    title: "Introduction to Programming",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.",
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 130,
    title: "Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.",
    technology: ["HTML", "CSS"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 111,
    title: "Programming with Functions",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.",
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 210,
    title: "Programming with Classes",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.",
    technology: ["C#"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 131,
    title: "Dynamic Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 231,
    title: "Frontend Web Development I",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: false,
  },
];

let creditCount = 0;

const creditCountSpan = document.querySelector('#course-credits');
const listElement = document.querySelector(".course-list");
const courseDialog = document.querySelector(".course-details");
const closeCourseButton = document.querySelector('#close-course-modal');

function buildCourseElement(course) {
  const listItem = document.createElement('li');
  const button = document.createElement('button');
  if (course.completed) {
    button.classList.add('completed')
  }
  button.textContent = course.subject + course.number;
  button.dataset.number = course.number;
  button.dataset.subject = course.subject;
  listItem.append(button);
  return listItem;
}

function loadCourseItems() {
  clearList();
  clearActiveToolbarOption();
  resetCreditCount();
  courses.forEach((course) => {
    listElement.appendChild(buildCourseElement(course));
    creditCount += course.credits;
  })
  displayCreditCount();
  document.querySelector('#all').classList.add('active');
}

function loadCseCourses() {
  clearList();
  clearActiveToolbarOption();
  resetCreditCount();
  courses.forEach((course) => {
    if (course.subject === 'CSE') {
      listElement.appendChild(buildCourseElement(course));
      creditCount += course.credits;
    }
  });
  displayCreditCount();
  document.querySelector('#cse').classList.add('active');
}

function loadWddCourses() {
  clearList();
  clearActiveToolbarOption();
  resetCreditCount();
  courses.forEach((course) => {
    if (course.subject === 'WDD') {
      listElement.appendChild(buildCourseElement(course));
      creditCount +=  course.credits;
    }
  });
  displayCreditCount();
  document.querySelector('#wdd').classList.add('active');
}

function clearActiveToolbarOption () {
  const className = 'active';
  document.querySelector('#all').classList.remove(className);
  document.querySelector('#cse').classList.remove(className);
  document.querySelector('#wdd').classList.remove(className);
}

function displayCreditCount() {
  creditCountSpan.textContent = creditCount;
}

function clearList() {
  listElement.innerHTML = '';
}

function resetCreditCount() {
  creditCount = 0;
}

function registerListItemEventListener() {
  listElement.addEventListener('click', handleListItemClickEvent)
}

function handleListItemClickEvent(event) {
  if (event.target.tagName === 'BUTTON') {
    const subject = event.target.dataset.subject;
    const number = parseInt(event.target.dataset.number);
    setCourseDetails(subject, number);
    courseDialog.showModal();
  }
}

function closeCourseModal() {
  courseDialog.close();
}

function registerEventListeners() {
  closeCourseButton.addEventListener('click', closeCourseModal);
  registerListItemEventListener();
}

function setCourseDetails(subject, number) {
  const course = courses.filter((item) => 
    item.subject === subject && item.number === number)[0];
  document.querySelector('.course-details h2').textContent = `
    ${course.title} | ${course.subject}${course.number}
  `;
  document.querySelector('dialog .credits').textContent = course.credits;
  document.querySelector('dialog .certificate').textContent = course.certificate;
  document.querySelector('dialog .description').textContent = course.description;
  document.querySelector('dialog .technologies').textContent = course.technology.join(', ');
}

function app() {
  loadCourseItems();
  registerEventListeners();
}

app();