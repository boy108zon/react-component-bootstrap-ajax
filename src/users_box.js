import React, { Component } from 'react';
import axios from 'axios';
//import ContentLoader from 'react-content-loader'
//import ContentLoader, { Rect } from 'react-content-loader';

/*const MyLoader = () => {
  return(
    <ContentLoader height={90} speed={1} primaryColor={'#DDD'} secondaryColor={'#999'}>
      <Rect x={50} y={80} height={3} radius={3} width={100} />
      <Rect x={75} y={100} height={3} radius={3} width={50} />
    </ContentLoader>
  ) 
}*/

class UsersBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loading: true
        };
    }

    componentDidMount() {
        var that = this;
        axios.get('https://jsonplaceholder.typicode.com/users')
                .then(function (response) {
                    var result = JSON.parse(JSON.stringify(response.data))
                    that.setState({users: result,loading: false})
                }).catch(function (error) {
                    if (error.response) {
                        // The request was made and the server responded with a status code 
                        // that falls out of the range of 2xx 
                        //console.log(error.response.data);
                        //console.log(error.response.status);
                        console.log('Error', 'you are offline.');
                        //console.log(error.response.headers);
                    } else if (error.request) {
                        // The request was made but no response was received 
                        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of 
                        // http.ClientRequest in node.js 
                        console.log(error.request);
                    } else {
                        // Something happened in setting up the request that triggered an Error 
                        console.log('Error', 'you are offline.');
                    }
        });
    }

    render() {
        var that = this;
        return (
                <div>
             
                    <div className="container">
                        <div className="row">
                            {
                                 that.state.users.map(function (item, i) {
                                  return <UserInfo key={i} name={item.name} address={item.address} description={item.company.catchPhrase}/>
                                })
                            }
                        </div>
                    </div>
                </div>
                            );
            }
            ;
        }

        function ProfilePhoto(props) {
            return (
                    <div className="image"></div>
                    );
        }

        function Title(props) {
            return (
                    <h3 className="title">{props.name}</h3>
                    );
        }

        function Address(props) {
            return (
                    <p>{props.street} , {props.city} , {props.zipcode}</p>
                    );
        }

        function TagLine(props) {
            return (
                    <p>{props.description}</p>
                    );
        }

        function MoreLink(props) {
            return (
                    <div className="more">
                        <a href="javascript;" title="Title Link">
                            Read More <i className="fa fa-angle-double-right"></i>
                        </a>
                    </div>
                    );
        }

        function UserInfo(props) {
            return (
                    <div className="col-xs-12 col-sm-6 col-lg-4 linear-background">
                        <div className="box inter-draw">
                            <div className="icon">
                                <ProfilePhoto />
                                <div className="info">
                                    <Title name={props.name}/>
                                    <TagLine description={props.description} />
                                    <Address street={props.address.street} city={props.address.city} zipcode={props.address.zipcode} />
                                    <MoreLink />
                                </div>
                            </div>
                            <div className="space"></div>
                        </div>
                    </div>

                    );
        }

        export default UsersBox;

        