import SideBar from "../admin/components/SideBar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideBar />

      <main className="lg:ml-64">{children}</main>
    </div>
  );
}
