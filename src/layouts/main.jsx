import Header from "../components/header";

function MainLayout({ children }) {
  return (
    <div className="font-sans text-gray-900">
      <Header />
      <main className="pt-16">{children}</main>
    </div>
  );
}

export default MainLayout;
