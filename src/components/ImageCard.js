import React from 'react'

class ImageCard extends React.Component{
    
    //creating a refernce for the image
    constructor(props){
        super(props);
        this.state = {spans: 0}
        this.imageRef = React.createRef();
    }

    componentDidMount(){
        //adding an event listener that loads after information
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    //gets the height of the images
    setSpans=() => {
        const height = this.imageRef.current.clientHeight
        const spans = Math.ceil( height / 10 + 1);
        this.setState({spans})
    }
    
    render(){

        const {description, urls} = this.props.image;
        return(
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} alt={description} src={urls.regular}
                />
            </div>
        )
    }
}

export default ImageCard;