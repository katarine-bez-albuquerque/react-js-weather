import { FormEvent, useState } from "react";
import Container from "../../components/container";
import Navbar from "../../components/navbar";
import ImageWeather from "../../components/image";
import Button from "../../components/button";
import Header from "../../components/header";
import Main from "../../components/main";
import Article from "../../components/article";
import Title from "../../components/title";
import Subtitle from "../../components/subtitle";
import Text from "../../components/text";
import Footer from "../../components/footer";
import { Iweather } from "../../interfaces/weather";
import { viewIcons } from "../../functions";
import styles from '../../styles/page.module.css';

const HomeWeather = () => {
    const [show, setShow] = useState(false);
    const [local, setLocal] = useState('');
    const [data, setData] = useState<Iweather>();

    const apikey = import.meta.env.VITE_API_KEY_WEATHER;
    let regex = /[a-zA-Z]/;
    
    const search = async (e:FormEvent) => {
        e.preventDefault();
        //console.log(local);        
        if(regex.test(local)) {
            await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${local}&units=metric&APPID=${apikey}&lang=pt_br`)
            .then(res => res.json())
            .then(json => {
                setData(json);
                setShow(true);
            });
            return data;
        }
        else {
            setShow(false);
        }      
    }

    return (
        <Container>
            <Navbar onsubmit={search}>
                <ImageWeather src="/images/location.svg" alt="Localização" />
                <section className={styles.field}>
                    <input
                        type="text"
                        autoComplete="off"
                        placeholder="Buscar Local..."
                        name={local}
                        value={local}
                        onChange={e => setLocal(e.target.value)}
                    />
                </section>
                <Button type="submit">
                    <ImageWeather src="/images/search.svg" alt="Pesquisar Local" />
                </Button>
            </Navbar>
            <Header />
            <Main>
                {   
                    (show && data?.id) ?
                        (
                            <>
                                <section className={styles.temp}>
                                    <Article>
                                        <ImageWeather src={ viewIcons(data.weather[0].icon)} alt={data.weather[0].description} />
                                        <Title description={`${data.main.temp}º`} />
                                        <Subtitle description={data.weather[0].description} />
                                    </Article>
                                </section>
                                <section className={styles.values}>
                                    <Article>
                                        <ImageWeather src="/images/humidity.svg" alt="Umidade" />
                                        <section>
                                            <Subtitle description={`${data.main.humidity}%`} />
                                            <Text description="Umidade" />
                                        </section>
                                    </Article>
                                    <Article>
                                        <ImageWeather src="/images/wind.svg" alt="Ventos" />
                                        <section>
                                            <Subtitle description={`${data.wind.speed} Km/h`} />
                                            <Text description="Ventos" />
                                        </section>
                                    </Article>
                                </section>
                            </>
                        )
                        :
                        (
                            <>
                                <section className={styles.temp}>
                                    <Article>
                                        <ImageWeather src="/images/error.svg" alt="Erro" />
                                        <Title description="Digite um Local" />
                                    </Article>
                                </section>
                            </>
                        )
                }
            </Main>
            <Footer />
        </Container>
    )
}

export default HomeWeather;