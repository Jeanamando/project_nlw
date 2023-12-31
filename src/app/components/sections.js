


export default function Section(props){
    console.log(props)
    return(
        <section className="flex w-auto h-auto">
                <div>
                    <h2>{props.title}</h2>
                    <p>{props.subtitle}</p>
                    <ul className="flex-wrap gap-2 mt-3">
                        <li>
                            <a 
                            target="_blank"
                            href="https://www.twitch.tv/directory/game/League%20of%20Legends">
                                <img src="https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg" alt="Imagem do jogo League of Legends"/>
                            </a>
                        </li>

                        <li>
                            <a 
                            target="_blank"
                            href="https://www.twitch.tv/directory/game/VALORANT">
                                <img src="https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg" alt="Imagem do jogo Valorant"/>
                            </a>
                        </li>

                        <li>
                            <a 
                            target="_blank"
                            href="https://www.twitch.tv/directory/game/Minecraft">
                                <img src="https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg" alt="Imagem do jogo Minecraft"/>
                            </a>
                        </li>

                        <li>
                            <a 
                            target="_blank"
                            href="https://www.twitch.tv/directory/game/Teamfight%20Tactics">
                                <img src="https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg" alt="Imagem do jogo TFT"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
    )
}