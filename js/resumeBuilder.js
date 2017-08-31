'use strict';
/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio={
	"name" :"Xiankai Wan",
	"role" :"Web Developer",
	"contacts" :{
		"mobile" :"18305546411",
		"email" :"wanxiankai@126.com",
		"github" :"wanxk0523",
		"twitter" :"@wanxiankai",
		"location" :"芜湖"
	},
	"welcomeMessage" :"lorehhhhhhhhhhhhhhhhhh",
	"skills" :["awesomeness","programming","coding","JS"],
	"biopic" :"images/fry.jpg"
}

var education ={
	"schools" :[
	{
	"name" :"淮南师范学院",
	"location" :"安徽淮南",
	"degree" :"学士学位",
	"majors" :["数字媒体技术"],
	"dates" :"2013",
	"url" :"http://www.wanxiankai.cn/mylover"
	}
	],
	"onlineCourses" :[
	{
		"title" :"JavaScript Crash Course",
		"school" :"Udacity",
		"dates" :"2016",
		"url" :"https://cn.udacity.com/"
	}
	]
}

var work ={
	"jobs" :[
	{
		"employer" :"Plant Express",
		"title" :"Delivery Boy",
		"dates" :"January 3000 - Future",
		"description" :"this is my first job description",
		"location" : "上海"
	},
	{
		"employer" :"Plant Express",
		"title" :"Delivery Boy",
		"dates" :"January 30 - Future",
		"description" : "this is my second job description",
		"location" : "北京"
	}
	]
}

var projects = {
	"projects" :[
	{
		"title" :"Sample Project 1",
		"dates" :"2016",
		"description" :"this is my projection 1 description",
		"images" :[
		"http://pimg.39.net/PictureLib/A/f76/c200026/org_138220.jpg",
		"http://pimg.39.net/PictureLib/A/f76/c200026/org_138221.jpg"
		]
	}
	]
}

bio.display = function(){
	var formattedName =HTMLheaderName.replace("%data%",bio.name);
	$("#header").append(formattedName);
	
	var formattedRole =HTMLheaderRole.replace("%data%",bio.role);
	$("#header").append(formattedRole);
	
	var formattedbioPic =HTMLbioPic.replace("%data%",bio.biopic);
	$("#header").append(formattedbioPic);
	
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	$("#header").append(formattedMobile);
	
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	$("#header").append(formattedEmail);
	
	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
		$("#header").append(formattedTwitter);
	
	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	$("#header").append(formattedGithub);
	
	
	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
		$("#header").append(formattedLocation);
		
	
		
	if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
	$("#skills").append(formattedSkill);
}

}
bio.display();

work.display = function(){
	for(var i=0;i<work.jobs.length;i++){
	$("#workExperience").append(HTMLworkStart);
	
	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	
	var formattedDates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
	$(".work-entry:last").append(formattedDates);
	
	var formatteddDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
	$(".work-entry:last").append(formatteddDescription);
}
}
work.display();

//添加地图
$("#mapDiv").append(googleMap);

projects.display = function(){
	for(var j=0;j<projects.projects.length;j++){
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[j].title);
		$(".project-entry:last").append(formattedTitle);
		
		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[j].dates);
		$(".project-entry:last").append(formattedDates);
		
		var formattedDiscription = HTMLprojectDescription.replace("%data%",projects.projects[j].description);
		$(".project-entry:last").append(formattedDiscription);
		
		if(projects.projects[j].images.length > 0){
			for(var k = 0;k<projects.projects[j].images.length;k++){
				var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[j].images[k]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
	
}
projects.display();

education.display = function(){
	education.schools.forEach(function(e){
		$("#education").append(HTMLschoolStart);
		
		var formattedName = HTMLschoolName.replace("%data%",e.name);
		$(".education-entry:last").append(formattedName);
		
		var formattedDegree = HTMLschoolDegree.replace("%data%",e.degree);
		$(".education-entry:last").append(formattedDegree);
		
		var formattedDates = HTMLschoolDates.replace("%data%",e.dates);
		$(".education-entry:last").append(formattedDates);
		
		var formattedLocation = HTMLschoolLocation.replace("%data%",e.location);
		$(".education-entry:last").append(formattedLocation);
		
		var formattedMajor = HTMLschoolMajor.replace("%data%",e.majors);
		$(".education-entry:last").append(formattedMajor);
	});
	education.onlineCourses.forEach(function(e){
		$(".education-entry:last").append(HTMLonlineClasses);
			
		var formattedTitle = HTMLonlineTitle.replace("%data%",e.title);
		$(".education-entry:last").append(formattedTitle);
		
		var formattedSchool = HTMLonlineSchool.replace("%data%",e.school);
		$(".education-entry:last").append(formattedSchool);
		
		var formattedDates = HTMLonlineDates.replace("%data%",e.dates);
		$(".education-entry:last").append(formattedDates);
		
		var formattedURL = HTMLonlineURL.replace("%data%",e.url);
		$(".education-entry:last").append(formattedURL);
	});
}
education.display();
