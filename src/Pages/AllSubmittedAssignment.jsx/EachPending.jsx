import { Link } from "react-router-dom";


const EachPending = ({booking,handleConfirm}) => {
    const{_id,name,title,photo,marks,status}=booking;
    return (
        <tr>
     
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{title}</div>
            </div>
          </div>
        </td>
        <td className=" md:uppercase md:text-base" >
        {name}
          
        </td>
        <td className=" text-lg font-semibold">{marks}</td>
        <th>
        {
            status === 'confirm'?<Link ><span className=" font-bold text-primary">Confirm</span></Link> :  <button onClick={()=>handleConfirm(_id)} className="btn btn-ghost btn-xs">Pending</button>
        }
        </th>
      </tr>
    );
};

export default EachPending;