'use client';

import {Player} from '@remotion/player';

import {AngularDevsFrance} from '../../../../remotion/compositions/showcases/angularDevsFrance/AngularDevsFrance';
import {Code} from '../../../../src/app/Code';
import {ResizeWrapper} from '../../../../src/app/components/sidebar/ResizeWrapper';
import {Sidebar} from '../../../../src/app/components/sidebar/Sidebar';
import {Form, FormConfigProps} from '../../../../src/app/forms/Form';
import {Input} from '../../../../src/app/forms/input';
import {useInputChange} from '../../../../src/app/hooks/useInputChange';
import {encodeObjectValues} from '../../../../src/app/utils/encodeObjectValues';

import styles from '../../../../styles/app/layout/main.module.css';

export default function AngularDevsFrancePage() {
	const [talkTitle, setTalkTitle] = useInputChange<string>(
		'Example',
		'talkTitle',
	);
	const [titleColor, setTitleColor] = useInputChange<string>('#000000', 'titleColor');
	const [workTitle, setWorkTitle] = useInputChange<string | undefined>(
		undefined,
		'workTitle',
	);
	const [speakers, setSpeakers] = useInputChange<
		{picture: string; name: string; title: string}[]
	>([{picture: '', name: '', title: ''}], 'speakers');
	const [eventLogo, setEventLogo] = useInputChange<string>('', 'eventLogo');
	const [titleSize, setTitleSize] = useInputChange<string>('50', 'titleSize');
	const [backgroundImg, setBackgroundImg] = useInputChange<string | undefined>(
		undefined,
		'backgroundImg',
	);

	const props = {
		talkTitle,
		titleColor,
		workTitle,
		speakers,
		titleSize,
		backgroundImg,
		eventLogo,
	};

	const encodedParams = encodeObjectValues(props);

	const formConfig: FormConfigProps = {
		talkTitle: {
			state: talkTitle,
			setState: setTalkTitle,
			label: 'Title',
			component: Input,
		},
		titleColor: {
			state: titleColor,
			setState: setTitleColor,
			label: 'Title Color',
			component: Input,
		},
		workTitle: {
			state: workTitle,
			setState: setWorkTitle,
			label: 'Work Title (optional)',
			component: Input,
		},
		speakers: {
			state: speakers,
			setState: setSpeakers,
			label: 'Speakers',
			component: Input,
		},
		titleSize: {
			state: titleSize,
			setState: setTitleSize,
			label: 'Title size',
			component: Input,
		},
		backgroundImg: {
			state: backgroundImg,
			setState: setBackgroundImg,
			label: 'Background Image url',
			component: Input,
		},
		eventLogo: {
			state: eventLogo,
			setState: setEventLogo,
			label: 'Logo (optional)',
			component: Input,
			placeholder:
				'e.g: https://avatars.githubusercontent.com/u/929689?s=200&v=4',
		},
	};

	const compositionId = 'AngularDevsFrance';

	return (
		<>
			<section className={styles.videoContainer}>
				<Player
					autoPlay
					controls
					loop
					className={styles.video}
					style={{
						width: '100%',
						aspectRatio: '1/1',
					}}
					durationInFrames={120}
					compositionWidth={1200}
					compositionHeight={1200}
					fps={30}
					component={AngularDevsFrance}
					inputProps={props}
				/>
				<div className={styles.formMobile}>
					<Form
						data={props}
						compositionId={compositionId}
						formConfig={formConfig}
						encodedParams={encodedParams}
					/>
				</div>
				<Code composition={compositionId} params={props} />
			</section>

			<div className={styles.formSidebar}>
				<ResizeWrapper resizableSide="left">
					<Sidebar>
						<Form
							data={props}
							compositionId={compositionId}
							formConfig={formConfig}
							encodedParams={encodedParams}
						/>
					</Sidebar>
				</ResizeWrapper>
			</div>
		</>
	);
}
