import { DailyWeatherDetails } from "../../types/types";
import "./AdditionalDetails.scss";

type Props = {
  additionalDetails: DailyWeatherDetails;
  wind: number;
};

const AdditionalDetails = ({ additionalDetails, wind }: Props) => {
  return (
    <div className="Additional-Details">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
      >
        <defs>
          <linearGradient
            // id="a"
            x1={38.79}
            y1={20.77}
            x2={133.4}
            y2={184.63}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#86c3db" />
            <stop offset={0.45} stopColor="#86c3db" />
            <stop offset={1} stopColor="#5eafcf" />
          </linearGradient>
          <linearGradient
            // id="b"
            x1={294}
            y1={112.82}
            x2={330}
            y2={175.18}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#fcd966" />
            <stop offset={0.45} stopColor="#fcd966" />
            <stop offset={1} stopColor="#fccd34" />
          </linearGradient>
          <linearGradient
            // id="c"
            x1={295.52}
            y1={185.86}
            x2={316.48}
            y2={222.14}
            xlinkHref="#b"
          />
          <linearGradient
            // id="d"
            x1={356.29}
            y1={194.78}
            x2={387.71}
            y2={249.22}
            xlinkHref="#b"
          />
          <symbol
            // id="e"
            viewBox="0 0 192.48 192.48"
            overflow="visible"
          >
            <path
              d="M179.74,120.19C127,120.19,84.16,78,84.16,25.89A93.24,93.24,0,0,1,87.31,2.24C39.47,7.4,2.24,47.37,2.24,95.94c0,52.08,42.79,94.3,95.57,94.3,44.5,0,81.78-30,92.43-70.65A98.36,98.36,0,0,1,179.74,120.19Z"
              stroke="#72b9d5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={4.48}
              fill="url(#a)"
            />
          </symbol>
        </defs>
        <path
          d="M233.79,432.27q-6,7.26-16.27,7.27t-16.27-7.27q-6.06-7.27-6.05-19.66t6.05-19.44q5.9-7.2,16.27-7.2,10.22,0,16.27,7.2t6,19.44Q239.77,425,233.79,432.27Zm-16.27-3.17q9.36,0,9.36-16.35t-9.36-16.34q-9.44,0-9.43,16.34T217.52,429.1Z"
          fill="#374251"
        />
        <path d="M266.26,423.34H245.74V413.4h20.52Z" fill="#374251" />
        <path
          d="M304.71,410.73a13.41,13.41,0,0,1,8.06,4.29,12.3,12.3,0,0,1,2.88,8.32,15,15,0,0,1-5.4,11.8q-5.47,4.61-15.19,4.61-10.15,0-15.66-5t-5.87-13.89h12.31q.44,8.78,8.72,8.78a8.67,8.67,0,0,0,5.79-1.8,6.07,6.07,0,0,0,2.13-4.9,5.63,5.63,0,0,0-2.24-4.82,10.48,10.48,0,0,0-6.33-1.66h-3.6V407.5h3.81a8,8,0,0,0,5.22-1.52,5.24,5.24,0,0,0,1.84-4.32,5.36,5.36,0,0,0-1.84-4.35,7.87,7.87,0,0,0-5.22-1.55,7.05,7.05,0,0,0-5,1.65q-1.72,1.66-2,5.41H275.12q.72-16.92,19.44-16.93,8.85,0,13.82,3.9a12.08,12.08,0,0,1,5,9.93,11.13,11.13,0,0,1-2.27,7A11.31,11.31,0,0,1,304.71,410.73Z"
          fill="#374251"
        />
        <path
          d="M282.83,162.84l24.93-6.42a1.78,1.78,0,0,1,1.71.46l18.37,18a1.8,1.8,0,0,0,3-1.73l-6.42-24.93a1.78,1.78,0,0,1,.46-1.71l18-18.37a1.8,1.8,0,0,0-1.73-3l-24.93,6.42a1.78,1.78,0,0,1-1.71-.46l-18.37-18a1.8,1.8,0,0,0-3,1.73l6.42,24.93a1.78,1.78,0,0,1-.46,1.71l-18,18.37A1.8,1.8,0,0,0,282.83,162.84Z"
          stroke="#fcd34d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          fill="url(#b)"
        >
          <animateTransform
            attributeName="transform"
            additive="sum"
            type="rotate"
            values="-15 312 144; 15 312 144; -15 312 144"
            dur="6s"
            calcMode="spline"
            keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="1; .75; 1; .75; 1; .75; 1"
            dur="6s"
            calcMode="spline"
            keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1"
            repeatCount="indefinite"
          />
        </path>
        <path
          d="M285.4,193.44l12,12.25a1.19,1.19,0,0,1,.3,1.14l-4.28,16.62a1.2,1.2,0,0,0,2,1.15l12.25-12a1.19,1.19,0,0,1,1.14-.3l16.62,4.28a1.2,1.2,0,0,0,1.15-2l-12-12.25a1.19,1.19,0,0,1-.3-1.14l4.28-16.62a1.2,1.2,0,0,0-2-1.15l-12.25,12a1.19,1.19,0,0,1-1.14.3l-16.62-4.28A1.2,1.2,0,0,0,285.4,193.44Z"
          stroke="#fcd34d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          fill="url(#c)"
        >
          <animateTransform
            attributeName="transform"
            additive="sum"
            type="rotate"
            values="-15 306 204; 15 306 204; -15 306 204"
            begin="-.33s"
            dur="6s"
            calcMode="spline"
            keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="1; .75; 1; .75; 1; .75; 1"
            begin="-.33s"
            dur="6s"
            calcMode="spline"
            keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1"
            repeatCount="indefinite"
          />
        </path>
        <path
          d="M337.32,223.73l24.8,6.9a1.83,1.83,0,0,1,1.25,1.25l6.9,24.8a1.79,1.79,0,0,0,3.46,0l6.9-24.8a1.83,1.83,0,0,1,1.25-1.25l24.8-6.9a1.79,1.79,0,0,0,0-3.46l-24.8-6.9a1.83,1.83,0,0,1-1.25-1.25l-6.9-24.8a1.79,1.79,0,0,0-3.46,0l-6.9,24.8a1.83,1.83,0,0,1-1.25,1.25l-24.8,6.9A1.79,1.79,0,0,0,337.32,223.73Z"
          stroke="#fcd34d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          fill="url(#d)"
        >
          <animateTransform
            attributeName="transform"
            additive="sum"
            type="rotate"
            values="-15 372 222; 15 372 222; -15 372 222"
            begin="-.67s"
            dur="6s"
            calcMode="spline"
            keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="1; .75; 1; .75; 1; .75; 1"
            begin="-.67s"
            dur="6s"
            calcMode="spline"
            keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1"
            repeatCount="indefinite"
          />
        </path>
        <use
          width={192.48}
          height={192.48}
          transform="translate(159.76 139.76)"
          xlinkHref="#e"
        >
          <animateTransform
            attributeName="transform"
            additive="sum"
            type="rotate"
            values="-15 96.24 96.24; 9 96.24 96.24; -15 96.24 96.24"
            dur="6s"
            repeatCount="indefinite"
          />
        </use>
      </svg>

      <p>{wind}</p>

      <p>{new Date() ? "" : ""}</p>
      <p>Sunrise: {additionalDetails.sunrise}</p>
      <p>Sunset: {additionalDetails.sunset}</p>
      <p>UV: {additionalDetails.uvMax}</p>
    </div>
  );
};

export default AdditionalDetails;
