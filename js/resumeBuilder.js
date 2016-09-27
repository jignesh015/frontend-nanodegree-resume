var bio = {
    "name" : "Jignesh Patel",
    "role" : "Web Developer",
    "contacts" : {
        "mobile" : "80******56",
        "email_id" : "patel.jignesh705@gmail.com",
        "git" : "jignesh015",
        "twitter" : "@jignesh_n_patel",
        "location" : "Mumbai,India"
    },
    "image" : "images/me.jpg",
    "welcome" : "Welcome to my Profile. Enjoy your stay",
    "skills" : ["Web Developer","C programmer","Content Writer"]
}

var work = {
    "jobs" : [
        {
            "employer" : "Infosys",
            "jobTitle" : "Trainee",
            "city" : "Mysore",
            "dates" : "Jan-April 2017",
            "desc" : "Training period"
        },
        {
            "employer" : "Global Citizen",
            "jobTitle" : "Activist",
            "city" : "Mumbai",
            "dates" : "In progress",
            "desc" : "Tweeting, signing petition, bringing change"
        }
    ]
}

var education = {
    "colleges" : [
        {
            "name" : "Sardar Patel Institute of Technology",
            "city" : "Mumbai",
            "degree" : "BE",
            "major" : "Information Technology",
            "gradYear" : "2012-2016"
        },
        {
            "name" : "T.P.Bhatia College of Science",
            "city" : "Mumbai",
            "degree" : "HSC",
            "major" : "Science",
            "gradYear" : "2010-2012"
        }
    ] 
}

var projects = {
    "projects" : [
        {    
            "title" : "Continuous Authentication Using Biometric Techniques to Prevent Session Hijacking",
            "year" : "2016",
            "desc" : "Cyber Security"
        },
        {
            "title" : "Android XvsO",
            "year" : "2015",
            "desc" : "Android App Development"
        }
    ]
}

bio.display = function() {
    //Header
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    var formattedImage = HTMLbioPic.replace("%data%", bio.image);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);
    $("#header").prepend(formattedName, formattedRole, formattedImage, formattedWelcome);

    //Contacts
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email_id);
    var formattedGit = HTMLgithub.replace("%data%", bio.contacts.git);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#footerContacts").append(formattedMobile, formattedEmail, formattedGit, formattedTwitter, formattedLocation);

    //Skills
    $("#header").append(HTMLskillsStart);
    for (skill in bio.skills) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkills);
    }
}

//Work 
work.display = function() {
    for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].jobTitle);
    var formattedCity = HTMLworkLocation.replace("%data%", work.jobs[job].city);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[job].desc);
    var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedCity + formattedDates + formattedDesc;
    $(".work-entry:last").append(formattedEmployerTitle);

    }
}

//Education
education.display = function() {
    for (college in education.colleges) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.colleges[college].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.colleges[college].degree);
        var formattedSchoolCity = HTMLschoolLocation.replace("%data%", education.colleges[college].city);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.colleges[college].gradYear);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.colleges[college].major);
        $(".education-entry:last").append(formattedSchoolName + formattedDegree + formattedSchoolCity + formattedSchoolDates + formattedSchoolMajor);
    }
}

//Projects
projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title); 
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].year); 
        var formattedProjectDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].desc); 
        $(".project-entry:last").append(formattedProjectTitle + formattedProjectDates + formattedProjectDesc);
    }
}

bio.display();
work.display();
education.display();
projects.display();

// Internationalize Name
$("#main").append(internationalizeButton);

function inName () {
    var firstName = bio.name;
    var nameArray = firstName.split(" ");
    nameArray[1] = nameArray[1].toUpperCase();
    nameArray[0] = nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
    var intName = nameArray.join(" ");
    return intName;
}

inName();
$("#main").click(function(){
    var intName = formattedName.replace(bio.name, inName());
});

// Map 
$("mapDiv").append(googleMap);