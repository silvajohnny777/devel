import React from 'react';

    class PreContent extends React.Component {
        constructor() {
            super()
            this.state = {
                PreContentText: 'Virtual LH is a virtual airline',
            }
        }

        render() {

            return (

                <div className="preContent">

                    {this.state.PreContentText}

                </div>
                
            )

        }

    }

export default PreContent;