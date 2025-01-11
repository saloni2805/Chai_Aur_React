import { useParams } from "react-router-dom"

function User() {
    const { id } = useParams();
    return (
        <div>
            Userrrr : {id}
        </div>
    )
}

export default User
