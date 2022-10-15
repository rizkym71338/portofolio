import { useEffect, useState } from "react";

// export { default as Darkmode } from './Darkmode';

export const clamp = (value) => Math.max(0, value);

export const isBetween = (value, floor, ceil) =>
  value >= floor && value <= ceil;

export const capitalize = (str) => {
  return (str + "").replace(/^([a-z])|\s+([a-z])/g, ($1) => {
    return $1.toUpperCase();
  });
};

export const useScrollspy = (ids, offset = 0) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const listener = () => {
      const scroll = window.pageYOffset;

      const position = ids
        .map((id) => {
          const element = document.getElementById(id);

          if (!element) return { id, top: -1, bottom: -1 };

          const rect = element.getBoundingClientRect();
          const top = clamp(rect.top + scroll - offset);
          const bottom = clamp(rect.bottom + scroll - offset);

          return { id, top, bottom };
        })
        .find(({ top, bottom }) => isBetween(scroll, top, bottom));

      setActiveId(position?.id || "");
    };

    listener();

    window.addEventListener("resize", listener);
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("resize", listener);
      window.removeEventListener("scroll", listener);
    };
  }, [ids, offset]);

  return activeId;
};

export const getRGBColor = (hex, type) => {
  let color = hex.replace(/#/g, "");
  // rgb values
  var r = parseInt(color.substr(0, 2), 16);
  var g = parseInt(color.substr(2, 2), 16);
  var b = parseInt(color.substr(4, 2), 16);

  return `--color-${type}: ${r}, ${g}, ${b};`;
};
