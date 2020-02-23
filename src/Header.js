import React from 'react';

    class Header extends React.Component {

        constructor() {

            super();
                this.state = {
                    headerText: 'VIRTUAL LH GROUP',
                };

          }        

        render() {

            return (
                <div className="header"> 

                    <div className="headerContent">

                        {this.state.headerText}
                        
                    </div>   

                </div>
            )

        }
    }

export default Header;