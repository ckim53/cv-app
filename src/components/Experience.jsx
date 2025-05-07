import {useState} from 'react'

function Experience () {
    const [name, setName] = useState('Company Name');
    const [title, setTitle] = useState('Position Title');
    const [description, setDescription] = useState('Main Responsibilities');
    const [startDate, setStartDate] = useState('Start Date');
    const [endDate, setEndDate] = useState('End Date');
    const [status, setStatus] = useState(null);

    function handleEdit() {
        setStatus('edit');
    }

    function handleChange(e) {
        switch(e.target.id) {
            case('name'):
                setName(e.target.value);
                break;
            case('title'):
                setTitle(e.target.value);
                break;
            case('description'):
                setDescription(e.target.value);
                break;
            case('start-date'):
                setStartDate(e.target.value);
                break;
            case('end-date'):
                setEndDate(e.target.value);
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
                <div className="section-title">
                    <h2>Experience</h2><button onClick={handleSubmit}>Submit</button>
                </div>
                <h3><input id="name" type="text" value={name} onChange={handleChange} autoFocus /></h3>
                <h3><input id="title" type="text" value={title} onChange={handleChange} /></h3>
                <h3><textarea rows={3} id="description" type="text" value={description} onChange={handleChange} /></h3>
                <h3><input id="start-date" type="text" value={startDate} onChange={handleChange} /></h3>
                <h3><input id="end-date" type="text" value={endDate} onChange={handleChange} /></h3>
            </>
        );
    } 
    return (
        <> 
            <div className="section-title">
                <h2>Experience</h2><button onClick={handleEdit}>Edit</button>
            </div>
            <h3>{name}</h3>
            <h3>{title}</h3>
            <h3>{description}</h3>
            <h3>{`${startDate} - ${endDate}`}</h3><br />
        </>    
    );
}

export default Experience;