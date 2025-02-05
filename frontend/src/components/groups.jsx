import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { Card, CardHeader, CardDescription, CardTitle, CardContent } from '../components/ui/card';

const Groups = () => {
  const navigate = useNavigate();
  const [groups, SetGroups] = useState([]);
  const accessToken = localStorage.getItem('accessToken');
  

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        
        console.log(accessToken);
        const response = await axios.get('http://127.0.0.1:8000/api/commit/group/', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        SetGroups(response.data);
      } catch (error) {
        console.error("error ayi ni ta",error);
      }
    };

    fetchGroups();
  }, []);


  return (
    <>
    <h1 className="text-3xl font-bold mx-10 my-8">Groups</h1>
    {groups?.map((group) => (
        < Card className = "w-40 m-10" onClick={() => navigate(`/group/${group?.code}`)} key={group?.id}>
        <CardHeader >
        {group?.name}
        </CardHeader>
        </Card>
        ))}
    </>
    // <div className="container mx-auto">
    //     <h1 className="text-3xl font-bold my-8">Groups</h1>
        
            // {groups?.map((group) => (
            //     <div onClick={() => navigate(`/group/${group?.code}`)} key={group?.id} className="bg-white p-4 rounded-lg shadow-lg">
            //         <h2 className="text-xl font-bold">{group?.name}</h2>
            //         <p>{group.description}</p>
            //     </div>
            // ))}
      
    // </div>
  );
            };
export default Groups