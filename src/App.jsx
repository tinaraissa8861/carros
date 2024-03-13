import iconSedans from "./assets/icon-sedans.svg"
import iconSuvs from "./assets/icon-suvs.svg"
import iconLuxury from "./assets/icon-luxury.svg"

export default function App() {
  return(
    <main>
      <section>
        <div>
          <img src={iconSedans}lt="icone dos carros sedan" />
          <h2>Sedans</h2>
          <p>Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
          <a href="https://centercarjf.com.br/blog/detalhe/10568/carros-sedan-12-modelos-em-alta-no-mercado-de-seminovos" target="_blank">Ver mais</a>

        </div>
          <img src={iconSuvs}alt="icone dos carros Suvs" />
          <h2>Suvs</h2>
          <p>Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a href="https://autopapo.uol.com.br/noticia/suvs-mais-baratos-brasil-2024/" target="_blank">Ver mais</a>
          
        <div>

        </div>
          <img src={iconLuxury}alt="icone dos carros Luxury" />
          <h2>Luxury</h2>
          <p>Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a href="https://www.luxurymotorsport.com.br/" target="_blank">Ver mais</a>
          
        <div>

        </div>
      </section>
    </main>
  )
}