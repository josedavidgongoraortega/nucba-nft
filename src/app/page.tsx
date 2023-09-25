"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <header>
        <nav className="bg-zinc-600 h-[75px] flex items-center justify-center sm:justify-around md:justify-between md:pl-[60px] md:pr-[60px] relative">
          <Image
            className="w-8 h-8 absolute left-4 sm:hidden cursor-pointer"
            src="/icons/menu.svg"
            alt="menu"
            width={100}
            height={100}
            onClick={toggleMenu}
          />
          <div>
            <a href="/">
              <Image
                className="w-12 sm:w-16"
                src="/logo/demon-slayer.png"
                alt="logo"
                width={100}
                height={100}
              />
            </a>
          </div>
          <div className="hidden sm:block">
            <ul className="text-white space-x-3 sm:space-x-8 flex items-center">
              <li>
                <a href="#section-infoCard">Hamburger</a>
              </li>
              <li>
                <a href="#section-descubre">Descubre</a>
              </li>
              <li>
                <a href="https://twitter.com/?lang=es" target="_blank">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/" target="_blank">
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div
          className={`sm:block ${
            isMenuOpen ? "block" : "hidden"
          } bg-zinc-600 h-screen sm:h-0`}
        >
          <ul
            className={`sm:hidden ${isMenuOpen ? "block" : "hidden"} text-2xl`}
          >
            <li className="flex justify-center p-3 bg-zinc-800 text-white">
              <a href="https://twitter.com/?lang=es" target="_blank">
                Twitter
              </a>
            </li>
            <hr />
            <li className="flex justify-center p-3 bg-zinc-800 text-white">
              <a href="https://www.youtube.com/" target="_blank">
                Youtube
              </a>
            </li>
          </ul>
        </div>
      </header>
      <main className="bg-zinc-800 w-screen flex justify-center items-start">
        {/* section hero */}
        <div>
          <section className="mt-20 bg-zinc-800 lg:flex lg:items-center lg:justify-around">
            {/* texto hero */}
            <div>
              <h1 className="text-6xl text-center bg-clip-text text-transparent bg-gradient-to-r from-zinc-400  to-white font-bold lg:text-start">
                Full Stack Hashira
              </h1>
              <p className="text-zinc-200 text-center m-8 lg:w-[600px] lg:text-start lg:m-0 lg:mt-5">
                Ser un Full Stack con la habilidad de un Hashira en Demon Slayer
                es ser un maestro del desarrollo web. Con el tiempo, has
                perfeccionado tus habilidades tanto en el frontend como en el
                backend, dominando cada aspecto del proceso. Al igual que un
                Hashira que ha derrotado a innumerables demonios y ha alcanzado
                un nivel de destreza inigualable.
              </p>
              <div className="flex justify-center space-x-6 lg:justify-start lg:mt-10">
                <button className="text-white bg-gradient-to-r from-blue-500 to-zinc-500 rounded-xl p-1  font-bold uppercase pl-4 pr-4">
                  Full Stack Now
                </button>
                <button className="text-white bg-gradient-to-r from-red-500 to-zinc-500 rounded-xl p-2  font-bold uppercase pl-4 pr-4">
                  Hashira Now
                </button>
              </div>
            </div>
            {/* card hero */}
            <div className="flex justify-center mt-10">
              <div className="w-[320px] bg-zinc-200 h-[390px] rounded-xl flex flex-col justify-center items-center">
                {/* img card */}
                <div className="w-5/6 h-[220px] shadow-sm">
                  <img
                    className="object-cover w-full h-full flex rounded-lg"
                    src="/personajes/pilares.jpeg"
                    alt="foto tokito"
                  />
                </div>
                {/* texto card */}
                <div className="flex m-5 space-x-6">
                  <h3 className="font-bold">"Los Hashira Demon slayer"</h3>
                  <button className="bg-zinc-900 rounded-lg w-[40px] text-white">
                    🔥
                  </button>
                </div>
                <div className="flex space-x-16">
                  <div className="flex space-x-2">
                    <div className="w-12 h-12">
                      <img
                        className="object-cover w-full h-full flex rounded-lg"
                        src="/personajes/pilares.jpeg"
                        alt="foto tokito"
                      />
                    </div>
                    <div>
                      <h5>Creador</h5>
                      <h6>Demon Slayer</h6>
                    </div>
                  </div>
                  <div>
                    <h5>Value</h5>
                    <h6>9 Eth</h6>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* section text  */}
          <section className="bg-zinc-800 text-center pt-20 pb-20">
            <div className="flex justify-center">
              <h2 className="text-white w-5/6">
                "¡Bienvenidos a un mundo donde el desarrollo web y la destreza
                en la programación se entrelazan con el poder y la maestría de
                los legendarios Hashiras! En esta página, exploraremos el
                fascinante universo de ser un Full Stack Developer y cómo esta
                habilidad se asemeja a la maestría de los Hashiras en el mundo
                de Demon Slayer. Descubriremos cómo los Full Stack Developers,
                al igual que los Hashiras, se han convertido en expertos
                indiscutibles en su campo.
              </h2>
            </div>
          </section>
          {/* section cards */}
          <section className="bg-zinc-800 flex justify-center">
            <div>
              <h2 className="text-white text-center text-5xl font-bold">
                Conoce a los pilares
              </h2>
              <div className="flex justify-center mt-20">
                <div>
                  {/* card-1 */}
                  <div className="bg-gradient-to-b from-zinc-900 via-zinc-400 to-green-600 w-72 h-72 rounded-xl  flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-[105px] h-[105px] mx-auto rounded-full bg-white flex items-center">
                        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden">
                          <img
                            src="/personajes/sanemi.png"
                            alt="sanemi foto"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <h3 className="mt-4 font-bold">Sanemi Shinazugawa</h3>
                      <p className="mt-2 text-sm w-5/6 mx-auto">
                        Un Hashira con una determinación inquebrantable y una
                        fuerza sobrenatural.
                      </p>
                    </div>
                  </div>
                  {/* card-2 */}
                  <div className="bg-gradient-to-b from-red-900 via-red-800 to-yellow-600 w-72 h-72 rounded-xl  flex items-center justify-center mt-10">
                    <div className="text-center text-white">
                      <div className="w-[105px] h-[105px] mx-auto rounded-full bg-white flex items-center">
                        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden">
                          <img
                            src="/personajes/rengoku.webp"
                            alt="sanemi foto"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <h3 className="mt-4 font-bold">Kyojuro Rengoku</h3>
                      <p className="mt-2 text-sm w-5/6 mx-auto">
                        Un Hashira que irradia una pasión inextinguible y un
                        inmenso poder en la lucha contra los demonios.
                      </p>
                    </div>
                  </div>
                  {/* card-3*/}
                  <div className="bg-gradient-to-b from-zinc-900 via-blue-400 to-green-300 w-72 h-72 rounded-xl flex items-center justify-center mt-10">
                    <div className="text-center text-white">
                      <div className="w-[105px] h-[105px] mx-auto rounded-full bg-white flex items-center">
                        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden">
                          <img
                            src="/personajes/tokito.webp"
                            alt="sanemi foto"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <h3 className="mt-4 font-bold">Muichiro Tokito</h3>
                      <p className="mt-2 text-sm w-5/6 mx-auto">
                        Un Hashira conocido por su aparente apatía y su destreza
                        excepcional con la espada.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* section contact */}
          <section
            id="contacto"
            className=" bg-zinc-800 flex justify-start pl-12"
          >
            <div className="flex justify-around">
              <div className="mt-32 pb-20">
                <h2 className="text-3xl text-white">Contact Us</h2>
                <div className=" text-sm">
                  <div>
                    <h3 className="mt-10 font-bold text-zinc-200">
                      Arg. Buenos Aires
                    </h3>
                    <div className="flex mt-5 space-x-3">
                      <img src="/icons/map-pin.svg" alt="pin" />
                      <h3 className="text-white">Corriente 848</h3>
                    </div>
                    <div className="flex mt-5 space-x-3">
                      <img src="/icons/mail.svg" alt="pin " />
                      <h3 className="text-white">Jortegaruiz@nucba.com</h3>
                    </div>
                    <div className="flex mt-5 space-x-3">
                      <img src="/icons/phone.svg" alt="pin" />
                      <h3 className="text-white">+54 91138335824</h3>
                    </div>
                  </div>
                  <div>
                    <h3 className="mt-10 font-bold text-zinc-200">
                      Juan Gongora
                    </h3>
                    <div className="flex mt-5 space-x-3">
                      <img src="/icons/map-pin.svg" alt="icon" />
                      <h3 className="text-white">Obelisco</h3>
                    </div>
                    <div className="flex mt-5 space-x-3">
                      <img src="/icons/mail.svg" alt="icon" />
                      <h3 className="text-white">Jortegaruiz9@gmail.com</h3>
                    </div>
                    <div className="flex mt-5 space-x-3">
                      <img src="/icons/phone.svg" alt="icon" />
                      <h3 className="text-white">+593 983883197</h3>
                    </div>
                  </div>
                </div>
                <div className="flex mt-10 space-x-4">
                  <img src="/icons/twitter.svg" alt="twitter" />
                  <img src="/icons/instagram.svg" alt="instagram" />
                  <img src="/icons/facebook.svg" alt="facebook" />
                </div>
              </div>
              <div className="hidden lg:block">
                <img
                  className="w-[400px] rounded-lg"
                  src="/personaje/kimetsu-no-yaiba.jpg"
                  alt="imagen contacto"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="flex bg-zinc-800 justify-center items-center h-[70px]">
        <h3 className="text-yellow-500 sm:text-blue-500 md:text-red-500 lg:text-purple-500 xl:text-orange-500">
          guia de tamaños
        </h3>
        <div>
          <h1 className="text-white">Creado por Jose David X Nucba</h1>
        </div>
      </footer>
    </div>
  );
}
