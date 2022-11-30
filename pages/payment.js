import { useContext } from "react"
import { AppContext } from "../contexts/AppContext";

export default function Page2() {
  const { isPayment } = useContext(AppContext);

  return (
    isPayment && <button>OBRIGADO!</button>
  );
}