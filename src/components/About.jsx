function About({imageURL, altName}) {
    return (
        <aside>
            <img src={imageURL} alt={altName} />
            <p>A blog about round, beautiful, and sexi ducks</p>
        </aside>
    )
}

export default About