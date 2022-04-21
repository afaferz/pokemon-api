import React from 'react';
import VanillaTilt, { TiltOptions } from 'vanilla-tilt';


export const useGlassmorphism = (options: TiltOptions, ref: any) => {
    const glassMorphismOptions = {
        ...options,
    }

    React.useEffect(() => {
        VanillaTilt.init(ref.current, glassMorphismOptions)
    }, [glassMorphismOptions])

}