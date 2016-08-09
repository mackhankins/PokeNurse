import React from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'

function sortPokeId(a, b, order) {
    if (order === 'desc') {
        return a.pokemon_id - b.pokemon_id;
    }
    return b.pokemon_id - a.pokemon_id;
}

function expandFormatter(cell, row){
    return '<i class="glyphicon glyphicon-plus-sign"></i>';
}

const Pokemon = React.createClass({

    render () {
        let {
            species
        } = this.props

        return (
            <BootstrapTable
                data={species.pokes}
                bordered={false}
                hover={true}
                search={true}
                options={{
                    defaultSortName: 'pokemon_id',
                    defaultSortOrder: 'desc',
                }}
                tableStyle={ {border: '0'} }
            >
                <TableHeaderColumn
                    searchable={false}
                    dataFormat={expandFormatter}
                    width="70"
                />
                <TableHeaderColumn
                    isKey={true}
                    dataField="pokemon_id"
                    dataSort={true}
                    sortFunc={sortPokeId}>Pokedex #</TableHeaderColumn>
                <TableHeaderColumn dataField="name" dataSort={true}>Name</TableHeaderColumn>
                <TableHeaderColumn dataField="count" dataSort={true}>Count</TableHeaderColumn>
                <TableHeaderColumn dataField="candy" dataSort={true}>Candy</TableHeaderColumn>
            </BootstrapTable>
        )
    },

    componentDidMount() {
        console.log(species.pokes)
    },
})

export default Pokemon