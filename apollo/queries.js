import gql from 'graphql-tag'

export const GET_COUNTRIES = gql`
    query {
        countries {
            id,
            name
        }
    }
`
export const GET_CATEGORIES = gql`
    query {
        categories {
            id,
            name
        }
    }
`
export const GET_DEALS_BY_COUNTRY_BY_CATEGORY = gql`
  query getDealsByCountryByCategory($country: String!, $category: String! ) {
        dealsByCategory(category:"260010" countries:$category, limit:3) {
            itemId,
            title,
            price
        }
  }
`

export const GET_DEALS_BY_COUNTRY = gql`
  query getDealsByCountry($country: String!) {
    deals(countries : $country, limit:2) {
    		itemId,
    		title,
			price
    }
  }
`
export default GET_DEALS_BY_COUNTRY