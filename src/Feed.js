import React, {useEffect, useState} from 'react';
import "./Feed.css";
import { Avatar } from '@mui/material';
import CreateIcon from "@mui/material/Icon/Icon";
import InputOption from "./InputOption";
import PhotoIcon from '@mui/icons-material/Photo';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Post from "./Post";
import { db} from 'public/node_modules/firebase';
import firebase from 'firebase';
function Feed() {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        db.collection("posts")
        .orderBy("timestamp","desc")
        .onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc=>(
                {
                    id:doc.id,
                    data:doc.data(),
                }
            )))
        ))
    }, [])

    const sendPost = e=>{
        e.preventDefault();
        db.collection('posts').add({
            name: 'Rudresh Pandey',
            description: 'This is a test',
            message: input,
            photoUrl:'',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput("");
    };
  return (
    <div className='feed'>
        <div className='feed__inputContainer'>
            <div class="feed__inputline1">
            <Avatar className='feed__avatar'/>
            <div className='feed__input'>
                <form>
                    <input value={input} onChange={e=>setInput(e.targer.value)} type="text" placeholder='Start a post'/>
                    <button onClick={sendPost} type="submit">Start a post</button>
                </form>
            </div>
            </div>
            <div className='feed__inputOptions'>
                <InputOption Icon={PhotoIcon} title="Photo" color="#70b5f9"/>
                <InputOption Icon={SmartDisplayIcon} title="Video" color="#7fc15e"/>
                <InputOption Icon={CalendarTodayIcon} title="Event" color="e7a33e"/>
                <InputOption Icon={NewspaperIcon} title="Write article" color="red"/>
            </div>
        </div>
        {/* Posts */}
        {posts.map(({ id, data:{ name,description,message,photoUrl}})=>(
            <Post 
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}/>
        ))}
        <Post 
        name="Rudresh Pandey"
        description='This is a test'
        message="This is working"
        />
    </div>
  );
}

export default Feed