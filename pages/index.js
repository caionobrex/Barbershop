import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/Image'
import { MdMenu, MdSchedule, MdCode } from 'react-icons/md'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { AiFillPhone } from 'react-icons/ai'
import { useState } from 'react'

const Header = () => (
  <header className="absolute top-0 left-0 w-full">
    <div className="flex items-center justify-between px-6 py-4 md:px-24 md:py-6">
      <Link href="#">
        <a>
          <Image
            src="/images/logo.jpg"
            width="40px"
            height="40px"
            alt="Logo da santiago barbearia"
            className="rounded-full"
          />
        </a>
      </Link>
    
      <MdMenu className="text-2xl md:hidden" />
    
      <nav className="hidden md:block">
        <ul className="flex font-medium">
          <li className="mr-6">Contatos</li>
          <li className="mr-6">Profissionais</li>
          <li className="mr-6">Galeria</li>
          <li className="mr-6">Onde estamos ?</li>
          <li className="flex"><AiFillPhone className="text-2xl mr-2" /> (85) 986438223</li>
        </ul>
      </nav>
    </div>
  </header>
)

const HeroSection = () => (
  <section className="hero-section relative h-screen flex flex-col justify-center items-center text-white md:items-start">
    <Header />
    
    <div className="px-8 md:w-3/5 md:px-24">
      <h1 className="flex flex-col tracking-wider uppercase">
        <span className="text-primary-color font-bold text-sm">santiago barbershop</span>
        <span className="text-3xl font-bold mt-1 md:text-5xl">
          Somos os <span>profissionais</span> certo para o seu cabelo
        </span>
      </h1>
      
      <div className="flex flex-col w-full mt-6 md:flex-row">
        <button className="bg-primary-color text-gray-100 rounded-full w-full p-2 font-medium md:w-64">
          Agendar Horário
        </button>
        <button className="bg-white text-gray-700 rounded-full w-full p-2 font-medium mt-2 md:mt-0 md:ml-2 md:w-64">
          Contatos
        </button>
      </div>
    </div>
    
    <style jsx>{`
      .hero-section {
        background-image: linear-gradient(
          to bottom right,
          rgba(0,0,0,0.9),
          rgba(0,0,0,0.7)
        ),
        url('/images/bg.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }
      .hero-section h1 {
        animation: h1-animation .3s ease-in;
      }
      
      @keyframes h1-animation {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }
    `}</style>
  </section>
)

const Gallery = () => (
  <div className="grid gap-2 grid-rows-3 grid-cols-3 md:grid-cols-6 hidden">
    <div className="row-start-1 row-span-2 col-start-1 col-span-2 object-fit">
      <img src="/images/image3.jpg" className="object-fit w-full h-full" />
    </div>
    <div>
      <img src="/images/image2.jpg" className="object-fit w-full h-full" />
    </div>
    <div>
      <img src="/images/image1.jpg" className="object-fit w-full h-full" />
    </div>
    <div>
      <img src="/images/image6.jpg" className="object-fit w-full h-full" />
    </div>
    <div>
      <img src="/images/image4.jpg" className="object-fit w-full h-full" />
    </div>
    <div>
      <img src="/images/image5.jpg" className="object-fit w-full h-full" />
    </div>
  </div>
)

const ServiceCard = ({ service, overflow, className }) => (
  <div className="service-card bg-primary-color md:border-r border-gray-300" style={{ zIndex: 10 }}>
    <div className="flex flex-col items-center mb-3 md:py-4">
      <div>
        <img
          src="/images/image2.jpg"
          width="120"
          height="120"
          className={`rounded-full ${overflow ? '-mt-16' : 'mt-4'} md:-mt-16 ${className}`}
        />
      </div>
      <h3 className="text-center text-xl text-gray-50 font-medium mt-1">{service.name}</h3>
      <span className="text-gray-50 font-medium text-sm">R$ {service.price.toFixed(2)}</span>
    </div>
    <div>
      <button className="w-full bg-black flex items-center justify-center text-gray-100 p-2 transition-all hover:bg-gray-900">
        Agendar Horário <MdSchedule className="ml-1" />
      </button>
    </div>
  </div>
)

const ProfessionalCard = () => (
  <div className="shadow p-4 py-8 rounded text-gray-700 md:flex">
    <div className="flex flex-col justify-center items-center">
      <img
        src="/images/image2.jpg"
        width="150"
        height="150"
        className="object-fit rounded-full"
      />
      <span className="text-center font-bold block">Santiago</span>
    </div>
    <div className="flex-1 mt-4 md:ml-4">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
    </div>
  </div>
)

const Footer = () => (
  <footer className="bg-primary-color text-gray-50 pt-12">
    <div className="px-4 py-16 md:flex md:justify-between" style={{ display: 'none' }}>
      <ul className="grid md:grid-cols-3">
        <li className="flex items-center md:justify-center">
          <AiFillPhone className="text-2xl mr-2" /> (85) 986438223
        </li>
        <li className="flex items-center md:justify-center">
          <HiOutlineLocationMarker className="text-3xl mr-2" /> Rua doutor Luiz Moraes Correia, 204 Fortaleza.
        </li>
        <li className="flex items-center md:justify-center">
          <HiOutlineLocationMarker className="text-3xl mr-2" /> Rua doutor Luiz Moraes Correia, 204 Fortaleza.
        </li>
      </ul>
    </div>
    
    <div className="flex justify-center items-center bg-brown-500 py-1 text-sm">
      <MdCode className="mr-1 text-xl" /> by caio nobre
    </div>
  </footer>
)

export default function Home() {
  const services = [
    { name: 'Corte', price: 20 },
    { name: 'Corte + Barba', price: 35 },
    { name: 'Barba', price: 15 },
    { name: 'Corte + Pintura', price: 40 },
  ]
  
  return (
    <div>
      <Head>
        <title>Project8</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <HeroSection />
      
      <main className="min-h-screen">
        <section className="bg-gray-100">
          <div className="grid md:grid-cols-4">
            {services.map((service, index) => {
              if (index === 0) return <ServiceCard service={service} overflow={true} />
              return <ServiceCard service={service} />
            })}
          </div>
        </section>
      
        <div className="p-4 py-6 bg-gray-100 md:px-16 md:py-12 hidden">
          <h2 className="text-3xl text-center text-gray-800 font-medium p-2">
            Profissionais
          </h2>
          <div className="grid gap-3 mt-4 md:grid-cols-2">
            <ProfessionalCard />
            <ProfessionalCard />
          </div>
        </div>
        
        <Gallery />
      </main>
      
      <Footer />
    </div>
  )
}