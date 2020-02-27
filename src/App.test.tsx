import App from './App';
import * as React from "react";
import {render} from "@testing-library/react";
// global.PIXI = PIXI;
// PIXI.settings.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = false;

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// const canvasElement = document.getElementById("container");
// const app = new PIXI.Application({
//     backgroundColor: 0x10bb98,
//     view: canvasElement,
//     width: window.innerHeight,
//     height: window.innerWidth
// } as any);

// it('WebGL support ', () => {
//     let hasSupport:boolean = false;
//     // Create canvas element. The canvas is not added to the
//     // document itself, so it is never displayed in the
//     // browser window.
//     let canvas = document.createElement("canvas");
//     // Get WebGLRenderingContext from canvas element.
//     let gl = canvas.getContext("webgl")
//         || canvas.getContext("experimental-webgl");
//     // Report the result.
//     if (gl && gl instanceof WebGLRenderingContext) {
//         hasSupport = true;
//     }
//
//     expect(hasSupport).toEqual(true);
// });

//
it('renders without crashing', () => {
    render(<App />);
});

// test("Container is defined", () => {
//     const container = render(
//         <div>
//             <Bunny/>
//         </div>,
//         app.stage
//     );
//     expect(container).toMatchSnapshot();
// });