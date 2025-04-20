import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";

import Badge from "../../ui/badge/Badge";

interface Order {
  id: number;
  date:string;
  clicks: string;
  uniqueVisitors: string;
  source: string;
  keyword: string;
}

// Define the table data using the interface
const tableData: Order[] = [
  {
    id: 1,
    date: "2025-03-20",
    clicks: "0.00",
    uniqueVisitors: "0.00",
    source: "Paid Search",
    keyword: "2025 gambling reviews"
  },
  {
    id: 2,
    date: "2025-03-20",
    clicks: "0.00",
    uniqueVisitors: "0.00",
    source: "Paid Search",
    keyword: "best new casino"
  },
  {
    id: 3,
    date: "2025-03-20",
    clicks: "2.00",
    uniqueVisitors: "0.00",
    source: "Paid Search",
    keyword: "legit casino reviews"
  },
  {
    id: 4,
    date: "2025-03-22",
    clicks: "7.00",
    uniqueVisitors: "7.00",
    source: "Paid Search",
    keyword: "2025 gambling reviews"
  },
  {
    id: 5,
    date: "2025-03-22",
    clicks: "7.00",
    uniqueVisitors: "6.00",
    source: "Paid Search",
    keyword: "top online casinos"
  },
  {
    id: 6,
    date: "2025-03-22",
    clicks: "9.00",
    uniqueVisitors: "8.00",
    source: "Paid Search",
    keyword: "new online slots"
  },
  {
    id: 7,
    date: "2025-03-23",
    clicks: "6.00",
    uniqueVisitors: "5.00",
    source: "Paid Search",
    keyword: "top online casinos"
  },
  {
    id: 8,
    date: "2025-03-23",
    clicks: "5.00",
    uniqueVisitors: "5.00",
    source: "Paid Search",
    keyword: "top UK slots sites"
  },
  {
    id: 9,
    date: "2025-03-23",
    clicks: "7.00",
    uniqueVisitors: "6.00",
    source: "Paid Search",
    keyword: "latest slot machines online"
  },
  {
    id: 10,
    date: "2025-03-24",
    clicks: "21.00",
    uniqueVisitors: "13.00",
    source: "Paid Search",
    keyword: "safe sites for real money"
  },
  {
    id: 11,
    date: "2025-03-24",
    clicks: "20.00",
    uniqueVisitors: "13.00",
    source: "Paid Search",
    keyword: "latest slot machines online"
  },
  {
    id: 12,
    date: "2025-03-24",
    clicks: "21.00",
    uniqueVisitors: "14.00",
    source: "Paid Search",
    keyword: "top online casinos"
  },
  {
    id: 13,
    date: "2025-03-25",
    clicks: "27.00",
    uniqueVisitors: "19.00",
    source: "Paid Search",
    keyword: "safe sites for real money"
  },
  {
    id: 14,
    date: "2025-03-25",
    clicks: "26.00",
    uniqueVisitors: "18.00",
    source: "Paid Search",
    keyword: "top online casinos"
  },
  {
    id: 15,
    date: "2025-03-25",
    clicks: "28.00",
    uniqueVisitors: "20.00",
    source: "Paid Search",
    keyword: "top UK slots sites"
  },
  {
    id: 16,
    date: "2025-03-26",
    clicks: "30.00",
    uniqueVisitors: "21.00",
    source: "Paid Search",
    keyword: "top online casinos"
  },
  {
    id: 17,
    date: "2025-03-26",
    clicks: "29.00",
    uniqueVisitors: "20.00",
    source: "Paid Search",
    keyword: "top online casinos"
  },
  {
    id: 18,
    date: "2025-03-26",
    clicks: "30.00",
    uniqueVisitors: "21.00",
    source: "Paid Search",
    keyword: "2025 gambling reviews"
  },
  {
    id: 19,
    date: "2025-03-27",
    clicks: "18.00",
    uniqueVisitors: "13.00",
    source: "Paid Search",
    keyword: "2025 gambling reviews"
  },
  {
    id: 20,
    date: "2025-03-27",
    clicks: "17.00",
    uniqueVisitors: "12.00",
    source: "Paid Search",
    keyword: "2025 gambling reviews"
  },
  {
    id: 21,
    date: "2025-03-27",
    clicks: "18.00",
    uniqueVisitors: "14.00",
    source: "Paid Search",
    keyword: "best new casino"
  },
  {
    id: 22,
    date: "2025-03-28",
    clicks: "31.00",
    uniqueVisitors: "23.00",
    source: "Paid Search",
    keyword: "top UK slots sites"
  },
  {
    id: 23,
    date: "2025-03-28",
    clicks: "31.00",
    uniqueVisitors: "22.00",
    source: "Paid Search",
    keyword: "latest slot machines online"
  },
  {
    id: 24,
    date: "2025-03-28",
    clicks: "32.00",
    uniqueVisitors: "23.00",
    source: "Paid Search",
    keyword: "top online casinos"
  },
  {
    id: 25,
    date: "2025-03-29",
    clicks: "165.00",
    uniqueVisitors: "151.00",
    source: "Paid Search",
    keyword: "top UK slots sites"
  },
  {
    id: 26,
    date: "2025-03-29",
    clicks: "160.00",
    uniqueVisitors: "147.00",
    source: "Paid Search",
    keyword: "new online slots"
  },
  {
    id: 27,
    date: "2025-03-29",
    clicks: "161.00",
    uniqueVisitors: "148.00",
    source: "Paid Search",
    keyword: "new online slots"
  },
  {
    id: 28,
    date: "2025-03-30",
    clicks: "52.00",
    uniqueVisitors: "37.00",
    source: "Paid Search",
    keyword: "safe sites for real money"
  },
  {
    id: 29,
    date: "2025-03-30",
    clicks: "50.00",
    uniqueVisitors: "36.00",
    source: "Paid Search",
    keyword: "latest slot machines online"
  },
  {
    id: 30,
    date: "2025-03-30",
    clicks: "52.00",
    uniqueVisitors: "37.00",
    source: "Paid Search",
    keyword: "latest slot machines online"
  },
  {
    id: 31,
    date: "2025-03-31",
    clicks: "24.00",
    uniqueVisitors: "16.00",
    source: "Paid Search",
    keyword: "latest slot machines online"
  },
  {
    id: 32,
    date: "2025-03-31",
    clicks: "23.00",
    uniqueVisitors: "15.00",
    source: "Paid Search",
    keyword: "best new casino"
  },
  {
    id: 33,
    date: "2025-03-31",
    clicks: "25.00",
    uniqueVisitors: "17.00",
    source: "Paid Search",
    keyword: "legit casino reviews"
  }
];

const total = tableData.reduce(
    (acc, item) => {
      acc.clicks += parseFloat(item.clicks);
      acc.uniqueVisitors += parseFloat(item.uniqueVisitors);
      return acc;
    },
    { clicks: 0, uniqueVisitors: 0 }
);

export default function BasicTableOne() {
  return (
    <div className="overflow-y-auto overflow-x-hidden max-h-[400px] rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <h1 className="p-5 text-lg font-semibold dark:text-white">PPC Campaign Summary</h1>
        <Table>
          {/* Table Header */}
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Date
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Clicks
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Unique Visitors
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Source
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Keyword
              </TableCell>
              {/*<TableCell*/}
              {/*    isHeader*/}
              {/*    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"*/}
              {/*>*/}
              {/*  Actions*/}
              {/*</TableCell>*/}
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {tableData.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {order.date}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {order.clicks}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {order.uniqueVisitors}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {order.source}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {order.keyword}
                </TableCell>
                {/*<TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">*/}
                {/*  Actions*/}
                {/*</TableCell>*/}
              </TableRow>
            ))}
            <TableRow className="text-bold text-theme-sm dark:text-white">
              <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400 font-bold">
                Total
              </TableCell>
              <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400 font-bold">
                {total.clicks}
              </TableCell>
              <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400 font-bold">
                {total.uniqueVisitors}
              </TableCell>
              <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400 font-bold">
                N/A
              </TableCell>
              <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400 font-bold">
                N/A
              </TableCell>
              {/*<TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400 font-bold">*/}
              {/*  N/A*/}
              {/*</TableCell>*/}
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
