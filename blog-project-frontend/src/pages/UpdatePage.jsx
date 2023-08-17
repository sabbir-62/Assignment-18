
import { useParams } from 'react-router-dom';

import UpdateComponent from '../components/UpdateComponent/UpdateComponent'

// const UpdatePage = () => {
//   // const { id } = useParams();
//   <div>alisfh</div>
//   // <UpdateComponent/>
// };

// export default UpdatePage;


const UpdatePage = () => {
  const { id } = useParams();

  return (
    <div>
      <UpdateComponent id={id}/>
    </div>
  );
};

export default UpdatePage;



 