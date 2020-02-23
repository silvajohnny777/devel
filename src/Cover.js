import React from 'react';

    class Cover extends React.Component {

        constructor() {

            super();
                this.state = {
                    coverText: 'Welcome to the Virtual LH Developer Network!',
                };

          }    

        render() {
            return (
                <div className="cover">

                    <div className="coverText">

                        {this.state.coverText}

                    </div>

                </div>
            )
        }

    }


export default Cover;