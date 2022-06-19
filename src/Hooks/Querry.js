import { gql } from "@apollo/client";

export const ARTIKELS = gql`
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
export const ARTIKEL = gql`
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
                            id
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

export const CARI_JUDUL = gql`
    query search($judul: StringFilterInput){
        algoritmas(filters: {judul: $judul}) {
            data{
                id
                attributes{
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

export const PILIH_KATEGORI = gql`
    query filterKategori($jenis: ID){
        ordo(id: $jenis){
        data{
            attributes{
            algoritm{
                data{
                attributes{
                    judul
                    deskripsi
                    views
                }
                }
            }
            }
        }
        }
    }
`

export const UPDATELIKE = gql `
    mutation Emoji($id: ID!, $like: Int!){
        updateAlgoritma(id: $id, data: {like: $like}) {
            data{
                attributes{
                    judul
                    like
                }
            }
        }
    }
`

export const UPDATEDISLIKE = gql `
    mutation Emoji($id: ID!, $dislike: Int!){
        updateAlgoritma(id: $id, data: {dislike: $dislike}) {
            data{
                attributes{
                    judul
                    dislike
                }
            }
        }
    }
`
export const UPDATESMILE = gql `
    mutation Emoji($id: ID!, $smile: Int!){
        updateAlgoritma(id: $id, data: {smile: $smile}) {
            data{
                attributes{
                    judul
                    smile
                }
            }
        }
    }
`

export const UPDATESAD= gql `
    mutation Emoji($id: ID!, $sad: Int!){
        updateAlgoritma(id: $id, data: {sad: $sad}) {
            data{
                attributes{
                    judul
                    sad
                }
            }
        }
    }
`

export const UPDATENAH = gql `
    mutation Emoji($id: ID!, $nah: Int!){
        updateAlgoritma(id: $id, data: {nah: $nah}) {
            data{
                attributes{
                    judul
                    nah
                }
            }
        }
    }
`

export const TAMBAHKOMENTAR= gql`
    mutation tambahKomentar($id: ID, $komen: String){
        createLog(data: {algoritmas: $id, komentar: $komen} ){
            data{
            id
            attributes {
            komentar
            }
        } 
        }
    }
`

export const UPDATEVIEWS = gql`
    mutation updateViews($id: ID!, $views: Long){
		updateAlgoritma(id: $id, data: {views: $views}) {
            data{
                attributes{
                    judul
                    views
                }
            }
        }
	}
`

const PAGE = gql`
query getArtikel{    
        algoritmas(pagination: {page: 1, pageSize:2}){
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

