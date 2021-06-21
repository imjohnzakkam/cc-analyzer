import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

function Layout(props) {
  return (
	  <>
    <div className="font-custom flex flex-col min-h-screen">
      <NavigationBar />
      <main className="flex-grow">{props.children}</main>
      <Footer />
    </div>
	</>
  );
}

export default Layout;
