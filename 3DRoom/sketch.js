setup = (_) => {
  createCanvas((w = 600), w, WEBGL);
  T = translate;
  X = rotateX;
  Y = rotateY;
  H = 1800;
  U = H / 9;
  F = 0;
};

draw = (_) => {
  clear();
  background(255, 0, 50);
  X((F += 0.005));
  Y(F);
  for (i = 0; i < 16; i++) {
    i % 2 ? X(PI / 2) : Y(PI / 2);
    T(0, 0, H);
    for (y = -H; y < H; y += U) {
      for (x = -H; x < H; x += U) {
        if (noise(x / H + F, y / H + i) < 0.5) square(x, y, U);
      }
    }
    T(0, 0, -H);
  }
};
