import React, { Component } from 'react';

export class AddImage extends Component {
  constructor(props) {
    super(props);
    this.fileUploader = React.createRef();
    this.state={
      profileImg:[{id:1,img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"},
      {id:2,img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"},
      {id:3,img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"},
      {id:4,img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"},
      {id:5,img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"},
      {id:6,img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"},]
    }
  }
  
   imageHandler = (id,event) => {
    const reader = new FileReader();
    
    reader.onload = () =>{
      if(reader.readyState === 2){
    for (var i = 0; i < this.state.profileImg.length; i++) {
        if(this.state.profileImg[i].img==="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png")
                {
                  const image = Object.assign({}, this.state.profileImg[i]);
                  image.img = reader.result;
                
                  const images = Object.assign([], this.state.profileImg);
                  images[i] = image;
                   this.setState({profileImg:images})
                  break;
                }
      }
      
      }
    }
    reader.readAsDataURL(event.target.files[0])
    
  };

  handleClick = (e) => {
    this.fileUploader.current.click();
}

deleteImage = (index, e) => {

    const images = Object.assign([], this.state.profileImg);
    let obj={}
    obj.id= Math.floor(1000 + Math.random() * 9000);
    obj.img="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"

    images.splice(index, 1);
    images.push(obj)
    this.setState({profileImg:images});
  }

display =()=>{
  return this.state.profileImg.map((img,index)=>{
    return (<div  key={img.id } >
   <div style= {{float:'left',marginLeft:'100px'}}> 
        <img src={img.img} onClick={this.handleClick} style= {{width:'200px',height:'200px'}} /> 
        <button onClick={this.deleteImage.bind(this,index)}>X</button>
    </div>

     <input className="file-upload-input" style={{display: 'none'}}ref={this.fileUploader} 
     type="file" accept="image/*"  
     name="image-upload" id="input" onChange={this.imageHandler.bind(this,img.id)} /> 
     
     </div>)
  })
   
}
	render() {
  
		return (
        <div>
            {this.display()}
        </div>
		
		);
	}
}

export default AddImage;
