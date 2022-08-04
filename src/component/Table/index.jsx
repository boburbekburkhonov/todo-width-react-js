import React, { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function index(props) {

  const name = useRef();
  const price = useRef();
  const author = useRef();
  const[data, setData] = useState([])

  function create() {
    if(name.current.value === '' || price.current.value === '' || author.current.value === ''){
      toast.error('Uzr')
    }else {
      const item = {
        id: Date.now(),
        isname: name.current.value,
        isprice: price.current.value,
        isauthor: author.current.value
      }

      setData([...data, item])

      name.current.value = null;
      price.current.value = null;
      author.current.value = null;
      toast.success('Rahmat')
    }
  }


  function remove(item){
    const filter = data.filter(element => element.id !== item);

    setData(filter)

  }

  return (
    <>
      <div className='card w-75 mx-auto p-4 mt-5'>
        <input type="text" ref={name} className='form-control w-75 mx-auto p-1 m-2' placeholder='Enter book name' />

        <input type="text" ref={price} className='form-control w-75 mx-auto p-1 m-2' placeholder='Enter book price'/>

        <input type="text" ref={author} className='form-control w-75 mx-auto p-1 m-2' placeholder='Enter book author'/>

        <button onClick={() => create()} className='btn btn-info w-75 mx-auto'>Add</button>
        <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
         />
      </div>

      <div className='card w-75 mx-auto p-4 mt-3'>
        {data.length === 0 ? <h1 className='alert alert-info text-center'>Not found</h1>

        :

        <table className='table table-striped mx-auto table-hover'>
        <thead>
          <tr>
            <th>
              ID
            </th>
            <th>
              Book name
            </th>
            <th>
              Book price
            </th>

            <th>
              Book author
            </th>

            <th>
              Control
            </th>
          </tr>
        </thead>

        <tbody>
            {data.map((item, index) => {
              return (
              <tr key={item.id}>
              <td>
                {index + 1}
              </td>

              <td>
                {item.isname}
              </td>

              <td>
                {item.isprice}
              </td>

              <td>
                {item.isauthor}
              </td>

              <td>
                <button id={item.id} onClick={(e) => remove(item.id)} className='btn btn-danger'>Delete</button>
              </td>
          </tr>
              )
            })}
        </tbody>
      </table>

      }
      </div>
    </>
  );
}

export default index;