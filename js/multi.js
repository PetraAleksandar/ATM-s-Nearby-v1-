function hide(){
	var tekst = "telenor";
	table = document.getElementById("tab");
	var n = table.rows.length;
	var x = 1;
	do{
		var i = x;
		var m = table.rows[i].cells[0];
		if (m.innerHTML.toLowerCase() != tekst) {
			table.deleteRow(x);
			i++;
		}
		else{i++; x++}
	}
	while(i<n)
}
