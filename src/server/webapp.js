const Route = {};
Route.path = (route, callback) => {
  Route[route] = callback;
};

function loadStudent() {
  return HtmlService.createHtmlOutputFromFile('student.html');
}

function loadInstructor() {
  return HtmlService.createHtmlOutputFromFile('instructor.html');
}

const doGet = (e) => {
  Route.path('student', loadStudent);
  Route.path('instructor', loadInstructor);

  if (Route[e.parameters.v]) {
    return Route[e.parameters.v]();
  }

  const title = 'Workshop Feedback Form';
  const fileName = 'index.html';
  return HtmlService.createHtmlOutputFromFile(fileName)
    .setTitle(title)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.DEFAULT);
};

export default doGet;
