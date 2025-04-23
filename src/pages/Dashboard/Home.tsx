import EcommerceMetrics from "../../components/ecommerce/EcommerceMetrics";
import MonthlySalesChart from "../../components/ecommerce/MonthlySalesChart";
// import StatisticsChart from "../../components/ecommerce/StatisticsChart";
import MonthlyTarget from "../../components/ecommerce/MonthlyTarget";
import RecentOrders from "../../components/ecommerce/RecentOrders";
// import DemographicCard from "../../components/ecommerce/DemographicCard";
import PageMeta from "../../components/common/PageMeta";
import BasicTableOne from "../../components/tables/BasicTables/BasicTableOne.tsx";

export default function Home() {
  return (
    <>
      <PageMeta
        title="React.js Ecommerce Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Ecommerce Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="">
        <h1 className="text-lg font-semibold py-5">Archived campaign data from Paid Search (Mar 20 – Apr 17, 2025)</h1>
      </div>
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <EcommerceMetrics/>

          <MonthlySalesChart/>
        </div>

        <div className="col-span-12 xl:col-span-5">
          <MonthlyTarget/>
        </div>

        <div className="col-span-12">
          <BasicTableOne/>
        </div>

        {/*<div className="col-span-12">*/}
        {/*  <StatisticsChart/>*/}
        {/*</div>*/}

        {/*<div className="col-span-12 xl:col-span-5">*/}
        {/*  <DemographicCard/>*/}
        {/*</div>*/}

        <div className="col-span-12 xl:col-span-12">
          <RecentOrders/>
        </div>
      </div>
    </>
  );
}
