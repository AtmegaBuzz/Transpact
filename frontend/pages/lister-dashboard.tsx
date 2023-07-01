import "regenerator-runtime/runtime";
import React, { useContext } from "react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { WalletContext } from "@/context/wallet-context";
import DashboardLayout from "@/components/layouts/dashboard-layout";

interface ListerDashboardProps {}

const ListerDashboard: React.FC<ListerDashboardProps> = ({}) => {
  const {} = useContext(WalletContext)!;

  return (
    <DashboardLayout>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Lister Dashboard
          </h1>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default ListerDashboard;
