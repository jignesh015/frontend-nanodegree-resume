var bio = {
    "name": "Jignesh Patel",
    "role": "Web Developer",
    "contacts": {
        "mobile": "80******56",
        "email": "patel.jignesh705@gmail.com",
        "github": "jignesh015",
        "twitter": "@jignesh_n_patel",
        "location": "Mumbai,India"
    },
    "welcomeMessage": "Welcome to my Profile. Enjoy your stay",
    "skills": ["Web Developer", "C programmer", "Content Writer"],
    "biopic": "images/me.jpg"
};

var work = {
    "jobs": [{
        "employer": "Infosys",
        "title": "Trainee",
        "location": "Mysore",
        "dates": "Jan-April 2017",
        "description": "Training"
    }, {
        "employer": "Global Citizen",
        "title": "Activist",
        "location": "Mumbai",
        "dates": "In progress",
        "description": "Tweeting, signing petition, bringing change"
    }]
};

var education = {
    "schools": [{
        "name": "Sardar Patel Institute of Technology",
        "location": "Mumbai",
        "degree": "BE",
        "majors": ["Information Technology"],
        "dates": "2012-2016",
        "url": "http://www.spit.ac.in"
    }, {
        "name": "T.P.Bhatia College of Science",
        "location": "Mumbai",
        "degree": "HSC",
        "majors": ["Science"],
        "dates": "2010-2012",
        "url": "http://www.kes.ac.in"
    }],
    "onlineCourses": [{
        "title": "Front End Developer",
        "school": "Udacity",
        "dates": "2016",
        "url": "http://www.udacity.com"
    }]
};

var projects = {
    "projects": [{
        "title": "Continuous Authentication Using Biometric Techniques to Prevent Session Hijacking",
        "dates": "2016",
        "description": "Cyber Security",
        "images": ["images/project.jpg"]
    }, {
        "title": "Android Bluetooth XvsO",
        "dates": "2015",
        "description": "Android App Development",
        "images": ["images/xvso.jpg"]
    }]
};

bio.display = function() {
    //Header
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


    //Contacts
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#header").prepend(formattedName, formattedRole);
    $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
    $("#header").append(formattedBioPic, formattedWelcomeMsg);
    $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);

    //Skills
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(skill) {
        var formattedSkills = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkills);
    });
};

//Work 
work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);

        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedWorkDesc = HTMLworkDescription.replace("%data%", job.description);
        var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle + formattedWorkLocation + formattedWorkDates + formattedWorkDesc;
        $(".work-entry:last").append(formattedEmployerTitle);

    });
};

//Education
education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        school.majors.forEach(function(major) {
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", major);
            $(".education-entry:last").append(formattedSchoolMajor);
        });
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedSchoolUrl = HTMLschoolURL.replace("%data%", school.url);
        $(".education-entry:last").prepend(formattedSchoolName + formattedSchoolLocation + formattedSchoolDegree + formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolUrl);
    });
    $(".education-entry:last").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(onlineCourse) {

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
        var formattedOnlineUrl = HTMLonlineURL.replace("%data%", onlineCourse.url);
        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineUrl);
    });
};

//Projects
projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedProjectDesc = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedProjectTitle + formattedProjectDates + formattedProjectDesc);
        project.images.forEach(function(image) {
            var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
            $(".project-entry:last").append(formattedProjectImage);
        });
    });

};

bio.display();
work.display();
projects.display();
education.display();

// Internationalize Name
$("#main").append(internationalizeButton);

function inName() {
    var firstName = bio.name;
    var nameArray = firstName.split(" ");
    nameArray[1] = nameArray[1].toUpperCase();
    nameArray[0] = nameArray[0].slice(0, 1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
    var intName = nameArray.join(" ");
    return intName;
}

$("#main").click(function() {
    var formattedName = bio.name;
    var intName = formattedName.replace(bio.name, inName());
});

// Map 
$("#mapDiv").append(googleMap);