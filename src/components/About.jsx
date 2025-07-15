// an <aside> element with the following elements inside:
// An <img> element
// The src set to an image passed as a prop called image
// The image should also be accessible! Give it an alt attribute of "blog logo"
// A <p> element
// The text for the blog passed in as a prop called about

function About({imageURL, altName}) {
    return (
        <aside>
            <img src={imageURL} alt={altName} />
            <p>A blog about round, beautiful, and sexi ducks</p>
        </aside>
    )
}

export default About