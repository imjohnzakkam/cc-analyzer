import NavigationBar from './NavigationBar';

function Layout(props) {
  return <div className="font-custom">
	<NavigationBar />
	<main>
		{props.children}
	</main>
  </div>;
}

export default Layout;