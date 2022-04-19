import React, { useEffect, useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import ImageList from './ImageList';
import { getValuesOfHash } from '../utils';

const TabsImages = ({images}) => {
    const [tabHash, setTabHash] = useState(getValuesOfHash(window.location.hash, 'activetab') || 0);

    useEffect(() => {
        window.location.hash = `activetab=${tabHash || 0}`;
    }, [tabHash]);

    return (
      <Tabs defaultActiveKey={tabHash}
            id="uncontrolled-tab-example"
            className="mt-5"
            onClick={(e) => {
                e.target.type === 'button' && setTabHash(e.target.dataset.rrUiEventKey);
            }}>
          {
              images.map((item, index) =>
                <Tab key={index}
                     eventKey={index}
                     title={`Группа ${index + 1}`}>
                    <ImageList images={images[index]}/>
                </Tab>
              )
          }
      </Tabs>
    );
};

export default TabsImages;