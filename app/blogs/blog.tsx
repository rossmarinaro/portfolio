'use client'

export default function Blog(props: any)
{

    const {
        username, 
        title, 
        date, 
        content
    } = props.props;

    return (
            
        <div className="component content-container col-2-2 container">

            <ul id="blog-element" style={{ marginTop: '2%', fontStyle: 'italic', fontWeight: 'bold' }}>
                <li className="image-gallery-link vector">{username}</li>
                <li className="image-gallery-link vector">{title}</li>
                <li className="image-gallery-link vector">{date}</li>
            </ul>             
            
            <p>{ content }</p>
        
        </div>

    )
}