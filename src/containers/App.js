import React, { useState } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import routes from '../routes';

const postUrl = "https://jsonplaceholder.typicode.com/posts";
function App() {
  //  const homes = async (data) => {
  //     return await fetch('http://test-alpha.reestrdoma.ru/api/reestrdoma/companies/',{
  //       method:"GET",
  //       headers:{
  //         "Authorization":"Bearer "+token
  //       }
  //     }).then((res) => res.json()).then(res => console.log(res)).catch(err => console.log(err));
  //  }

  //  useEffect(() => {
  //    login({
  //      username:"superuser@mail.ru",
  //      password:"11111111"
  //    });
  //  }, []);
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
              {
                routes.map(item => (
                  <Route
                    key={item.title}
                    path={item.path}
                    exact={item.exact}
                    component={item.component}
                    render={item.render}
                  />
                ))
              }
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
