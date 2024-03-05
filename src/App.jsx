import Counter from "./components/counter.jsx";
import Button from "./components/button.jsx";
import Input from "./components/input.jsx";
import React, {useState} from "react";

import './App.css'

function App() {
    const [aardbeien, setAardbeien] = useState(0)
    const [bananen, setBananen] = useState(0)
    const [appels, setAppels] = useState(0)
    const [kiwis, setKiwis] = useState(0)

    const resetCounter = () => {
        setKiwis(0)
        setAardbeien(0)
        setAppels(0)
        setBananen(0)
    }

    const [firstname, setFirstName] = useState('')
    const [lastname, setLastname] = useState('');
    const [age, setAge] = useState(0);
    const [zipcode, setZipcode] = useState('');
    const [deliveryFrequency, toggleDeliveryFrequency] = useState('week');
    const [deliveryTimeslot, toggleDeliveryTimeslot] = useState('daytime');
    const [remark, setRemark] = useState('');
    const [agreeTerms, toggleAgreeTerms] = useState(false);
    const handleSubmit = () => {
        e.preventDefault()
        function handleSubmit(e) {
            e.preventDefault();
            console.log(`
    Voornaam: ${firstname}, 
    Achternaam: ${lastname}, 
    Leeftijd: ${age}, 
    Postcode: ${zipcode}, 
    Bezorgfrequentie: ${deliveryFrequency},
    Bezorgtijdslot: ${deliveryTimeslot},
    Opmerkingen: ${remark},
    Algemene voorwaarden: ${agreeTerms}
    `);
            console.log(`Fruitmand bestelling - aardbeiden: ${aardbeien}, bananen: ${bananen}, appels: ${appels}, kiwi's: ${kiwis}`);
        }
    }

  return (
    <>
        <h1>Fruitmand bezorgservice</h1>
        <section className="fruit-counters">
            <Counter
                nameFruit="🍓 Aardbeien"
                fruitCount={aardbeien}
                setFruitCount={setAardbeien}
            />
            <Counter
                nameFruit="🍌 Bananen"
                fruitCount={bananen}
                setFruitCount={setBananen}
            />
            <Counter
                nameFruit="🍎 Appels"
                fruitCount={appels}
                setFruitCount={setAppels}
            />
            <Counter
                nameFruit="🥝 Kiwi's"
                fruitCount={kiwis}
                setFruitCount={setKiwis}
            />

            <Button type="button" clickHandler={resetCounter}>Reset</Button>
        </section>

        <form onSubmit={handleSubmit}>
            <section>
            <Input
            name="firstname"
            label="Voornaam"
            inputType="text"
            value={firstname}
            changeHandler={setFirstName}
            />
            </section>
            <section>
                <Input
                    name="lastname"
                    label="Achternaam"
                    inputType="text"
                    value={lastname}
                    changeHandler={setLastname}
                />
            />
            </section>
            <section>
                <Input
                    name="age"
                    label="Leeftijd"
                    inputType="number"
                    value={age}
                    changeHandler={setAge}
                />
            </section>
            <section>
                <Input
                    name="zipcode"
                    label="Postcode"
                    inputType="text"
                    value={zipcode}
                    changeHandler={setZipcode}
                />
            />
            </section>
            <section>
            <label htmlFor="delivery-field">Bezorgfrequentie</label>
            <select name="delivery"
                    id="delivery-field"
                    value={deliveryFrequency}
                   onChange={(e) => toggleDeliveryFrequency(e.target.value)}
            >
                <option value="week">Iedere week</option>
                <option value="every-other-week">Om de week</option>
                <option value="month">Iedere maand</option>
            </select>
            </section>
            <section>
                <input
                    name="timeslot"
                    type="radio"
                    value="daytime"
                    id="timeslot-daytime"
                    checked={deliveryTimeslot === "daytime"}
                    onChange={(e) => toggleDeliveryTimeslot(e.target.value)}
                    />
                <label htmlFor="timeslot-daytime">Overdag</label>
                <input
                    name="timeslot"
                    type="radio"
                    value="evening"
                    id="timeslot-evening"
                    checked={deliveryTimeslot === "evening"}
                    onChange={(e) => toggleDeliveryTimeslot(e.target.value)}
                />
                <label htmlFor="timeslot-evening">'s Avonds'</label>
            </section>
            <section>
                <label htmlFor="remarks">Opmerking</label>
                <textarea
                name="remark"
                id="remarks"
                value={remark}
                onChange={(e) => setRemark(e.target.value)}
                rows="4"
                cols="50"
                />
            </section>
            <section>
                <input
                name="terms"
                id="agree-terms"
                value={agreeTerms}
                type="checkbox"
                onChange={(e) => (toggleAgreeTerms(e.target.value))}
                />
                <label htmlFor="agree-terms">Ik ga akkoord met de voorwaarden</label>
            </section>
        </form>
        <Button type="button">Verzend</Button>
    </>
  )
}

export default App
