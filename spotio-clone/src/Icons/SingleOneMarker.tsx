import React from "react";

interface SingleOneMarkerProps {
  className?: string;
  fillColor: string;
}

const SingleOneMarker: React.FC<SingleOneMarkerProps> = ({
  className,
  fillColor,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="500"
    height="500"
    viewBox="0 0 40 40"
    fill="none"
    className={className}
  >
    <g filter="url(#filter0_d_8083_3898)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 28C26.6274 28 32 22.6274 32 16C32 9.37258 26.6274 4 20 4C13.3726 4 8 9.37258 8 16V28H20Z"
        fill="white"
      />
      <path
        d="M31.5 16C31.5 22.3513 26.3513 27.5 20 27.5H8.5V16C8.5 9.64873 13.6487 4.5 20 4.5C26.3513 4.5 31.5 9.64873 31.5 16Z"
        stroke="#EFEEED"
      />
    </g>
    <circle cx="20" cy="16" r="8" fill={fillColor} />
    <text
      x="20"
      y="17"
      textAnchor="middle"
      dominantBaseline="middle"
      fill="white"
      fontSize="12"
      fontFamily="Arial, sans-serif"
    >
      1
    </text>
    <defs>
      <filter
        id="filter0_d_8083_3898"
        x="0"
        y="0"
        width="40"
        height="40"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="4" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_8083_3898"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_8083_3898"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SingleOneMarker;
