import { path, svg, g } from './svgElements.js';
import { getD } from './sector.js';
import {first_hundred_prime, first_hundred_fibonaci, whole_numbers } from './numberSeries.js';
import { saveSvg } from './exportSvg.js';

function circle(num, scale, translate) {
  const series = num.toString(2).split("");
  const radius = 50;
  const segments = series.length;
  const values = series;
  const sectorSize = 360 / segments;

  let object = ""
  values.forEach( (val, i) => {
    object += path(getD(radius, sectorSize * i, (i + 1)*sectorSize  ), i, val);
  });
  return g(object,  scale, translate, num);
}

function circle_stack(number_series) {
  const reversed = number_series.reverse();
  let s; 
  let v = 1 / reversed.length;
  reversed.forEach((num, i) => {
    let scale = 1 - i * v;
    let bb_box = scale * 100;
    let translation = (100 - bb_box)/2 * (1/scale); 
    s += circle(num, scale,`${translation} ${translation}`);
  })
  return svg(100, s)
}

//onePieDiv.innerHTML = circle_stack(first_hundred_prime) // , 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
saveSvg(circle_stack(whole_numbers), "whole_numbers.svg" )

//irst_hundred_prime
//first_hundred_fibonaci
//whole_numbers

// rename 
// sector
// circle
// circle_stack


