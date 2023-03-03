import { Skeleton, Stack } from '@chakra-ui/react';
import React from 'react';

type Props = {
	count: number;
	height: string;
	width: string;
};

const SkeletonLoader = ({ count, height, width }: Props) => {
	return (
		<>
			{[...Array(count)].map((item, index) => (
				<Skeleton
					key={index}
					height={height}
					width={{ base: 'full', md: width }}
					startColor="blackAlpha.400"
					endColor="whiteAlpha.200"
				/>
			))}
		</>
	);
};

export default SkeletonLoader;
