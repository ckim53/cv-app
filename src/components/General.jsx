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
            <div className='header'>
                <div className="header-title">
                    <h1><input id="name" value={name} onChange={handleChange} autoFocus/></h1><button onClick={handleSubmit}>Submit</button>
                </div>
                <h3><input id="email" type="text" value={email} onChange={handleChange}/></h3>
                <h3><input id="phone" type="text" value={phone} onChange={handleChange}/></h3>
            </div>
        );
    } 
    return (
        <div className="header"> 
            <div className="header-title">
                <h1>{name}</h1><button onClick={handleEdit}>Edit</button>
            </div>
            <h3>{email}</h3>
            <h3>{phone}</h3>
        </div>    
    );
}

export default General;