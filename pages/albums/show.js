import React, { Component } from "react";
import { Card, Grid, Button, Label, Image, Item, Icon } from "semantic-ui-react";
import Layout from "../../components/Layout";
import albumService from "../../service/albumService";

class ShowAlbum extends Component {
    static async getInitialProps(props) {
        const album = albumService.getAlbum(props.query.id);

        return {
            id: props.query.id,
            album:album
        };
    }

    render() {
        return (
            <Layout>


                <Card>
                <Image src={`${this.props.album.image}`} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{this.props.album.title}</Card.Header>
                        <Card.Meta>
                            <span className='date'>{this.props.album.author}</span>
                        </Card.Meta>
                        <Card.Description>
                        {this.props.album.description.substring(0, 200).concat("...")}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='user' />
                            Janek
                        </a>
                    </Card.Content>

                </Card>
            </Layout>
        );
    }
}

export default ShowAlbum;

