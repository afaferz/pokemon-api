import React from 'react';
import { CardWrapper } from './GlassmorphismCard.module';
import { useGlassmorphism } from './hooks/useGlassmorphis';

const GlassmorphismCard = () => {
    const cardRef = React.useRef<HTMLDivElement | null>(null);
    const glassmorphismOptions = {
        speed: 300,
        scale: 1.1,
        perspective: 1200,
        easing: 'cubic-bezier(.03,.98,.52,.99)',
    };
    useGlassmorphism(glassmorphismOptions, cardRef);

    return <CardWrapper ref={cardRef}>WRAPPER</CardWrapper>;
};

export default GlassmorphismCard;
