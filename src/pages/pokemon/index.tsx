import { useParams } from 'react-router-dom';

const Pokemon = () => {
    const params = useParams();
    console.log(params);
    return <h1>Pokemon</h1>;
};

export default Pokemon;
