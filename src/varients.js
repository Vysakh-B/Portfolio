export const fadeIn = (direction, delay) => {
    return {
        hidden: {
            transform: `translate(${direction === 'left' ? '40px' : direction === 'right' ? '-40px' : '0'}, ${
                direction === 'up' ? '40px' : direction === 'down' ? '-40px' : '0'
            })`,
            opacity: 0,
        },
        show: {
            transform: 'translate(0, 0)',
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1.2,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    };
};
