import React from 'react';
import Log from './Log';
import Story from './Story';
import Story2 from './Story2';






const Main = ( {display} ) => {
	if (display === 'story') {
		return <Story />
	} else if (display === 'story2') {
		return <Story2 />
	} else if (display === 'battle') {
		return <Log />
	}
}	

export default Main;