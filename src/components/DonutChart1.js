import { scaleOrdinal } from 'd3-scale'
import { arc, pie } from 'd3-shape'
import { shuffle } from 'd3-array'
import { easeExpOut } from 'd3-ease'
import sortBy from 'lodash/sortBy'
import React, { Component } from 'react'
import { NodeGroup } from 'react-move'
import * as d3 from 'd3'

const colors = scaleOrdinal()
  .range(['#fff7f3','#fde0dd','#fcc5c0','#fa9fb5','#f768a1','#dd3497','#ae017e','#7a0177','#49006a'])

class DonutChart extends Component {

  componentDidMount(){
    this.createDonut();
  }


  createDonut() {  
    var svg = d3.select('#pieChart').append("svg:svg").attr('width', 300).attr('height', 300).append("g").attr("transform", "translate(" + 300 / 2 + "," + 300 / 2 + ")"); 
    var arc = d3.arc().innerRadius(100).outerRadius(100).startAngle(-2.5).endAngle(10 * (Math.PI)/180); 
    svg.append("path").attr('stroke-width','6px').attr('stroke-linejoin','round').attr('d', arc).attr('fill', '#123456').attr('stroke','#123456'); 
  }

  render() {
    return (
      <div>
        <button onClick={this.update}>
          Update
        </button>
        <div id="pieChart"></div>
      </div>
    )
  }
}

export default DonutChart

