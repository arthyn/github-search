const sizes = [
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    '2xl',
    '3xl',
    '4xl',
    '5xl',
    '6xl'
]

const TextSkeleton = ({ baseSize }) => {
    const sizeIndex = sizes.indexOf(baseSize);
    const randSizeIndex = sizeIndex > -1 ? sizeIndex + (1 - Math.floor(Math.random() * 2)) : null;
    const randSize = sizes[randSizeIndex];
    const sizeClass = randSize ? `max-w-${randSize}` : '';

    return (<div className={`skeleton ${sizeClass}`}></div>);
}

export default TextSkeleton;