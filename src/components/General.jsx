import {useState} from 'react'

function General() {
    const [name, setName] = useState('John Doe');
    const [email, setEmail] = useState('cool@nice.com');
    const [phone, setPhone] = useState('562-555-5555');
    const [status, setStatus] = useState(null);

    function handleEdit() {
        setStatus('edit');
    }

    function handleChange(e) {
        switch(e.target.id) {
            case('name'):
                setName(e.target.value);
                break;
            case('email'):
                setEmail(e.target.value);
                break;
            case('phone'):
                setPhone(e.target.value);
                break;
            default:
                console.log(`Error: Unexpected ID: ${e.target.id}`);
        }
    }

    function handleSubmit() {
        setStatus('submit');
    }

    if (status == 'edit') {
        return (
            <>
                <button onClick={handleSubmit}>Submit</button>
                <h2><input id="name" type="text" value={name} onChange={handleChange} autoFocus/></h2>
                <h2><input id="email" type="text" value={email} onChange={handleChange}/></h2>
                <h2><input id="phone" type="text" value={phone} onChange={handleChange}/></h2>
            </>
        );
    } 
    return (
        <> 
            <button onClick={handleEdit}>Edit</button>
            <h2>{name}</h2>
            <h2>{email}</h2>
            <h2>{phone}</h2>
        </>    
    );
}

export default General;