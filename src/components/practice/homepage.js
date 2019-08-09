import React, { Component } from 'react';
import { Button } from 'reactstrap';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import 'bootstrap/dist/css/bootstrap.css';
const NODE_QUERY = gql`
    query {
      Recipe: nodeQuery(filter: {conditions: {field: "type", value: "recipe", operator: EQUAL}}) {
        entities {
          ... on NodeRecipe {
            title
            nid
            fieldImage {
              entity {
                thumbnail {
                  derivative(style: SQUARESMALL) {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }`;

export default class Homepage extends Component {
  render() {
    return (
      <>
        <Query query={NODE_QUERY}>
          {
            ({ loading, error, data }) => {
              if (loading) return <h4 className="text-center p-4">Loading...</h4>
              if (error) console.log(error);
              // console.log(data)
              return (
                <>
                  <Button color="danger">Danger!</Button>
                  {
                    data && data.Recipe.entities.map(recipe => {
                      return (
                        <div className="col-md-4">
                          <h5>{recipe.title}</h5>
                          <img alt="" src={recipe.fieldImage.entity.thumbnail.derivative.url} />
                        </div>
                      )
                    })
                  }
                </>
              )
            }
          }
        </Query>
      </>
    )
  }
}