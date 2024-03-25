import iconSuvs from "../assets/icon-luxury.svg"

export default function Sedans() {
  return (
    <div className="bg-green p-12">
        <img src={iconSuvs}alt="icone dos carros Suvs" className="mb-7"/>
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-offwhitebg">Suvs</h2>
          <p  className="font-lexend mb-7 text-offwhite">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a  className="font-lexend bg-offwhitebg block px-10 py-3 w-fit rounded-3xl text-green border-2 border-offwhitebg hover:bg-green hover:text-offwhitebg" href="https://autopapo.uol.com.br/noticia/suvs-mais-baratos-brasil-2024/" target="_blank">Ver mais</a>
    </div>
  )
}
