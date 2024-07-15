// "use client";
import '../styles/schedule.css'
const Schedule: React.FC = async () => {
    const result = await getSchedule();
    if (result !== null) {
        // const data = JSON.parse(result)
        let filler = null;
        if (result) {
            filler = result.map((value: any, index: number) => (
                <ScheduleItem data={value} key={index} />
            ))
        }
        return (
            <div className="schedule">
                <div className="schedule-container" id="schedule-container">
                    <h2 className='schedule-container-header'>Schedule</h2>
                    {filler !== null && (filler)}
                </div>
            </div>
        );
    }
}
export default Schedule;


function ScheduleItem(info: any) {
    const { data } = info;
    const startTime = new Date(data.start.dateTime).toLocaleTimeString('en-US', { timeStyle: "short" });
    const endTime = new Date(data.end.dateTime).toLocaleTimeString('en-US', { timeStyle: "short" });
    const eventName = data.summary;
    return (
        <div className="schedule-item">
            <h3 className='schedule-item-label'>{eventName}</h3>
            <p className="schedule-item-text">{`${startTime} -> ${endTime}`}</p>
        </div>
    )
}

async function getSchedule() {
    // const schedReq = await fetch("http://localhost:5500/api/schedule",
    const schedReq = await fetch("http://51.222.121.147:8186/api/schedule",
        {
            method: "GET",
            mode: 'cors',
            headers: { "Content-Type": 'application/json' },
            next: { revalidate: 10 }
        }
    );
    const reqData = await schedReq.json();
    if (reqData.success) {
        return reqData.data;
    } else {
        return null;
    }
}