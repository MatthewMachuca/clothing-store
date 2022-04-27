import AdminItem from "./adminItem";

const AdminListView = (props) => {
    return (
        <div>
            <ul>
        {props.inventoryList.map( item => <AdminItem item={item}/>)}

            </ul>
        </div>
    )
}

export default AdminListView