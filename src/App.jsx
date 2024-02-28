import Counter from "./components/counter.jsx";
import Button from "./components/button.jsx";
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

    const [firstName, setFirstName] = useState('')
    const [lastname, setLastname] = useState('');
    const [age, setAge] = useState(0);
    const [zipcode, setZipcode] = useState('');
    const [deliveryFrequency, toggleDeliveryFrequency] = useState('week');
    const [deliveryTimeslot, toggleDeliveryTimeslot] = useState('daytime');
    const [remark, setRemark] = useState('');
    const [agreeTerms, toggleAgreeTerms] = useState(false);
    const handleSubmit = () => {
        e.preventDefault()

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
            <label htmlFor="firstname-field">Voornaam</label>
            <input name="firstname"
                   type="text"
                   id="firstname-field"
                   value={firstName}
                   onChange={(e) => setFirstName(e.target.value)}
            />
            </section>
            <section>
            <label htmlFor="lastname-field">Achternaam</label>
            <input name="lastname"
                   type="text"
                   id="lastname-field"
                   value={lastname}
                   onChange={(e) => setLastname(e.target.value)}
            />
            </section>
            <section>
            <label htmlFor="age-field">Leeftijd</label>
            <input name="age"
                   type="text"
                   id="age-field"
                   value={age}
                   onChange={(e) => setAge(e.target.value)}
            />
            </section>
            <section>
            <label htmlFor="zipcode-field">Postcode</label>
            <input name="zipcode"
                   type="text"
                   id="zipcode-field"
                   value={zipcode}
                   onChange={(e) => setZipcode(e.target.value)}
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
    </>
  )
}

export default App
