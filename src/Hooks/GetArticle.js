import {useQuery, gql} from '@apollo/client'

const ARTIKELS = gql`
    query getArtikel{    
        algoritmas{
            data{
                id 
                attributes {
                    judul
                    deskripsi
                    views
                    kategoris {
                        data{
                        attributes{
                                jenis
                            }
                        }
                    }
                    ordo{
                        data{
                            attributes{
                                judul
                            }
                        }
                    }
                }
            }
        }
    }
`

const GetArticle = () => {
    const {error, loading, data} = useQuery(ARTIKELS)
        return {error, loading, data}
}

export default GetArticle