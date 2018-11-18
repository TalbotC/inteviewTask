window.onload = function() {
	//Referenced to http://www.chartjs.org/docs/latest/getting-started/ last accessed 16/11/2018
	//Calling the canvas border from the HTML page
	var ctx = document.getElementById("total").getContext("2d");
	//Creating a new chart
	var total = new Chart(ctx,{
		//Defining the chart type
		type: 'line',
		//Data being displayed within the chart
		data: {
			//The data labels for each data value
			labels:["Total Users", "Total Active Users", "Total Active Resources", "Total Site Visits"],
			//The data values
			datasets:[{
				//Overall label for the data value
				label: 'Total Value',
				//The data values being used within the chart
				data:[500,21,50,1000],
				//referenced to https://www.w3schools.com/colors/colors_picker.asp last accessed 16/11/2018
				//The line colour within the chart
				borderColor: '#000000',
				//The background colour within the line chart
				backgroundColor: '#f2f2f2'

			}]
		}
	});
	//The layout is repeated with adjusts to match the new chart 
	var canvas = document.getElementById("devices").getContext("2d");
	var devices = new Chart(canvas,{
		type: 'doughnut',
		data: {
			labels:["Android", "IPhone", "Windows", "Mac", "Other"],
			datasets:[{
				data:[39,274,299,60,42],
				backgroundColor: ['#2eb82e', '#cccccc', '#4da6ff', '#000000', '#9933ff']
			}]
		}
	});
}