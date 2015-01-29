// responses on scale from 1 (low) to 5 (high) 

function createRaceChart() {
	var chart = c3.generate({
		title: 'sfad',
		data: {
			columns: [
				['agree',85,75,78,77,77,57],
				['disagree',4,12,2,2,5,13],
				['mean',4.00,3.56,3.81,3.81,3.83,3.32]
			],
			type: 'bar',
			types: {
				mean: 'line'
			},
			axes: {
				agree: 'y',
				disagree: 'y',
				mean: 'y2'
			}
		},
		bar: {
			width: {
				ratio: 0.5
			}
		},
		axis: {
			x: {
				type: 'category',
				categories: ['White', 'Black', 'Asian', 'Hispanic', 'Multiracial', 'Other (including Middle Eastern)'],
			},
			y2: {
				show: true
			}
		},
		legend: {
			position: 'right'
		},
		bindto: '#chart1'
	})
}
function createYearChart() {
	var chart = c3.generate({
		data: {
			columns: [
				['agree',87,80,79,83],
				['disagree',2,4,5,5],
				['mean',4.04,3.91,3.81,3.90]
			],
			type: 'bar',
			types: {
				mean: 'line'
			},
			axes: {
				agree: 'y',
				disagree: 'y',
				mean: 'y2'
			}
		},
		bar: {
			width: {
				ratio: 0.5
			}
		},
		axis: {
			x: {
				type: 'category',
				categories: ['Freshmen', 'Sophomores', 'Juniors', 'Seniors']
			},
			ys: {
				show: true
			}
		},
		legend: {
			position: 'right'
		},
		bindto: '#chart2'
	})
}
function createSexOChart() {
	var chart = c3.generate({
		data: {
			columns: [
				['agree',83,84,71],
				['disagree',4,1,11],
				['mean',3.92,4.00,3.50]
			],
			type: 'bar',
			types: {
				mean: 'line'
			},
			axes: {
				agree: 'y',
				disagree: 'y',
				mean: 'y2'
			}
		},
		bar: {
			width: {
				ratio: 0.5
			}
		},
		axis: {
			x: {
				type: 'category',
				categories: ['Heterosexual', 'BGLQ', 'Rather not say']
			},
			y2: {
				show: true
			}
		},
		legend: {
			position: 'right'
		},
		bindto: '#chart3'
	})
}
function createGenderChart() {
	var chart = c3.generate({
		data: {
			columns: [
				['agree',86,81],
				['disagree',4,4],
				['mean', 3.94,3.90]
			],
			type: 'bar',
			types: {
				mean: 'line'
			},
			axes: {
				agree: 'y',
				disagree: 'y',
				mean: 'y2'
			}
		},
		bar: {
			width: {
				ratio: 0.5
			}
		},
		axis: {
			x: {
				type: 'category',
				categories: ['Male', 'Female']
			},
			y2: {
				show: true
			}
		},
		legend: {
			position: 'right'
		},
		bindto: '#chart4'
	})
}
window.addEventListener('load', function(){
	content = d3.select('#content')
	content.append('div').attr('id', 'chart1');
	content.append('div').attr('id', 'chart2');
	content.append('div').attr('id', 'chart3');
	content.append('div').attr('id', 'chart4')
	createRaceChart();
	createYearChart();
	createSexOChart();
	createGenderChart();
})