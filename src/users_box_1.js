import React, { Component } from 'react';
import axios from 'axios';

class UsersBox extends Component {

getInitialState() {
    return {
      data: [],
    }
}
componentDidMount() {
      axios.get('https://jsonplaceholder.typicode.com/users')
         .then(function (response) {
           var res= JSON.stringify(response.data);
           //console.log(res);
            this.state = {
                 data: res
            };
           
         }).catch(function (error) {
           console.log(error);
        });
      //console.log(this.state.data);
} // end componentDidMount

render(){
    return (
          <div>
            <div className="container">
	     <div className="row">
               <div className="col-xs-12 col-sm-6 col-lg-4">
			<div className="box">
				<div className="icon">
					<div className="image"><i className="fa fa-thumbs-o-up"></i></div>
					<div className="info">

						<h3 className="title"> {this.state.data}</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lobortis nisl, vitae iaculis sapien. Phasellus ultrices gravida massa luctus ornare. Suspendisse blandit quam elit, eu imperdiet neque semper.
						</p>
						<div className="more">
							<a href="javascript;" title="Title Link">
								Read More <i className="fa fa-angle-double-right"></i>
							</a>
						</div>
					</div>
				</div>
				<div className="space"></div>
			</div>
		</div>
                <div className="col-xs-12 col-sm-6 col-lg-4">
		   <div className="box">
			<div className="icon">
					<div className="image"><i className="fa fa-flag"></i></div>
					<div className="info">
						<h3 className="title">Icons by Font Awesome</h3>
    					<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lobortis nisl, vitae iaculis sapien. Phasellus ultrices gravida massa luctus ornare. Suspendisse blandit quam elit, eu imperdiet neque semper.
						</p>
						<div className="more">
							<a href="javascript;" title="Title Link">
								Read More <i className="fa fa-angle-double-right"></i>
							</a>
						</div>
					</div>
				</div>
				<div className="space"></div>
			</div>
		</div>
                <div className="col-xs-12 col-sm-6 col-lg-4">
			<div className="box">
				<div className="icon">
					<div className="image"><i className="fa fa-desktop"></i></div>
					<div className="info">
						<h3 className="title">Desktop Friendly</h3>
    					<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lobortis nisl, vitae iaculis sapien. Phasellus ultrices gravida massa luctus ornare. Suspendisse blandit quam elit, eu imperdiet neque semper.
						</p>
						<div className="more">

							<a href="javascript;" title="Title Link">
								Read More <i className="fa fa-angle-double-right"></i>
							</a>
						</div>
					</div>
				</div>
				<div className="space"></div>
			</div>
		</div>
	       </div>
           </div>
          </div>
    );
 };
}

export default UsersBox;

        