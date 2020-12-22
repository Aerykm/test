import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Discussions() {
  // Setting our component's initial state
  const [discussions, setDiscussions] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadDiscussions()
  }, [])

  // Loads all books and sets them to books
  function loadDiscussions() {
    API.getDiscussions()
      .then(res => 
        setDiscussions(res.data)
      )
      .catch(err => console.log(err));
  };

  function deleteDiscussion(id) {
    API.deleteDiscussion(id)
      .then(res => loadDiscussions())
      .catch(err => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.topic && formObject.name) {
      API.saveDiscussion({
        topic: formObject.topic,
        name: formObject.name,
        discuss: formObject.discuss
      })
        .then(() => setFormObject({
          topic: "",
          name: "",
          discuss: ""
        }))
        .then(() => loadDiscussions())
        .catch(err => console.log(err));
    }
  };


    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Whats on your mind?</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="topic"
                placeholder="Topic"
                value={formObject.topic}
              />
              <Input
                onChange={handleInputChange}
                name="name"
                placeholder="Name"
                value={formObject.name}
              />
              <TextArea
                onChange={handleInputChange}
                name="discuss"
                placeholder="Tell me whats going on"
                value={formObject.discuss}
              />
              <FormBtn
                disabled={!(formObject.Name && formObject.title)}
                onClick={handleFormSubmit}
              >
                Submit disq
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Discussions already had</h1>
            </Jumbotron>
            {discussions.length ? (
              <List>
                {discussions.map(discussion => {
                  return (
                    <ListItem key={discussion._id}>
                      <a href={"/discussions/" + discussion._id}>
                        <strong>
                          {discussion.title} by {discussion.Name}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => deleteDiscussion(discussion._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Discussions;