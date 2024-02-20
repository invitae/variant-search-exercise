import {Form, Input, Space, Table} from 'antd'
import {ColumnsType} from 'antd/lib/table'
import {useEffect, useState} from 'react'
import './VariantList.css'

interface Variant {
  accession: string
  alias: string
  alt: string
  assembly: string
  chr: string
  gene: string
  genomic_start: string
  genomic_stop: string
  inferred_classification: string
  last_evaluated: string | null
  last_updated: string | null
  nucleotide_change: string
  other_mappings: string
  protein_change: string
  ref: string
  region: string
  reported_alt: string
  reported_classification: string
  reported_ref: string
  source: string
  submitter_comment: string
  transcripts: string
  url: string
}

interface SearchResponse {
  count: number
  results: Variant[]
}

const searchUrl = 'http://localhost:8000/variants/'
const defaultPage = 1

export default function VariantList() {
  const [data, setData] = useState<SearchResponse | null>(null)
  const [geneSearch, setGeneSearch] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(defaultPage)
  const [loading, setLoading] = useState(false)

  // fetch the variants whenever the pagination or search change
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      const params = new URLSearchParams()
      params.set('page', currentPage.toString())

      if (geneSearch) {
        params.set('search', geneSearch)
      }

      const res = await fetch(`${searchUrl}?${params.toString()}`)
      const data = await res.json()

      setLoading(false)
      setData(data)
    }

    fetchData()
  }, [currentPage, geneSearch])

  const handleSearch = (values: {geneSearch: string}) => {
    setGeneSearch(values.geneSearch)
  }

  const handlePaginationChange = async (page: number) => {
    setCurrentPage(page)
  }

  return (
    <>
      <div className="gene-search-container">
        <Form layout="inline" onFinish={handleSearch}>
          <Space size="small">
            <Form.Item name="geneSearch" label="Search by gene">
              <Input className="gene-search-input" />
            </Form.Item>
            <small>(hit enter to search)</small>
          </Space>
        </Form>
      </div>

      <Table
        loading={loading}
        columns={columns}
        dataSource={data?.results}
        pagination={{
          pageSize: 15,
          total: data?.count,
          current: currentPage,
          onChange: handlePaginationChange,
        }}
      />
    </>
  )
}

const columns: ColumnsType<Variant> = [
  {
    title: 'Gene',
    dataIndex: 'gene',
    key: 'gene',
  },
  {
    title: 'Nucleotide Change',
    dataIndex: 'nucleotide_change',
    key: 'nucleotide_change',
  },
  {
    title: 'Protein Change',
    dataIndex: 'protein_change',
    key: 'protein_change',
  },
  {
    title: 'Alias',
    dataIndex: 'alias',
    key: 'alias',
  },
  {
    title: 'Region',
    dataIndex: 'region',
    key: 'region',
  },
  {
    title: 'Reported Classification',
    dataIndex: 'reported_classification',
    key: 'reported_classification',
  },
  {
    title: 'Last Evaluated',
    dataIndex: 'last_evaluated',
    key: 'last_evaluated',
  },
  {
    title: 'Last Updated',
    dataIndex: 'last_updated',
    key: 'last_updated',
  },
  {
    title: 'More Info',
    dataIndex: 'source',
    key: 'source',
    render: (_, record) => {
      return (
        <a target="_blank" rel="noopener noreferrer" href={record.url}>
          {record.source}
        </a>
      )
    },
  },
]
