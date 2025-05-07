import Education from "./Education";
import Experience from "./Experience";
import General from "./General";

function Resume() {
    return (
        <>
            <General></General><br />
            <Education></Education>
            <Experience></Experience>
        </>
    );
}

export default Resume;