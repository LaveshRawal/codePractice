const Footer = ({length}) => {
    

    return (
        <footer>
            <p>{length} {length !== 1 ? "items" : "item"}</p>
        </footer>
    )
}

export default Footer