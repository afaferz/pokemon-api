import React from 'react';
import { CardWrapper } from './GlassmorphismCard.module';
import { useGlassmorphism } from './hooks/useGlassmorphis';

interface IGlassmorphismCardProps {
    children?: React.ReactNode;
}

const GlassmorphismCard = ({ children }: IGlassmorphismCardProps) => {
    const cardRef = React.useRef<HTMLDivElement | null>(null);
    const glassmorphismOptions = {
        speed: 300,
        scale: 1.1,
        perspective: 1200,
        easing: 'cubic-bezier(.03,.98,.52,.99)',
    };
    useGlassmorphism(glassmorphismOptions, cardRef);

    return (
        <CardWrapper ref={cardRef} bgColor="#fbfd83">
            {children}
        </CardWrapper>
    );
};

export default GlassmorphismCard;
