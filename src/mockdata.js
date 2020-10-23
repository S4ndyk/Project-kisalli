import { setDay, setHours } from 'date-fns'

const d = Date.now()
const mon = setDay(d, 1)
const tue = setDay(d, 2)
const wed = setDay(d, 3)
const thu = setDay(d, 4)
const fri = setDay(d, 5)


export default 
[
    {
        course_id: 1,
        assistant_id: 1,
        shift_date: mon,
        start_time: setHours(mon, 15),
        end_time: setHours(mon, 16),
        confirmed: true,
        canceled: false,

    },
    {
        course_id: 2,
        assistant_id: 1,
        shift_date: tue,
        start_time: setHours(tue, 15),
        end_time: setHours(tue, 16),
        confirmed: true,
        canceled: false,

    },
    {
        course_id: 1,
        assistant_id: 1,
        shift_date: mon,
        start_time: setHours(mon, 12),
        end_time: setHours(mon, 14),
        confirmed: true,
        canceled: false,

    },
]