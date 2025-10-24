import {  useLocation, useNavigate, useParams } from "react-router-dom"
const PostDetails = () => {

    const localtion = useLocation();
    const navigate = useNavigate();
    const {post, page, limit} = localtion.state || {};
    const { id } = useParams();

    if(!post) return <div>No Post Founded</div>

    const handleBack = ()=>{
      navigate(`/post?_page=${page}&_limit=${limit}`);
    }
     

  return (
    
    <>
        <article key={id}>
             <h1>{post?.id}</h1>
              <h3>{post?.title}</h3>
              <p>{post?.body}</p>
        </article>
        <button className="btnHome" onClick={handleBack}>Return To Home </button>
    </>
  )
}

export default PostDetails
