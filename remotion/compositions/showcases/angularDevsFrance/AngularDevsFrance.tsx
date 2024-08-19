import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {z} from 'zod';

import {Speaker} from '../../../types/defaultProps.types';
import {ShowcaseSchema} from '../showcases.types';

import {Details} from './Details';
import {Logo} from './Logo';
import {Speakers} from './Speakers';
import {TalkBackground} from './TalkBackground';
import {TalkTitle} from './TalkTitle';

export type AngularDevsFranceProps = {
	title: string;
	titleColor: string;
	workTitle?: string;
	speakers: Speaker[];
	date: string;
	time: string;
	location: string;
};

export const AngularDevsFrance: React.FC<AngularDevsFranceProps> = ({
	title,
	titleColor,
	workTitle,
	speakers,
	date,
	time,
	location,
}) => {
	return (
		<AbsoluteFill
			style={{
				backgroundColor: 'white',
				overflow: 'hidden',
				fontFamily: 'Noto Sans,sans-serif',
			}}
		>
			<Sequence name="Background">
				<TalkBackground />
			</Sequence>
			<Sequence name="Logo-&-title" from={30}>
				<TalkTitle title={title} titleColor={titleColor} />
				{workTitle && <Logo workTitle={workTitle} />}
				<Speakers speakers={speakers} />
			</Sequence>
			<Sequence name="Details" from={60}>
				<Details date={date} time={time} location={location} />
			</Sequence>
		</AbsoluteFill>
	);
};
