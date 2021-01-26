var times = [0, 0, 0, 0, 0];
var startCount;
var digit = document.getElementsByClassName('digit');

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

function adjust(ele, t)
{
	t += '';

	switch(t)
	{
		case '0':
		{
			ele[0].style.backgroundColor = "hsl(0, 67%, 58%)";
			ele[1].style.backgroundColor = "hsl(0, 67%, 58%)";
			ele[2].style.backgroundColor = "hsl(0, 67%, 58%)";
			ele[3].style.backgroundColor = "hsl(0, 100%, 95%)";
			ele[4].style.backgroundColor = "hsl(0, 67%, 58%)";
			ele[5].style.backgroundColor = "hsl(0, 67%, 58%)";
			ele[6].style.backgroundColor = "hsl(0, 67%, 58%)";
			break;
		}

		case '1':
		{
			ele[0].style.backgroundColor = "hsl(0, 100%, 95%)";
			ele[1].style.backgroundColor = "hsl(0, 100%, 95%)";
			ele[2].style.backgroundColor = "hsl(0, 67%, 58%)";
			ele[3].style.backgroundColor = "hsl(0, 100%, 95%)";
			ele[4].style.backgroundColor = "hsl(0, 100%, 95%)";
			ele[5].style.backgroundColor = "hsl(0, 67%, 58%)";
			ele[6].style.backgroundColor = "hsl(0, 100%, 95%)";
			break;
		}

		case '2':
		{
			ele[0].style.backgroundColor = "hsl(0, 67%, 58%)";
			ele[1].style.backgroundColor = "hsl(0, 100%, 95%)";
			ele[2].style.backgroundColor = "hsl(0, 67%, 58%)";
			ele[3].style.backgroundColor = "hsl(0, 67%, 58%)";
			ele[4].style.backgroundColor = "hsl(0, 67%, 58%)";
			ele[5].style.backgroundColor = "hsl(0, 100%, 95%)";
			ele[6].style.backgroundColor = "hsl(0, 67%, 58%)";
			break;
		}

		case '3':
		{
			ele[0].style.backgroundColor = "hsl(0, 67%, 58%)";
			ele[1].style.backgroundColor = "hsl(0, 100%, 95%)";
			ele[2].style.backgroundColor = "hsl(0, 67%, 58%)";
			ele[3].style.backgroundColor = "hsl(0, 67%, 58%)";
			ele[4].style.backgroundColor = "hsl(0, 100%, 95%)";
			ele[5].style.backgroundColor = "hsl(0, 67%, 58%)";
			ele[6].style.backgroundColor = "hsl(0, 67%, 58%)";
			break;
		}

		case '4':
		{
			ele[0].style.backgroundColor = "hsl(0, 100%, 95%)";
			ele[1].style.backgroundColor = "hsl(0, 67%, 58%)";
			ele[2].style.backgroundColor = "hsl(0, 67%, 58%)";
			ele[3].style.backgroundColor = "hsl(0, 67%, 58%)";
			ele[4].style.backgroundColor = "hsl(0, 100%, 95%)";
			ele[5].style.backgroundColor = "hsl(0, 67%, 58%)";
			ele[6].style.backgroundColor = "hsl(0, 100%, 95%)";
			break;
		}

		case '5':
		{
			ele[0].style.backgroundColor = "hsl(0, 67%, 58%)";
			ele[1].style.backgroundColor = "hsl(0, 67%, 58%)";
			ele[2].style.backgroundColor = "hsl(0, 100%, 95%)";
			ele[3].style.backgroundColor = "hsl(0, 67%, 58%)";
			ele[4].style.backgroundColor = "hsl(0, 100%, 95%)";
			ele[5].style.backgroundColor = "hsl(0, 67%, 58%)";
			ele[6].style.backgroundColor = "hsl(0, 67%, 58%)";
			break;
		}

		case '6':
		{
			ele[0].style.backgroundColor = "hsl(0, 67%, 58%)";
			ele[1].style.backgroundColor = "hsl(0, 67%, 58%)";
			ele[2].style.backgroundColor = "hsl(0, 100%, 95%)";
			ele[3].style.backgroundColor = "hsl(0, 67%, 58%)";
			ele[4].style.backgroundColor = "hsl(0, 67%, 58%)";
			ele[5].style.backgroundColor = "hsl(0, 67%, 58%)";
			ele[6].style.backgroundColor = "hsl(0, 67%, 58%)";
			break;
		}

		case '7':
		{
			ele[0].style.backgroundColor = "hsl(0, 67%, 58%)";
			ele[1].style.backgroundColor = "hsl(0, 100%, 95%)";
			ele[2].style.backgroundColor = "hsl(0, 67%, 58%)";
			ele[3].style.backgroundColor = "hsl(0, 100%, 95%)";
			ele[4].style.backgroundColor = "hsl(0, 100%, 95%)";
			ele[5].style.backgroundColor = "hsl(0, 67%, 58%)";
			ele[6].style.backgroundColor = "hsl(0, 100%, 95%)";
			break;
		}

		case '8':
		{
			ele[0].style.backgroundColor = "hsl(0, 67%, 58%)";
			ele[1].style.backgroundColor = "hsl(0, 67%, 58%)";
			ele[2].style.backgroundColor = "hsl(0, 67%, 58%)";
			ele[3].style.backgroundColor = "hsl(0, 67%, 58%)";
			ele[4].style.backgroundColor = "hsl(0, 67%, 58%)";
			ele[5].style.backgroundColor = "hsl(0, 67%, 58%)";
			ele[6].style.backgroundColor = "hsl(0, 67%, 58%)";
			break;
		}

		case '9':
		{
			ele[0].style.backgroundColor = "hsl(0, 67%, 58%)";
			ele[1].style.backgroundColor = "hsl(0, 67%, 58%)";
			ele[2].style.backgroundColor = "hsl(0, 67%, 58%)";
			ele[3].style.backgroundColor = "hsl(0, 67%, 58%)";
			ele[4].style.backgroundColor = "hsl(0, 100%, 95%)";
			ele[5].style.backgroundColor = "hsl(0, 67%, 58%)";
			ele[6].style.backgroundColor = "hsl(0, 67%, 58%)";
			break;
		}
	}
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
		times = [9, 9, 9, 9, 9];
		display();
		stop();
	}
}

function display()
{
	for (let i = 4; i > -1; i--)
	{
		adjust(digit[i].children, times[i]);
	}
}