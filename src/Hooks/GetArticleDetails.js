import {useQuery, gql} from '@apollo/client'

const ARTIKEL = gql`
    query Artikels($id: ID!) {
        algoritma(id: $id) {
            data {
                id 
                attributes {
                    judul
                    deskripsi
                    like
                    dislike
                    smile
                    sad
                    nah
                    views
                    logs{
                        data{
                            attributes{
                                komentar
                                createdAt
                            }
                        }
                    }
                    ilustrasi{
                        data{
                            attributes{
                                url
                            }
                        }
                    }

                    kategoris {
                        data{
                            attributes{
                                jenis
                            }
                        }
                    }
                    ordo {
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

const GetArticleDetails = (id) => {
    const {error, loading, data} = useQuery(ARTIKEL,{
        variables: {id}
    })
    return {error, loading, data}
}

export default GetArticleDetails