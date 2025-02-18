'use client'

import { useState, useEffect, useRef, useMemo } from 'react'
import { Ajax } from '../ajax'
import { PageSize, Pagination } from '../components/Pagination'
import Blog from './blog'

export default function Blogs()
{

    const blogs = useRef<any>([]),
        [ currentPage, setCurrentPage] = useState(1),
        [ view, setView ] = useState('list'),
        [ blog, setBlog ] = useState({}),
 
   currentTableData = useMemo(() => {
     
        const firstPageIndex = (currentPage - 1) * PageSize,
              lastPageIndex = firstPageIndex + PageSize;
    
        return blogs.current.slice(firstPageIndex, lastPageIndex);  /* localData */
 
   }, [ currentPage, blogs ]);

    useEffect(() => {

        (async () => {
  
            try {
       
                Ajax.xhr('https://rossmarinaro.onrender.com/get-blogs', 'GET')
                    .then(blog => {
                        if (blog)
                            blogs.current.push(blog);  
                    });
            }

            catch(err) {
                console.log('There was an error. ', err);
            }
  
        })();
  
      }, []);  

    return (

        <section>

            <table className="blog-table">
                <thead >
                    <tr>
                        <th>Username</th> 
                        <th>Title</th> 
                        <th>Date</th>
                    </tr>
                </thead>
            <tbody>

            {   
                currentTableData.length ?
                    currentTableData.map((item: any) => (
        
                        <tr key={ item._id } onClick={() => {
                            setBlog(item);
                            setView(view === 'blog' ? 'list' : 'blog');
                        }}>
                            { item.username && <td>{ item.username }</td> }
                            { item.title && <td>{ item.title }</td> }
                            { item.date && <td>{ item.date }</td> }
                        </tr>
            
                    )
                ) : 
                <th className="mb-2 text-1xl font-semibold" style={{ marginLeft: '100%' }}> N/A </th> 
            }

            </tbody>

            </table>

            <Pagination
                className="pagination-bar"
                currentPage={ currentPage }
                totalCount={ blogs.current.length }
                pageSize={ PageSize }
                onPageChange={ (page: any) => setCurrentPage(page) }
            />

            {
                blog ? 
                    (<Blog props={ blog } />) : <h3 className="mb-3 text-2xl font-semibold" style={{ fontStyle: 'italic', color: '#fff' }}> No blogs loaded. </h3> 
            }

        </section>
    )   
}



