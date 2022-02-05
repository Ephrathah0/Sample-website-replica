<DOCTYPE html>
<html>
<head>
<title>Life Hacks</title>
<meta name=" description"
content="About life-hack and some tips">
<meta name=" key words"
content="Life, Jack Ma,Eric Hoffer, Self Education">
<meta name=" author" content="erik">

</head>
<!--Code : Airplane-->
<table>
<th>
<td width="10%">
</td>
</th>
<th>
<td width="50%">
<img src="image/logo_gold.png" width="100px" height="100px">
</td>
</th>
<th>
<td width="40%">
<p> 
<a href= "job.html">Home</a>|<a href= "#">Podcasts</a> | <a href= "#">Articles </a> | 
<a href= "#">Ideas</a>  |
<a href= "signup.html"> Sign in</a>| 
<a href="frame.html">I frame</a></p>
</td>
</th>
<th>
<td width="10%">
</td>
</th>

</table>
<hr>
<table>
<th>
<td width="10%">
</td>
</th>
<th>

<td width="60%" valign="top">

<form action="info.html" method="post" >
<h2>Register</h2>

<lable >Fullname</lable><br>

<input type = "text" id = "input1" size = "50%" maxlength = "50" onfocus="focusevent()"/>
<br><br>

<lable for="tel" id="phone">Phone</lable><br>
<input type = "text" id= "input2" size = "50%" maxlength = "30"  pattern="[0-9]{2}-[0-9]{2}-[0-9]{3}-[0-9]{4}" placeholder="12-34-567-8998" requiredoninput="inputevent()"/>
<br><br>
<lable for="number" id="age">Age</lable><br>
<input type = "number" id = "input3" max= "80" min = "18" oninvalid="invalidevent()"/>
<br><br>
 <label for="co">Your Fav Color</label><br>
 <input type = "color" id = "input4"/>
 <button id="addobj" value="Add" onclick="info.addObject(event)">Add</button><br/>

<lable>Gender</lable><br>

<lable for="female">Female</lable>

<input type="radio"  onfocus="highlightInput(this)" name="x" value="Female">
<lable for="female">Male</lable>

<input type="radio" onfocus="highlightInput(this)" name="x" value="Female"><br><br>
<lable for="bday" id="bday">Birthday</lable><br>

<input type="date" onfocus="highlightInput(this)" min="1980-1-29" max="20124-12-29"><br>
<br><br>
<label style="color: red;visibility:hidden;">password</label><br>

<input type="password"  placeholder="Password" id="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"><br><br>
<span id="paa" class="text"></span>
<label>Confirm Password</label><br>
<input type="password"   placeholder="Confirm Password" id="cpassword" ><br><br>
<span id="cpaa" class="text"></span>

<label>Skills</lable><br>
 <input type="checkbox" onfocus="highlightInput(this)" id="ht" name="ht" value="HTML">
<label for="ht"> HTML</label><br>
<input type="checkbox" onfocus="highlightInput(this)" id="css" name="cs" value="CSS">

<label for="cs"> CSS</label><br>
<input type="checkbox" onfocus="highlightInput(this)" id="js" name="js" value="Js">
<label for="js"> JavaScript</label><br> 
<input type="checkbox" onfocus="highlightInput(this)" id="php" name="php" value="PHP">
<label for="php"> PHP</label><br> <br>

 <label >Country</label>

<select id="cou" onchange="alert('selection has been changed!!');">
  <option value="Ethiopia">Ethiopia</option>
  <option value="Kenya">Kenya</option>
  <option value="Somalia">Somalia</option>
  <option value="Eriteria">Eriteria</option>
  </select>
  <br><br>
  <label>Photo</label><br>
    <input type="file" onfocus="highlightInput(this) "   name="image"><br>
    
    <lable>Describe Yourself</label> <br>
        <textarea textarea rows = "5"cols = "50" onfocus="highlightInput(this)" name = "description" required maxlength="1400" placeholder="Maximum 400 words"></textarea>  
        <button type="sumbit" onclick="validate()">Submit</button>&emsp;&emsp;
     
<button type="reset">Reset</button>
<br><br><br>
<form>
    <button value="display" onclick="info.print(event)">Display</button>
    <textarea id="text" cols="40" rows="10"></textarea>
    
</form>
<Script src="styles.js"></Script>

<th>

<td width="30%" valign="top">

<h2>Recent Post</h2>
<ul>
<li>
<h3>Articles</h3>

<ul>

<li>The Importance of Goals,Especially During Difficult Times</li>
<li>5 Steps to Discovering Your
Life Purpose In 2022!</li>
</ul></li><br>
<li><h3>Ideas</h3>
<ul>
<li>10 Books to Read in The Fall/li>

<li>Top Web Development Projects Ideas</li>
</ul></li></li>

</ul>
<br>
<h3>Most Viewed Articls</h3>
<ol type="I">
<li>Instant Gratification Is Stopping You From Reaching Your Goals!</li>

<li>Stop Juggling Between Work And Life</li>
</ol>
<h3> IP Project Winners</h3>

<pre>
        ---------------------------------
        Rank    Award 
        ---------------------------------
        
First   Free hosting and support 
       
 Second  5GB Mobile Data 
        
Third   1GB Mobile Data 
       
 ---------------------------------- 
</pre>
</td>
</th>
<th>
<td width="10%">
</td>
</th>
</table>
<br>
<hr>
<br>
<table>
<th>
<td width="10%">
</td>
</th>
<th>
<td width="40%" align="left">
<p> Follow us on : <a href="#">Facebook</a> |<a href="#"> Twitter</a></p>
</td>
</th>
<th>
<td width="40%" >
<p> <a href="#">Privacy</a> | <a href="#">Term of use</a></p>
</td>
</th>
<th>
<td width="10%">
</td>
</th>
<tr>
    <th>
<td width="10%">
</td>
</th>
<th>
<td align="center" width="75%">
    <p align="center">Copyright © AASTU SEng 2021, All Rights Reserved</p>
</td>
</th>
<th>
<td width="10%">
</td>
</th>
</table>
<script>
    function validate(){
var password=document.getElementById("password").value;
var Cpassword=document.getElementById("cpassword").value;
if(password.match(Cpassword)){
document.getElementById("cpaa").innerHTML =" ";

}else{
    document.getElementById("cpaa ").innerHTML=" **password is not matching";
    return false;
}
   }

    const info = {}
info.addObject=function (ev){
		ev.preventDefault();
		info.name= document.getElementById("input1").value;
		info.phone= document.getElementById("input2").value;
		info.age= document.getElementById("input3").value;
		info.color= document.getElementById("input4").value;
		info.print= function(ev){
					ev.preventDefault();
					document.getElementById("text").innerHTML = "Name: " + this.name + "\nPhone: " + this.phone + "\nAge: " + this.age + "\nColor: " + this.color+" Airplane";
				}
	//code: Airplane
}
</script>
</body>
</html>
