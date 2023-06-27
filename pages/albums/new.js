import React, { Component } from "react";
import { Form, Button, Input, Message } from "semantic-ui-react";
import Layout from "../../components/Layout";
import { Router } from "../../routes";
import albumService from "../../service/albumService";

class NewAlbum extends Component {

    state = {
        id: 0,
        title: "",
        author: "",
        image:"",
        description: "",
        errorMessage: "",
        loading: false
    }
    onSubmit = async (event) => {
        event.preventDefault();
        this.state.loading = true;
        const album = {
            id: albumService.nextId(),
            title: this.state.title,
            author: this.state.author,
            image: this.state.image,
            description: this.state.description
        }
        albumService.addAlbum(album);
        this.state.loading = false;
        Router.pushRoute("/");
    }

    render() {
        return (
            <Layout>
                <h3>Create new Album</h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>Title</label>
                        <Input
                            label="title"
                            labelPosition="right"
                            value={this.state.title}
                            onChange={(event) =>
                                this.setState({ title: event.target.value })
                            }
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Author</label>
                        <Input
                            label="author"
                            labelPosition="right"
                            value={this.state.author}
                            onChange={(event) =>
                                this.setState({ author: event.target.value })
                            }
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Image link</label>
                        <Input
                            label="Image link"
                            labelPosition="right"
                            value={this.state.image}
                            onChange={(event) =>
                                this.setState({ image: event.target.value })
                            }
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Description</label>
                        <Input
                            label="description"
                            labelPosition="right"
                            value={this.state.description}
                            onChange={(event) =>
                                this.setState({ description: event.target.value })
                            }
                        />
                    </Form.Field>
                    <Message error header="Oops!" content={this.state.errorMessage} />
                    <Button loading={this.state.loading} primary>
                        Add!
                    </Button>
                </Form>
            </Layout>
        );
    }
}
export default NewAlbum;