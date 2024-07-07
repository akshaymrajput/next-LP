import { useState, useEffect } from "react";

const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState({
        isMobile: false,
        isTablet: false,
        isDesktop: false,
    });

    const updateScreenSize = () => {
        const width = window.innerWidth;
        setScreenSize({
            isMobile: width < 640,
            isTablet: width >= 640 && width < 1280,
            isDesktop: width >= 1280,
        });
    };

    useEffect(() => {
        updateScreenSize();
        window.addEventListener("resize", updateScreenSize);

        return () => {
            window.removeEventListener("resize", updateScreenSize);
        };
    }, []);

    return screenSize;
};

export default useScreenSize;