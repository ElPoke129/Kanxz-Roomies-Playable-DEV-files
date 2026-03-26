#pragma header

uniform float iTime;
uniform float size;

#define iChannel0 bitmap
#define fragColor gl_FragColor
#define mainImage main

void mainImage()
{
    vec2 fragCoord = openfl_TextureCoordv * openfl_TextureSize;
    vec2 iResolution = openfl_TextureSize;
    vec2 uv = fragCoord.xy / iResolution.xy;
    
    float plx = iResolution.x * size / 500.0;
    float ply = iResolution.y * size / 275.0;
    
    float dx = plx * (1.0 / iResolution.x);
    float dy = ply * (1.0 / iResolution.y);
    
    uv.x = dx * floor(uv.x / dx);
    uv.y = dy * floor(uv.y / dy);
    
    if(size != 0.0)
        fragColor = flixel_texture2D(iChannel0, uv);
    else
        fragColor = flixel_texture2D(iChannel0, openfl_TextureCoordv);
}
