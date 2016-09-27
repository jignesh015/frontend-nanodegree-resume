//This is a temporary file!!!
//This is a temporary file!!!
//This is a temporary file!!!
//This is a temporary file!!!

// $("#main").append("Jignesh Patel");
// var name = "Jignesh Patel";
// var role = "Web Developer";
// var formattedName = HTMLheaderName.replace("%data%", name);
// var formattedRole = HTMLheaderRole.replace("%data%", role);

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

//var skills = ;


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.email_id);
var formattedGit = HTMLgithub.replace("%data%", bio.git);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.location);
var formattedPic = HTMLbioPic.replace("%data%", bio.image);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);

var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employer);
var formattedTitle = HTMLworkTitle.replace("%data%", work.jobTitle);
var formattedworkLocation = HTMLworkLocation.replace("%data%", work.city);

var formattedCollege = HTMLschoolName.replace("%data%", education.college);
var formattedYear = HTMLschoolDates.replace("%data%", education.year);
var formattedcollegeLocation = HTMLschoolLocation.replace("%data%", education.collegeLocation);

$("#header").prepend(formattedName, formattedRole, formattedPic, formattedWelcome, HTMLskillsStart, formattedSkills);
$("#topContacts").append(formattedMobile, formattedEmail, formattedLocation);
$("#workExperience").append(formattedEmployer, formattedTitle, formattedworkLocation);
$("#footerContacts").append(formattedGit, formattedTwitter);

$("#main").append(formattedEmployer, formattedTitle, formattedworkLocation);
$("#main").append(formattedCollege, formattedYear, formattedcollegeLocation);