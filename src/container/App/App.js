import React, { Component } from 'react';
import Style from './App.module.scss';
import Spinner from '../../components/Spinner';

import Wrapper from '../Wrapper';

export default class App extends Component {
   state = {
     loading: true,
   }

   loadTime = () => {
     setTimeout(() => {
       this.setState({ loading: false });
     }, 2000);
   }

   render() {
     const { loading } = this.state;
     this.loadTime();
     if (loading) {
       return (
         <div className={Style.AppSpinner}>
           <Spinner />
         </div>
       );
     }
     return (
       <div className={Style.App}>
         <Wrapper />
       </div>
     );
   }
}
