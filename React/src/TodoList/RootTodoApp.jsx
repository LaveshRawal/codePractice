/* 
Prop Drilling RootTodo > Content > ItemList > LineItem
*/
import "./todolist.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useEffect, useState } from "react";

import React from "react";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import apiRequest from "./apiRequest/apiRequest";
const RootTodoApp = () => {
  //Fetching data from API
  const API_URL = 'http://localhost:3500/items';

  // getting data from local storage at the beginning 
  
  const [items, setItems] = useState([]  );   
  /* const [items, setItems] = useState(JSON.parse(localStorage.getItem("shoppinglist")) || []  );    */
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchItems = async ()=>{
      try{
            const response = await fetch(API_URL);
            if(!response.ok) throw Error ('Did not receive expected data');
            const listItems = await  response.json();
            console.log(listItems);
            setItems(listItems);
            setFetchError(null);
      }catch(err){
        /* console.log(err.stack); */
          /*  console.log(err.message); */ 
           setFetchError(err.message)
      }finally{
        setLoading(false);
      }
    }
      // just to stimulate loading time
      setTimeout(()=>{
        fetchItems();
      },2000)
    
  },[]);


   const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);

    // Updating(POST) API server item list data 3500 via post method
    const postOptions ={
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    }
    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result);
  };

  const handleCheck = async (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item );
    setItems(listItems);

    // To update(PATCH/PUT) the API on JSON server use below method
    const myItems = listItems.filter((item=> item.id ==id));
    const updateOption = {
      method:'PATCH',
      headers : {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({checked:myItems[0].checked})
    }
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOption);
    if(result) setFetchError(result);
  };


  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);

    // to Delete the API Data and keeping it in sync
    const deleteOption = {method: 'DELETE'};
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOption);
    if(result) setFetchError(result);

  };

  return (
    <div className="App">
      <Header title="Groceries" />

      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />

      <SearchItem search={search} setSearch={setSearch} />

      <main>
        {isLoading && <p>Loading items...</p>}
      {fetchError && <p style={{color:'red'}}>{`Error: ${fetchError}`}</p>}
      {!fetchError && !isLoading &&
      <Content
        items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />}
      </main>

      <Footer length={items.length} />
    </div>
  );
};

export default RootTodoApp;
