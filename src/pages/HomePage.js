import SingleUserForm from "../components/formdata/SingleUserForm";
import Top5 from "./test";


function HomePage() {
  function exectueThis(username) {}
  return (
    <>
      <section>
        <SingleUserForm onSubmit={exectueThis} />
      </section>
      <section>
        <div>
	
		</div>
      </section>
    </>
  );
}

export default HomePage;
