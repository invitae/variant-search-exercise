/**
 * Component that lets users search for variants by their gene definition.
 */
import React, { Component } from 'react';

import 'antd/dist/antd.css';  // add AntD styles
import { Input, Table } from 'antd';

import './SearchTable.css';

const DEFAULT_PAGE = 1;

export default class SearchTable extends Component {
    columns = [
        {
            title: 'Gene',
            dataIndex: 'gene',
            key: 'gene'
        },
        {
            title: 'Nucleotide Change',
            dataIndex: 'nucleotide_change',
            key: 'nucleotide_change'
        },
        {
            title: 'Protein Change',
            dataIndex: 'protein_change',
            key: 'protein_change'
        },
        {
            title: 'Alias',
            dataIndex: 'alias',
            key: 'alias'
        },
        {
            title: 'Region',
            dataIndex: 'region',
            key: 'region'
        },
        {
            title: 'Reported Classification',
            dataIndex: 'reported_classification',
            key: 'reported_classification'
        },
        {
            title: 'Last Evaluated',
            dataIndex: 'last_evaluated',
            key: 'last_evaluated'
        },
        {
            title: 'Last Updated',
            dataIndex: 'last_updated',
            key: 'last_updated'
        },
        {
            title: 'More Info',
            dataIndex: 'source',
            key: 'source',
            render: (text, record) => {
                return (
                    <a target='_blank' rel='noopener noreferrer' href={record.url}>{record.source}</a>
                );
            }
        }
    ];

    state = {
        currentPage: DEFAULT_PAGE,
        data: [],
        geneSearch: null,
        geneSuggestions: [],
        isLoading: false,
        totalCount: 0,
    };

    processResults = dataToConvert => (
        dataToConvert.map((record, index) => (
            {
                key: index,
                ...record,
            }
        ))
    );

    async loadDataForPage(pageNumber) {
        this.setState({
            isLoading: true
        }, async () => {
            const url = this.state.geneSearch ?
                `http://localhost:8000/variants/?page=${pageNumber}&search=${this.state.geneSearch}` :
                `http://localhost:8000/variants/?page=${pageNumber}`;
            const response = await fetch(url);
            const data = await response.json();
            this.setState({
                totalCount: data.count,
                data: this.processResults(data.results),
                isLoading: false
            });
        });
    }

    async loadDataForCurrentPage() {
        return this.loadDataForPage(this.state.currentPage)
    }

    async componentDidMount() {
        await this.loadDataForCurrentPage();
    }

    handlePaginationChange = async (newPage) => {
        this.setState({
            currentPage: newPage
        }, () => this.loadDataForCurrentPage());
    };

    handleSearch = async (e) => {
        const searchText = e.target.value;
        const response = await fetch(`http://localhost:8000/genes/?geneSuggest=${searchText}`);
        const data = await response.json();
        if (data.results.length === 1) {
            const { gene } = data.results[0];
            this.setState({
                currentPage: DEFAULT_PAGE,
                geneSearch: gene,
            }, () => this.loadDataForCurrentPage());
        } else {
            this.setState({data:[], totalCount:0});
        }
    };

    render() {
        return (
            <div>
                <div className='gene-search-container'>
                    Search by Gene: <Input
                        className='gene-search-input'
                        onPressEnter={this.handleSearch}
                    /> <small>(hit enter to search)</small>
                </div>
                <Table
                    loading={this.state.isLoading}
                    columns={this.columns}
                    dataSource={this.state.data}
                    pagination={{
                        pageSize: 15,
                        total: this.state.totalCount,
                        onChange: this.handlePaginationChange,
                        current: this.state.currentPage
                    }}
                />
            </div>
        );
    }
}
