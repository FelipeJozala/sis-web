import React from 'react';
import GridBanner from '../GridBanner/GridBanner';
import { GridContainer } from './style';

const GridSection = () => {
  	return (
    	<GridContainer>
			<GridBanner/>
			<GridBanner/>
			<GridBanner/>
    	</GridContainer>
  	);
};

export default GridSection
