import { useEffect, useState } from "react";

type Props = {
  src: string;
  className?: string;
  ariaLabel?: string;
};

export default function InlineSVG({ src, className, ariaLabel }: Props) {
  const [svg, setSvg] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadSvg() {
      try {
        const response = await fetch(src);

        if (!response.ok) {
          throw new Error(`SVG could not be loaded: ${src}`);
        }

        const svgText = await response.text();

        if (!cancelled) {
          setSvg(svgText);
        }
      } catch (error) {
        console.error("InlineSVG load error:", error);

        if (!cancelled) {
          setSvg(null);
        }
      }
    }

    loadSvg();

    return () => {
      cancelled = true;
    };
  }, [src]);

  if (!svg) {
    return (
      <span
        className={className}
        aria-label={ariaLabel}
        role="img"
      />
    );
  }

  return (
    <span
      className={className}
      aria-label={ariaLabel}
      role="img"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}