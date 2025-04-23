import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import { modals } from "@mantine/modals";
import {ActionIcon} from "@mantine/core";
import {IconEye} from "@tabler/icons-react";

// Define the TypeScript interface for the table rows
interface GData{
  keywords: string;
  clicks: number;
  unique_visitors: number;
}
interface GoogleData {
  data: GData[];
}
interface Product {
  id:number;
  day: string;
  click: number;
  unique_visitors: number;
  bing_visitors: number;
  platform: string;
  google:GoogleData;
  bing:GoogleData;
}

interface ProductData {
  data: Product[];
  total: {
    clicks: number;
    unique_visitors: number;
    google_visitors: number;
    bing_visitors: number;
  };
}

const tableData: ProductData = {
  data: [
    {
      "id": 1,
      "day": "2025-03-20",
      "click": 2,
      "unique_visitors": 0,
      "platform": "Google",
      "bing_visitors": 0,
      "google": {
        "data": [
          {
            "keywords": "slot bonuses UK",
            "clicks": 0,
            "unique_visitors": 0
          },
          {
            "keywords": "best new casino",
            "clicks": 0,
            "unique_visitors": 0
          },
          {
            "keywords": "instant play slot sites",
            "clicks": 2,
            "unique_visitors": 0
          }
        ]
      },
      "bing": {
        "data": []
      }
    },
    {
      "id": 2,
      "day": "2025-03-22",
      "click": 23,
      "unique_visitors": 21,
      "platform": "Google",
      "bing_visitors": 0,
      "google": {
        "data": [
          {
            "keywords": "UK slots offers",
            "clicks": 7,
            "unique_visitors": 7
          },
          {
            "keywords": "top online casinos",
            "clicks": 7,
            "unique_visitors": 6
          },
          {
            "keywords": "new online slots",
            "clicks": 9,
            "unique_visitors": 8
          }
        ]
      },
      "bing": {
        "data": []
      }
    },
    {
      "id": 3,
      "day": "2025-03-23",
      "click": 18,
      "unique_visitors": 16,
      "platform": "Google",
      "bing_visitors": 0,
      "google": {
        "data": [
          {
            "keywords": "top online casinos",
            "clicks": 6,
            "unique_visitors": 5
          },
          {
            "keywords": "top UK slots sites",
            "clicks": 5,
            "unique_visitors": 5
          },
          {
            "keywords": "slot bonuses UK",
            "clicks": 7,
            "unique_visitors": 6
          }
        ]
      },
      "bing": {
        "data": []
      }
    },
    {
      "id": 4,
      "day": "2025-03-24",
      "click": 62,
      "unique_visitors": 40,
      "platform": "Google",
      "bing_visitors": 0,
      "google": {
        "data": [
          {
            "keywords": "safe sites for real money",
            "clicks": 21,
            "unique_visitors": 13
          },
          {
            "keywords": "instant play slot sites",
            "clicks": 20,
            "unique_visitors": 13
          },
          {
            "keywords": "top online casinos",
            "clicks": 21,
            "unique_visitors": 14
          }
        ]
      },
      "bing": {
        "data": []
      }
    },
    {
      "id": 5,
      "day": "2025-03-25",
      "click": 81,
      "unique_visitors": 57,
      "platform": "Google",
      "bing_visitors": 0,
      "google": {
        "data": [
          {
            "keywords": "safe sites for real money",
            "clicks": 27,
            "unique_visitors": 19
          },
          {
            "keywords": "top online casinos",
            "clicks": 26,
            "unique_visitors": 18
          },
          {
            "keywords": "top UK slots sites",
            "clicks": 28,
            "unique_visitors": 20
          }
        ]
      },
      "bing": {
        "data": []
      }
    },
    {
      "id": 6,
      "day": "2025-03-26",
      "click": 89,
      "unique_visitors": 62,
      "platform": "Google",
      "bing_visitors": 0,
      "google": {
        "data": [
          {
            "keywords": "top online casinos",
            "clicks": 30,
            "unique_visitors": 21
          },
          {
            "keywords": "top online casinos",
            "clicks": 29,
            "unique_visitors": 20
          },
          {
            "keywords": "UK slots offers",
            "clicks": 30,
            "unique_visitors": 21
          }
        ]
      },
      "bing": {
        "data": []
      }
    },
    {
      "id": 7,
      "day": "2025-03-27",
      "click": 53,
      "unique_visitors": 39,
      "platform": "Google",
      "bing_visitors": 0,
      "google": {
        "data": [
          {
            "keywords": "slot bonuses UK",
            "clicks": 18,
            "unique_visitors": 13
          },
          {
            "keywords": "instant play slot sites",
            "clicks": 17,
            "unique_visitors": 12
          },
          {
            "keywords": "best new casino",
            "clicks": 18,
            "unique_visitors": 14
          }
        ]
      },
      "bing": {
        "data": []
      }
    },
    {
      "id": 8,
      "day": "2025-03-28",
      "click": 94,
      "unique_visitors": 68,
      "platform": "Google",
      "bing_visitors": 0,
      "google": {
        "data": [
          {
            "keywords": "top UK slots sites",
            "clicks": 31,
            "unique_visitors": 23
          },
          {
            "keywords": "UK slots offers",
            "clicks": 31,
            "unique_visitors": 22
          },
          {
            "keywords": "top online casinos",
            "clicks": 32,
            "unique_visitors": 23
          }
        ]
      },
      "bing": {
        "data": []
      }
    },
    {
      "id": 9,
      "day": "2025-03-29",
      "click": 486,
      "unique_visitors": 446,
      "platform": "Google",
      "bing_visitors": 0,
      "google": {
        "data": [
          {
            "keywords": "top UK slots sites",
            "clicks": 165,
            "unique_visitors": 151
          },
          {
            "keywords": "new online slots",
            "clicks": 160,
            "unique_visitors": 147
          },
          {
            "keywords": "new online slots",
            "clicks": 161,
            "unique_visitors": 148
          }
        ]
      },
      "bing": {
        "data": []
      }
    },
    {
      "id": 10,
      "day": "2025-03-30",
      "click": 154,
      "unique_visitors": 110,
      "platform": "Google",
      "bing_visitors": 0,
      "google": {
        "data": [
          {
            "keywords": "safe sites for real money",
            "clicks": 52,
            "unique_visitors": 37
          },
          {
            "keywords": "slot bonuses UK",
            "clicks": 50,
            "unique_visitors": 36
          },
          {
            "keywords": "instant play slot sites",
            "clicks": 52,
            "unique_visitors": 37
          }
        ]
      },
      "bing": {
        "data": []
      }
    },
    {
      "id": 11,
      "day": "2025-03-31",
      "click": 72,
      "unique_visitors": 48,
      "platform": "Google",
      "bing_visitors": 0,
      "google": {
        "data": [
          {
            "keywords": "UK slots offers",
            "clicks": 24,
            "unique_visitors": 16
          },
          {
            "keywords": "best new casino",
            "clicks": 23,
            "unique_visitors": 15
          },
          {
            "keywords": "slot bonuses UK",
            "clicks": 25,
            "unique_visitors": 17
          }
        ]
      },
      "bing": {
        "data": []
      }
    }
  ],
  "total": {
    "clicks": 1134,
    "unique_visitors": 907,
    "google_visitors": 907,
    "bing_visitors": 0
  }
};

export default function RecentOrders() {

  // Show full details of a google data
  const openGoogleDetailsModal = (product: Product) =>
      modals.open({
        title: product.day,
        zIndex:99999999999,
        size: "lg",
        withCloseButton: true,
        children: (
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Keyword
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Click
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Unique Visitors
                  </th>
                </tr>
                </thead>
                <tbody>
                {product.google.data.map((data) => (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {data.keywords}
                      </th>
                      <td className="px-6 py-4">
                        {data.clicks}
                      </td>
                      <td className="px-6 py-4">
                        {data.unique_visitors}
                      </td>
                    </tr>
                ))}
                </tbody>
              </table>
            </div>
        ),
      });

  // Show full details of a bing data
  const openBingDetailsModal = (product: Product) =>
      modals.open({
        title: product.day,
        zIndex:99999999999,
        size: "lg",
        withCloseButton: true,
        children: (
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Keyword
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Click
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Unique Visitors
                  </th>
                </tr>
                </thead>
                <tbody>
                {product.bing.data.map((data) => (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {data.keywords}
                      </th>
                      <td className="px-6 py-4">
                        {data.clicks}
                      </td>
                      <td className="px-6 py-4">
                        {data.unique_visitors}
                      </td>
                    </tr>
                ))}
                </tbody>
              </table>
            </div>
        ),
      });

  return (
      <div
          className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
        <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
              Archived Keywords
            </h3>
          </div>

          <div className="flex items-center gap-3">
          </div>
        </div>
        <div className="max-w-full overflow-y-auto overflow-x-hidden max-h-[400px]">
          <Table>
            {/* Table Header */}
            <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
              <TableRow>
                <TableCell
                    isHeader
                    className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Day
                </TableCell>
                <TableCell
                    isHeader
                    className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Click
                </TableCell>
                <TableCell
                    isHeader
                    className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Unique Visitors
                </TableCell>
                <TableCell
                    isHeader
                    className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Platform
                </TableCell>
                <TableCell
                    isHeader
                    className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Bing Visitors
                </TableCell>
              </TableRow>
            </TableHeader>

            {/* Table Body */}

            <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
              {tableData.data.map((product) => (
                  <TableRow key={product.id} className="">
                    <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                      {product.day}
                    </TableCell>
                    <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {product.click}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {product.unique_visitors}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  Google
                  <div className="ml-2">
                    <ActionIcon variant="filled" aria-label="Settings"
                                onClick={() => {
                      console.log("Opening modal for", product);
                      openGoogleDetailsModal(product)
                    }}>
                      <IconEye style={{ width: '70%', height: '70%' }} stroke={1.5} />
                    </ActionIcon>
                  </div>
                </TableCell>
                    <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                      {product.bing_visitors}
                      <div className="ml-2">
                        <ActionIcon variant="filled" aria-label="Settings"
                                    onClick={() => {
                                      openBingDetailsModal(product)
                                    }}>
                          <IconEye style={{width: '70%', height: '70%'}} stroke={1.5}/>
                        </ActionIcon>
                      </div>
                    </TableCell>
                  </TableRow>
              ))}
              <TableRow>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400 font-bold">
                  Total
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400 font-bold">
                  {tableData.total.clicks}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400 font-bold">
                {tableData.total.unique_visitors}
              </TableCell>
              <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400 font-bold">
                {tableData.total.google_visitors}
              </TableCell>
              <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400 font-bold">
                {tableData.total.bing_visitors}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
