import Sedans from "./componentes/Sedans"
import Suvs from "./componentes/Suvs"
import Luxuryy from "./componentes/Luxury"

export default function App() {
  return(
    <main className=" min-h-svh bg-offwhitebg py-20 px-6 antialiased lg:flex justfy-center items-center">
      <div className=" lg:flex max-w{920px}">
        <Sedans />
        <Suvs />
        <Luxuryy />
      </div>
    </main>
  )
}