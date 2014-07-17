function loadDoc(version){
	document.getElementById("chatText").focus();
	console.log("Welcome to EphChat! Version "+version+".");
	setTimeout(function(){removeMsg("welcome")},messageTimeout);
}

function fireChat(){
	var msg = document.getElementById("chatText").value;
	var userName = document.getElementById("userName").value;
	var userId = document.getElementById("userId").value;
	messagesObj.push({
		message: msg,
		userName: userName,
		userId: userId
	});
	document.getElementById("chatText").value = "";
	document.getElementById("chatText").focus();
	return false;
}

function addMessageToFlow(user,userId,message,msgId,callback){
	var flow = document.getElementById("flow");
	var newContent = document.createElement("div");
	newContent.innerHTML = "<div class='message' id='msg-"+msgId+"'><div class='user user-name-"+userId+"'>"+user+"</div><div class='text'>"+message+"</div></div>";
	while (newContent.firstChild){
		flow.appendChild(newContent.firstChild);
		setTimeout(function(){removeMsg(msgId)},messageTimeout);
	}
	callback();
}

function removeMsg(msgId){
	var div = document.getElementById("msg-"+msgId);
	div.className += " fade-out";
	setTimeout(function(){
		div.parentNode.removeChild(div);
		scrollToBottom();
	},5000); // fade time is 5s in the CSS; needs to match
}

function nameChange(){
	newName = prompt("New Name","Bob");
	if(newName != null){
		userObj.update({
			name: newName
		});
	}
	document.getElementById("chatText").focus();
}

function scrollToBottom(){
	var objDiv = document.getElementById("flow");
	objDiv.scrollTop = objDiv.scrollHeight;
}