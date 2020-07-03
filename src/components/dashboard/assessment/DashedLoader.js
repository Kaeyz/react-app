import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';



export default function DashedLoader() {
	// const [completed, setCompleted] = React.useState(0);

	// React.useEffect(() => {
	// 	function progress() {
	// 		setCompleted(prevCompleted => (prevCompleted >= 100 ? 0 : prevCompleted + 10));
	// 	}

	// 	const timer = setInterval(progress, 1000);
	// 	return () => {
	// 		clearInterval(timer);
	// 	};
	// }, []);

	return (
		<div>
			<CircularProgress  variant="static" value={'20'} />
		</div>
	);
}
