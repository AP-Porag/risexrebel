import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";

interface Order {
  id: number;
  date:string;
  clicks: string;
  uniqueVisitors: string;
  source: string;
  keyword: string;
  sessionID: string;
}

// Define the table data using the interface
const tableData: Order[] = [
  {
    id: 1,
    date: "2025-03-20",
    clicks: "0",
    uniqueVisitors: "0",
    source: "Paid Search",
    keyword: "slot bonuses UK",
    sessionID: "0-2025-6a437f8c7d"
  },
  {
    id: 2,
    date: "2025-03-20",
    clicks: "0",
    uniqueVisitors: "0",
    source: "Paid Search",
    keyword: "best new casino",
    sessionID: "0-2025-4d2712fa2a"
  },
  {
    id: 3,
    date: "2025-03-20",
    clicks: "2",
    uniqueVisitors: "0",
    source: "Paid Search",
    keyword: "instant play slot sites",
    sessionID: "2-2025-72898147a7"
  },
  {
    id: 4,
    date: "2025-03-22",
    clicks: "7",
    uniqueVisitors: "7",
    source: "Paid Search",
    keyword: "UK slots offers",
    sessionID: "7-2025-e314181afb"
  },
  {
    id: 5,
    date: "2025-03-22",
    clicks: "7",
    uniqueVisitors: "6",
    source: "Paid Search",
    keyword: "top online casinos",
    sessionID: "7-2025-71e66967a6"
  },
  {
    id: 6,
    date: "2025-03-22",
    clicks: "9",
    uniqueVisitors: "8",
    source: "Paid Search",
    keyword: "new online slots",
    sessionID: "9-2025-07d407b8c3"
  },
  {
    id: 7,
    date: "2025-03-23",
    clicks: "6",
    uniqueVisitors: "5",
    source: "Paid Search",
    keyword: "top online casinos",
    sessionID: "6-2025-875d43cfe4"
  },
  {
    id: 8,
    date: "2025-03-23",
    clicks: "5",
    uniqueVisitors: "5",
    source: "Paid Search",
    keyword: "top UK slots sites",
    sessionID: "5-2025-df1ac18b54"
  },
  {
    id: 9,
    date: "2025-03-23",
    clicks: "7",
    uniqueVisitors: "6",
    source: "Paid Search",
    keyword: "slot bonuses UK",
    sessionID: "7-2025-8a07716240"
  },
  {
    id: 10,
    date: "2025-03-24",
    clicks: "21",
    uniqueVisitors: "13",
    source: "Paid Search",
    keyword: "safe sites for real money",
    sessionID: "21-2025-69bd3b98d8"
  },
  {
    id: 11,
    date: "2025-03-24",
    clicks: "20",
    uniqueVisitors: "13",
    source: "Paid Search",
    keyword: "instant play slot sites",
    sessionID: "20-2025-f660af7523"
  },
  {
    id: 12,
    date: "2025-03-24",
    clicks: "21",
    uniqueVisitors: "14",
    source: "Paid Search",
    keyword: "top online casinos",
    sessionID: "21-2025-a360dd7eeb"
  },
  {
    id: 13,
    date: "2025-03-25",
    clicks: "27",
    uniqueVisitors: "19",
    source: "Paid Search",
    keyword: "safe sites for real money",
    sessionID: "27-2025-68e26eebde"
  },
  {
    id: 14,
    date: "2025-03-25",
    clicks: "26",
    uniqueVisitors: "18",
    source: "Paid Search",
    keyword: "top online casinos",
    sessionID: "26-2025-1b816352a8"
  },
  {
    id: 15,
    date: "2025-03-25",
    clicks: "28",
    uniqueVisitors: "20",
    source: "Paid Search",
    keyword: "top UK slots sites",
    sessionID: "28-2025-a76acb4b7e"
  },
  {
    id: 16,
    date: "2025-03-26",
    clicks: "30",
    uniqueVisitors: "21",
    source: "Paid Search",
    keyword: "top online casinos",
    sessionID: "30-2025-b58c1e73f3"
  },
  {
    id: 17,
    date: "2025-03-26",
    clicks: "29",
    uniqueVisitors: "20",
    source: "Paid Search",
    keyword: "top online casinos",
    sessionID: "29-2025-ebf6830e61"
  },
  {
    id: 18,
    date: "2025-03-26",
    clicks: "30",
    uniqueVisitors: "21",
    source: "Paid Search",
    keyword: "UK slots offers",
    sessionID: "30-2025-c43c3754b4"
  },
  {
    id: 19,
    date: "2025-03-27",
    clicks: "18",
    uniqueVisitors: "13",
    source: "Paid Search",
    keyword: "slot bonuses UK",
    sessionID: "18-2025-c091bb68ab"
  },
  {
    id: 20,
    date: "2025-03-27",
    clicks: "17",
    uniqueVisitors: "12",
    source: "Paid Search",
    keyword: "instant play slot sites",
    sessionID: "17-2025-9388a70c6b"
  },
  {
    id: 21,
    date: "2025-03-27",
    clicks: "18",
    uniqueVisitors: "14",
    source: "Paid Search",
    keyword: "best new casino",
    sessionID: "18-2025-3b5a6abbac"
  },
  {
    id: 22,
    date: "2025-03-28",
    clicks: "31",
    uniqueVisitors: "23",
    source: "Paid Search",
    keyword: "top UK slots sites",
    sessionID: "31-2025-bd2ba44321"
  },
  {
    id: 23,
    date: "2025-03-28",
    clicks: "31",
    uniqueVisitors: "22",
    source: "Paid Search",
    keyword: "UK slots offers",
    sessionID: "31-2025-a95da7f802"
  },
  {
    id: 24,
    date: "2025-03-28",
    clicks: "32",
    uniqueVisitors: "23",
    source: "Paid Search",
    keyword: "top online casinos",
    sessionID: "32-2025-75a011262f"
  },
  {
    id: 25,
    date: "2025-03-29",
    clicks: "165",
    uniqueVisitors: "151",
    source: "Paid Search",
    keyword: "top UK slots sites",
    sessionID: "165-2025-62df7e2f35"
  },
  {
    id: 26,
    date: "2025-03-29",
    clicks: "160",
    uniqueVisitors: "147",
    source: "Paid Search",
    keyword: "new online slots",
    sessionID: "160-2025-bcbce99b1c"
  },
  {
    id: 27,
    date: "2025-03-29",
    clicks: "161",
    uniqueVisitors: "148",
    source: "Paid Search",
    keyword: "new online slots",
    sessionID: "161-2025-3ec4fdaa36"
  },
  {
    id: 28,
    date: "2025-03-30",
    clicks: "52",
    uniqueVisitors: "37",
    source: "Paid Search",
    keyword: "safe sites for real money",
    sessionID: "52-2025-a017d41c09"
  },
  {
    id: 29,
    date: "2025-03-30",
    clicks: "50",
    uniqueVisitors: "36",
    source: "Paid Search",
    keyword: "slot bonuses UK",
    sessionID: "50-2025-5296ab8c14"
  },
  {
    id: 30,
    date: "2025-03-30",
    clicks: "52",
    uniqueVisitors: "37",
    source: "Paid Search",
    keyword: "instant play slot sites",
    sessionID: "52-2025-7802579332"
  },
  {
    id: 31,
    date: "2025-03-31",
    clicks: "24",
    uniqueVisitors: "16",
    source: "Paid Search",
    keyword: "UK slots offers",
    sessionID: "24-2025-5ce98b3283"
  },
  {
    id: 32,
    date: "2025-03-31",
    clicks: "23",
    uniqueVisitors: "15",
    source: "Paid Search",
    keyword: "best new casino",
    sessionID: "23-2025-b3b76b512e"
  },
  {
    id: 33,
    date: "2025-03-31",
    clicks: "25",
    uniqueVisitors: "17",
    source: "Paid Search",
    keyword: "slot bonuses UK",
    sessionID: "25-2025-9aec3439cb"
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
        <h1 className="p-5 text-lg font-semibold dark:text-white">PPC - Donbet - uk/1</h1>
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
              <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Session ID
              </TableCell>
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
                <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {order.sessionID}
                </TableCell>
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
              <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400 font-bold">
                N/A
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
