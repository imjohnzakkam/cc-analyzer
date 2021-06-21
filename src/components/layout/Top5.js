import React, { useState, useEffect } from "react";
import { Table, Container, Alert } from "react-bootstrap";

function ModifyTime(x) {
  var y = x[8] + x[9] + "-" + x[5] + x[6] + "-" + x[0] + x[1] + x[2] + x[3];
  for (var i = 10; i < x.length; i++) {
    if (x[i] === "T") y = y + " ";
    else y = y + x[i];
  }
  return y;
}

function ClistTop5() {
  const [Top5, setTop5] = useState([]);
  const [start, setStart] = useState([]);
  const [end, setEnd] = useState([]);
  const [link, setLink] = useState([]);
  useEffect(() => {
    var date = new Date();
    var y = date.toISOString();
    var current_time = "";
    for (var i = 0; i < y.length - 5; i++) current_time += y[i];
    const url = "https://aqueous-ravine-73981.herokuapp.com/https://clist.by/api/v2/contest/?resource_id=2&start__gt="+current_time+"&order_by=start&username=spourgeon&api_key=b6c222068d30d8e84925061f83aa79e844f1e94e";
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          var contests = [];
          var Start = [];
          var End = [];
          var Link = [];
          const size = result.objects.length;
          for (var i = 0; i < Math.min(5, size); i++) {
            contests.push(result.objects[i].event);
            Link.push(result.objects[i].href);
            Start.push(ModifyTime(result.objects[i].start));
            End.push(ModifyTime(result.objects[i].end));
          }
          setLink(Link);
          setTop5(contests);
          setStart(Start);
          setEnd(End);
        },
        (error) => {}
      );
  }, []);

  return (
    <>
      <Container className="text-center pt-4">
        <Alert variant="info" className="shadow-md font-semibold">CodeChef's upcoming {Top5.length} contests</Alert>
        <Table striped bordered hover className="shadow-md table-auto border-solid border-4">
          <thead>
            <tr>
              <th>Contest Number</th>
              <th>Contest Name</th>
              <th>Start Time - UTC</th>
              <th>End Time - UTC</th>
            </tr>
          </thead>
          <tbody>
            {Top5.map((Top, id) => (
              <tr>
                <td>{id + 1}</td>
                <td>
                  <a href={link[id]} target="blank">{Top}</a>
                </td>
                <td>{start[id]}</td>
                <td>{end[id]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default ClistTop5;
