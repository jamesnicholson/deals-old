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
export const GET_DEALS_BY_CATEGORY = gql`
  query getDealsByCategory($country: String!, $category: String! ) {
        dealsByCategory(category:"260010" country:$country, limit:3) {
            itemId,
            title,
            price
        }
  }
`
export const GET_DEALS_BY_COUNTRY = gql`
  query getDealsByCountry($country: String!) {
    deals(country: $country, limit:2) {
        itemId,
        title,
        url,
        endsAt,
        currency,
        price,
        originalPrice,
        discountPercentage,
        quantity,
        shippingCost,
        dealUrl
    }
  }
`
export default GET_DEALS_BY_COUNTRY