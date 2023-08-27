var fName = [
  "James",
  "John",
  "Robert",
  "Michael",
  "William",
  "David",
  "Richard",
  "Charles",
  "Joseph",
  "Thomas",
  "Christopher",
  "Daniel",
  "Paul",
  "Mark",
  "Donald",
  "George",
  "Kenneth",
  "Steven",
  "Edward",
  "Brian",
  "Ronald",
  "Anthony",
  "Kevin",
  "Jason",
  "Jeff",
];
var job = [
  "Writer",
  "Photographer",
  "Developer",
  "Streamer",
  "Paralegal",
  "Project Coordinator",
  "Tutor",
  "Digital Artist",
  "Social Media Manager",
  "Data Entry Specialist",
];

let freelancers = [];
class Freelancer {
  constructor(name, job, price) {
    this.name = name;
    this.job = job;
    this.price = price;
    freelancers.push(this);
  }
}

function generateName(nm) {
  return nm[Math.floor(Math.random() * nm.length)];
}

function generateJob(jb) {
  return jb[Math.floor(Math.random() * jb.length)];
}

function generatePay() {
  return Math.floor(Math.random() * 100);
}

function generateFreelancer() {
  new Freelancer(generateName(fName), generateJob(job), generatePay());
}

const user1 = new Freelancer(
  generateName(fName),
  generateJob(job),
  generatePay()
);

const user2 = new Freelancer(
  generateName(fName),
  generateJob(job),
  generatePay()
);

function renderFreelancer(freelancerArr) {
  let list = document.querySelector("div .list");
  list.innerHTML = "";
  freelancerArr.forEach((elem) => {
    let html = `
		<div class="card">
		  <h3>Name: ${elem.name}</h3>
		  <h3>Occupation: ${elem.job}</h3>
		  <h3>Wage: ${elem.price}</h3>
		</div>
	  `;

    list.innerHTML += html;
  });
}

function avgPrice() {
  return Math.floor(
    freelancers.reduce((acc, obj) => acc + obj.price, 0) / freelancers.length
  );
}

function renderAvgWage() {
  let target = document.querySelector(".counter");
  target.innerHTML = "";
  target.innerHTML = `The average wages req are ${avgPrice()}`;
}

renderFreelancer(freelancers);
renderAvgWage();
const pushingFreelancers = setInterval(generateFreelancer, 2000);
const renderingFreelancers = setInterval(renderFreelancer, 2000, freelancers);
const renderingAveragePrice = setInterval(renderAvgWage, 2000);
