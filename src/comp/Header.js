import React, { useState } from 'react';
import CategoryBtn from '../UI/CategoryBtn';
import PostCategory from '../UI/PostCategory';
import Products from '../UI/Products';
import "./Header.css"

import N1 from "../assets/N1.png";


function Header() {

    const [post,setPost] = useState([
        {body:"ring 1"},
        {body:"ring 2"},
        {body:"ring 3"},
        {body:"ring 4"},
        {body:"ring 5"},
    ])
    const [value,setValue] = useState("")

    function create(e){
        e.preventDefault()
        const newPost = { body:value }        
        setPost([...post,newPost])
        setValue("")
    }

    const [category,setCategory] = useState([
        {body:"ring 1"},
        {body:"ring 2"},
        {body:"ring 3"},
        {body:"ring 4"},
        {body:"ring 5"},
    ])
    const [categoryVal,setCategoryVal] = useState("")

    function newCategory(e){
        e.preventDefault()
        const newCate = {body:categoryVal}
        setCategory([...category,newCate])
        setCategoryVal("")
    }

    const [product,setProduct] = useState([
        {body:N1,title:"Title",price:250}
    ])

    return (
        <div className="header">                    

        <div className="inputBody">
            <input className="input" placeholder="Search"/>
        </div>           

        <CategoryBtn category={category} />

        <PostCategory post={post}/> 

        <Products product={product}/>

        <div className="inputs">
        <form>
            <input 
                value={value}
                onChange={e => setValue(e.target.value)} />
            <button onClick={create}>PostCategory</button>
        </form>
        <form>
            <input
                value={categoryVal}
                onChange={e => setCategoryVal(e.target.value)}/>
            <button onClick={newCategory}>Category</button>
        </form>   
        </div>                   
          
        </div>
    );
}

export default Header;