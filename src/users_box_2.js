import React, { Component } from 'react';
import axios from 'axios';
//import $ from 'jquery';

class UsersBox extends Component {

constructor(props) {
    super(props);
    this.state = {
        users: []
    };
}

/*componentDidMount() {
      var that = this;

      var resultJSON = '{"FirstName":"John","LastName":"Doe","Email":"johndoe@johndoe.com","Phone":"123 dead drive"}';
      var result = $.parseJSON(resultJSON);
      that.setState({users: result})
}*/

componentDidMount(){
    var that = this;
    axios.get('https://jsonplaceholder.typicode.com/users')
         .then(function (response) {
           
            var result = JSON.parse(JSON.stringify(response.data))
            /*console.log(result);
            console.log(result.length);
            for(var i = 0; i < result.length; i++)
            {
               var name = result[i].name;
               var email = result[i].email;
               var city = result[i].address.city;
               console.log(city);
            }*/
            that.setState({users:result})

         }).catch(function (error) {
           console.log(error);
        });
}
render(){
    var that=this;
    return (
          <div>
            {that.state.users.map(function(item, i){
               return <li key={i}>{item.name} {item.email} {item.address.city}</li>;
              })
            }
          </div>
    );
 };
}

export default UsersBox;

        