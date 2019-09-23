import React, { FC } from 'react';

type LoadingProps = React.SVGProps<SVGSVGElement>;

const Loading: FC<LoadingProps> = (props) => (
    <svg
        className="prefix__lds-spinner"
        width={48}
        height={48}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        style={{
            background: '0 0',
            margin: 'auto',
        }}
      {...props}
    >
        <rect x={43} y={13} rx={0} ry={0} width={14} height={14}>
            <animate
                attributeName="opacity"
                values="1;0"
              keyTimes="0;1"
              dur="1.2s"
                begin="-1.05s"
              repeatCount="indefinite"
            />
        </rect>
        <rect
            x={43}
            y={13}
            rx={0}
          ry={0}
            width={14}
            height={14}
            transform="rotate(45 50 50)"
        >
            <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1.2s"
                begin="-0.8999999999999999s"
              repeatCount="indefinite"
            />
        </rect>
        <rect
            x={43}
          y={13}
            rx={0}
          ry={0}
            width={14}
            height={14}
            transform="rotate(90 50 50)"
        >
            <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1.2s"
                begin="-0.75s"
              repeatCount="indefinite"
            />
        </rect>
        <rect
            x={43}
          y={13}
            rx={0}
            ry={0}
            width={14}
            height={14}
          transform="rotate(135 50 50)"
        >
            <animate
              attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1.2s"
                begin="-0.6s"
                repeatCount="indefinite"
            />
        </rect>
        <rect
            x={43}
          y={13}
            rx={0}
          ry={0}
            width={14}
            height={14}
            transform="rotate(180 50 50)"
        >
            <animate
              attributeName="opacity"
              values="1;0"
                keyTimes="0;1"
                dur="1.2s"
                begin="-0.44999999999999996s"
                repeatCount="indefinite"
            />
        </rect>
        <rect
          x={43}
            y={13}
          rx={0}
            ry={0}
          width={14}
            height={14}
            transform="rotate(225 50 50)"
        >
            <animate
                attributeName="opacity"
                values="1;0"
              keyTimes="0;1"
              dur="1.2s"
                begin="-0.3s"
                repeatCount="indefinite"
            />
        </rect>
        <rect
            x={43}
            y={13}
          rx={0}
            ry={0}
          width={14}
            height={14}
            transform="rotate(270 50 50)"
        >
            <animate
                attributeName="opacity"
                values="1;0"
              keyTimes="0;1"
              dur="1.2s"
                begin="-0.15s"
                repeatCount="indefinite"
            />
        </rect>
        <rect
            x={43}
            y={13}
            rx={0}
            ry={0}
            width={14}
            height={14}
            transform="rotate(315 50 50)"
        >
            <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1.2s"
                begin="0s"
                repeatCount="indefinite"
            />
        </rect>
    </svg>
);

export default Loading;
