const problems = [
  {
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptanceRate: "42%",
  },
  {
    title: "202. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptanceRate: "42%",
  },
  {
    title: "203. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptanceRate: "42%",
  },
  {
    title: "204 . Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptanceRate: "42%",
  },
];
const problems2 = [
  {
    title: "Title1",
    difficulty: "Medium",
    acceptanceRate: "42%",
  },
  {
    title: "Title2",
    difficulty: "Medium",
    acceptanceRate: "65%",
  },
  {
    title: "203. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptanceRate: "42%",
  },
  {
    title: "204 . Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptanceRate: "42%",
  },
];

function renderProblems(problemsProvided) {
  const parentEl = document.getElementById("problem-statements");
  parentEl.innerHTML = "";
  const tableTag = document.createElement("table");

  for (let i = 0; i < problems.length; i++) {
    const trTag = document.createElement("tr");
    const tdTag1 = document.createElement("td");
    const tdTag2 = document.createElement("td");
    const tdTag3 = document.createElement("td");
    tdTag1.innerHTML = problemsProvided[i].title;
    tdTag2.innerHTML = problemsProvided[i].difficulty;
    tdTag3.innerHTML = problemsProvided[i].acceptanceRate;
    trTag.appendChild(tdTag1);
    trTag.appendChild(tdTag2);
    trTag.appendChild(tdTag3);

    tableTag.appendChild(trTag);
  }
  parentEl.appendChild(tableTag);
}
function renderPage() {
  document
    .getElementById("page1")
    .addEventListener("click", () => renderProblems(problems));
  document
    .getElementById("page2")
    .addEventListener("click", () => renderProblems(problems2));
}

renderPage();
