import React from 'react'
import styled from 'styled-components'
import { isSameDay, eachDayOfInterval, differenceInDays, isWithinInterval, eachHourOfInterval, startOfDay, setHours, format, startOfWeek, endOfWeek, getHours } from 'date-fns'

const Grid = styled.div`
    display: grid;
`

const Cell = styled.div`
  grid-column: ${props => props.col};
  grid-row: ${props => props.row};
`

export default props => {
    const { localeOpts } = props
    const today = startOfDay(new Date())
    const startDate = props.startDate ? props.startDate : startOfWeek(today, localeOpts)
    const endDate = props.endDate ? props.endDate : endOfWeek(today, localeOpts)
    const startTime = props.startTime ? props.startTime : 10
    const endTime = props.endTime ? props.endTime : 18

    const days = eachDayOfInterval({start: startDate, end: endDate})
    const chunkDates = days.map(day => eachHourOfInterval({start: setHours(day, startTime), end: setHours(day, endTime)}))
    const getCellPos = (date, hour) => {
        if (hour < startTime || hour > endTime || !isWithinInterval(date, {start: startDate, end: endDate})) {
            console.log('DATE OUT OF RANGE')
            return undefined
        }
        const row = hour
        const col = differenceInDays(startDate, date) + 1
        return {row, col}
    }

    const IntervalToChunks = (start, end) => {
        if (!isSameDay(start, end)) {
            console.log('INVALID INTERVAL')
            return undefined
        }
        return eachHourOfInterval({start, end}).map(date => {return {date, hour: getHours(date)}})
    }

    return (
        <>
            <Grid>
                <Cell row={1} col={1}></Cell>
                {days.map((day, i) => <Cell row={1} col={i+2}>{format(day, 'ccc d.M')}</Cell>)}
                {chunkDates[0].map((date, i) => <Cell row={i + 2} col={1}>{format(date, 'h aaaa')}</Cell>)}
                {chunkDates.map((d, i) => d.map((s, j) => <Cell row={j + 2} col={i + 2}>{format(s, 'h')}</Cell>))}
            </Grid>

        </>
    )
}