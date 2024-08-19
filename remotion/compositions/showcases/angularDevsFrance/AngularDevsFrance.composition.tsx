import React from 'react';
import {Composition, Folder} from 'remotion';

import {AngularDevsFrance} from './AngularDevsFrance';

export const AngularDevsFranceComposition: React.FC = () => {
	return (
		<Folder name="AngularDevsFrance">
			<Composition
				id="AngularDevsFrance"
				component={AngularDevsFrance}
				durationInFrames={300}
				fps={30}
				width={1280}
				height={720}
				defaultProps={{
					title: 'AngularDevsFrance',
					titleColor: '#000000',
					workTitle: 'Developer',
					speakers: [
						{
							name: 'John Doe',
							picture: 'https://example.com/john-doe.jpg',
							title: 'Developer',
						},
					],
					date: '2023-01-01',
					time: '10:00',
					location: 'Online',
				}}
			/>
		</Folder>
	);
};
