import React from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { ExportCSV } from './ExportCSV';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';


const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>
    }

    const createPDFHandler = () => {
        const doc = new jsPDF('l', 'mm', 'a4');    
        //doc.autoTable(, posts);    
        doc.autoTable({html: '#posts'})
        doc.save('table.pdf');
    }
   
    return (
        <React.Fragment>>
            <div className="col-md-4 center">
                <ExportCSV csvData={posts} fileName="ReportXLSX" />
            </div>
            <table id="posts" class="table">
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>content</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <tr key={post.id} >
                            <td>{post.userId}</td>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ReactHTMLTableToExcel
                className="btn btn-info"
                table="posts"
                filename="ReportExcel"
                sheet="Sheet"
                buttonText="Export excel" />
            <button onClick={createPDFHandler}>Create PDF</button>
        </React.Fragment>
    )
}

export default Posts;