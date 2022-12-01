
export default function Comment (props){
    const {comment, _id, removeComment, userId, user} = props


    function deleteComment (){
        removeComment(_id)
        }

return (
    <div>
{comment}
{userId === user && <section onClick={deleteComment}>Delete</section>}

    </div>
)
}