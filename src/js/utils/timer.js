class Timer
{
	constructor(name, delay, func, ...value)
	{
		this.name = name;
		this.delay = delay;
		this.func = func;
		this.value = value
		this.timeOut;
	};

	setTimer()
	{
		this.timeOut = setTimeout(() => { this.func(...this.value) }, this.delay);
	};

	clearTimer()
	{
		clearTimeout(this.timeOut);
	}
};