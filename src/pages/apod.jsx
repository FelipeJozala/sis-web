export default function apod({img}) {
    return (
        <> 
            <h3>Imagem do Dia</h3>
           
            <p><strong>{img.title}</strong></p>
             <ul>
                <li>Data: {img.date}</li>
                <li>Imagem por: {img.copyright}</li>
            </ul>
            <img src={img.hdurl} alt={img.title} style={{width: 70 + '%'}} />
        </>
    );
}

export const getStaticProps = async () => {
    
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_KEY}`);
    const data = await response.json();

    return {
        props: {
            img: data,
        },
        revalidate: 10800  
    }
    
};


