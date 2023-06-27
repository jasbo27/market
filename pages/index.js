import React, { Component } from "react";
import { Card, Button, Icon,Grid} from "semantic-ui-react";
import Layout from "../components/Layout";
import albumService from "../service/albumService"
import { Link, Router } from "../routes";

class AlbumIndex extends Component {
    state = {
        newOwner : "Aga"
    }
    render() {
        return (
            <Layout>
                <div>
                    <Card.Group>
                        {this.renderAlbums()}
                    </Card.Group>
                </div>
            </Layout>
        );
    }

    renderAlbums() {
        const albums = albumService.listAlbums().map((album) => {
            return (
                <Card>
                    <Link to={`/albums/${album.id}`}><img src={`${album.image}`} wrapped ui={false} /></Link>
                    <Card.Content>
                        <Card.Header>{album.title}</Card.Header>
                        <Card.Meta>
                            <span className='date'>{album.author}</span>
                        </Card.Meta>
                        <Card.Description>
                            {album.description.substring(0, 200).concat("...")}
                        </Card.Description>
                        <Card.Meta></Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                        <Grid >
                            <Grid.Row columns={2}>
                                <Grid.Column>
                                    <Icon name='user' />
                                    {album.owner}

                                </Grid.Column>
                                <Grid.Column>
                                    Price: {album.price}
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row columns={1} stretched>
                                <Grid.Column >
                                    <Button  onClick={albumService.buyAlbum(album.id, this.state.newOwner)}>Buy</Button>
                                </Grid.Column>
                            </Grid.Row>  
                        </Grid>
                    </Card.Content>

                </Card>
                /*
                header: album.title,
                description: (
                    <div>
                        <div>{album.description.substring(0,200).concat("...")}</div>
                        <Link route={`/albums/${album.id}`}>
                            <a>View Album</a>
                        </Link></div>),
                image: album.image*/
            );
        });
        return albums;
    }
}

export default AlbumIndex;
