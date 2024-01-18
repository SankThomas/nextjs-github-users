import MobileNav from "./dashboard/_components/mobilenav";
import Sidebar from "./dashboard/_components/sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <MobileNav />
      <Sidebar />

      <div className="lg:pl-72 px-4 py-10 pr-4">{children}</div>
    </div>
  );
}
