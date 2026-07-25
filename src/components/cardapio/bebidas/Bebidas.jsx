import { useState } from "react"
import ItemBebidas from "./ItemBebidas"

export default function Bebidas() {
    const bebidas = [
        {id: 1, nome: "Coca-cola", preco: "R$ 11,00"},
        {id: 2, nome: "Guaraná", preco: "R$ 9,00"},
        {id: 3, nome: "Guaraviton", preco: "R$ 7,00"},
        {id: 4, nome: "Guaravita", preco: "R$ 3,00"},
    ]
    const [mostrar, setMostrar] = useState(false)
    return (
        <>
            <button onClick={() => setMostrar(true)}>Mostrar Bebidas</button>
                {mostrar && bebidas.map((item) => (
                    <ItemBebidas key={item.id} nome={item.nome} preco={item.preco} />
                ))}
        </>
    )
}