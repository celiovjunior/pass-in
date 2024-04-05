import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from "lucide-react"
import { IconButton } from "./IconButton"
import dayjs from 'dayjs'
import relativeTime from "dayjs/plugin/relativeTime"
import { Table } from "./table/Table"
import { TableHeader } from "./table/TableHeader"
import { TableCell } from "./table/TableCell"
import { TableRow } from "./table/TableRow"
import { ChangeEvent, useState } from "react"
import { attendees } from "../data/attendees"

dayjs.extend(relativeTime)

export function AttendeeList() {
  const [search, setSearch] = useState('')

  function onSearchInputChange(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
  }

  return(
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">
          Atendants
        </h1>
        <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />
          <input onChange={onSearchInputChange} className="bg-transparent flex-1 outline-none border-0 p-0 text-sm focus:ring-0" placeholder="Search..." />
        </div>
      </div>

      <Table>
        <thead>
          <tr className="border-b border-white/10">
            <TableHeader>
              <input type="checkbox" className="size-4 bg-black/20 rounded-md border border-white/10 checked:bg-orange-400" />
            </TableHeader>
            <TableHeader>Code</TableHeader>
            <TableHeader>Attendant</TableHeader>
            <TableHeader>Subscription Date</TableHeader>
            <TableHeader>Check-in Date</TableHeader>
            <TableHeader style={{ width: 64 }}></TableHeader>
          </tr>
        </thead>
        <tbody>
          {
            attendees.map((attendee) => {
              return (
                <TableRow key={attendee.id}>
                  <TableCell>
                    <input type="checkbox" className="size-4 bg-black/20 rounded-md border border-white/10 accent-orange-400" />
                  </TableCell>
                  <TableCell>{ attendee.id }</TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-white">{attendee.name}</span>
                      <span>{attendee.email}</span>
                    </div>
                  </TableCell>
                  <TableCell>{dayjs().to(attendee.createdAt)}</TableCell>
                  <TableCell>{dayjs().to(attendee.checkedInAt)}</TableCell>
                  <TableCell>
                    <IconButton transparent={true}>
                      <MoreHorizontal className="size-4" />
                    </IconButton>
                  </TableCell>
              </TableRow>
              )
            })
          }
        </tbody>
        <tfoot>
          <tr>
            <TableCell colSpan={3}>
              Show 10 of 228 items
            </TableCell>
            <TableCell className="py-3 px-4 text-sm text-zinc-300 text-right" colSpan={3}>
              {/* pagination */}
              <div className="inline-flex items-center gap-8">
                <span>Page 1 of 23</span>
              <div className="flex gap-1.5">
                  <IconButton>
                    <ChevronsLeft className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronLeft className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronRight className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronsRight className="size-4" />
                  </IconButton>
                </div>
              </div>
            </TableCell>
          </tr>
        </tfoot>
      </Table>

    </div>
  )
}