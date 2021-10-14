import React, { Component } from 'react';
import { Card , CardImg , CardImgOverlay  , CardTitle } from 'reactstrap';


class Menu extends Component{

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
       super(props);
       console.log("menu component constructor invoked");
    }

    componentDidMount(){
        console.log("menu component componentDidMount");
    }

    render(){
        console.log("menu componenet render invoked");
        const menu = this.props.dishes.map((dish) => {     
            return(         
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    
                   <Card key={dish.id}
                   onClick={() => this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />          
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>               
                </div>
            );
        });
      
        return(
            <div className="container">
                <div className="row">              
                    {menu}
                </div>
            </div>
        );
    }
}

export default Menu;