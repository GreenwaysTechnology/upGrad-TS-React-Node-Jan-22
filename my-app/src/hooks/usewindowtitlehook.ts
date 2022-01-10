import { useState, useEffect } from 'react'

//feature-1 update Screen title

function useWindowTitle(windowTitle = '') {
    const [screen, setScreen] = useState(windowTitle)
    //useEffect to update window title after component mounted into dom
    useEffect(() => {
        document.title = screen;
    })
    //here we need return screen and setScreen
    return {
        screen,
        setScreen
    }

}

export { useWindowTitle };