import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import Layout from "../components/Layout";
import albumService from "../service/albumService"
import { Link } from "../routes";

class AlbumIndex extends Component {
    render() {
        return (
            <Layout>
                <div>
                    {this.renderAlbums()}
                </div>
            </Layout>
        );
    }

    renderAlbums() {
        const albums = albumService.listAlbums().map((album) => {
            return {
                header: album.title,
                description: (
                    <div>
                        <div>{album.description.substring(0,200).concat("...")}</div>
                        <Link route={`/albums/${album.id}`}>
                            <a>View Album</a>
                        </Link></div>),
                image: album.image
            }
        });
        return <Card.Group items={albums} />;
    }
}

export default AlbumIndex;
