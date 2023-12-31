import React, { useState } from 'react'
import { animated, useSpring } from '@react-spring/web'

const ThemeToggle = () => {
    const [isDarkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(previous => !previous);
    };

    const properties = {
        dark: {
            r: 9,
            transform: "rotate(40deg)",
            cx: 12,
            cy: 4,
            opacity: 0,
            stroke: 'black',
            fill: 'black'
        },
        light: {
            r: 5,
            transform: "rotate(90deg)",
            cx: 30,
            cy: 0,
            opacity: 1,
            stroke: 'yellow',
            fill: 'yellow'
        },
        springConfig: { mass: 4, tension: 250, friction: 35 }
    };

    const { r, transform, cx, cy, opacity, stroke, fill } = properties[
        isDarkMode ? "dark" : "light"
    ];

    const svgContainerProps = useSpring({
        transform,
        stroke,
        config: properties.springConfig
    });
    const centerCircleProps = useSpring({ r, fill, config: properties.springConfig });
    const maskedCircleProps = useSpring({
        cx,
        cy,
        fill,
        config: properties.springConfig
    });
    const linesProps = useSpring({ opacity, stroke, config: properties.springConfig });

    return (
        <div >
            <label className="absolute top-2 right-5 bg-purple w-20 h-10 rounded-full z-100" >
                <input onClick={toggleDarkMode} type="checkbox" id="check" className="sr-only peer" />
                <span className="w-2/5 h-4/5 flex justify-center items-center bg-white absolute rounded-full left-1 top-1 peer-checked:bg-blue peer-checked:left-11 transition-all duration-500">
                    <animated.svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                            cursor: "pointer",
                            ...svgContainerProps
                        }}
                    >
                        # Moon
                        <mask id="myMask2">
                            <rect x="0" y="0" width="100%" height="100%" fill="white" />
                            <animated.circle style={maskedCircleProps} r="9" />
                        </mask>

                        # Circle of the sun
                        <animated.circle
                            cx="12"
                            cy="12"
                            style={centerCircleProps}
                            mask="url(#myMask2)"
                        />

                        # Outer lines of the suns' circle
                        <animated.g style={linesProps}>
                            <line x1="12" y1="1" x2="12" y2="3" />
                            <line x1="12" y1="21" x2="12" y2="23" />
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                            <line x1="1" y1="12" x2="3" y2="12" />
                            <line x1="21" y1="12" x2="23" y2="12" />
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                        </animated.g>
                    </animated.svg>
                </span>
            </label>
        </div>
    )
}

export default ThemeToggle