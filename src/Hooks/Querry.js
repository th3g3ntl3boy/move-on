import { gql } from "@apollo/client";


// query
export const TOPMOVIES = gql`
query{
  movies(pagination: {page: 1, pageSize: 12}){
    data{
      id
      attributes{
        title
        linkgambar
      }
    }
  }
}
`

export const LOGIN = gql`
mutation logUser($name: String!, $pass: String!) {
  login(input: {identifier: $name, password: $pass} ) {
    jwt 
    user {
      id
      username
      role {
        name
      }
    }
  }
}
`


export const SIGNUP = gql`
mutation regUser($name: String, $pass: String, $mail: String, $gender: ENUM_USERSPERMISSIONSUSER_GENDER){
  createUsersPermissionsUser(data:{
    username: $name,
    email: $mail,
    password: $pass,
    gender: $gender
  }){
    data{
      id
    }
  }
}
`

export const GETIDENTITY = gql`
query getUser ($id : ID){
  usersPermissionsUser(id: $id){
    data{
      attributes{
        username
        gender
        histories(filters: {
          users_permissions_user: {id: {eq: $id}}
        }){
          data{
            attributes{
              movie{
                data{
                  id
                  attributes{
                    title
                    linkgambar
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`

export const MOVIESDETAIL = gql`
query getMovies($id: ID!){
  movie(id: $id){
    data{
      id
      attributes{
        title
        release_date
        ytlink
        description
        release_date
        view
        linkgambar
        categories{
          data{
            id
            attributes{
              category
            }
          }
        }
        comments{
          data{
            id
            attributes{
              comment
              createdAt
              likes
              users_permissions_user{
                data{
                  id
                  attributes{
                    username
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`

export const GETIDMOVIES = gql`
query getIDmovies($code: StringFilterInput!){
  movies(filters: {Region: $code}){
    data{
      id
      attributes{
        title
        linkgambar
      }
    }
  }
}

`

export const GETCATEGORY= gql `
query getCategory{
  categories{
    data{
      id
      attributes{
        category
      }
    }
  }
}

`


export const GETCATEGORYMOV = gql`
query getCategoryMov($id: ID, $halaman: Int){
	category(id: $id){
    data{
      id
      attributes{
        category
        movies(pagination: {page: $halaman, pageSize: 12}){
          data{
            id
            attributes{
              title
              linkgambar
              ratings(pagination: {limit: 999999}){
                data{
                  attributes{
                    star
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`

export const GETMOVRECOMEND = gql`
query getCategory($code: StringFilterInput, $halaman: Int){
  movies(
    filters: {category: $code},
    pagination: {page: $halaman, pageSize: 12},
    sort: ["id"]
    ){
    data{
      id
      attributes{
        title
        category
        linkgambar
      }
    }
  }
}
`

export const SEARCHMOV = gql`
query searchMov($search: StringFilterInput){
    movies(filters:{title: $search}){
    	meta{
          pagination{
            total
          }
        }
        data{
          	id
            attributes{
              	title
                linkgambar
            }
        }
    }
}
`


export const GETRATINGMOV = gql`
query getRatingsMov($id:ID){
  ratings(filters : {movie: {id: {eq:$id}}}){
    data{
      attributes{
        star
        movie{
          data{
            id
          }
        }
      }
    }
    meta{
      pagination{
        total
      }
    }
  }
}
`

export const GETUSERRATING =gql`
query userRating($userid: ID, $movid: ID){
  usersPermissionsUser(id: $userid){
    data{
      attributes{
        ratings(filters : {
          movie: {id: {eq:$movid}}
        }){
          data{
            id
            attributes{
              star
            }
          }
        }
      }
    }
  }
}
`

export const CREATERATING = gql `
mutation updateRating($bintang: Int, $userId: ID, $movieId: ID){
  createRating(data: 
    {
      star: $bintang, 
      movie: $movieId,
      users_permissions_user: $userId
    } 
  ){
    data{
      id
      attributes{
        star
      }
    }
  }
}
`

export const UPDATESTAR = gql`
mutation updateRating ($rateID: ID!, $starUpdate: Int){
  updateRating(id: $rateID, data: {
    star: $starUpdate
  }){
    data{
      attributes{
        star
      }
    }
  }
}
`

export const VIEWSCOUNT = gql`
query ($movid : ID){
  histories(filters: {movie: {id: {eq: $movid}}}){
    meta{
      pagination{
        total
      }
    }
  }
}

`

export const VIEWHISTORY = gql`
mutation watch($movid: ID, $userID: ID) {
  createHistory(data: {movie: $movid, users_permissions_user: $userID}){
    data{
      id
    }
  }
}
`

export const CREATECOMMENT = gql`
mutation($movid: ID, $userid: ID, $komen: String){
  createComment(data: {
    movie: $movid,
    users_permissions_user: $userid,
    comment: $komen
  }){
    data{
      id
    }
  }
}

`



// -----------------------------------------------------------------------------------------------------------

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

export const UPDATEVIEWSs = gql`
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

