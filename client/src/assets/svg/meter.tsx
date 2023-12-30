interface props {
    width: string,
    height: string,
    className?: string
}

const Meter = ({ className, width, height }: props) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 36 36"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <title>{"dashboard-line"}</title>
            <path
                className="clr-i-outline clr-i-outline-path-1"
                d="M25.18,12.32l-5.91,5.81a3,3,0,1,0,1.41,1.42l5.92-5.81Z"
            />
            <path
                className="clr-i-outline clr-i-outline-path-2"
                d="M18,4.25A16.49,16.49,0,0,0,5.4,31.4l.3.35H30.3l.3-.35A16.49,16.49,0,0,0,18,4.25Zm11.34,25.5H6.66a14.43,14.43,0,0,1-3.11-7.84H7v-2H3.55A14.41,14.41,0,0,1,7,11.29l2.45,2.45,1.41-1.41L8.43,9.87A14.41,14.41,0,0,1,17,6.29v3.5h2V6.3a14.47,14.47,0,0,1,13.4,13.61H28.92v2h3.53A14.43,14.43,0,0,1,29.34,29.75Z"
            />
            <rect x={0} y={0} width={36} height={36} fillOpacity={0} />
        </svg>
    )
}

export default Meter