import Image from 'next/image'
import { useContext, useState } from 'react'
import { useRouter } from "next/router"
import axios from 'axios';

import { AppContext } from '../contexts/AppContext';

import Logo from '../public/dwsLogo.jpg'
import MBWay from '../public/mbway.png'
import RefMB from '../public/ref.png'

export default function Home() {
  const [company, setCompany] = useState("");
  const [capvalue, setCapValue] = useState("");
  const [phone, setPhone] = useState("");
  
  const {
    createPayment, 
  } = useContext(AppContext)

  const router = useRouter()

  async function handlePayment() {
    await createPayment(phone, capvalue);
    router.push('/payment')
  }

  return (
    <div>
      <Image src={Logo} width={250} alt="Logotipo devenz" />
      <h2 className="text-3xl">
        Pagamentos à devenz - digital agency
      </h2>
      <form>
        <label htmlFor="company">Nome da empresa que faz o pagamento</label><br />
        <input 
          type="text" 
          id="company" 
          name="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)} 
        /><br />
        <label htmlFor="phone">Contacto</label><br />
        <input 
          type="text" 
          id="phone" 
          name="phone" 
          value={phone}
          onChange={(e) => setPhone(e.target.value)} 
        /><br />
        <label htmlFor="payment">Valor do pagamento</label><br />
        <input 
          type="text" 
          id="payment" 
          name="payment" 
          value={capvalue}
          onChange={(e) => setCapValue(e.target.value)} 
        />
      </form>
      <h2>Escolha o método de pagamento:</h2>
      <div>
        <a href="#">
          <Image src={MBWay} width={200} alt="MBWay Pagamento" onClick={handlePayment} />
        </a>
        <a href="#">
          <Image src={RefMB} width={100} alt="Ref. MB Pagamento" />
        </a>
      </div>
    </div>
  );
}
