import MyCard from "./myCard";

const CatologListView = (props) => {
  return (
  
      
    <div className="parent">       
        
            <ul>
        {props.inventoryList.map( item => <MyCard item={item}/>)}

            </ul>
       

    </div>
  );
};
export default CatologListView;
