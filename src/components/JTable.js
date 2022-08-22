import { useMemo, useState } from 'react'
import { useTable } from 'react-table'
import './table.css'

function JTable(props){
    const [jobs, setJobs] = useState([])
    
    
    const mcolumns = [
        {
            Header: 'Status',
            accessor: 'status'
        },
        {
            Header: "Company Name",
            accessor: 'company'
        },
        {
            Header: "Url",
            accessor:'url'
        }, 
        
    ]

    const columns = useMemo(() => mcolumns, [])
    // const data = useMemo(() => props.jobs, [])
    const data = props.jobs

    console.log(data)
    const tableInstance = useTable({
        columns,
        data
    })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = tableInstance

    return (
        <table {...getTableBodyProps()}>
            <thead>
                {
                    headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))
                }
                
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })
                }

            </tbody>
        </table>
        );
}

export default JTable;