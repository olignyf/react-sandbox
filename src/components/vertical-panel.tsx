import * as React from 'react';
import { scaleOrdinal } from 'd3-scale'
import { arc, pie } from 'd3-shape'
import { shuffle } from 'd3-array'
import { easeExpOut } from 'd3-ease'
import sortBy from 'lodash/sortBy'
import Surface from './Surface'
import { PureComponent } from 'react'
import { NodeGroup } from 'react-move'

const colors = scaleOrdinal()
  .range(['#fff7f3','#fde0dd','#fcc5c0','#fa9fb5','#f768a1','#dd3497','#ae017e','#7a0177','#49006a'])

// **************************************************
//  SVG Layout
// **************************************************
const view = [1000, 550] // [width, height]
const trbl = [10, 10, 10, 10] // [top, right, bottom, left] margins

const dims = [ // Adjusted dimensions [width, height]
  view[0] - trbl[1] - trbl[3],
  view[1] - trbl[0] - trbl[2],
]

const mockData = [
  {
    name: 'Linktype',
  }, {
    name: 'Quaxo',
  }, {
    name: 'Skynoodle',
  }, {
    name: 'Realmix',
  }, {
    name: 'Jetpulse',
  }, {
    name: 'Chatterbridge',
  }, {
    name: 'Riffpedia',
  }, {
    name: 'Layo',
  }, {
    name: 'Oyoba',
  },
]

const radius = (dims[1] / 2) * 0.70

export interface IPanelProps {
  /**
   * Theme that is defined from CreateHaiThemeContext
   */
  title: string;
  children?: any; 
  id?: any;
}

const VerticalPanel = (props: IPanelProps) => {
  const {
    title,
    ...rest
  } = props;
    
  return (
    <>
        <div {...rest} className={`vertical-panel`}>
          <div className="primaryTitle">{title}</div>
          {props.children}
        </div>
    </>
  );
};

export default VerticalPanel;