<template>
  <div>
                <div class="logo__up">
              <svg
                class="logo"
                xmlns:dc="http://purl.org/dc/elements/1.1/"
                xmlns:cc="http://creativecommons.org/ns#"
                xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                xmlns:svg="http://www.w3.org/2000/svg"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                viewBox="0 0 170.89719 94.634346"
                version="1.1"
                id="svg8"
                sodipodi:docname="drawing.svg"
                inkscape:version="0.92.4 (5da689c313, 2019-01-14)"
              >
                <g
                  inkscape:label="Layer 1"
                  inkscape:groupmode="layer"
                  id="layer1"
                  transform="translate(-17.800097,-71.346035)"
                >
                  <g
                    fill="rgb(127,86,218)"
                    id="g6273"
                    transform="translate(-29.934187,14.03165)"
                  >
                    <g
                      id="g6277"
                      transform="matrix(3.4412489,0,0,3.4412489,-362.84189,-181.85241)"
                    >
                      <path
                        sodipodi:nodetypes="ccscccccscccccccc"
                        inkscape:connector-curvature="0"
                        id="path6100"
                        d="m 119.70826,69.897005 0.0473,17.441642 c 0,0 0.85045,9.264394 11.29197,9.264394 10.44152,0 14.83548,-0.09453 14.83548,-0.09453 l -0.0472,-9.784334 -6.16442,-6.196371 -9.67176,0.0167 0.0334,3.292169 c 0,0 0.45101,1.938537 2.37199,1.955247 1.92099,0.01671 8.16838,0.01671 8.16838,0.01671 l 0.0668,5.49809 -10.99327,0.134818 c 0,0 -4.80894,-1.438326 -4.74212,-5.064728 0.0668,-3.6264 0.0334,-11.213431 0.0334,-11.213431 l 14.26542,0.06685 -0.0167,-5.330976 z"
                      ></path>
                      <path
                        sodipodi:nodetypes="ccscccccscccccccc"
                        inkscape:connector-curvature="0"
                        id="path6100-8"
                        d="m 168.57357,96.602995 -0.0473,-17.441639 c 0,0 -0.85044,-9.264398 -11.29196,-9.264398 -10.44153,0 -14.83547,0.09453 -14.83547,0.09453 l 0.0472,9.784331 6.16441,6.19637 9.67177,-0.01671 -0.0334,-3.292165 c 0,0 -0.45102,-1.938541 -2.372,-1.955249 -1.92099,-0.01671 -8.16839,-0.01671 -8.16839,-0.01671 l -0.0668,-5.498089 10.87447,0.0167 c 0,0 4.92776,1.286799 4.86094,4.913206 -0.0668,3.626396 -0.0334,11.213422 -0.0334,11.213422 l -14.26544,-0.06682 0.0167,5.33098 z"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div class="banner">
              <h2>{{ $t("welcomeText") }}</h2>
              <span>{{ $t("welcomeText2") }}</span>
            </div>
  </div>
</template>

<script>
export default {
  name: 'signCover',
  props: {
    msg: String
  }
}
</script>


