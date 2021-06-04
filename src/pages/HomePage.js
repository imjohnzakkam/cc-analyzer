import SingleUserForm from "../components/formdata/SingleUserForm";
import React,{useState,useEffect} from 'react';



function HomePage() {

const [Top5,setTop5]=useState([]);
const [error,setError]=useState(null);

useEffect(()=> {
  var date = new Date();
	var y = date.toISOString();
	var current_time = "";
	for(var i = 0; i < y.length - 5; i++) current_time += y[i];
	const url = "https://aqueous-ravine-73981.herokuapp.com/https://clist.by/api/v2/contest/?resource_id=2&start__gt="+current_time+"&order_by=start&username=spourgeon&api_key=b6c222068d30d8e84925061f83aa79e844f1e94e";
	fetch(url)
  .then(res=>res.json())
  .then((result)=>{
    var contests=[]
    console.log(result.objects.length);
    const size = result.objects.length;
 for(var i = 0; i < Math.min(5, size); i++) contests.push(result.objects[i].event);
    setTop5(contests);
  },
  (error)=>{
    setError(error);
  }
  )

},[])

  return (
    <>
      <section>
        <SingleUserForm />
      </section>
  
    <ul>
    
	   {Top5.map((Top,id)=>(
       <li key={id}>{Top}</li>
     ))}
		</ul>
     
    </>
  );
}

export default HomePage;
