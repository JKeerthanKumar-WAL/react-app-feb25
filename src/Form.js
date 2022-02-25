import axios from 'axios'
import {useState} from 'react'
const Form = props => {
    const [username, setUsername] = useState('')
    const handleSubmit = event => {
        event.preventDefault()
        axios.get(`https://api.github.com/users/${username}`).then(resp => {
            props.onSubmit(resp.data)
            setUsername('')
        })
    }
    return (
        <form onSubmit={handleSubmit} className="form-class">
            <h1>Github</h1>
            <b>User Name : </b><input
                type="text"
                value={username}
                onChange={event =>
                    setUsername(event.target.value)} placeholder="GitHub username"
                required /><br/>
            <button type="submit"><b>Add card</b></button>
        </form>
    )
}
export default Form;