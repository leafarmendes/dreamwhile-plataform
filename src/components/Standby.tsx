import { Facebook } from "./Facebook";
import { Instagram } from "./Instagram";
import { Linkedin } from "./Linkedin";
import { Person } from "./Person";
import { Twitter } from "./Twitter";

export function Standby() {
  return(
    <div className="w-full flex flex-1 items-center flex-col ">
      <div className="mt-36 max-w-[640px] flex flex-col items-center fixed p-8 bg-gray-700 border border-gray-500 rounded">
        <Person />
        <h1 className=" text-[2.5rem] leading-tight text-center mt-5">
          Navegue pelo <strong className="text-blue-600">menu ao lado</strong> para visualizar <strong className="text-blue-600">todas as aulas!</strong>
        </h1>
        <p className="mt-8 mb-5 text-sm">Aproveite e nos siga em nossas redes sociais!</p>

        <div className="w-[240px] flex items-center justify-between">
            <a href="">
              <Facebook />
            </a>
            <a href="">
              <Instagram />
            </a>
            <a href="">
              <Linkedin />
            </a>
            <a href="">
              <Twitter />
            </a>
        </div>
      </div>
    </div>
  )
}