import React ,{useState , useEffect} from 'react'
import Service from '../appwrite/config'
import { PostCard,container } from '../components'

function AllPost() {
    const[posts,setPosts] = useState([])
    useEffect(() =>{},[])
    Service.getPosts([]).then((posts) =>{
        if(posts){
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full py-8'>
        <container>
           <div className='flex flex-wrap'>
                {posts.map((post)=>(
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard />
                    </div>
                ))}
           </div>
        </container>
      
    </div>
  )
}

export default AllPost
