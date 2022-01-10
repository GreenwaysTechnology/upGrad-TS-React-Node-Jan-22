import { useState, useEffect } from 'react';

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        //imperative dom listner
        window.addEventListener('resize', handleResize)
        //clean up code
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    });
    return width;
}

export { useWindowWidth }