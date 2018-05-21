import React from 'react';

const Helper = {
	Enum: {
		FontSet: {
			MATERIAL: 1,
			FONT_AWESOME: 2
		}
	},
	Transitions: {},
	ViewPort: {}
};

Helper.GenerateIcon = (icon, fontSet = 1) => {
	if(fontSet === Helper.Enum.FontSet.FONT_AWESOME) {
		return <i stax="icon" className={ `fa ${icon}` } />
	}

	return <i stax="icon" className="material-icons">{ icon }</i>
};

Helper.Transitions.EaseInOutQuad = (t, b, c, d) => {
	t /= d / 2;
	if (t < 1) {
		return c / 2 * t * t + b;
	}
	--t;

	return -c / 2 * (t * (t - 2) - 1) + b;
};

Helper.ViewPort.ScrollTo = (x, y, duration) => {
	let start = {
			x: window.scrollX,
			y: window.scrollY
		},
		change = {
			x: x - start.x,
			y: y - start.y
		},
		currentTime = 0,
		increment = 10;
		
	let animateScroll = function() {        
		currentTime += increment;

		let val = {
			x: Helper.Transitions.EaseInOutQuad(currentTime, start.x, change.x, duration),
			y: Helper.Transitions.EaseInOutQuad(currentTime, start.y, change.y, duration)
		}
		window.scrollTo(val.x, val.y);

		if(currentTime < duration) {
			setTimeout(animateScroll, increment);
		}
	};
	animateScroll();
};

export default Helper;