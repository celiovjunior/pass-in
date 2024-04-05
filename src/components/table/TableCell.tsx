// import { twMerge } from 'tailwind-merge'

interface TableCellProps extends React.ComponentProps<'td'> {}

export function TableCell (props: TableCellProps) {
  return (
    <td className="py-3 px-4 text-sm text-zinc-300" {...props}></td>
  )
}