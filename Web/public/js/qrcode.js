/*
 * modified from the typscript QR Code generator input demo
 *
 * Copyright (c) Project Nayuki. (MIT License)
 * https://www.nayuki.io/page/qr-code-generator-library
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * - The above copyright notice and this permission notice shall be included in
 *   all copies or substantial portions of the Software.
 * - The Software is provided "as is", without warranty of any kind, express or
 *   implied, including but not limited to the warranties of merchantability,
 *   fitness for a particular purpose and noninfringement. In no event shall the
 *   authors or copyright holders be liable for any claim, damages or other
 *   liability, whether in an action of contract, tort or otherwise, arising from,
 *   out of or in connection with the Software or the use or other dealings in the
 *   Software.
 */

function toSvgString(qr, border, lightColor, darkColor) {
  if (border < 0) throw new RangeError("Border must be non-negative");
  let parts = [];
  for (let y = 0; y < qr.size; y++) {
    for (let x = 0; x < qr.size; x++) {
      if (qr.getModule(x, y))
        parts.push(`M${x + border},${y + border}h1v1h-1z`);
    }
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ${
    qr.size + border * 2
  } ${
    qr.size + border * 2
  }" stroke="none" style="width: 100%;" class="object-fit"><rect width="100%" height="100%" fill="${lightColor}"/><path d="${parts.join(
    " "
  )}" fill="${darkColor}"/></svg>
`;
}

function generateQrCode(text) {
  return toSvgString(
    qrcodegen.QrCode.encodeText(text, qrcodegen.QrCode.Ecc.MEDIUM),
    3,
    "#ffffff", // light
    "#000000" // dark
  );
}
