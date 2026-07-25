import type { SVGProps } from "react";

export default function ShadcnDarkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 100 100"
    >
      <g clipPath="url(#shadcn-clip-a)">
        <path
          fill="#000"
          d="M92.515 49.038a4.349 4.349 0 0 1 6.15 6.149L55.186 98.665a4.349 4.349 0 0 1-6.15-6.15zM83.82 1.21a4.349 4.349 0 0 1 6.149 6.15L7.361 89.969a4.349 4.349 0 0 1-6.15-6.15z"
        />
      </g>
      <defs>
        <clipPath id="shadcn-clip-a">
          <path fill="#fff" d="M0 0h100v100H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
