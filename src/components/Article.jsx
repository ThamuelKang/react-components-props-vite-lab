// an <article> element, with the following elements inside:
// An <h3> element
// Displaying the title of the article, passed as a prop called title
// A <small> element 
// Displaying the date of the article, passed as a prop called date
// A <p> element 
// Displaying the preview of the article, passed as a prop called preview


function Article({ title, date, preview }) {
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>

    )
}

export default Article