var bio = {
	"name" : "Bonnie Allen",
	"role" : "Front End Web Developer",
	"contacts" : [{
		"mobile" : "619-999-0774",
		"email" : "bsallenok@gmail.com",
		"github" : "bsallenok",
		"twitter" : "@AllenBsallen",
		"location" : "San Diego, CA, US"
	}],
	"welcomeMessage" : "The race is on for 2020!",
	"skills" : ["awesomeness", "programming", "process engineer", "Python", "JS", "coaching"],
	"biopic" : ["images/jennawarholart.jpg"]
};
bio.display = function(){
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").prepend(formattedName, formattedRole);
    $("#header").append(topContacts);
    $("#header").append(formattedPicture, formattedWelcome);

    for(contact in bio.contacts){
      var formattedMobile = HTMLcontactGeneric.replace("%contact%", "Mobile").replace("%data%", bio.contacts[contact].mobile);
      $("#topContacts").append(formattedMobile);
      var formattedEmail= HTMLemail.replace("%data%", bio.contacts[contact].email);
      $("#topContacts").append(formattedEmail);
      var formattedGithub = HTMLgithub.replace("%data%", bio.contacts[contact].github);
      $("#topContacts").append(formattedGithub);
      var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts[contact].twitter);
      $("#topContacts").append(formattedTwitter);
      var formattedLocation = HTMLlocation.replace("%data%", bio.contacts[contact].location);
      $("#topContacts").append(formattedLocation);
      $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
    };
      if(bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
        $('#skills').append(formattedSkills);
        formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
        $('#skills').append(formattedSkills);
        formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
        $('#skills').append(formattedSkills);
        formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
        $('#skills').append(formattedSkills);
      }
};
var work = {
  "jobs": [{
      "employer": "AT&T",
      "title": "Area Manager-Process Engineering",
      "location": "San Diego, CA, US",
      "dates": "1978 - Present",
      "description": "Various Business and Management functions: Coach Manager, Process Engineer(BPE), Area Mgr over BPEs"
    },
    {
      "employer": "McDonalds",
      "title": "Bookeeper",
      "location": "Chula Vista, CA, US",
      "dates": "1976 - 1978",
      "description": "General bookeeping functions and prepared yields daily"
    }]
};
work.display = function(){
  for(job in work.jobs) {
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);

      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      $(".work-entry:last").append(formattedLocation);

      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      $(".work-entry:last").append(formattedDates);

      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formattedDescription);
    }
}
var projects = {
  "projects": [{
      "title": "Movie Trailers Project",
      "dates": "May 2015 - June 2015",
      "description": "Various Business and Management functions",
      "images": ["images/movietrailer.png"]
    },
    {
      "title": "Bonnie Notes API Google App Engine (GAE) Project",
      "dates": "June 2015 - July 2015",
      "description": "Launched notes from Intro to Programming on GAE",
      "images": ["images/bonnienotesapi.png","images/bonnienotesapi2.png"]
    }]
}
projects.display = function(){
  for (project in projects.projects){
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);

  for (image in projects.projects[project].images){
    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
    $(".project-entry:last").append(formattedImage);
    }
  }
};
var education = {
  "schools": [{
      "name": "San Diego Community Colleges",
      "location": "San Diego, CA, US",
      "degree": "AS",
      "majors": ["Business and Management"],
      "dates": "1989 - 1991"
    },
    {
      "name": "University of Redlands",
      "location": "Redlands, CA, US",
      "degree": "BS",
      "majors": ["Business and Management"],
      "dates": "1991 - in-progress"
    }],
    "onlineClasses": [{
      "title": "JavaScript Basics",
      "school": "Udacity",
      "dates": 2015,
      "url": "http://www.udacity.com/course/ud804"
    },
    {
      "title": "Intro to Programming",
      "school": "Udacity",
      "dates": 2015,
      "url": "http://www.udacity.com"
    }]
};
education.display = function() {
  $("#education").append(HTMLschoolStart);
  for(school in education.schools) {
    var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
    var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
    var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
    var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
    var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
    $(".education-entry:last").append(formattedName + formattedLocation,formattedDegree,formattedDates,formattedMajor);
    }
    if (education.onlineClasses.length > 0){
      $("#education").append(HTMLonlineClasses);
      for (course in education.onlineClasses) {
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[course].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[course].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineClasses[course].dates);
        var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineClasses[course].url);
        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool).append(formattedOnlineDates, formattedOnlineUrl);
      };
    };
};
// function inName(name) {
//   var name = "Bonnie Allen"
//   name = name.trim().split(" ");
//   console.log(name);
//   name[1] = name[1].toUpperCase();
//   name[0] = name[0].slice(0,1).toUpperCase() +
//     name[0].slice(1).toLowerCase();

//   return name[0] +" "+name[1];
// };
// $('#main').append(internationalizeButton);
bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);


