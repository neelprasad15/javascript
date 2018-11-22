function validate(j)
{
	v1=document.getElementById("bx1");
	//foc=document.getElementByName('name');
	e1=document.getElementById("er1");
	exp1=/^[a-z A-Z]{3,20}$/;
	if(v1.value=="")
	{
		e1.innerHTML="Please enter your name";
		 //foc.focus();
		 return false;
		}
		else if (exp1.test(v1.value)==false) 
		{
			e1.innerHTML="Please enter your name";
		 //foc.focus();		
		 return false;
		}
		else
		{
			e1.innerHTML="";
		}
//Email
v2=document.getElementById("bx2");
e2=document.getElementById("er2");
exp2=/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/

if (v2.vlaue=="" || exp2.test(v2.value)==false)
{
	e2.innerHTML="Please enter your email";
		// v2.focus();
		return false;
	}
	else
	{
		e2.innerHTML="";
	}

//phone
v3=document.getElementById("bx3");
e3=document.getElementById("er3");
exp3=/^[+0-9-]{4}[6-9]{1}[0-9]{9}$/

if (v3.vlaue=="" || exp3.test(v3.value)==false)
{
	e3.innerHTML="Please enter your phone number";
		// v3.focus();
		return false;
	}
	else
	{
		e3.innerHTML="";
	}


	var array = []
	var checkboxes = document.querySelectorAll('input[id=skills]:checked');

	for (var i = 0; i < checkboxes.length; i++) 
	{
		array.push(checkboxes[i].value);

		var x = array.length;
		if(x<2)
		{
			document.getElementById("er5").innerHTML = "Select atleast 2";
			
		}
		if(x>3)
		{
			document.getElementById("er5").innerHTML = "Select only 3";
						checkboxes.checked==false;
		}


	}

	// var a = document.getElementsByName("skills[]");
	// var total=0;
	// for(var i=0; i<a.length; i++)
	// {
	// 	if(a[i].checked==true)
	// 	{
	// 		total = total+1;
	// 	}
	// 	 if(total>3)
	// 	{
	// 		document.getElementById("er5").innerHTML="select only 3";
	// 		a[j].checked = false;
	// 		return false;	
	// 	}

	// }
	
}


 	 // function radioValidation(){

   //      var gender = document.getElementsByName('gender');
   //      var genValue = false;

   //      for(var i=0; i<gender.length;i++){
   //          if(gender[i].checked == true){
   //              genValue = true;    
   //          }
   //      }
   //      if(!genValue){
   //          alert("Please Choose the gender");
   //          return false;
   //      }

   //  }