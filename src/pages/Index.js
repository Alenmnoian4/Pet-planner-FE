import Post from "../components/Post";
import {useLoaderData} from "react-router-dom"
import { Form } from "react-router-dom";

const Index = (props) => {
  const petplans = useLoaderData()
  // For each post in the array render a Post component
  return <>
  <div style={{textAlign: "center"}}>
  <h2>Create a Petplan</h2>
  <Form action="/create" method="post">
      <input type="text" name="subject" placeholder="write subject here"/>
      <input type="text" name="details" placeholder="write details here"/>
      <button>Create New Petplan</button>
  </Form>
  </div>
  {petplans.map((post) => <Post post={post} key={post.id} />)}
  </>;
};

export default Index;