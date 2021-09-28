import react from 'react'
import reactDOM from 'react-dom'

const Title = ({language}) =>{
    // console.log(props)
    //let language = "React"

    let STMessage = "All about " + language
    return(
        <div>
            <h1> First lesson on {language}</h1>
            <h3>{STMessage}</h3>
       </div>
    )
}
export default Title