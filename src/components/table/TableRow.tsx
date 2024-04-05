interface TableRowProps extends React.ComponentProps<'tr'> {}

export function TableRow (props: TableRowProps) {
  return (
    <tr className="border-b border-white/10 hover:bg-white/5" {...props}></tr>
  )
}