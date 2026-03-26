#pragma header

uniform float pixelSize;

void main() {
    vec2 uv = openfl_TextureCoordv;

    // evita valores raros (si pixelSize es 0 o muy chico)
    float sizeX = max(1.0, pixelSize) / openfl_TextureSize.x;
    float sizeY = max(1.0, pixelSize) / openfl_TextureSize.y;
    vec2 size = vec2(sizeX, sizeY);

    // fuerza UVs a bloques
    uv = floor(uv / size) * size;

    // color de la textura
    vec4 color = texture2D(bitmap, uv);

    // CORRECTO: multiplicar por alpha
    gl_FragColor = color * openfl_Alphav;
}
