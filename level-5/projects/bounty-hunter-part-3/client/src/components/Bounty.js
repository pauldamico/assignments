export default function Bounty (props){

    const {amount, firstName, id, lastName, living, type} = props

    return(
        <div>
<h4 className = "full-name">{firstName} {lastName}</h4>
<section className = "amount">Bounty Amount: ${amount}</section>
<section className = "type">Type: {type} </section>
{living === true && <h5 className = "alive">Alive</h5>}
{living === false && <h5 className = "dead">Dead</h5>}
        </div>
    )
}