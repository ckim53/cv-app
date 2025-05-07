import { useState } from "react";

function Education () {
    const [name, setName] = useState('School Name');
    const [major, setMajor] = useState('Major');
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
            case('major'):
                setMajor(e.target.value);
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
                <h2>Education</h2><button onClick={handleSubmit}>Submit</button>
                </div>
                <h3><input id="name" type="text" value={name} onChange={handleChange} autoFocus/></h3>
                <h3><input id="major" type="text" value={major} onChange={handleChange} /></h3>
                <h3><input id="start-date" type="text" value={startDate} onChange={handleChange} /></h3>
                <h3><input id="end-date" type="text" value={endDate} onChange={handleChange} /></h3>
            </>
        );
    } 
    return (
        <> 
            <div className="section-title">
                <h2>Education</h2><button onClick={handleEdit}>Edit</button>
            </div>
            <h3>{name}</h3>
            <h3>{major}</h3>
            <h3>{`${startDate} - ${endDate}`}</h3>
        </>    
    );
}

export default Education;