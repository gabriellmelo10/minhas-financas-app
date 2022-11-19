import React from 'react'
import { withRouter } from 'react-router-dom'
import Card from '../components/card'
import FormGroup from '../components/form-group'

class ConsultaLancamentos extends React.Component {
    
    render(){
        return(
            <Card title="Consulta Lançamentos">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="bs-component">
                            <FormGroup label="Ano: *" htmlFor="inputAno">
                                <input type="text"
                                    id="inputAno"
                                    className="form-control"
                                    name="ano"
                                    placeholder='Digite o Ano' />
                            </FormGroup>
                            <FormGroup label="Mês" htmlFor="inputMes">

                            </FormGroup>
                        </div>
                    </div>
                </div>
            </Card>            
        )
    }
}

export default withRouter( ConsultaLancamentos )