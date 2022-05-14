import { useEffect, useState } from "react";

export const useImageColor = (src: string) => {
  const [color, setColor] = useState<number[] | undefined>();
  useEffect(() => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.onload = () => {
      const context = document.createElement("canvas").getContext("2d");
      if (context) {
        context.drawImage(image, 0, 0);
        const {
          data: [r, g, b, a],
        } = context.getImageData(0, 0, 1, 1);
        setColor([r, g, b, a]);
      }
    };
    image.src = src;
  }, [src]);

  return color;
};
