import './buttons.css'


function Button(props) {
    const onClick = props.func
    
    return (
        <div> 
            <button className='std-btn' onClick={onClick}>{props.text}</button>
        </div>
        
    )
}

export default Button;