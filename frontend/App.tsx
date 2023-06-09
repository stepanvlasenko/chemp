import BaseButton from "./components/BaseButton/BaseButton"
import BaseInput from "./components/BaseInput/BaseInput"
import Post from "./components/Post/Post"
import TheHeader from "./components/TheHeader/TheHeader"

import './app.css'

const testPost = {
    id: 1,
    userId: 1,
    title: 'test-post',
    content: 'test-content al la lalalsklfkd',
    publishDate: '01.06.2006',
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png'
}

export default function App() {
    return (
        <>
            <TheHeader></TheHeader>
            <BaseButton text="text" color="blue" onClick={(event) =>{
                console.log('clicked', event) 
            }}></BaseButton>
            <BaseInput type="text" placeholder="abc" onChange={(input) =>{
                console.log(input)
            }}></BaseInput> 
            <div className="test">
                <Post post={testPost}></Post>
            </div>
            
        </>
    )
}