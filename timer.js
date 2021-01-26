var times = [0, 0, 0, 0, 0];
var startCount;
var digit = document.getElementsByClassName('digit');

var number = {
	0 : function(ele) {
		ele[0].style.backgroundColor = "hsl(0, 67%, 58%)";
		ele[1].style.backgroundColor = "hsl(0, 67%, 58%)";
		ele[2].style.backgroundColor = "hsl(0, 67%, 58%)";
		ele[3].style.backgroundColor = "hsl(0, 100%, 95%)";
		ele[4].style.backgroundColor = "hsl(0, 67%, 58%)";
		ele[5].style.backgroundColor = "hsl(0, 67%, 58%)";
		ele[6].style.backgroundColor = "hsl(0, 67%, 58%)";
	},

	1 : function(ele) {
		ele[0].style.backgroundColor = "hsl(0, 100%, 95%)";
		ele[1].style.backgroundColor = "hsl(0, 100%, 95%)";
		ele[2].style.backgroundColor = "hsl(0, 67%, 58%)";
		ele[3].style.backgroundColor = "hsl(0, 100%, 95%)";
		ele[4].style.backgroundColor = "hsl(0, 100%, 95%)";
		ele[5].style.backgroundColor = "hsl(0, 67%, 58%)";
		ele[6].style.backgroundColor = "hsl(0, 100%, 95%)";
	},

	2 : function(ele) {
		ele[0].style.backgroundColor = "hsl(0, 67%, 58%)";
		ele[1].style.backgroundColor = "hsl(0, 100%, 95%)";
		ele[2].style.backgroundColor = "hsl(0, 67%, 58%)";
		ele[3].style.backgroundColor = "hsl(0, 67%, 58%)";
		ele[4].style.backgroundColor = "hsl(0, 67%, 58%)";
		ele[5].style.backgroundColor = "hsl(0, 100%, 95%)";
		ele[6].style.backgroundColor = "hsl(0, 67%, 58%)";
	},

	3 : function(ele) {
		ele[0].style.backgroundColor = "hsl(0, 67%, 58%)";
		ele[1].style.backgroundColor = "hsl(0, 100%, 95%)";
		ele[2].style.backgroundColor = "hsl(0, 67%, 58%)";
		ele[3].style.backgroundColor = "hsl(0, 67%, 58%)";
		ele[4].style.backgroundColor = "hsl(0, 100%, 95%)";
		ele[5].style.backgroundColor = "hsl(0, 67%, 58%)";
		ele[6].style.backgroundColor = "hsl(0, 67%, 58%)";
	},

	4 : function(ele) {
		ele[0].style.backgroundColor = "hsl(0, 100%, 95%)";
		ele[1].style.backgroundColor = "hsl(0, 67%, 58%)";
		ele[2].style.backgroundColor = "hsl(0, 67%, 58%)";
		ele[3].style.backgroundColor = "hsl(0, 67%, 58%)";
		ele[4].style.backgroundColor = "hsl(0, 100%, 95%)";
		ele[5].style.backgroundColor = "hsl(0, 67%, 58%)";
		ele[6].style.backgroundColor = "hsl(0, 100%, 95%)";
	},

	5 : function(ele) {
		ele[0].style.backgroundColor = "hsl(0, 67%, 58%)";
		ele[1].style.backgroundColor = "hsl(0, 67%, 58%)";
		ele[2].style.backgroundColor = "hsl(0, 100%, 95%)";
		ele[3].style.backgroundColor = "hsl(0, 67%, 58%)";
		ele[4].style.backgroundColor = "hsl(0, 100%, 95%)";
		ele[5].style.backgroundColor = "hsl(0, 67%, 58%)";
		ele[6].style.backgroundColor = "hsl(0, 67%, 58%)";
	},

	6 : function(ele) {
		ele[0].style.backgroundColor = "hsl(0, 67%, 58%)";
		ele[1].style.backgroundColor = "hsl(0, 67%, 58%)";
		ele[2].style.backgroundColor = "hsl(0, 100%, 95%)";
		ele[3].style.backgroundColor = "hsl(0, 67%, 58%)";
		ele[4].style.backgroundColor = "hsl(0, 67%, 58%)";
		ele[5].style.backgroundColor = "hsl(0, 67%, 58%)";
		ele[6].style.backgroundColor = "hsl(0, 67%, 58%)";
	},

	7 : function(ele) {
		ele[0].style.backgroundColor = "hsl(0, 67%, 58%)";
		ele[1].style.backgroundColor = "hsl(0, 100%, 95%)";
		ele[2].style.backgroundColor = "hsl(0, 67%, 58%)";
		ele[3].style.backgroundColor = "hsl(0, 100%, 95%)";
		ele[4].style.backgroundColor = "hsl(0, 100%, 95%)";
		ele[5].style.backgroundColor = "hsl(0, 67%, 58%)";
		ele[6].style.backgroundColor = "hsl(0, 100%, 95%)";
	},

	8 : function(ele) {
		ele[0].style.backgroundColor = "hsl(0, 67%, 58%)";
		ele[1].style.backgroundColor = "hsl(0, 67%, 58%)";
		ele[2].style.backgroundColor = "hsl(0, 67%, 58%)";
		ele[3].style.backgroundColor = "hsl(0, 67%, 58%)";
		ele[4].style.backgroundColor = "hsl(0, 67%, 58%)";
		ele[5].style.backgroundColor = "hsl(0, 67%, 58%)";
		ele[6].style.backgroundColor = "hsl(0, 67%, 58%)";
	},

	9 : function(ele) {
		ele[0].style.backgroundColor = "hsl(0, 67%, 58%)";
		ele[1].style.backgroundColor = "hsl(0, 67%, 58%)";
		ele[2].style.backgroundColor = "hsl(0, 67%, 58%)";
		ele[3].style.backgroundColor = "hsl(0, 67%, 58%)";
		ele[4].style.backgroundColor = "hsl(0, 100%, 95%)";
		ele[5].style.backgroundColor = "hsl(0, 67%, 58%)";
		ele[6].style.backgroundColor = "hsl(0, 67%, 58%)";
	}
}

function start()
{
	clearInterval(startCount);
	startCount = setInterval(run, 10);
}

function stop()
{
	clearInterval(startCount);
}

function reset()
{
	times = [0, 0, 0, 0, 0];
	display();
	stop();
}

async function run()
{
	await calcu();
	display();
}

function calcu()
{
	times[4]++;

	if (times[4] == 10)
	{
		times[3]++;
		times[4] ^= times[4];
	}

	if (times[3] == 10)
	{
		times[2]++;
		times[3] ^= times[3];
	}

	if (times[2] == 10)
	{
		times[1]++;
		times[2] ^= times[2];
	}

	if (times[1] == 10)
	{
		times[0]++;
		times[1] ^= times[1];
	}

	if (times[0] == 10)
	{
		stop();
		times = [9, 9, 9, 9, 9];
		display();
	}
}

function display()
{
	for (let i = 4; i > -1; i--)
	{
		number[times[i]](digit[i].children);
	}
}
