import React from 'react';

    class Content extends React.Component {
        constructor() {

            super() 

                this.state = {

                    box: [
                        {
                            id: 1,
                            title: 'Product',
                            description: 'Templates',
                            longerDescription: 'Many modern and good looking templates for your VAM based website.'
                        },
                        {
                            id: 2,
                            title: 'Data',
                            description: 'Real airlines routes',
                            longerDescription: 'Real world and updated data from airlines API. Get it on .csv file and upload to your database!'
                        },
                        {
                            id: 3,
                            title: 'Getting started',
                            description: 'Description',
                            longerDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                        }
                    ],
                    boxSelected: '',
                    presentation: 'Select one of the options above'
                        
                }          

        }

        selecionaBox = (id) => {

            this.state.boxSelected == id ?
            
            this.setState({
                boxSelected: ''
            })

            :
            
            this.setState({
                boxSelected: id
            })
            
        } 

        render() {

            return (

                <>

                <div className="contentContainer">

                    {this.state.box.map((box) => {
                        return (

                            <div className="actionBox" style={{marginTop: this.state.boxSelected === box.id ? '-2%' : '', borderTop: this.state.boxSelected === box.id ? '5px solid rgb(5, 22, 77)' : '', borderRadius: this.state.boxSelected === box.id ? '5px' : ''}} key={box.id} onClick={() => this.selecionaBox(box.id)}>
        
                                <div className="actionBoxTitle">
                                    {box.title}
                                </div>
        
                                <div className="actionBoxDescription">
                                    {box.description}
                                </div>

                                <div className="actionBoxFooter">

                                    {this.state.boxSelected != box.id ? 
                                    
                                        '- Click to see info -'
                                    
                                    :
                                    
                                        '- Info displayed bellow -'
                                    
                                    }
                                    
                                </div>
        
                            </div>

                        )
                    })}

                </div>

                {

                    this.state.boxSelected ? 

                        <div className="contentContainerColumn">
        
                            <div className="selectedTitle">

                                {this.state.box[this.state.boxSelected-1].description}:
        
                            </div>
        
                            <div className="selectedSubtitle">

                                {this.state.box[this.state.boxSelected-1].longerDescription}

                            </div>
        
                        </div>                    
                         
                    
                    : 

                        <div className="contentContainer">
        
                            <div className="presentationText">
        
                                {this.state.presentation}
        
                            </div>
        
                        </div>

                }

                </>

            )

        }

    }

export default Content;