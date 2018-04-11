window.addEventListener("load", initialize);
var id = 0;

function initialize()
{
	document.body.innerHTML = "<div id=\"console\"></div>";
	delayed_type("Hi, I'm Akhilesh Devrari.", 50, take_input);
}

function delayed_type(text, delay, callback)
{
	var j=0;
	function type()
	{
		if(j<text.length)
		{
			document.getElementById('console').innerHTML += text[j];
			j++;
			setTimeout(type, delay);
		}
		else
		{
			console.log("else me gya\n");
			document.getElementById('console').innerHTML += "<br>";
			callback();
		}
	}
	type();
}

function take_input()
{
	console.log("id = "+id+"\n");
	document.getElementById('console').innerHTML += "> ";
	document.getElementById('console').innerHTML += "<input type=\"text\" id=\""+id+"\" maxlength=\"20\" />";
	document.getElementById(id).focus();
	document.getElementById(id).onkeypress = function(event){
	    if (event.keyCode == 13 || event.which == 13){
	    	var input = document.getElementById(id).value;
	    	document.getElementById(id).remove();
	    	document.getElementById('console').innerHTML += input+"<br>";
	    	id++;
	        process_input(input);
	    }
	};
}

function process_input(input)
{
	console.log("input = "+input+"\n");
	if(input == "help")
	{
		document.getElementById('console').innerHTML += "Try one of these commands :<br>";
		arr = new Array("<span class=\"highlight\">about<br></span>", "<span class=\"highlight\">resume<br></span>",
		 "<span class=\"highlight\">projects<br></span>", "<span class=\"highlight\">contact<br></span>", "<span class=\"highlight\">clear</span>");
		delayed_type(arr, 200, take_input);
	}
	else if(input == "about")
	{
		var about = "Computer science undergrad, IIT Mandi.<br>";
		about+="No glasses, I C well. I actually C++<br>"
		about+="<br>"
		document.getElementById('console').innerHTML += "<span class=\"text\">"+about+"</span>";
		take_input();
	}
	else if(input == "resume")
	{
		openInNewTab("myresume.pdf");
		take_input();
	}
	else if(input == "projects")
	{
		var bird = "<span class=\"highlight\">Bird : </span>";
		bird += "<span class=\"text\">Interpreter for a simple programming language supporting dynamically typed variables, ";
		bird += "mathematical operators, conditional and loop statements.<br></span>"

		var codegym = "<span class=\"highlight\">CodeGym : </span>";
		codegym+= "<span class=\"text\">A practice platform for competitive programmers to improve through customizable programming contests.<br></span>"

		var rhythm = "<span class=\"highlight\">Rhythm : </span>";
		rhythm += "<span class=\"text\">A webapp to tune a guitar in standard tuning.<br></span>";

		var tictactoe = "<span class=\"highlight\">Tictactoe : </span>";
		tictactoe += "<span class=\"text\">Tic-tac-toe game AI based on MinMax algorithm.<br></span>";

		var quasar = "<span class=\"highlight\">Quasar : </span>";
		quasar += "<span class=\"text\">Chess engine (under devlopment).<br></span>";

		var link = "Have a look: <a href=\"https://github.com/akhileshdevrari\" target=\"none\">https://github.com/akhileshdevrari<\a><br>";

		arr = new Array(bird, codegym, rhythm, tictactoe, quasar, link);
		delayed_type(arr, 500, take_input);
	}
	else if(input == "contact")
	{
		var phone = "<span class=\"highlight\">Phone: </span>";
		phone += "<span class=\"text\">8126268021<br></span>";

		var mail = "<span class=\"highlight\">E-mail: </span>";
		mail += "<span class=\"text\">b16005@students.iitmandi.ac.in<br>&emsp;&emsp;&emsp;&emsp;&emsp;devrari.akhilesh@gmail.com<br></span>";

		var address = "<span class=\"highlight\">Address: </span>";
		address += "<span class=\"text\">004, B3 Hostel, IIT Mandi - 175005<br></span>";

		arr = new Array(phone, mail, address);
		delayed_type(arr, 500, take_input);
	}
	else if(input == "clear")
	{
		initialize();
	}
	else
	{
		document.getElementById('console').innerHTML += "<span class=\"error\">Error: Command \""+input+"\" not found. Try \"help\"</span><br>";
		take_input();
	}
}

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}



/*
Computer science undergrad, IIT Mandi.
No glasses, I C well. I actually C++

I write code.


Resume:
CGPA 8

Projects:
Codegym
Bird
Rhythm
Quasar
Tictactoe

Skills:
C, C++, Javascript, MySQL

POR:
TA in IC 250

Achievements:
JEE Advanced 1785/1.2lakhs
Avishkar rank 1




Contact:

Mobile: 8126268021
E-mail: b16005@students.iitmandi.ac.in
		devrari.akhilesh@gmail.com
Address: 004 B3, South Campus
		IIT Mandi
		PIN: 175005


INTERPRETER FOR A SIMPLE PROGRAMMING LANGUAGE SUPPORTING DYNAMICALLY TYPED VARIABLES,
MATHEMATICAL OPERATORS, CONDITIONAL AND LOOP STATEMENTS.

*/