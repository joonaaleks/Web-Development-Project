import { useTranslation } from "react-i18next";
import { useState, useEffect } from 'react';

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "60vh",
    },
    image: {
        width: "600px",
        height: "400px",
        objectFit: "cover",
        borderRadius: "10px",
    }
}

//Front page
export default function Home() {
    const { t } = useTranslation();
    const [cat, setCat] = useState("");

    useEffect(() => {
        const url = 'https://api.thecatapi.com/v1/images/search'
        const fetchImage = () => {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    setCat(data[0].url)
                }).catch(error => {
                    console.error("Error getting image:", error);
                });
        }

        fetchImage();
        const interval = setInterval(fetchImage, 5000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div>
            <h1>{t("Welcome to my project work!")}</h1>
            <div style={styles.container}>
                {cat && <img src={cat} alt="cat" style={styles.image} />}
            </div>
        </div>
    )
}