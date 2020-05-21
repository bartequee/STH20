var board = [
0, 0, 0,
0, 0, 0,
0, 0, 0
];

var turn = true;

function klik(id) {
	if(board[id] == 0) {
		if(turn == true) {
			document.getElementById(id).style.backgroundImage = "url(baba.jpg)";
			board[id] = 1;
			turn = false;
		} else if(turn == false) {
			document.getElementById(id).style.backgroundImage = "url(Tomasz_Hajto_2012.jpg)";
			board[id] = 2;
			turn = true;
		}
		check_win();
	}
}


function check_win() {
	if(board[0] == 1 && board[1] == 1 && board[2] == 1) {
		alert("baba wygrała i teraz żyje xd");
		location.reload();
	} else if(board[3] == 1 && board[4] == 1 && board[5] == 1) {
		alert("baba wygrała i teraz żyje xd");
		location.reload();
	} else if(board[6] == 1 && board[7] == 1 && board[8] == 1) {
		alert("baba wygrała i teraz żyje xd");
		location.reload();
	} else if(board[0] == 1 && board[3] == 1 && board[6] == 1) {
		alert("baba wygrała i teraz żyje xd");
		location.reload();
	} else if(board[1] == 1 && board[4] == 1 && board[7] == 1) {
		alert("baba wygrała i teraz żyje xd");
		location.reload();
	} else if(board[2] == 1 && board[5] == 1 && board[8] == 1) {
		alert("baba wygrała i teraz żyje xd");
		location.reload();
	} else if(board[0] == 1 && board[4] == 1 && board[8] == 1) {
		alert("baba wygrała i teraz żyje xd");
		location.reload();
	} else if(board[2] == 1 && board[4] == 1 && board[6] == 1) {
		alert("baba wygrała i teraz żyje xd");
		location.reload();
	} else if(board[0] == 2 && board[1] == 2 && board[2] == 2) {
		alert("hajto rozjechał babe na pasach i nic nie odsiedzi, wygryw.jpg");
		location.reload();
	} else if(board[3] == 2 && board[4] == 2 && board[5] == 2) {
		alert("hajto rozjechał babe na pasach i nic nie odsiedzi, wygryw.jpg");
		location.reload();
	} else if(board[6] == 2 && board[7] == 2 && board[8] == 2) {
		alert("hajto rozjechał babe na pasach i nic nie odsiedzi, wygryw.jpg");
		location.reload();
	} else if(board[0] == 2 && board[3] == 2 && board[6] == 2) {
		alert("hajto rozjechał babe na pasach i nic nie odsiedzi, wygryw.jpg");
		location.reload();
	} else if(board[1] == 2 && board[4] == 2 && board[7] == 2) {
		alert("hajto rozjechał babe na pasach i nic nie odsiedzi, wygryw.jpg");
		location.reload();
	} else if(board[2] == 2 && board[5] == 2 && board[8] == 2) {
		alert("hajto rozjechał babe na pasach i nic nie odsiedzi, wygryw.jpg");
		location.reload();
	} else if(board[0] == 2 && board[4] == 2 && board[8] == 2) {
		alert("hajto rozjechał babe na pasach i nic nie odsiedzi, wygryw.jpg");
		location.reload();
	} else if(board[2] == 2 && board[4] == 2 && board[6] == 2) {
		alert("hajto rozjechał babe na pasach i nic nie odsiedzi, wygryw.jpg");
		location.reload();
	}
	
}