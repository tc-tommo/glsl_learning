#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D scene;
uniform sampler2D palette;
uniform vec2 u_tex0Resolution;

#define fColour gl_FragColor
#define fCoord gl_FragCoord
#define vwRes u_resolution

#define PI 3.14159265359

void main(){
    vec2 uv = fCoord.xy/vwRes.xy;

    float index = texture2D(scene, uv).r;
    vec4 palette = texture2D(palette, vec2(index, 0.5));
    fColour = palette;


}


