import {AngularDevsFrance} from '../../../../remotion/compositions/showcases/angularDevsFrance/AngularDevsFrance';
import {defaultTalkValues} from '../../defaultValues';
import {CompositionProps} from '../compositionsConfig';

export const AngularDevsFranceConfig: CompositionProps = {
	compositionName: 'AngularDevsFrance',
	component: AngularDevsFrance,
	width: 1280,
	height: 720,
	durationInFrames: 300,
	fps: 30,
	defaultProps: {
		...defaultTalkValues,
		titleColor: '#000000',
		workTitle: '',
		speakers: [
			{
				name: 'John Doe',
				picture: 'https://example.com/john-doe.jpg',
				title: 'Developer',
			},
		],
	},
};
