import {useState} from 'react';
import Post from './Post';
import Button from './Button';

const PROJECT_ID = "1oup0h9h";
const   DATASET = "production";
const   QUERY = encodeURIComponent('*[_type == "post"]');
const URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

const Posts = () => {

  const [posts, setPosts] = useState([]);
  const [showText, setShowText] = useState(false);

  const toggleText = () => {
    console.log('Toggling text');
  }

  const showPosts = () => {
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then(({ result }) => {
      setPosts(result);
      })
      .catch((err) => console.error(err));
  }

  return(
    <div className='postsContainer'>
      <br/> <br/>
      <button onClick={() => showPosts()}> Show the posts </button>
      {/* <Button /> */}
      <br/> <br/>
      <ul>
        {
          posts.map((post) => {
            return (<Post
              title={post.title}
              text={post.body}
              toggleText={toggleText}
              key={post.id} />)
          })
        }
      </ul>
      <br/> <br/>
    </div>
  );
}

export default Posts
