import { useParams } from 'react-router-dom';
import GlassmorphismCard from '../../features/glassmorphism-card/GlassmorphismCard';

const Pokemon = () => {
    const params = useParams();
    console.log(params);
    return <GlassmorphismCard></GlassmorphismCard>;
};

export default Pokemon;
