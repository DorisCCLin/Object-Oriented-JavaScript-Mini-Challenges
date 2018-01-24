// ---------- Challenge 1 ------------

function Multiplier(number){	
	var x = 1;
	this.multiply = function(){
	var result = number * x
	x = result	
	return result   
	}; 	
	this.getCurrentValue = function(){
	return x 
    };
}

var test = new Multiplier(5)


// ---------- Challenge 2 ------------


function Photo(filename, location){
	this.filename = filename;
	this.location = location;
}

var la = new Photo('home', 'LA');
var sf = new Photo('house', 'SF');

function Album(){
	this.photoAlbum = [];
    this.addPhoto = function(photo){
	    this.photoAlbum.push(photo)
	}
	this.listPhotos = function(){
	    for(var i = 0;i<this.photoAlbum.length;i++){
	    	console.log(this.photoAlbum[i])
	    }
	}   
}

var usalbum = new Album();


// ---------- Challenge 3 ------------

class Person{
	constructor(name, birthyear){ 
	this.name = name;
	this.age = function() {
		return 2018 - birthyear;
	};
	}
}; 

class Teacher extends Person {
	constructor(name, birthyear, address){ 
	super(name, birthyear);
	this.address = address;
	};
}

class Student extends Person {
	constructor(name, birthyear, gender){ 
	super(name, birthyear);
	this.gender = gender;
	};
}

var guest1= new Teacher('Lucy', 1978, 'Philly')
var guest2= new Student('Charlie', 1995, 'boy')
var guest3= new Student('Doris', 1993, 'girl')

function School(){
	this.teachers = []
	this.students = []
	this.addTeacher = function(teacher){
		this.teachers.push(teacher)
	}
	this.addStudent = function(student){
		this.students.push(student)
	}
    this.listTeacher = function(){
	    for(var i = 0;i<this.teahers.length;i++){
	    	console.log(this.teahers[i])
	    }
	}
	this.listStudent = function(){
	    for(var i = 0;i<this.students.length;i++){
	    	console.log(this.students[i])
	    }
	}
    
}

var nycda = new School();

// ---------- Extra ------------

var cat1 = new Photo('img/cats/cat1.jpg', 'Philly');
var cat2 = new Photo('img/cats/cat2.jpg', 'Taipei');
var cat3 = new Photo('img/cats/cat3.jpg', 'New York');

var cats = new Album();

cats.addPhoto(cat1);
cats.addPhoto(cat2);
cats.addPhoto(cat3);

var photo1=document.querySelector('#photo1');
var photo2=document.querySelector('#photo2');
var photo3=document.querySelector('#photo3');

photo1.style.backgroundImage = "url('" + cats.photoAlbum[0].filename + "')"
photo2.style.backgroundImage = "url('" + cats.photoAlbum[1].filename + "')"
photo3.style.backgroundImage = "url('" + cats.photoAlbum[2].filename + "')"












