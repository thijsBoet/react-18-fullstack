import {useParams, useLocation} from 'react-router-dom'

const PostId = () => {
  let params = useParams();
  let location = useLocation();

  console.log(params);
  console.log(location);
  return (
    <div>PostId XXX</div>
  )
}

export default PostId