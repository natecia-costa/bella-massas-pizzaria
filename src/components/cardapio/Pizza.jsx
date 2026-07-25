export default function Pizza({nome, descricao, preco}) {
    return (
        <div class="card">
            <h4>🍕 {nome}</h4>
            <p>{descricao}</p>
            <span>{preco}</span>
        </div>
    )
}