import HeaderBox from "@/components/ui/HeaderBox";
import RightSideBar from "@/components/ui/RightSideBar";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Mujeeb",
    lastName: "Ali",
    email: "mas.kapoot@gamil.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn.firstName || "Guest"}
            subtext="access and manage your account transiction constantly and efficiently"
          />
          <TotalBalanceBox
            balance={[]}
            totalBanks={1}
            totalCurrentBalance={1002.35}
          />
        </header>
        Recent Transiction
      </div>
      <RightSideBar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123 }, { currentBalance: 3233 }]}
      />
    </section>
  );
};

export default Home;
