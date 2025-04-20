import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";
import { modals } from "@mantine/modals";
import {Button,ActionIcon} from "@mantine/core";
import {IconEye} from "@tabler/icons-react";

// Define the TypeScript interface for the table rows
interface GData{
  keywords: string;
  clicks: number;
  visitors: number;
  unique_visitors: number;
}
interface GoogleData {
  data: GData[];
}
interface Product {
  id:number;
  day: string;
  visitors: number;
  unique_visitors: number;
  google_visitors: number;
  bing_visitors: number;
  google:GoogleData;
  bing:GoogleData;
}

interface ProductData {
  data: Product[];
  total: {
    visitors: number;
    unique_visitors: number;
    google_visitors: number;
    bing_visitors: number;
  };
}

const tableData: ProductData = {
  data: [
    { id: 1,
      day: "4/17/2025",
      visitors: 4,
      unique_visitors: 4,
      google_visitors: 10,
      bing_visitors: 19,
      google: {
        data: [
          {
            keywords: "2025 gambling reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "best new casino",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "legit casino reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          }
        ]
      },
      bing: {
        data: [
          {
            keywords: "2025 gambling reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "best new casino",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "legit casino reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          }
        ]
      }
    },
    { id: 2,
      day: "4/16/2025",
      visitors: 4,
      unique_visitors: 4,
      google_visitors: 34,
      bing_visitors: 56,
      google: {
        data: [
          {
            keywords: "2025 gambling reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "best new casino",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "legit casino reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          }
        ]
      },
      bing: {
        data: [
          {
            keywords: "2025 gambling reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "best new casino",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "legit casino reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          }
        ]
      }
    },
    { id: 3,
      day: "4/12/2025",
      visitors: 19,
      unique_visitors: 15,
      google_visitors: 123,
      bing_visitors: 78,
      google: {
        data: [
          {
            keywords: "2025 gambling reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "best new casino",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "legit casino reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          }
        ]
      },
      bing: {
        data: [
          {
            keywords: "2025 gambling reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "best new casino",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "legit casino reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          }
        ]
      }
    },
    { id: 4,
      day: "4/9/2025",
      visitors: 1,
      unique_visitors: 1,
      google_visitors: 15,
      bing_visitors: 45,
      google: {
        data: [
          {
            keywords: "2025 gambling reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "best new casino",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "legit casino reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          }
        ]
      },
      bing: {
        data: [
          {
            keywords: "2025 gambling reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "best new casino",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "legit casino reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          }
        ]
      }
    },
    { id: 5,
      day: "4/6/2025",
      visitors: 1,
      unique_visitors: 1,
      google_visitors: 30,
      bing_visitors: 25,
      google: {
        data: [
          {
            keywords: "2025 gambling reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "best new casino",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "legit casino reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          }
        ]
      },
      bing: {
        data: [
          {
            keywords: "2025 gambling reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "best new casino",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "legit casino reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          }
        ]
      }
    },
    { id: 6, day: "4/3/2025", visitors: 1, unique_visitors: 0, google_visitors: 5, bing_visitors: 10,
      google: {
        data: [
          {
            keywords: "2025 gambling reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "best new casino",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "legit casino reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          }
        ]
      },bing: {
        data: [
          {
            keywords: "2025 gambling reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "best new casino",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "legit casino reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          }
        ]
      }  },
    { id: 7, day: "4/2/2025", visitors: 5, unique_visitors: 2, google_visitors: 99, bing_visitors: 120,
      google: {
        data: [
          {
            keywords: "2025 gambling reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "best new casino",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "legit casino reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          }
        ]
      },bing: {
        data: [
          {
            keywords: "2025 gambling reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "best new casino",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "legit casino reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          }
        ]
      }  },
    { id: 8, day: "4/1/2025", visitors: 20, unique_visitors: 16, google_visitors: 45, bing_visitors: 67,
      google: {
        data: [
          {
            keywords: "2025 gambling reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "best new casino",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "legit casino reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          }
        ]
      } ,
      bing: {
        data: [
          {
            keywords: "2025 gambling reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "best new casino",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "legit casino reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          }
        ]
      }
    },
    { id: 9, day: "3/31/2025", visitors: 72, unique_visitors: 48, google_visitors: 76, bing_visitors: 130,
      google: {
        data: [
          {
            keywords: "2025 gambling reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "best new casino",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "legit casino reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          }
        ]
      },bing: {
        data: [
          {
            keywords: "2025 gambling reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "best new casino",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "legit casino reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          }
        ]
      }  },
    { id: 10, day: "3/30/2025", visitors: 154, unique_visitors: 110, google_visitors: 150, bing_visitors: 165,
      google: {
        data: [
          {
            keywords: "2025 gambling reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "best new casino",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "legit casino reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          }
        ]
      },bing: {
        data: [
          {
            keywords: "2025 gambling reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "best new casino",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "legit casino reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          }
        ]
      }  },
    { id: 11, day: "3/29/2025", visitors: 486, unique_visitors: 446, google_visitors: 200, bing_visitors: 200,
      google: {
        data: [
          {
            keywords: "2025 gambling reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "best new casino",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "legit casino reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          }
        ]
      } ,bing: {
        data: [
          {
            keywords: "2025 gambling reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "best new casino",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "legit casino reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          }
        ]
      } },
    { id: 12, day: "3/28/2025", visitors: 94, unique_visitors: 68, google_visitors: 123, bing_visitors: 99,
      google: {
        data: [
          {
            keywords: "2025 gambling reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "best new casino",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "legit casino reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          }
        ]
      },bing: {
        data: [
          {
            keywords: "2025 gambling reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "best new casino",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "legit casino reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          }
        ]
      }  },
    { id: 13, day: "3/27/2025", visitors: 53, unique_visitors: 39, google_visitors: 77, bing_visitors: 56,
      google: {
        data: [
          {
            keywords: "2025 gambling reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "best new casino",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "legit casino reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          }
        ]
      },bing: {
        data: [
          {
            keywords: "2025 gambling reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "best new casino",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "legit casino reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          }
        ]
      }  },
    { id: 14, day: "3/26/2025", visitors: 89, unique_visitors: 62, google_visitors: 100, bing_visitors: 85,
      google: {
        data: [
          {
            keywords: "2025 gambling reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "best new casino",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "legit casino reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          }
        ]
      },bing: {
        data: [
          {
            keywords: "2025 gambling reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "best new casino",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "legit casino reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          }
        ]
      }  },
    { id: 15, day: "3/25/2025", visitors: 81, unique_visitors: 57, google_visitors: 150, bing_visitors: 140,
      google: {
        data: [
          {
            keywords: "2025 gambling reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "best new casino",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "legit casino reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          }
        ]
      },bing: {
        data: [
          {
            keywords: "2025 gambling reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "best new casino",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "legit casino reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          }
        ]
      }  },
    { id: 16, day: "3/24/2025", visitors: 62, unique_visitors: 40, google_visitors: 90, bing_visitors: 100,
      google: {
        data: [
          {
            keywords: "2025 gambling reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "best new casino",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "legit casino reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          }
        ]
      },bing: {
        data: [
          {
            keywords: "2025 gambling reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "best new casino",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "legit casino reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          }
        ]
      }  },
    { id: 17, day: "3/23/2025", visitors: 18, unique_visitors: 16, google_visitors: 60, bing_visitors: 35,
      google: {
        data: [
          {
            keywords: "2025 gambling reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "best new casino",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "legit casino reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          }
        ]
      },bing: {
        data: [
          {
            keywords: "2025 gambling reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "best new casino",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "legit casino reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          }
        ]
      }  },
    { id: 18, day: "3/22/2025", visitors: 23, unique_visitors: 21, google_visitors: 45, bing_visitors: 65,
      google: {
        data: [
          {
            keywords: "2025 gambling reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "best new casino",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "legit casino reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          }
        ]
      },bing: {
        data: [
          {
            keywords: "2025 gambling reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "best new casino",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "legit casino reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          }
        ]
      }  },
    { id: 19, day: "3/21/2025", visitors: 5, unique_visitors: 0, google_visitors: 20, bing_visitors: 30,
      google: {
        data: [
          {
            keywords: "2025 gambling reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "best new casino",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "legit casino reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          }
        ]
      },bing: {
        data: [
          {
            keywords: "2025 gambling reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "best new casino",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "legit casino reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          }
        ]
      }  },
    { id: 20, day: "3/20/2025", visitors: 2, unique_visitors: 0, google_visitors: 15, bing_visitors: 10,
      google: {
        data: [
          {
            keywords: "2025 gambling reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "best new casino",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "legit casino reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          }
        ]
      },bing: {
        data: [
          {
            keywords: "2025 gambling reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "best new casino",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          },
          {
            keywords: "legit casino reviews",
            clicks: 0,
            visitors: 0,
            unique_visitors: 0
          }
        ]
      }  }
  ],
  total: {
    visitors: 4197,
    unique_visitors: 951,
    google_visitors: 1467,
    bing_visitors: 1535
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
                    Visitors
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
                        {data.visitors}
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
                    Visitors
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
                        {data.visitors}
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
              Recent Campaigns
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
                  Visitors
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
                  Google Visitors
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
                    <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400 text-center">
                  {product.visitors}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400 text-center">
                  {product.unique_visitors}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400 text-center">
                  {product.google_visitors}
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
                    <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400 text-center">
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
                  {tableData.total.visitors}
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
