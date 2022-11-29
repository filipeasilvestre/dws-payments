import Image from 'next/image'
import { useState, useContext } from 'react'
import AppContext from '../components/AppContext'
import { useRouter } from "next/router"


import Logo from '../public/dwsLogo.jpg'
import MBWay from '../public/mbway.png'
import RefMB from '../public/ref.png'

export default function Home() {

  const {company, setCompany, capvalue, setCapValue, phone, setPhone} = useContext(AppContext)

  const router = useRouter()

  return (
    <AppContext.Provider>
      <div>
        <Image src={Logo} width={250} alt="Logotipo devenz" />
        <h2 className="text-3xl">
          Pagamentos à devenz - digital agency
        </h2>
        <form>
          <label htmlFor="company">Nome da empresa que faz o pagamento</label><br />
          <input type="text" id="company" name="company" onChange={(e) => setCompany(e.target.value)} /><br />
          <label htmlFor="phone">Contacto</label><br />
          <input type="text" id="phone" name="phone" onChange={(e) => setPhone(e.target.value)} /><br />
          <label htmlFor="payment">Valor do pagamento</label><br />
          <input type="text" id="payment" name="payment" onChange={(e) => setCapValue(e.target.value)} />
        </form>
        <h2>Escolha o método de pagamento:</h2>
        <div>
          <a href="#">
            <Image src={MBWay} width={200} alt="MBWay Pagamento" onClick={() => {
                setCompany(company)
                router.push('/payment')
            }} />
          </a>
          <a href="#">
            <Image src={RefMB} width={100} alt="Ref. MB Pagamento" />
          </a>
        </div>
      </div>
    </AppContext.Provider> 
  );
}
