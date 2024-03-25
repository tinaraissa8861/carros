import iconLuxury from "../assets/icon-luxury.svg"

export default function luxury() {
  return (
    <div className="bg-dark-green p-12 max-lg:rounded-b-lg lg:rounded-r-lg">
        <img src={iconLuxury}alt="icone dos carros Luxury"className="mb-7" />
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Luxury</h2>
          <p  className="font-lexend mb-7 text-offwhite">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a  className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-darck-green border-2 border-offwhitebg hover:bg-dark-green hover:text-offwhitebg" href="https://www.luxurymotorsport.com.br/" target="_blank">Ver mais</a>
    </div>
  )
}
