export default function ItemBebidas({nome, preco}) {
    return (
        <div class="card">
            <h4>{nome}</h4>
            <span>{preco}</span>
        </div>
    )
}