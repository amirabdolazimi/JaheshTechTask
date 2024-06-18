import { Dispatch, PropsWithChildren, SetStateAction } from "react";

interface IMinusIcon extends PropsWithChildren {
  handleClick: Dispatch<SetStateAction<Boolean>>;
}
const MinusIcon: React.FC<IMinusIcon> = ({ handleClick }) => {
  return (
    <svg
      onClick={() => {
        handleClick((prevState) => !prevState);
      }}
      width="20"
      height="22"
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_11603_43051)">
        <path
          d="M6.66602 11.9993H13.3327M18.3327 11.9993C18.3327 16.6017 14.6017 20.3327 9.99935 20.3327C5.39698 20.3327 1.66602 16.6017 1.66602 11.9993C1.66602 7.39698 5.39698 3.66602 9.99935 3.66602C14.6017 3.66602 18.3327 7.39698 18.3327 11.9993Z"
          stroke="#98A8B3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_11603_43051">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0 2)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MinusIcon;
