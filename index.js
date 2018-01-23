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
	this.photoAlbums = [];
    this.addPhoto = function(photo){
	    this.photoAlbums.push(photo)
	}
	this.listPhotos = function(){
	    for(var i = 0;i<this.photoAlbums.length;i++){
	    	console.log(this.photoAlbums[i])
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














