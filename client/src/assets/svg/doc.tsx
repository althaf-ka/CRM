interface props {
    width: string,
    height: string,
    className?: string,
}

const Doc = ({ width, height, className }: props) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M560 0H208c-35.344 0-64 28.656-64 64v896c0 35.344 28.656 64 64 64h608c35.344 0 64-28.656 64-64V320.016zm256 346.528V352H528V64h5.504zM208 960V64h256v352h352v544H208z" />
        </svg>
    )
}

export default Doc