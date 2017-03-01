import React from 'react';
import { Step } from 'react-presents';
import ContentSlide from '../Presentation/ContentSlide';
import { CollectionSvg, GridSvg, ListSvg, TableSvg } from '../Components/BuildingBlocks';

 const slide = () => (
  <ContentSlide>
    <h1>{slide.title}</h1>

    <Step index={1} exact>
      <div>
        <h2>List</h2>
        <ListSvg />
      </div>
    </Step>
    <Step index={2} exact>
      <div>
        <h2>Table</h2>
        <TableSvg />
      </div>
    </Step>
    <Step index={3} exact>
      <div>
        <h2>Grid</h2>
        <GridSvg />
      </div>
    </Step>
    <Step index={4} exact>
      <div>
        <h2>Collection</h2>
        <CollectionSvg />
      </div>
    </Step>
  </ContentSlide>
);

slide.title = 'The building blocks';

export default slide;
