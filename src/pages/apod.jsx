import Apod from "../components/Apod/Apod";

export default function apod({img}) {
    return (
            <Apod img={img}/>
    );
}

export const getStaticProps = async () => {
    
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_KEY}`);
    const data = await response.json();

    return {
        props: {
            img: data,
        },
        revalidate: 5 
    }
    
};


