import iconSedans from "./assets/icon-sedans.svg"
import iconSuvs from "./assets/icon-suvs.svg"
import iconLuxury from "./assets/icon-luxury.svg"

export default function App() {
  return(
    <main className=" min-h-svh bg-offwhitebg py-20 px-6">
      <section>
        <div className="bg-orange">
          <img src={iconSedans}lt="icone dos carros sedan" />
          <h2 className="font-shoulders">Sedans</h2>
          <p className="font-lexend">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
          <a  className="font-lexend" href="https://centercarjf.com.br/blog/detalhe/10568/carros-sedan-12-modelos-em-alta-no-mercado-de-seminovos" target="_blank">Ver mais</a>
        </div>

        <div className="bg-green">
        <img src={iconSuvs}alt="icone dos carros Suvs" />
          <h2 className="font-shoulders">Suvs</h2>
          <p  className="font-lexend">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a  className="font-lexend" href="https://autopapo.uol.com.br/noticia/suvs-mais-baratos-brasil-2024/" target="_blank">Ver mais</a>
        </div>

        <div className="bg-dark-green">
        <img src={iconLuxury}alt="icone dos carros Luxury" />
          <h2 className="font-shoulders">Luxury</h2>
          <p  className="font-lexend">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a  className="font-lexend" href="https://www.luxurymotorsport.com.br/" target="_blank">Ver mais</a>
        </div>
          
        
      </section>
    </main>
  )
}