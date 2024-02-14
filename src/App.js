import "./App.css";
import Stepper from "./Stepper";

export default function App() {
  const data = [
    {
      name: "customer info",
      component: () => <div>Your info</div>,
    },
    {
      name: "shipping info",
      component: () => <div>shipping info</div>,
    },
    {
      name: "out for delivery info",
      component: () => <div>OFD info</div>,
    },
    {
      name: "Delivered info",
      component: () => <div>Delivered info</div>,
    },
  ];
  return (
    <>
      <div className="App">
        <h1>Checkout</h1>
        <Stepper data={data} />
      </div>
    </>
  );
}
