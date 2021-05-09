/* Copied from https://chakra-ui.com/guides/integrations/with-react-table */
// @ts-nocheck
import React from "react"
import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Box,
  Heading,
  chakra,
  Link,
} from "@chakra-ui/react"
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons"
import { useTable, useSortBy } from "react-table"

export function SortableTable() {
  const data = React.useMemo(
    () => [
      {
        fromUnit: "inches",
        toUnit: "millimetres (mm)",
        factor: 25.4,
      },
      {
        fromUnit: "feet",
        toUnit: "centimetres (cm)",
        factor: 30.48,
      },
      {
        fromUnit: "yards",
        toUnit: "metres (m)",
        factor: 0.91444,
      },
    ],
    []
  )

  const columns = React.useMemo(
    () => [
      {
        Header: "To convert",
        accessor: "fromUnit",
      },
      {
        Header: "Into",
        accessor: "toUnit",
      },
      {
        Header: "Multiply by",
        accessor: "factor",
        isNumeric: true,
      },
    ],
    []
  )

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    // @ts-ignore
    useTable({ columns, data }, useSortBy)

  return (
    <Box w="100%">
      <Heading>
        Sortable Table (
        <Link to="https://react-table.tanstack.com/">with react-table</Link>)
      </Heading>
      <Table {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  isNumeric={column.isNumeric}
                  _hover={{ bg: "gray.200" }}
                >
                  {column.render("Header")}
                  <chakra.span pl="4">
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <TriangleDownIcon aria-label="sorted descending" />
                      ) : (
                        <TriangleUpIcon aria-label="sorted ascending" />
                      )
                    ) : null}
                  </chakra.span>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <Td
                    {...cell.getCellProps()}
                    isNumeric={cell.column.isNumeric}
                  >
                    {cell.render("Cell")}
                  </Td>
                ))}
              </Tr>
            )
          })}
        </Tbody>
      </Table>
      <Link
        to="https://chakra-ui.com/guides/integrations/with-react-table"
        mt="4"
        display="block"
      >
        Read the docs: Chakra UI + React Table
      </Link>
    </Box>
  )
}
