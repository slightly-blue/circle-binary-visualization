export function svg(width, content) {
    return `<svg viewBox="0 0 ${width} ${width}" xmlns="http://www.w3.org/2000/svg"
    xmlns:svg="http://www.w3.org/2000/svg" >${content}</svg>`;
}

export function g(content, scale, translate, num) {
    return `<g class='sectors' data-num='${num}' transform="scale(${scale}) translate(${translate})">${content}</g>`
}

export function path(d, idx, val) {
    return `<path d='${d}' class='type${idx}' fill='${Number(val) ? 'black' : 'white'  }' />`; // stroke=${Number(val) ? 'white':'black'  }   stroke-width="0.1"
}