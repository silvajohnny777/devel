import React from 'react';

    class Content extends React.Component {
        constructor() {

            super() 

                this.state = {

                    box: [
                        {
                            id: 1,
                            title: 'Product',
                            description: 'Description'
                        },
                        {
                            id: 2,
                            title: 'Data',
                            description: 'Description'
                        },
                        {
                            id: 3,
                            title: 'Getting started',
                            description: 'Description'
                        }
                    ],
                    boxSelecionado: '',
                        
                }          

        }

        selecionaBox = (id) => {

            this.state.boxSelecionado == id ?
            
            this.setState({
                boxSelecionado: ''
            })

            :
            
            this.setState({
                boxSelecionado: id
            })
            
        } 

        render() {

            return (

                <div className="contentContainer">

                    {this.state.box.map((box) => {
                        return (

                            <div className="actionBox" style={{marginTop: this.state.boxSelecionado === box.id ? '-2%' : '', borderTop: this.state.boxSelecionado === box.id ? '5px solid rgb(5, 22, 77)' : '', borderRadius: this.state.boxSelecionado === box.id ? '5px' : ''}} key={box.id} onClick={() => this.selecionaBox(box.id)}>
        
                                <div className="actionBoxTitle">
                                    {box.title}
                                </div>
        
                                <div className="actionBoxDescription">
                                    {box.description}
                                </div>
        
                            </div>

                        )
                    })}

                </div>

            )

        }

    }

export default Content;