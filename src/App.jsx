import iconSedans from "./assets/icon-sedans.svg"
import iconSuvs from "./assets/icon-suvs.svg"
import iconLuxury from "./assets/icon-luxury.svg"

export default function App() {
  return(
    <main className=" min-h-svh bg-offwhitebg py-20 px-6 antialiased lg:flex justfy-center items-center">
      <section className=" lg:flex ">
        <div className="bg-orange p-12 rounded-t-lg">
          <img src={iconSedans} alt="icone dos carros sedan" className="mb-7" />
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Sedans</h2>
          <p className="font-lexend mb-7 text-offwhite">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
          <a  className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-orange" href="https://centercarjf.com.br/blog/detalhe/10568/carros-sedan-12-modelos-em-alta-no-mercado-de-seminovos" target="_blank">Ver mais</a>
        </div>

        <div className="bg-green p-12">
        <img src={iconSuvs}alt="icone dos carros Suvs" className="mb-7"/>
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Suvs</h2>
          <p  className="font-lexend mb-7 text-offwhite">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a  className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-green" href="https://autopapo.uol.com.br/noticia/suvs-mais-baratos-brasil-2024/" target="_blank">Ver mais</a>
        </div>

        <div className="bg-dark-green p-12 rounded-b-lg">
        <img src={iconLuxury}alt="icone dos carros Luxury"className="mb-7" />
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Luxury</h2>
          <p  className="font-lexend mb-7 text-offwhite">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a  className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-darck-green" href="https://www.luxurymotorsport.com.br/" target="_blank">Ver mais</a>
        </div>
          
        
      </section>
    </main>
  )
}